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
    const validTypes = ["image/jpeg", "image/png", "image/webp"];
    if (validTypes.includes(file.type)) {
      setError(null);
      onFileSelect(file);
    } else {
      setError("Please upload a valid image file (JPG, PNG, or WebP).");
    }
  };

  return (
    <div
      className={`relative w-full rounded-2xl border-2 border-dashed p-10 sm:p-16 transition-all flex flex-col items-center justify-center text-center
        ${isDragging 
          ? "border-teal-500 bg-teal-50" 
          : "border-gray-300 bg-gray-50 hover:bg-gray-100 hover:border-gray-400"
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
        accept="image/jpeg, image/png, image/webp"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
        onChange={handleChange}
        disabled={disabled}
      />
      <div className="bg-white p-4 rounded-full shadow-sm mb-4">
        {isDragging ? (
          <Icon icon="solar:gallery-bold-duotone" className="w-8 h-8 text-teal-600 animate-pulse" />
        ) : (
          <Icon icon="solar:cloud-upload-bold-duotone" className="w-8 h-8 text-teal-600" />
        )}
      </div>
      <h3 className="text-xl font-bold text-navy-900 mb-2">
        Drag & drop your image here
      </h3>
      <p className="text-navy-600 text-sm">
        or <span className="text-teal-600 font-medium">click to browse</span> from your device
      </p>
      <div className="mt-6 flex items-center justify-center gap-4 text-xs font-medium text-navy-500">
        <span className="bg-white px-3 py-1 rounded-full border border-gray-200">JPG</span>
        <span className="bg-white px-3 py-1 rounded-full border border-gray-200">PNG</span>
        <span className="bg-white px-3 py-1 rounded-full border border-gray-200">WEBP</span>
      </div>
      {error && (
        <div className="absolute bottom-4 inset-x-0 mx-auto px-4 w-fit">
          <div className="bg-red-50 text-red-600 text-sm py-1.5 px-3 rounded-md border border-red-200 shadow-sm animate-in slide-in-from-bottom-2 duration-300">
            {error}
          </div>
        </div>
      )}
    </div>
  );
}
