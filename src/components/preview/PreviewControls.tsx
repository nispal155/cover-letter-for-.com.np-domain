import { Icon } from "@iconify/react";

interface PreviewControlsProps {
  onReset: () => void;
  onEdit: () => void; // for mobile scrolling to form
  onDownload: () => void;
  onDownloadPdf: () => void;
  isValid: boolean;
  isGenerating: boolean;
}

export function PreviewControls({
  onReset,
  onEdit,
  onDownload,
  onDownloadPdf,
  isValid,
  isGenerating,
}: PreviewControlsProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
      <div className="flex items-center gap-3">
        <button
          onClick={onEdit}
          className="lg:hidden inline-flex items-center gap-2 text-sm font-medium text-navy-600 hover:text-navy-900 bg-white border border-gray-200 px-4 py-2 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:text-white transition-colors"
        >
          <Icon icon="solar:pen-2-linear" className="w-4 h-4" />
          Edit Details
        </button>
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 bg-white border border-gray-200 px-4 py-2 rounded-lg shadow-sm dark:bg-gray-800 dark:border-red-900/30 dark:text-red-400 dark:hover:text-red-300 transition-colors"
        >
          <Icon icon="solar:restart-bold" className="w-4 h-4" />
          Reset Form
        </button>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={onDownloadPdf}
          disabled={!isValid || isGenerating}
          className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium shadow-sm transition-all ${
            !isValid || isGenerating
              ? "bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-800 dark:text-gray-600"
              : "bg-white border border-gray-200 text-navy-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
          }`}
        >
          <Icon icon="solar:document-bold-duotone" className="w-4 h-4" />
          {isGenerating ? "Wait..." : "PDF"}
        </button>

        <button
          onClick={onDownload}
          disabled={!isValid || isGenerating}
          className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium shadow-sm transition-all ${
            !isValid || isGenerating
              ? "bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-800 dark:text-gray-600"
              : "bg-teal-600 hover:bg-teal-700 text-white"
          }`}
        >
          <Icon icon="solar:download-minimalistic-bold-duotone" className="w-4 h-4" />
          {isGenerating ? "Generating..." : "Download JPG"}
        </button>
      </div>
    </div>
  );
}

