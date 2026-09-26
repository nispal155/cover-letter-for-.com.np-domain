import { useFormContext } from "react-hook-form";
import { FormField } from "../ui/FormField";
import { TextareaField } from "../ui/TextareaField";
import type { DomainLetterFormData } from "../../types";

export function CompanyDetails() {
  const {
    register,
    formState: { errors },
  } = useFormContext<DomainLetterFormData>();

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-200">
      <h2 className="text-xl font-bold text-navy-900 mb-6">Company Information</h2>
      <div className="space-y-6">
        <FormField
          label="Company Name"
          placeholder="e.g. Astra Technology Horizon Pvt. Ltd."
          required
          maxLength={200}
          {...register("companyName")}
          error={errors.companyName?.message}
        />
        
        <TextareaField
          label="Company Address"
          placeholder="e.g. Itahari-4, Sunsari, Nepal"
          required
          rows={3}
          maxLength={300}
          {...register("companyAddress")}
          error={errors.companyAddress?.message}
        />
        
        <FormField
          label="Company Tagline (Optional)"
          placeholder="e.g. Innovating the Future"
          maxLength={100}
          {...register("companyTagline")}
          error={errors.companyTagline?.message}
        />
      </div>
    </div>
  );
}
