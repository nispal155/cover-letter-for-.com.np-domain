import { useState, useRef } from "react";
import type { ChangeEvent } from "react";
import { useFormContext } from "react-hook-form";
import { Upload, X, Stamp as StampIcon } from "lucide-react";
import type { DomainLetterFormData } from "../../types";

export function StampUploader() {
  const { setValue, watch } = useFormContext<DomainLetterFormData>();
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
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
        setValue("stamp", event.target.result as string, {
          shouldValidate: true,
          shouldDirty: true,
        });
      }
    };
    reader.onerror = () => {
      setError("Failed to read file.");
    };
    reader.readAsDataURL(file);
  };

  const clearStamp = () => {
    setValue("stamp", undefined, { shouldValidate: true, shouldDirty: true });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-200">
      <h2 className="text-xl font-bold text-navy-900 mb-6">Company Stamp (Optional)</h2>
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        {stampUrl ? (
          <div className="relative group">
            <div className="w-32 h-32 rounded-lg border border-gray-200 bg-gray-50 flex items-center justify-center p-2 overflow-hidden">
              <img src={stampUrl} alt="Company Stamp" className="max-w-full max-h-full object-contain" />
            </div>
            <button
              type="button"
              onClick={clearStamp}
              className="absolute -top-2 -right-2 bg-red-100 text-red-600 p-1.5 rounded-full hover:bg-red-200 transition-colors shadow-sm"
              aria-label="Remove stamp"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="w-32 h-32 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center text-gray-400">
            <StampIcon className="w-8 h-8 mb-2" />
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-300 bg-white text-navy-700 font-medium hover:bg-gray-50 cursor-pointer transition-colors shadow-sm"
          >
            <Upload className="w-4 h-4" />
            {stampUrl ? "Change Stamp" : "Upload Stamp"}
          </label>
          <p className="mt-3 text-sm text-gray-500">
            Accepts PNG, JPG, or SVG up to 2MB. Stamp will be added near the signature.
          </p>
          {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
}
