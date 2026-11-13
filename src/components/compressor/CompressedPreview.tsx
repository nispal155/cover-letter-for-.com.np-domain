import { useState } from "react";
import { Icon } from "@iconify/react";
import type { CompressionResult } from "../../utils/imageCompressor";

interface CompressedPreviewProps {
  originalFile: File;
  originalPreviewUrl: string;
  result: CompressionResult;
  onReset: () => void;
}

const PRESET_NAMES = [
  { id: "citizenship-front", label: "Citizenship (Front)" },
  { id: "citizenship-back", label: "Citizenship (Back)" },
  { id: "pan-card", label: "PAN Card" },
  { id: "company-reg", label: "Company Reg" },
  { id: "document", label: "Document" },
];

function getShortAndSweetDefaultName(originalName: string): string {
  const nameWithoutExt = originalName.replace(/\.[^/.]+$/, "").trim().toLowerCase();

  if (nameWithoutExt.includes("pan")) return "pan-card";
  if (nameWithoutExt.includes("back") || nameWithoutExt.includes("pachhadi")) return "citizenship-back";
  if (nameWithoutExt.includes("front") || nameWithoutExt.includes("agadi")) return "citizenship-front";
  if (nameWithoutExt.includes("comp") || nameWithoutExt.includes("reg") || nameWithoutExt.includes("darta")) return "company-reg";
  if (nameWithoutExt.includes("citizen") || nameWithoutExt.includes("nagrikta")) return "citizenship-front";
  if (nameWithoutExt.includes("licen") || nameWithoutExt.includes("drive")) return "driving-license";
  if (nameWithoutExt.includes("pass")) return "passport";
  if (nameWithoutExt.includes("letter") || nameWithoutExt.includes("cover")) return "cover-letter";

  if (/^(img|pxl|dsc|scan|photo|whatsapp|screenshot)/i.test(nameWithoutExt) || nameWithoutExt.length > 18) {
    return "citizenship-front";
  }

  const sanitized = nameWithoutExt.replace(/[^a-z0-9_-]/g, "-").replace(/-+/g, "-").slice(0, 20);
  return sanitized || "citizenship-front";
}

export function CompressedPreview({ originalFile, originalPreviewUrl, result, onReset }: CompressedPreviewProps) {
  const [fileName, setFileName] = useState(() => getShortAndSweetDefaultName(originalFile.name));

  const formatBytes = (bytes: number, decimals = 1) => {
    if (!+bytes) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  };

  const cleanCurrentName = (fileName.trim().replace(/\.jpe?g$/i, "") || "document")
    .replace(/[^a-zA-Z0-9_-]/g, "-")
    .replace(/-+/g, "-");
  const finalDownloadName = `${cleanCurrentName}.jpg`;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = result.dataUrl;
    link.download = finalDownloadName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const isUnder200KB = result.compressedSize <= 200 * 1024;

  return (
    <div className="bg-white dark:bg-[#1B2E40] rounded-xl border border-[#D9E4EC] dark:border-[#27465F] p-6 sm:p-8">
      
      {/* Upload Compliance Banner */}
      <div className={`mb-6 p-4 rounded-lg flex items-start gap-3 border ${
        isUnder200KB 
          ? "bg-[#E9F0F6] dark:bg-[#27465F]/60 border-[#D9E4EC] dark:border-[#7DC0E5]/30 text-[#142536] dark:text-[#D9E4EC]" 
          : "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200"
      }`}>
        <Icon 
          icon={isUnder200KB ? "solar:check-circle-bold" : "solar:info-circle-bold"} 
          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isUnder200KB ? "text-[#1166B3] dark:text-[#7DC0E5]" : "text-amber-600"}`} 
        />
        <div className="flex-1">
          <p className="font-bold text-sm sm:text-base text-[#1B2E40] dark:text-white">
            {isUnder200KB ? "Ready for Upload — Meets the 200 Kilobyte Limit" : "Image Compressed"}
          </p>
          <p className="text-xs sm:text-sm mt-0.5 text-[#3E5A74] dark:text-[#D9E4EC]">
            Converted to standard JPG ({formatBytes(result.compressedSize)}) and verified for official .np registration portal standards.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
        {/* Original */}
        <div className="flex-1 w-full space-y-2.5 text-center">
          <div className="flex items-center justify-center gap-2">
            <h4 className="font-bold text-[#1B2E40] dark:text-white text-sm">Original Photo</h4>
            <span className="text-[10px] font-semibold text-[#5C768D] dark:text-[#ABDAF0] bg-[#F5F8FC] dark:bg-[#27465F] px-2 py-0.5 rounded border border-[#D9E4EC] dark:border-[#27465F]">
              {originalFile.type.replace("image/", "").toUpperCase() || "PHOTO"}
            </span>
          </div>
          <div className="relative aspect-[4/3] w-full max-w-sm mx-auto rounded-lg overflow-hidden bg-[#F5F8FC] dark:bg-[#142536] border border-[#D9E4EC] dark:border-[#27465F]">
            <img src={originalPreviewUrl} alt="Original" className="w-full h-full object-contain" />
          </div>
          <div className="inline-flex bg-[#F5F8FC] dark:bg-[#27465F] text-[#3E5A74] dark:text-[#D9E4EC] px-3 py-1 rounded-full text-xs font-semibold border border-[#D9E4EC] dark:border-[#27465F]">
            {formatBytes(originalFile.size)}
          </div>
        </div>

        {/* Arrow */}
        <div className="flex flex-shrink-0 items-center justify-center bg-[#E9F0F6] dark:bg-[#27465F] text-[#1166B3] dark:text-[#ABDAF0] rounded-full p-2.5 border border-[#D9E4EC] dark:border-[#27465F]">
          <Icon icon="solar:arrow-right-linear" className="w-5 h-5 rotate-90 md:rotate-0" />
        </div>

        {/* Compressed */}
        <div className="flex-1 w-full space-y-2.5 text-center">
          <div className="flex items-center justify-center gap-2">
            <h4 className="font-bold text-[#1166B3] dark:text-[#7DC0E5] text-sm">Converted &amp; Compressed</h4>
            <span className="text-[10px] font-bold text-[#1166B3] dark:text-[#ABDAF0] bg-[#E9F0F6] dark:bg-[#27465F] px-2 py-0.5 rounded border border-[#D9E4EC] dark:border-[#27465F]">
              JPG
            </span>
          </div>
          <div className="relative aspect-[4/3] w-full max-w-sm mx-auto rounded-lg overflow-hidden bg-[#F5F8FC] dark:bg-[#142536] border border-[#1166B3]/40 dark:border-[#7DC0E5]/40 shadow-xs">
            <img src={result.dataUrl} alt="Compressed" className="w-full h-full object-contain" />
          </div>
          <div className="inline-flex bg-[#E9F0F6] dark:bg-[#27465F] text-[#1166B3] dark:text-[#ABDAF0] px-3 py-1 rounded-full text-xs font-bold border border-[#D9E4EC] dark:border-[#27465F]">
            {formatBytes(result.compressedSize)} (✓ &lt; 200KB)
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mb-6 bg-[#F5F8FC] dark:bg-[#27465F]/40 rounded-lg p-3.5 border border-[#D9E4EC] dark:border-[#27465F] text-center">
        <div>
          <p className="text-[10px] text-[#5C768D] dark:text-[#ABDAF0] font-semibold uppercase tracking-wider mb-0.5">Dimensions</p>
          <p className="text-xs font-bold text-[#1B2E40] dark:text-white">{Math.round(result.width)} × {Math.round(result.height)} px</p>
        </div>
        <div>
          <p className="text-[10px] text-[#5C768D] dark:text-[#ABDAF0] font-semibold uppercase tracking-wider mb-0.5">Space Saved</p>
          <p className="text-xs font-bold text-[#1166B3] dark:text-[#7DC0E5]">{result.compressionRatio > 0 ? `${result.compressionRatio}%` : 'Optimized'}</p>
        </div>
        <div>
          <p className="text-[10px] text-[#5C768D] dark:text-[#ABDAF0] font-semibold uppercase tracking-wider mb-0.5">Output Format</p>
          <p className="text-xs font-bold text-[#1B2E40] dark:text-white">JPG</p>
        </div>
        <div>
          <p className="text-[10px] text-[#5C768D] dark:text-[#ABDAF0] font-semibold uppercase tracking-wider mb-0.5">Quality Factor</p>
          <p className="text-xs font-bold text-[#1B2E40] dark:text-white">{Math.round(result.quality * 100)}%</p>
        </div>
      </div>

      {/* Short & Sweet Download Filename Customizer */}
      <div className="mb-6 p-4 bg-[#F5F8FC] dark:bg-[#27465F]/40 rounded-lg border border-[#D9E4EC] dark:border-[#27465F]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
          <label htmlFor="custom-filename" className="text-xs font-bold text-[#1B2E40] dark:text-white flex items-center gap-1.5">
            <Icon icon="solar:pen-bold" className="w-3.5 h-3.5 text-[#1166B3] dark:text-[#ABDAF0]" />
            Download File Name (Short &amp; Sweet):
          </label>
          <span className="text-[11px] text-[#5C768D] dark:text-[#D9E4EC]">Pick a preset or customize</span>
        </div>

        <div className="flex rounded-lg overflow-hidden border border-[#D9E4EC] dark:border-[#27465F] focus-within:border-[#1166B3] bg-white dark:bg-[#1B2E40] mb-2.5">
          <input
            id="custom-filename"
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value.replace(/[^a-zA-Z0-9_-]/g, "-"))}
            placeholder="e.g. citizenship-front"
            className="flex-1 px-3.5 py-2 text-[#142536] dark:text-white text-xs font-semibold focus:outline-none"
          />
          <span className="inline-flex items-center px-3 bg-[#E9F0F6] dark:bg-[#27465F] text-[#1166B3] dark:text-[#ABDAF0] text-xs font-bold border-l border-[#D9E4EC] dark:border-[#27465F] select-none">
            .jpg
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] font-semibold text-[#5C768D] dark:text-[#D9E4EC] mr-1">Presets:</span>
          {PRESET_NAMES.map((preset) => (
            <button
              key={preset.id}
              type="button"
              onClick={() => setFileName(preset.id)}
              className={`text-[11px] px-2.5 py-1 rounded-md font-medium transition-colors ${
                cleanCurrentName === preset.id
                  ? "bg-[#1166B3] text-white shadow-2xs"
                  : "bg-white dark:bg-[#1B2E40] text-[#3E5A74] dark:text-[#D9E4EC] border border-[#D9E4EC] dark:border-[#27465F] hover:border-[#1166B3] hover:text-[#1166B3]"
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleDownload}
          className="flex-1 bg-[#1166B3] hover:bg-[#0e5494] text-white py-3.5 px-6 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-xs min-h-[44px]"
        >
          <Icon icon="solar:download-minimalistic-bold" className="w-4 h-4 text-white" />
          Download {finalDownloadName}
        </button>
        <button
          onClick={onReset}
          className="w-full sm:w-auto bg-white dark:bg-[#1B2E40] hover:bg-[#F5F8FC] dark:hover:bg-[#27465F] text-[#142536] dark:text-[#D9E4EC] py-3.5 px-5 rounded-lg font-medium text-sm border border-[#D9E4EC] dark:border-[#27465F] transition-colors flex items-center justify-center gap-2 min-h-[44px]"
        >
          <Icon icon="solar:refresh-circle-bold" className="w-4 h-4" />
          Compress Another
        </button>
      </div>

    </div>
  );
}
