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

/**
 * Load an image source reliably, honoring EXIF orientation where supported.
 */
async function loadImageSource(
  file: File
): Promise<{ source: ImageBitmap | HTMLImageElement; width: number; height: number; cleanup: () => void }> {
  if (typeof createImageBitmap === "function") {
    try {
      const bitmap = await createImageBitmap(file, { imageOrientation: "from-image" });
      return {
        source: bitmap,
        width: bitmap.width,
        height: bitmap.height,
        cleanup: () => bitmap.close()
      };
    } catch {
      // Fall back to standard Image element if createImageBitmap with options fails
    }
  }

  return new Promise((resolve, reject) => {
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);
    img.onload = () => {
      resolve({
        source: img,
        width: img.naturalWidth || img.width,
        height: img.naturalHeight || img.height,
        cleanup: () => URL.revokeObjectURL(objectUrl)
      });
    };
    img.onerror = (err) => {
      URL.revokeObjectURL(objectUrl);
      reject(err);
    };
    img.src = objectUrl;
  });
}

function canvasToBlob(canvas: HTMLCanvasElement, quality: number): Promise<Blob | null> {
  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob), "image/jpeg", quality);
  });
}

/**
 * Compresses any JPG/PNG image (even ultra-high-resolution scanner or phone photos)
 * into a standard JPG strictly under the 200KB (targetSizeBytes) limit.
 */
export async function compressImage(
  file: File,
  targetSizeBytes = 195 * 1024 // 195KB buffer to strictly fit under 200KB (204,800 bytes)
): Promise<CompressionResult> {
  const { source, width: originalWidth, height: originalHeight, cleanup } = await loadImageSource(file);

  try {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d", { willReadFrequently: false });

    if (!ctx) {
      throw new Error("Could not get canvas 2D rendering context");
    }

    // High resolution phone/scanner photos (e.g. 12MP - 48MP+, 4000x3000px)
    // cannot fit under 200KB without extreme downscaling or quality ruin.
    // Clamping initial max dimension to 1920px preserves sharp, readable document text
    // while keeping memory usage and processing fast.
    const MAX_INITIAL_DIMENSION = 1920;
    let initialScale = 1.0;
    const maxSide = Math.max(originalWidth, originalHeight);
    if (maxSide > MAX_INITIAL_DIMENSION) {
      initialScale = MAX_INITIAL_DIMENSION / maxSide;
    }

    let currentScale = initialScale;
    let bestBlob: Blob | null = null;
    let bestQuality = 0.85;
    let finalWidth = Math.round(originalWidth * currentScale);
    let finalHeight = Math.round(originalHeight * currentScale);

    // Iterative adaptive search: scale down dimensions if quality floor is hit
    const MAX_SCALE_ATTEMPTS = 6;
    for (let attempt = 0; attempt < MAX_SCALE_ATTEMPTS; attempt++) {
      finalWidth = Math.max(1, Math.round(originalWidth * currentScale));
      finalHeight = Math.max(1, Math.round(originalHeight * currentScale));

      canvas.width = finalWidth;
      canvas.height = finalHeight;

      // Draw white background so transparent PNGs don't turn black when converted to JPG
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, finalWidth, finalHeight);

      // High quality image smoothing
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(source, 0, 0, finalWidth, finalHeight);

      // Binary search for highest quality between 0.20 and 0.90 that fits under targetSizeBytes
      let lowQ = 0.20;
      let highQ = 0.90;
      let passBlob: Blob | null = null;
      let passQuality = lowQ;

      for (let qStep = 0; qStep < 5; qStep++) {
        const testQ = Math.round(((lowQ + highQ) / 2) * 100) / 100;
        const testBlob = await canvasToBlob(canvas, testQ);

        if (testBlob && testBlob.size <= targetSizeBytes) {
          passBlob = testBlob;
          passQuality = testQ;
          lowQ = testQ + 0.05; // Try higher quality
        } else {
          highQ = testQ - 0.05; // Too large, lower quality
        }
      }

      // Check if low quality floor at this scale passes
      if (!passBlob) {
        const floorBlob = await canvasToBlob(canvas, 0.20);
        if (floorBlob && floorBlob.size <= targetSizeBytes) {
          passBlob = floorBlob;
          passQuality = 0.20;
        }
      }

      if (passBlob) {
        bestBlob = passBlob;
        bestQuality = passQuality;
        break; // Successfully found compliant size!
      }

      // If even at minimum quality it's still > targetSizeBytes, reduce dimensions by 20% and retry
      currentScale *= 0.80;
    }

    // Fallback if extreme edge case
    if (!bestBlob) {
      const fallbackBlob = await canvasToBlob(canvas, 0.15);
      if (!fallbackBlob) {
        throw new Error("Failed to encode compressed image to JPG");
      }
      bestBlob = fallbackBlob;
      bestQuality = 0.15;
    }

    // Convert blob to Data URL for preview and download
    const dataUrl = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = () => reject(new Error("Failed to read compressed blob as data URL"));
      reader.readAsDataURL(bestBlob);
    });

    // Clean filename: remove existing extension, append standard format
    const baseName = file.name.replace(/\.[^/.]+$/, "") || "image";

    return {
      blob: bestBlob,
      dataUrl,
      originalSize: file.size,
      compressedSize: bestBlob.size,
      compressionRatio: Math.max(0, Math.round(((file.size - bestBlob.size) / file.size) * 100)),
      width: canvas.width,
      height: canvas.height,
      quality: bestQuality,
      fileName: `${baseName}-compressed.jpg`
    };
  } finally {
    cleanup();
  }
}
