import { useState, useRef } from "react";
import type { ChangeEvent } from "react";
import { useFormContext } from "react-hook-form";
import { Icon } from "@iconify/react";
import type { DomainLetterFormData } from "../../types";
import { ImageCropperModal } from "../ui/ImageCropperModal";
import { useActiveField } from "../../context/ActiveFieldContext";

export function StampUploader() {
  const { setValue, watch } = useFormContext<DomainLetterFormData>();
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Cropper state
  const [cropModalOpen, setCropModalOpen] = useState(false);
  const [tempImage, setTempImage] = useState("");
  const { setActiveField } = useActiveField();

  const stampUrl = watch("stamp");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      setError("File is too large. Please select an image under 2MB.");
      return;
    }

    // Validate type
    const validTypes = ["image/jpeg", "image/png", "image/jpg", "image/svg+xml"];
    if (!validTypes.includes(file.type)) {
      setError("Invalid file format. Please upload a PNG, JPG, or SVG.");
      return;
    }

    setError(null);

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setTempImage(event.target.result as string);
        setCropModalOpen(true);
      }
    };
    reader.onerror = () => {
      setError("Failed to read file.");
    };
    reader.readAsDataURL(file);
    
    // reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleCropComplete = (croppedBase64: string) => {
    setValue("stamp", croppedBase64, {
      shouldValidate: true,
      shouldDirty: true,
    });
    setCropModalOpen(false);
  };

  const clearStamp = () => {
    setValue("stamp", undefined, { shouldValidate: true, shouldDirty: true });
  };

  return (
    <div 
      className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 transition-colors"
      onMouseEnter={() => setActiveField('stamp')}
      onMouseLeave={() => setActiveField(null)}
    >
      <h2 className="text-xl font-bold text-navy-900 dark:text-white mb-6">Company Stamp (Optional)</h2>
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        {stampUrl && stampUrl.startsWith('data:image/') ? (
          <div className="relative group">
            <div className="w-32 h-32 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex items-center justify-center p-2 overflow-hidden transition-colors">
              <img src={stampUrl} alt="Company Stamp" className="max-w-full max-h-full object-contain" />
            </div>
            <button
              type="button"
              onClick={clearStamp}
              className="absolute -top-2 -right-2 bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 p-1.5 rounded-full hover:bg-red-200 dark:hover:bg-red-900 transition-colors shadow-sm"
              aria-label="Remove stamp"
            >
              <Icon icon="solar:close-circle-linear" className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="w-32 h-32 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 transition-colors">
            <Icon icon="solar:stamp-bold-duotone" className="w-8 h-8 mb-2" />
            <span className="text-xs font-medium">No stamp</span>
          </div>
        )}
        
        <div className="flex-1">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".png,.jpg,.jpeg,.svg"
            className="hidden"
            id="stamp-upload"
          />
          <label
            htmlFor="stamp-upload"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-navy-700 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors shadow-sm"
          >
            <Icon icon="solar:upload-minimalistic-bold" className="w-4 h-4" />
            {stampUrl ? "Change Stamp" : "Upload Stamp"}
          </label>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            Accepts PNG, JPG, or SVG up to 2MB. Crop tool available after selection.
          </p>
          {error && <p className="mt-2 text-sm text-red-500 dark:text-red-400">{error}</p>}
        </div>
      </div>

      <ImageCropperModal
        isOpen={cropModalOpen}
        imageSrc={tempImage}
        onClose={() => setCropModalOpen(false)}
        onCropComplete={handleCropComplete}
      />
    </div>
  );
}
