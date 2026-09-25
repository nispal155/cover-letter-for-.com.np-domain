import React from "react";

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, required, className = "", ...props }, ref) => {
    return (
      <div className={`w-full ${className}`}>
        <label className="block text-sm font-medium text-navy-700 mb-1.5">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
          ref={ref}
          className={`w-full px-4 py-2.5 rounded-lg border ${
            error
              ? "border-red-300 focus:ring-red-500 focus:border-red-500"
              : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          } shadow-sm focus:outline-none focus:ring-2 transition-shadow bg-white text-navy-900 placeholder-gray-400`}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

FormField.displayName = "FormField";
