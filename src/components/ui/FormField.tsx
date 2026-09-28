import React from "react";
import { useActiveField } from "../../context/ActiveFieldContext";

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, required, className = "", onFocus, onBlur, name, ...props }, ref) => {
    const context = useActiveField();
    const setActiveField = context.setActiveField;

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      if (name) setActiveField(name);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setActiveField(null);
      onBlur?.(e);
    };

    return (
      <div className={`w-full ${className}`}>
        <label className="block text-sm font-medium text-navy-700 dark:text-gray-300 mb-1.5 transition-colors">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
          ref={ref}
          name={name}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`w-full px-4 py-2.5 rounded-lg border ${
            error
              ? "border-red-300 focus:ring-red-500 focus:border-red-500 dark:border-red-500/50"
              : "border-gray-300 focus:ring-teal-500 focus:border-teal-500 dark:border-gray-600 dark:focus:border-teal-500 dark:focus:ring-teal-500/50"
          } shadow-sm focus:outline-none focus:ring-2 transition-shadow bg-white dark:bg-gray-800 text-navy-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500`}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm text-red-500 dark:text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

FormField.displayName = "FormField";

