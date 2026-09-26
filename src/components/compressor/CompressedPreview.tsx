import { Download, RefreshCw, CheckCircle2, ArrowRight } from "lucide-react";
import type { CompressionResult } from "../../utils/imageCompressor";

interface CompressedPreviewProps {
  originalFile: File;
  originalPreviewUrl: string;
  result: CompressionResult;
  onReset: () => void;
}

export function CompressedPreview({ originalFile, originalPreviewUrl, result, onReset }: CompressedPreviewProps) {
  const formatBytes = (bytes: number, decimals = 2) => {
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
    
    // Create a new filename based on the original, ensuring it ends in .jpg
    const originalNameWithoutExt = result.fileName.substring(0, result.fileName.lastIndexOf('.')) || result.fileName;
    link.download = `compressed-${originalNameWithoutExt}.jpg`;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const isAlreadySmall = result.originalSize <= 195000;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
      
      {isAlreadySmall && (
        <div className="mb-6 bg-green-50 border border-green-200 text-green-800 p-4 rounded-xl flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-sm">Your image is already under 200KB!</p>
            <p className="text-sm mt-1 opacity-90">No aggressive compression was needed. We've converted it to a standardized JPG format for you.</p>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
        {/* Original */}
        <div className="flex-1 w-full space-y-4 text-center">
          <h4 className="font-bold text-navy-900">Original</h4>
          <div className="relative aspect-[4/3] w-full max-w-sm mx-auto rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
            <img src={originalPreviewUrl} alt="Original" className="w-full h-full object-contain" />
          </div>
          <div className="inline-flex bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
            {formatBytes(originalFile.size)}
          </div>
        </div>

        {/* Arrow (hidden on mobile) */}
        <div className="hidden md:flex flex-shrink-0 items-center justify-center bg-blue-50 text-blue-600 rounded-full p-3">
          <ArrowRight className="w-6 h-6" />
        </div>

        {/* Compressed */}
        <div className="flex-1 w-full space-y-4 text-center">
          <h4 className="font-bold text-blue-600">Compressed</h4>
          <div className="relative aspect-[4/3] w-full max-w-sm mx-auto rounded-xl overflow-hidden bg-gray-100 border border-blue-200 shadow-[0_0_15px_rgba(37,99,235,0.1)]">
            <img src={result.dataUrl} alt="Compressed" className="w-full h-full object-contain" />
          </div>
          <div className="inline-flex bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold border border-green-200">
            {formatBytes(result.compressedSize)}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-gray-50 rounded-xl p-4 border border-gray-100">
        <div>
          <p className="text-xs text-navy-500 font-medium uppercase tracking-wider mb-1">Dimensions</p>
          <p className="text-sm font-semibold text-navy-900">{Math.round(result.width)} × {Math.round(result.height)}</p>
        </div>
        <div>
          <p className="text-xs text-navy-500 font-medium uppercase tracking-wider mb-1">Savings</p>
          <p className="text-sm font-semibold text-green-600">{result.compressionRatio > 0 ? `${result.compressionRatio}%` : '0%'}</p>
        </div>
        <div>
          <p className="text-xs text-navy-500 font-medium uppercase tracking-wider mb-1">Format</p>
          <p className="text-sm font-semibold text-navy-900">JPG</p>
        </div>
        <div>
          <p className="text-xs text-navy-500 font-medium uppercase tracking-wider mb-1">Quality Setting</p>
          <p className="text-sm font-semibold text-navy-900">{Math.round(result.quality * 100)}%</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleDownload}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-medium text-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
        >
          <Download className="w-5 h-5" />
          Download Compressed Image
        </button>
        <button
          onClick={onReset}
          className="w-full sm:w-auto bg-white hover:bg-gray-50 text-navy-700 py-4 px-6 rounded-xl font-medium border border-gray-300 transition-colors flex items-center justify-center gap-2"
        >
          <RefreshCw className="w-5 h-5" />
          Compress Another
        </button>
      </div>

    </div>
  );
}
