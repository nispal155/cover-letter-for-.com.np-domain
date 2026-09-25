import { useFormContext } from "react-hook-form";
import { FormField } from "../ui/FormField";
import type { DomainLetterFormData } from "../../types";

export function ContactDetails() {
  const {
    register,
    formState: { errors },
  } = useFormContext<DomainLetterFormData>();

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-200">
      <h2 className="text-xl font-bold text-navy-900 mb-6">Contact Information (Optional)</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. contact@astratech.com.np"
          {...register("email")}
          error={errors.email?.message}
        />
        
        <FormField
          label="Phone Number"
          placeholder="e.g. +977-1-4XXXXXX"
          {...register("phone")}
          error={errors.phone?.message}
        />
      </div>
    </div>
  );
}
