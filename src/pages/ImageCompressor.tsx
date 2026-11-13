import { useState, useCallback, useEffect } from "react";
import { Icon } from "@iconify/react";
import { DropZone } from "../components/compressor/DropZone";
import { CompressedPreview } from "../components/compressor/CompressedPreview";
import { compressImage, type CompressionResult } from "../utils/imageCompressor";
import { SEO } from "../components/SEO";

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
      await new Promise((resolve) => setTimeout(resolve, 80));
      
      const result = await compressImage(file);
      setCompressionResult(result);
    } catch (err) {
      if (import.meta.env.DEV) {
        console.error("Compression failed:", err);
      }
      setError("Failed to compress the image. Please try a different photo or document scan.");
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
    <>
      <SEO 
        title="200KB Image Compressor for .NP Domain Registration"
        description="Pick a JPG or PNG photo — even a high-resolution one from your phone or scanner. It's automatically converted to JPG, resized and compressed to fit the 200 kilobyte limit before it uploads."
        url="/compress"
      />
      <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-200 mb-4">
            <Icon icon="solar:shield-check-bold" className="w-4 h-4 text-teal-600" />
            Official 200 KB Document Compressor
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
            Image Compressor for .NP Domain
          </h1>
          <p className="text-base sm:text-lg text-navy-600 max-w-2xl mx-auto leading-relaxed">
            Pick a JPG or PNG photo — even a high-resolution one from your phone or scanner. It's automatically converted to JPG, resized and compressed to fit the 200 kilobyte limit before it uploads.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Privacy & Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
          <div className="bg-teal-50 text-teal-900 p-4 rounded-xl flex items-center gap-3 border border-teal-100">
            <Icon icon="solar:shield-check-bold-duotone" className="w-6 h-6 flex-shrink-0 text-teal-600" />
            <p className="text-xs sm:text-sm font-medium">
              <strong>100% Client-Side Privacy:</strong> Your images are processed right inside your browser. No files are uploaded to any server.
            </p>
          </div>
          <div className="bg-blue-50 text-blue-900 p-4 rounded-xl flex items-center gap-3 border border-blue-100">
            <Icon icon="solar:check-read-bold-duotone" className="w-6 h-6 flex-shrink-0 text-blue-600" />
            <p className="text-xs sm:text-sm font-medium">
              <strong>Registration Ready:</strong> Strictly guaranteed under 200 KB in standard JPG format for .com.np registration portal.
            </p>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-xl border border-red-200 mb-8 max-w-2xl mx-auto text-center font-medium">
            {error}
            <button onClick={handleReset} className="ml-4 underline hover:text-red-900 font-semibold">Try Again</button>
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
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-gray-200 p-12 sm:p-16 flex flex-col items-center justify-center text-center">
              <Icon icon="solar:black-hole-line-duotone" className="w-12 h-12 text-teal-600 animate-spin mb-5" />
              <h3 className="text-xl font-bold text-navy-900 mb-2">Compressing your photo...</h3>
              <p className="text-navy-600 text-sm max-w-sm">
                Automatically converting to JPG, resizing and optimizing to fit strictly under the 200 kilobyte limit.
              </p>
            </div>
          )}

          {compressionResult && originalFile && originalPreviewUrl && !isCompressing && (
            <div className="w-full max-w-3xl">
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
    </>
  );
}
