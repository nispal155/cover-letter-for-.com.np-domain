import { useState, useCallback, useEffect } from "react";
import { Shield, Loader2 } from "lucide-react";
import { DropZone } from "../components/compressor/DropZone";
import { CompressedPreview } from "../components/compressor/CompressedPreview";
import { compressImage, type CompressionResult } from "../utils/imageCompressor";

export default function ImageCompressor() {
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [originalPreviewUrl, setOriginalPreviewUrl] = useState<string | null>(null);
  const [compressionResult, setCompressionResult] = useState<CompressionResult | null>(null);
  const [isCompressing, setIsCompressing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = useCallback(async (file: File) => {
    setOriginalFile(file);
    setError(null);
    setIsCompressing(true);
    setCompressionResult(null);

    // Create a preview URL for the original
    const objectUrl = URL.createObjectURL(file);
    setOriginalPreviewUrl(objectUrl);

    try {
      // Small artificial delay to allow UI to update to loading state
      await new Promise((resolve) => setTimeout(resolve, 100));
      
      const result = await compressImage(file);
      setCompressionResult(result);
    } catch (err) {
      console.error("Compression failed:", err);
      setError("Failed to compress the image. Please try a different file.");
    } finally {
      setIsCompressing(false);
    }
  }, []);

  const handleReset = useCallback(() => {
    setOriginalFile(null);
    setCompressionResult(null);
    setError(null);
    if (originalPreviewUrl) {
      URL.revokeObjectURL(originalPreviewUrl);
    }
    setOriginalPreviewUrl(null);
  }, [originalPreviewUrl]);

  // Cleanup object URLs on unmount
  useEffect(() => {
    return () => {
      if (originalPreviewUrl) {
        URL.revokeObjectURL(originalPreviewUrl);
      }
    };
  }, [originalPreviewUrl]);

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
            Image Compressor
          </h1>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            Instantly compress your citizenship scan, PAN card, or company certificate to under 200KB for .NP domain registration.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Privacy Note */}
        <div className="bg-blue-50 text-blue-800 p-4 rounded-xl flex items-center gap-3 border border-blue-100 mb-8 max-w-2xl mx-auto">
          <Shield className="w-5 h-5 flex-shrink-0 text-blue-600" />
          <p className="text-sm font-medium">
            100% Privacy: Your images are compressed locally in your browser. Nothing is ever uploaded to our servers.
          </p>
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-xl border border-red-200 mb-8 max-w-2xl mx-auto text-center font-medium">
            {error}
            <button onClick={handleReset} className="ml-4 underline hover:text-red-900">Try Again</button>
          </div>
        )}

        {/* Main Content Area */}
        <div className="flex justify-center">
          {!originalFile && !isCompressing && (
            <div className="w-full max-w-2xl">
              <DropZone onFileSelect={handleFileSelect} disabled={isCompressing} />
            </div>
          )}

          {isCompressing && (
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-gray-200 p-16 flex flex-col items-center justify-center text-center">
              <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-6" />
              <h3 className="text-xl font-bold text-navy-900 mb-2">Compressing your image...</h3>
              <p className="text-navy-500">Applying intelligent scaling to meet the 200KB limit.</p>
            </div>
          )}

          {compressionResult && originalFile && originalPreviewUrl && !isCompressing && (
            <div className="w-full">
              <CompressedPreview 
                originalFile={originalFile}
                originalPreviewUrl={originalPreviewUrl}
                result={compressionResult}
                onReset={handleReset}
              />
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
