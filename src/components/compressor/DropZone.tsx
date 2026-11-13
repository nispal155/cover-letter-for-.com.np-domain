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
      className={`relative w-full rounded-xl border-2 border-dashed p-8 sm:p-14 transition-colors flex flex-col items-center justify-center text-center
        ${isDragging 
          ? "border-[#1166B3] bg-[#E9F0F6] dark:bg-[#27465F]/40" 
          : "border-[#D9E4EC] dark:border-[#27465F] bg-white dark:bg-[#1B2E40] hover:border-[#1166B3] hover:bg-[#F5F8FC] dark:hover:bg-[#1e3449]"
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
      <div className="bg-[#E9F0F6] dark:bg-[#27465F] p-4 rounded-xl mb-4 border border-[#D9E4EC] dark:border-[#27465F]">
        <Icon icon="solar:cloud-upload-bold" className="w-8 h-8 text-[#1166B3] dark:text-[#ABDAF0]" />
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-[#1B2E40] dark:text-white mb-2 tracking-tight">
        Pick a JPG or PNG photo
      </h3>
      <p className="text-[#3E5A74] dark:text-[#D9E4EC] text-sm sm:text-base max-w-md">
        Even a high-resolution one from your phone or scanner. It's automatically converted to JPG, resized, and compressed to fit the <strong className="text-[#1B2E40] dark:text-white font-semibold">200 KB limit</strong> before upload.
      </p>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold">
        <span className="inline-flex items-center gap-1.5 bg-[#F5F8FC] dark:bg-[#27465F] text-[#1166B3] dark:text-[#ABDAF0] px-3 py-1 rounded-md border border-[#D9E4EC] dark:border-[#27465F]">
          <Icon icon="solar:smartphone-rotate-orientation-bold" className="w-3.5 h-3.5" />
          Phone Photos
        </span>
        <span className="inline-flex items-center gap-1.5 bg-[#F5F8FC] dark:bg-[#27465F] text-[#1166B3] dark:text-[#ABDAF0] px-3 py-1 rounded-md border border-[#D9E4EC] dark:border-[#27465F]">
          <Icon icon="solar:scanner-bold" className="w-3.5 h-3.5" />
          Scanners
        </span>
        <span className="inline-flex items-center gap-1.5 bg-[#F5F8FC] dark:bg-[#27465F] text-[#1166B3] dark:text-[#ABDAF0] px-3 py-1 rounded-md border border-[#D9E4EC] dark:border-[#27465F]">
          <Icon icon="solar:document-text-bold" className="w-3.5 h-3.5" />
          Citizenship &amp; PAN
        </span>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2.5 text-xs font-medium text-[#5C768D] dark:text-[#D9E4EC]">
        <span className="bg-[#E9F0F6] dark:bg-[#27465F] px-2 py-0.5 rounded border border-[#D9E4EC] dark:border-[#27465F]">JPG</span>
        <span className="bg-[#E9F0F6] dark:bg-[#27465F] px-2 py-0.5 rounded border border-[#D9E4EC] dark:border-[#27465F]">PNG</span>
        <span>→</span>
        <span className="bg-[#E9F0F6] dark:bg-[#27465F] text-[#1166B3] dark:text-[#ABDAF0] font-bold px-2 py-0.5 rounded border border-[#D9E4EC] dark:border-[#27465F]">Always Standard JPG &lt; 200KB</span>
      </div>

      {error && (
        <div className="absolute bottom-3 inset-x-0 mx-auto px-4 w-fit">
          <div className="bg-red-50 text-red-700 text-xs sm:text-sm py-1.5 px-3 rounded-md border border-red-200 shadow-xs">
            {error}
          </div>
        </div>
      )}
    </div>
  );
}
