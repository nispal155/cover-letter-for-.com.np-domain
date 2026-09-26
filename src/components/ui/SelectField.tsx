import React from "react";
import { useActiveField } from "../../context/ActiveFieldContext";

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  required?: boolean;
  options: { value: string; label: string }[];
}

export const SelectField = React.forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ label, error, required, options, className = "", onFocus, onBlur, name, ...props }, ref) => {
    let setActiveField = (_val: string | null) => {};
    try {
      const context = useActiveField();
      setActiveField = context.setActiveField;
    } catch (e) {
      // Ignore if outside provider
    }

    const handleFocus = (e: React.FocusEvent<HTMLSelectElement>) => {
      if (name) setActiveField(name);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
      setActiveField(null);
      onBlur?.(e);
    };

    return (
      <div className={`w-full ${className}`}>
        {label && (
          <label className="block text-sm font-medium text-navy-700 dark:text-gray-300 mb-1.5 transition-colors">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        )}
        <select
          ref={ref}
          name={name}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`w-full px-4 py-2.5 rounded-lg border appearance-none bg-no-repeat ${
            error
              ? "border-red-300 focus:ring-red-500 focus:border-red-500 dark:border-red-500/50"
              : "border-gray-300 focus:ring-teal-500 focus:border-teal-500 dark:border-gray-600 dark:focus:border-teal-500 dark:focus:ring-teal-500/50"
          } shadow-sm focus:outline-none focus:ring-2 transition-shadow bg-white dark:bg-gray-800 text-navy-900 dark:text-white`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
            backgroundPosition: "right 0.5rem center",
            backgroundSize: "1.5em 1.5em",
            paddingRight: "2.5rem",
          }}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="mt-1.5 text-sm text-red-500 dark:text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

SelectField.displayName = "SelectField";

