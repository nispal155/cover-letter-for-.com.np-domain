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
      <div className="bg-[#F5F8FC] dark:bg-[#142536] min-h-screen pb-20 transition-colors">
      
      {/* Header Section */}
      <div className="bg-[#1B2E40] text-white border-b border-[#27465F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#27465F]/80 text-[#ABDAF0] border border-[#7DC0E5]/20 mb-4 uppercase tracking-wider">
            <Icon icon="solar:shield-check-bold" className="w-4 h-4 text-[#ABDAF0]" />
            Official 200 KB Document Compressor
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Image Compressor for .NP Domain
          </h1>
          <p className="text-base sm:text-lg text-[#D9E4EC] max-w-2xl mx-auto leading-relaxed">
            Pick a JPG or PNG photo — even a high-resolution one from your phone or scanner. It's automatically converted to JPG, resized and compressed to fit the 200 kilobyte limit before it uploads.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Privacy & Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
          <div className="bg-white dark:bg-[#1B2E40] p-4 rounded-xl flex items-center gap-3 border border-[#D9E4EC] dark:border-[#27465F]">
            <div className="p-2 bg-[#E9F0F6] dark:bg-[#27465F] rounded-lg text-[#1166B3] dark:text-[#ABDAF0] flex-shrink-0">
              <Icon icon="solar:shield-check-bold" className="w-5 h-5" />
            </div>
            <p className="text-xs sm:text-sm text-[#142536] dark:text-[#D9E4EC] font-medium">
              <strong className="text-[#1B2E40] dark:text-white">100% Client-Side Privacy:</strong> Processed in your browser. Nothing is ever sent to any remote server.
            </p>
          </div>
          <div className="bg-white dark:bg-[#1B2E40] p-4 rounded-xl flex items-center gap-3 border border-[#D9E4EC] dark:border-[#27465F]">
            <div className="p-2 bg-[#E9F0F6] dark:bg-[#27465F] rounded-lg text-[#1166B3] dark:text-[#ABDAF0] flex-shrink-0">
              <Icon icon="solar:check-read-bold" className="w-5 h-5" />
            </div>
            <p className="text-xs sm:text-sm text-[#142536] dark:text-[#D9E4EC] font-medium">
              <strong className="text-[#1B2E40] dark:text-white">Registration Ready:</strong> Strictly &lt; 200 KB in standard JPG format for the official .np portal.
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
            <div className="w-full max-w-2xl bg-white dark:bg-[#1B2E40] rounded-xl border border-[#D9E4EC] dark:border-[#27465F] p-12 sm:p-16 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 border-3 border-[#D9E4EC] border-t-[#1166B3] rounded-full animate-spin mb-5"></div>
              <h3 className="text-xl font-bold text-[#1B2E40] dark:text-white mb-2">Compressing your photo...</h3>
              <p className="text-[#3E5A74] dark:text-[#D9E4EC] text-sm max-w-sm">
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

        {/* Document Upload Guidelines & Tips */}
        <div className="mt-14 max-w-3xl mx-auto">
          <div className="bg-white dark:bg-[#1B2E40] rounded-xl border border-[#D9E4EC] dark:border-[#27465F] p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#D9E4EC] dark:border-[#27465F]">
              <div className="p-2.5 bg-[#E9F0F6] dark:bg-[#27465F] rounded-lg text-[#1166B3] dark:text-[#ABDAF0]">
                <Icon icon="solar:document-medicine-bold" className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1B2E40] dark:text-white">
                  .NP Document Upload Guidelines &amp; Naming Rules
                </h3>
                <p className="text-xs text-[#5C768D] dark:text-[#D9E4EC]">
                  Standards formulated by Mercantile Communications Pvt. Ltd. for fast application approval.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 text-sm">
              <div className="p-4 rounded-lg bg-[#F5F8FC] dark:bg-[#27465F]/40 border border-[#D9E4EC] dark:border-[#27465F] space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-[#1B2E40] dark:text-white">
                  <Icon icon="solar:tag-bold" className="w-4 h-4 text-[#1166B3] dark:text-[#7DC0E5]" />
                  <h4>Short &amp; Sweet File Names</h4>
                </div>
                <p className="text-[#3E5A74] dark:text-[#D9E4EC] text-xs leading-relaxed">
                  Avoid raw camera names (e.g. <span className="font-mono text-red-600 dark:text-red-400">IMG_20261021_...</span>) or spaces. Use clean names like <span className="font-mono text-[#1166B3] dark:text-[#ABDAF0] bg-[#E9F0F6] dark:bg-[#27465F] px-1 py-0.5 rounded font-bold">citizenship-front.jpg</span> or <span className="font-mono text-[#1166B3] dark:text-[#ABDAF0] bg-[#E9F0F6] dark:bg-[#27465F] px-1 py-0.5 rounded font-bold">pan-card.jpg</span>.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#F5F8FC] dark:bg-[#27465F]/40 border border-[#D9E4EC] dark:border-[#27465F] space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-[#1B2E40] dark:text-white">
                  <Icon icon="solar:scale-bold" className="w-4 h-4 text-[#1166B3] dark:text-[#7DC0E5]" />
                  <h4>Strict 200 Kilobyte Limit</h4>
                </div>
                <p className="text-[#3E5A74] dark:text-[#D9E4EC] text-xs leading-relaxed">
                  The registry automatically rejects files exceeding 200KB (204,800 bytes). This tool targets ~170KB–195KB so your document safely passes validation every time.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#F5F8FC] dark:bg-[#27465F]/40 border border-[#D9E4EC] dark:border-[#27465F] space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-[#1B2E40] dark:text-white">
                  <Icon icon="solar:gallery-bold" className="w-4 h-4 text-[#1166B3] dark:text-[#7DC0E5]" />
                  <h4>Standard JPG Format Only</h4>
                </div>
                <p className="text-[#3E5A74] dark:text-[#D9E4EC] text-xs leading-relaxed">
                  PDFs and other formats often fail on the .np registration portal. Convert all document scans and phone photos to standard JPG format before uploading.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#F5F8FC] dark:bg-[#27465F]/40 border border-[#D9E4EC] dark:border-[#27465F] space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-[#1B2E40] dark:text-white">
                  <Icon icon="solar:eye-bold" className="w-4 h-4 text-[#1166B3] dark:text-[#7DC0E5]" />
                  <h4>Legible Text &amp; Signatures</h4>
                </div>
                <p className="text-[#3E5A74] dark:text-[#D9E4EC] text-xs leading-relaxed">
                  Mercantile operators examine documents manually. Make sure your name, citizenship number, date of issue, official government seal, and signature remain clear.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
      </div>
    </>
  );
}
