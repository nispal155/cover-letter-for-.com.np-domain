import { useCallback, useState } from "react";
import { Icon } from "@iconify/react";

interface DropZoneProps {
  onFileSelect: (file: File) => void;
  disabled?: boolean;
}

export function DropZone({ onFileSelect, disabled = false }: DropZoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) {
      if (e.type === "dragenter" || e.type === "dragover") {
        setIsDragging(true);
      } else if (e.type === "dragleave") {
        setIsDragging(false);
      }
    }
  }, [disabled]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (disabled) return;

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      validateAndPassFile(file);
    }
  }, [disabled]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (disabled) return;
    
    if (e.target.files && e.target.files[0]) {
      validateAndPassFile(e.target.files[0]);
      e.target.value = ""; // Reset input
    }
  };

  const validateAndPassFile = (file: File) => {
    const validMimes = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
    const hasValidExt = /\.(jpe?g|png|webp)$/i.test(file.name);
    
    if (validMimes.includes(file.type) || hasValidExt) {
      setError(null);
      onFileSelect(file);
    } else {
      setError("Please select a JPG or PNG photo (phone scans, citizenship, or registration documents).");
    }
  };

  return (
    <div
      className={`relative w-full rounded-2xl border-2 border-dashed p-8 sm:p-14 transition-all flex flex-col items-center justify-center text-center
        ${isDragging 
          ? "border-teal-500 bg-teal-50 scale-[1.01]" 
          : "border-gray-300 bg-white hover:bg-gray-50 hover:border-teal-500/60 shadow-sm"
        }
        ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "cursor-pointer"}
      `}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input
        type="file"
        accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
        onChange={handleChange}
        disabled={disabled}
      />
      <div className="bg-teal-50 p-4 rounded-full shadow-inner mb-4 border border-teal-100">
        {isDragging ? (
          <Icon icon="solar:gallery-bold-duotone" className="w-9 h-9 text-teal-600 animate-pulse" />
        ) : (
          <Icon icon="solar:cloud-upload-bold-duotone" className="w-9 h-9 text-teal-600" />
        )}
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-2">
        Pick a JPG or PNG photo
      </h3>
      <p className="text-navy-600 text-sm sm:text-base max-w-md">
        Even a high-resolution one from your phone or scanner. It's automatically converted to JPG, resized, and compressed to fit the <strong className="text-navy-900 font-semibold">200 KB limit</strong> before upload.
      </p>

      <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-teal-800">
        <span className="inline-flex items-center gap-1 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
          <Icon icon="solar:smartphone-rotate-orientation-bold-duotone" className="w-3.5 h-3.5 text-teal-600" />
          Phone Photos
        </span>
        <span className="inline-flex items-center gap-1 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
          <Icon icon="solar:scanner-bold-duotone" className="w-3.5 h-3.5 text-teal-600" />
          Scanners
        </span>
        <span className="inline-flex items-center gap-1 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
          <Icon icon="solar:document-text-bold-duotone" className="w-3.5 h-3.5 text-teal-600" />
          Citizenship & PAN
        </span>
      </div>

      <div className="mt-5 flex items-center justify-center gap-3 text-xs font-medium text-navy-500">
        <span className="bg-gray-100 px-2.5 py-1 rounded border border-gray-200">JPG</span>
        <span className="bg-gray-100 px-2.5 py-1 rounded border border-gray-200">PNG</span>
        <span className="text-gray-400">→</span>
        <span className="bg-green-50 text-green-700 font-bold px-2.5 py-1 rounded border border-green-200">Always JPG &lt; 200KB</span>
      </div>

      {error && (
        <div className="absolute bottom-3 inset-x-0 mx-auto px-4 w-fit">
          <div className="bg-red-50 text-red-600 text-sm py-1.5 px-3 rounded-md border border-red-200 shadow-sm animate-in slide-in-from-bottom-2 duration-300">
            {error}
          </div>
        </div>
      )}
    </div>
  );
}
