import { Icon } from "@iconify/react";
import type { CompressionResult } from "../../utils/imageCompressor";

interface CompressedPreviewProps {
  originalFile: File;
  originalPreviewUrl: string;
  result: CompressionResult;
  onReset: () => void;
}

export function CompressedPreview({ originalFile, originalPreviewUrl, result, onReset }: CompressedPreviewProps) {
  const formatBytes = (bytes: number, decimals = 1) => {
    if (!+bytes) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = result.dataUrl;
    link.download = result.fileName.endsWith(".jpg") ? result.fileName : `${result.fileName}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const isUnder200KB = result.compressedSize <= 200 * 1024;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
      
      {/* Upload Compliance Banner */}
      <div className={`mb-6 p-4 rounded-xl flex items-start gap-3 border ${
        isUnder200KB 
          ? "bg-emerald-50 border-emerald-200 text-emerald-900" 
          : "bg-amber-50 border-amber-200 text-amber-900"
      }`}>
        <Icon 
          icon={isUnder200KB ? "solar:check-circle-bold-duotone" : "solar:info-circle-bold-duotone"} 
          className={`w-6 h-6 flex-shrink-0 mt-0.5 ${isUnder200KB ? "text-emerald-600" : "text-amber-600"}`} 
        />
        <div className="flex-1">
          <p className="font-bold text-sm sm:text-base">
            {isUnder200KB ? "Ready for Upload — Under 200 Kilobyte Limit!" : "Image Compressed"}
          </p>
          <p className="text-xs sm:text-sm mt-0.5 opacity-90">
            Automatically converted to standard JPG ({formatBytes(result.compressedSize)}) and resized for .NP domain registration or official portal uploads.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
        {/* Original */}
        <div className="flex-1 w-full space-y-3 text-center">
          <div className="flex items-center justify-center gap-2">
            <h4 className="font-bold text-navy-900">Original Photo</h4>
            <span className="text-xs text-navy-500 bg-gray-100 px-2 py-0.5 rounded">
              {originalFile.type.replace("image/", "").toUpperCase() || "PHOTO"}
            </span>
          </div>
          <div className="relative aspect-[4/3] w-full max-w-sm mx-auto rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
            <img src={originalPreviewUrl} alt="Original" className="w-full h-full object-contain" />
          </div>
          <div className="inline-flex bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
            {formatBytes(originalFile.size)}
          </div>
        </div>

        {/* Arrow (hidden on small mobile) */}
        <div className="flex flex-shrink-0 items-center justify-center bg-teal-50 text-teal-600 rounded-full p-3 border border-teal-100">
          <Icon icon="solar:arrow-right-linear" className="w-6 h-6 rotate-90 md:rotate-0" />
        </div>

        {/* Compressed */}
        <div className="flex-1 w-full space-y-3 text-center">
          <div className="flex items-center justify-center gap-2">
            <h4 className="font-bold text-teal-700">Converted &amp; Compressed</h4>
            <span className="text-xs font-bold text-teal-800 bg-teal-100 px-2 py-0.5 rounded">
              JPG
            </span>
          </div>
          <div className="relative aspect-[4/3] w-full max-w-sm mx-auto rounded-xl overflow-hidden bg-gray-100 border border-teal-300 shadow-[0_0_20px_rgba(13,148,136,0.12)]">
            <img src={result.dataUrl} alt="Compressed" className="w-full h-full object-contain" />
          </div>
          <div className="inline-flex bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-bold border border-emerald-200">
            {formatBytes(result.compressedSize)} (✓ &lt; 200KB)
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-gray-50 rounded-xl p-4 border border-gray-100 text-center">
        <div>
          <p className="text-xs text-navy-500 font-medium uppercase tracking-wider mb-1">Dimensions</p>
          <p className="text-sm font-semibold text-navy-900">{Math.round(result.width)} × {Math.round(result.height)} px</p>
        </div>
        <div>
          <p className="text-xs text-navy-500 font-medium uppercase tracking-wider mb-1">Space Saved</p>
          <p className="text-sm font-semibold text-emerald-600">{result.compressionRatio > 0 ? `${result.compressionRatio}%` : 'Optimized'}</p>
        </div>
        <div>
          <p className="text-xs text-navy-500 font-medium uppercase tracking-wider mb-1">Output Format</p>
          <p className="text-sm font-bold text-navy-900">JPG</p>
        </div>
        <div>
          <p className="text-xs text-navy-500 font-medium uppercase tracking-wider mb-1">Quality</p>
          <p className="text-sm font-semibold text-navy-900">{Math.round(result.quality * 100)}%</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleDownload}
          className="flex-1 bg-teal-600 hover:bg-teal-700 active:scale-[0.99] text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2 shadow-sm"
        >
          <Icon icon="solar:download-minimalistic-bold-duotone" className="w-5 h-5" />
          Download Compressed JPG
        </button>
        <button
          onClick={onReset}
          className="w-full sm:w-auto bg-white hover:bg-gray-50 active:scale-[0.99] text-navy-700 py-4 px-6 rounded-xl font-medium border border-gray-300 transition-all flex items-center justify-center gap-2"
        >
          <Icon icon="solar:refresh-circle-bold-duotone" className="w-5 h-5" />
          Compress Another Photo
        </button>
      </div>

    </div>
  );
}
