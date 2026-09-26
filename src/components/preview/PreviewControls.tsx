import { Icon } from "@iconify/react";

interface PreviewControlsProps {
  onReset: () => void;
  onEdit: () => void; // for mobile scrolling to form
  onDownload: () => void;
  isValid: boolean;
  isGenerating: boolean;
}

export function PreviewControls({
  onReset,
  onEdit,
  onDownload,
  isValid,
  isGenerating,
}: PreviewControlsProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
      <div className="flex items-center gap-3">
        <button
          onClick={onEdit}
          className="lg:hidden inline-flex items-center gap-2 text-sm font-medium text-navy-600 hover:text-navy-900 bg-white border border-gray-200 px-4 py-2 rounded-lg shadow-sm"
        >
          <Icon icon="solar:pen-2-linear" className="w-4 h-4" />
          Edit Details
        </button>
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 bg-white border border-gray-200 px-4 py-2 rounded-lg shadow-sm"
        >
          <Icon icon="solar:restart-bold" className="w-4 h-4" />
          Reset Form
        </button>
      </div>

      <button
        onClick={onDownload}
        disabled={!isValid || isGenerating}
        className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium shadow-sm transition-all ${
          !isValid || isGenerating
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-teal-600 hover:bg-teal-700 text-white"
        }`}
      >
        <Icon icon="solar:download-minimalistic-bold-duotone" className="w-4 h-4" />
        {isGenerating ? "Generating..." : "Download Image"}
      </button>
    </div>
  );
}
