import { useFormContext } from "react-hook-form";
import { FormField } from "../ui/FormField";
import { SelectField } from "../ui/SelectField";
import { DOMAIN_EXTENSIONS } from "../../constants";
import type { DomainLetterFormData } from "../../types";

export function DomainDetails() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<DomainLetterFormData>();

  const domainName = watch("domainName") || "";
  const domainExtension = watch("domainExtension") || ".com.np";
  const fullDomain = domainName ? `${domainName}${domainExtension}` : "";

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-200">
      <h2 className="text-xl font-bold text-navy-900 mb-6">Domain Information</h2>
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <div className="w-full sm:flex-1">
            <FormField
              label="Domain Name"
              placeholder="e.g. astratech"
              required
              {...register("domainName")}
              error={errors.domainName?.message}
            />
          </div>
          <div className="w-full sm:w-48">
            <SelectField
              label="Extension"
              options={DOMAIN_EXTENSIONS}
              {...register("domainExtension")}
              error={errors.domainExtension?.message}
            />
          </div>
        </div>
        
        {fullDomain && !errors.domainName && (
          <div className="bg-blue-50 text-blue-800 p-4 rounded-lg flex items-center justify-between">
            <span className="text-sm font-medium">Selected Domain:</span>
            <span className="font-bold">{fullDomain.toLowerCase()}</span>
          </div>
        )}
      </div>
    </div>
  );
}
