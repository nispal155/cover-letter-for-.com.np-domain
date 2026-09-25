import { useFormContext } from "react-hook-form";
import { FormField } from "../ui/FormField";
import { SelectField } from "../ui/SelectField";
import { DOMAIN_PURPOSES } from "../../constants";
import type { DomainLetterFormData } from "../../types";

export function PurposeSelector() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<DomainLetterFormData>();

  const selectedPurpose = watch("purpose");

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-200">
      <h2 className="text-xl font-bold text-navy-900 mb-6">Domain Purpose</h2>
      <div className="space-y-6">
        <SelectField
          label="Purpose of Domain"
          required
          options={DOMAIN_PURPOSES}
          {...register("purpose")}
          error={errors.purpose?.message}
        />
        
        {selectedPurpose === "other" && (
          <div className="animate-in fade-in slide-in-from-top-2 duration-200">
            <FormField
              label="Enter custom purpose"
              placeholder="e.g. host our internal inventory management system"
              required
              {...register("customPurpose")}
              error={errors.customPurpose?.message}
            />
          </div>
        )}
      </div>
    </div>
  );
}
