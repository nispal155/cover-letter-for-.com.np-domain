export interface CompressionResult {
  blob: Blob;
  dataUrl: string;
  originalSize: number;
  compressedSize: number;
  compressionRatio: number;
  width: number;
  height: number;
  quality: number;
  fileName: string;
}

export async function compressImage(
  file: File,
  targetSizeBytes = 195000 // default 195KB to stay safely under 200KB
): Promise<CompressionResult> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        
        if (!ctx) {
          reject(new Error("Could not get canvas context"));
          return;
        }

        let width = img.width;
        let height = img.height;
        let quality = 0.9;
        let scale = 1.0;

        const attemptCompression = () => {
          canvas.width = width * scale;
          canvas.height = height * scale;
          
          // Fill with white background (prevents transparent PNGs from becoming black)
          ctx.fillStyle = "#FFFFFF";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error("Canvas to Blob failed"));
                return;
              }

              if (blob.size <= targetSizeBytes || (quality <= 0.1 && scale <= 0.3)) {
                // Done compressing
                const readerForBlob = new FileReader();
                readerForBlob.readAsDataURL(blob);
                readerForBlob.onloadend = () => {
                  resolve({
                    blob,
                    dataUrl: readerForBlob.result as string,
                    originalSize: file.size,
                    compressedSize: blob.size,
                    compressionRatio: Math.round(((file.size - blob.size) / file.size) * 100),
                    width: canvas.width,
                    height: canvas.height,
                    quality,
                    fileName: file.name
                  });
                };
              } else {
                // Iteratively compress
                if (quality > 0.3) {
                  quality -= 0.15; // Reduce quality faster
                } else if (quality > 0.1) {
                  quality -= 0.1;
                } else {
                  // Quality is bottomed out, scale dimensions down
                  scale *= 0.8;
                  quality = 0.7; // reset quality slightly when scaling
                }
                attemptCompression();
              }
            },
            "image/jpeg",
            quality
          );
        };

        // Start first attempt
        attemptCompression();
      };
      img.onerror = (error) => reject(error);
    };
    reader.onerror = (error) => reject(error);
  });
}
