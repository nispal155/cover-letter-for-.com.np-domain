import { useFormContext } from "react-hook-form";
import { FormField } from "../ui/FormField";
import type { DomainLetterFormData } from "../../types";

export function ApplicantDetails() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<DomainLetterFormData>();

  const registrationType = watch("registrationType");

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-200">
      <h2 className="text-xl font-bold text-navy-900 mb-6">Authorized Person</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormField
          label="Full Name"
          placeholder="e.g. Nispal Bhattarai"
          required
          maxLength={100}
          {...register("applicantName")}
          error={errors.applicantName?.message}
        />
        
        {registrationType === "company" && (
          <FormField
            label="Designation"
            placeholder="e.g. CEO"
            required
            maxLength={100}
            {...register("designation")}
            error={errors.designation?.message}
          />
        )}
      </div>
    </div>
  );
}
