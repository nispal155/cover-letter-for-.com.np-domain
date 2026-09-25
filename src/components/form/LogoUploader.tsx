import { useState, useRef } from "react";
import type { ChangeEvent } from "react";
import { useFormContext } from "react-hook-form";
import { Upload, X, Image as ImageIcon } from "lucide-react";
import type { DomainLetterFormData } from "../../types";

export function LogoUploader() {
  const { setValue, watch } = useFormContext<DomainLetterFormData>();
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const logoUrl = watch("logo");

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
        setValue("logo", event.target.result as string, {
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

  const clearLogo = () => {
    setValue("logo", undefined, { shouldValidate: true, shouldDirty: true });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-200">
      <h2 className="text-xl font-bold text-navy-900 mb-6">Company Logo (Optional)</h2>
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        {logoUrl ? (
          <div className="relative group">
            <div className="w-32 h-32 rounded-lg border border-gray-200 bg-gray-50 flex items-center justify-center p-2 overflow-hidden">
              <img src={logoUrl} alt="Company Logo" className="max-w-full max-h-full object-contain" />
            </div>
            <button
              type="button"
              onClick={clearLogo}
              className="absolute -top-2 -right-2 bg-red-100 text-red-600 p-1.5 rounded-full hover:bg-red-200 transition-colors shadow-sm"
              aria-label="Remove logo"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="w-32 h-32 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center text-gray-400">
            <ImageIcon className="w-8 h-8 mb-2" />
            <span className="text-xs font-medium">No logo</span>
          </div>
        )}
        
        <div className="flex-1">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".png,.jpg,.jpeg,.svg"
            className="hidden"
            id="logo-upload"
          />
          <label
            htmlFor="logo-upload"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-300 bg-white text-navy-700 font-medium hover:bg-gray-50 cursor-pointer transition-colors shadow-sm"
          >
            <Upload className="w-4 h-4" />
            {logoUrl ? "Change Logo" : "Upload Logo"}
          </label>
          <p className="mt-3 text-sm text-gray-500">
            Accepts PNG, JPG, or SVG up to 2MB. Logo will be processed locally in your browser.
          </p>
          {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
}
