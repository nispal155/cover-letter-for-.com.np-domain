import { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { domainLetterSchema } from "../../schemas/domainLetterSchema";
import type { DomainLetterFormData } from "../../types";
import { useLocalStorage, STORAGE_KEY } from "../../hooks/useLocalStorage";

import { CompanyDetails } from "./CompanyDetails";
import { DomainDetails } from "./DomainDetails";
import { ApplicantDetails } from "./ApplicantDetails";
import { ContactDetails } from "./ContactDetails";
import { PurposeSelector } from "./PurposeSelector";
import { LogoUploader } from "./LogoUploader";

import { StampUploader } from "./StampUploader";

const defaultValues: DomainLetterFormData = {
  registrationType: "company",
  companyName: "",
  companyAddress: "",
  domainName: "",
  domainExtension: ".com.np",
  applicantName: "",
  designation: "",
  purpose: "official-website",
  logo: "",
  stamp: "",
  companyTagline: "",
  email: "",
  phone: "",
};

interface DomainFormProps {
  onFormChange: (data: DomainLetterFormData) => void;
  onValidationChange: (isValid: boolean) => void;
  externalResetFlag: number;
}

export function DomainForm({ onFormChange, onValidationChange, externalResetFlag }: DomainFormProps) {
  const [storedData, setStoredData, removeStoredData] = useLocalStorage<DomainLetterFormData>(
    STORAGE_KEY,
    defaultValues
  );

  const methods = useForm<DomainLetterFormData>({
    resolver: zodResolver(domainLetterSchema),
    defaultValues: storedData,
    mode: "onChange",
  });

  const { watch, formState, reset } = methods;
  const registrationType = watch("registrationType");

  // Watch for external resets
  useEffect(() => {
    if (externalResetFlag > 0) {
      removeStoredData();
      reset({ ...defaultValues });
    }
  }, [externalResetFlag, reset, removeStoredData]);

  // Watch for form changes to update parent and local storage
  useEffect(() => {
    const subscription = watch((value) => {
      // Create a valid data object to pass up
      const data = value as DomainLetterFormData;
      onFormChange(data);
      // Save to local storage (debounced via the hook/effect nature)
      setStoredData(data);
    });
    return () => subscription.unsubscribe();
  }, [watch, onFormChange, setStoredData]);

  // Inform parent of validation status
  useEffect(() => {
    onValidationChange(formState.isValid);
  }, [formState.isValid, onValidationChange]);

  // Initial trigger to populate parent
  useEffect(() => {
    onFormChange(methods.getValues());
    if (storedData.companyName || storedData.applicantName) {
      methods.trigger();
    }
  }, []);

  return (
    <FormProvider {...methods}>
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Registration Type</h2>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                value="company" 
                className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                {...methods.register("registrationType")}
              />
              <span className="text-sm font-medium text-gray-700">Company / Organization</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                value="personal" 
                className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                {...methods.register("registrationType")}
              />
              <span className="text-sm font-medium text-gray-700">Personal Use</span>
            </label>
          </div>
        </div>

        {registrationType === 'company' && <CompanyDetails />}
        <DomainDetails />
        <ApplicantDetails />
        <PurposeSelector />
        <ContactDetails />
        {registrationType === 'company' && (
          <>
            <LogoUploader />
            <StampUploader />
          </>
        )}
      </form>
    </FormProvider>
  );
}
