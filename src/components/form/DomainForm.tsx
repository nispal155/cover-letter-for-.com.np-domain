import { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { domainLetterSchema } from "../../schemas/domainLetterSchema";
import type { DomainLetterFormData } from "../../types";
import { useLocalStorage, STORAGE_KEY } from "../../hooks/useLocalStorage";
import { safeParseFormData } from "../../utils/safeParseFormData";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

import { CompanyDetails } from "./CompanyDetails";
import { DomainDetails } from "./DomainDetails";
import { ApplicantDetails } from "./ApplicantDetails";
import { ContactDetails } from "./ContactDetails";
import { PurposeSelector } from "./PurposeSelector";
import { LogoUploader } from "./LogoUploader";
import { StampUploader } from "./StampUploader";
import { Stepper } from "../ui/Stepper";

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
    defaultValues: safeParseFormData(storedData, defaultValues),
    mode: "onChange",
  });

  const { watch, formState, reset, trigger } = methods;
  const registrationType = watch("registrationType");

  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const totalSteps = registrationType === "company" ? 3 : 2;

  const steps = [
    { id: 1, title: "Domain Info", icon: "solar:planet-bold-duotone" },
    { id: 2, title: "Applicant Details", icon: "solar:user-id-bold-duotone" },
    ...(registrationType === "company" ? [{ id: 3, title: "Company Assets", icon: "solar:gallery-bold-duotone" }] : [])
  ];

  // Watch for external resets
  useEffect(() => {
    if (externalResetFlag > 0) {
      removeStoredData();
      reset({ ...defaultValues });
      setCurrentStep(1);
      setCompletedSteps([]);
    }
  }, [externalResetFlag, reset, removeStoredData]);

  // Watch for form changes to update parent and local storage
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const subscription = watch((value) => {
      // Create a valid data object to pass up
      const data = value as DomainLetterFormData;
      onFormChange(data);
      
      // Debounce saving to local storage
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        // Exclude logo/stamp from localStorage to prevent quota issues
        const { logo, stamp, ...textData } = data;
        setStoredData(textData as DomainLetterFormData);
      }, 500);
    });
    return () => {
      subscription.unsubscribe();
      clearTimeout(timeoutId);
    };
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
  }, [methods, onFormChange, storedData.companyName, storedData.applicantName]);

  const handleNext = async () => {
    let fieldsToValidate: (keyof DomainLetterFormData)[] = [];
    if (currentStep === 1) {
      fieldsToValidate = ["registrationType", "domainName", "domainExtension"];
      if (registrationType === "company") {
        fieldsToValidate.push("companyName", "companyAddress");
      }
    } else if (currentStep === 2) {
      fieldsToValidate = ["applicantName", "designation", "purpose", "email", "phone"];
    }

    const isStepValid = await trigger(fieldsToValidate);
    
    if (isStepValid) {
      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps([...completedSteps, currentStep]);
      }
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <FormProvider {...methods}>
      <div className="bg-white dark:bg-[#0A0F1C] p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-[#1a2333] transition-colors relative">
        <Stepper 
          currentStep={currentStep} 
          steps={steps} 
          onStepClick={(step) => setCurrentStep(step)} 
          completedSteps={completedSteps} 
        />
        
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800 transition-colors">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Registration Type</h2>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        value="company" 
                        className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 dark:border-gray-600 dark:bg-gray-800"
                        {...methods.register("registrationType")}
                      />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Company / Organization</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        value="personal" 
                        className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 dark:border-gray-600 dark:bg-gray-800"
                        {...methods.register("registrationType")}
                      />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Personal Use</span>
                    </label>
                  </div>
                </div>

                {registrationType === 'company' && <CompanyDetails />}
                <DomainDetails />
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <ApplicantDetails />
                <PurposeSelector />
                <ContactDetails />
              </motion.div>
            )}

            {currentStep === 3 && registrationType === 'company' && (
              <motion.div
                key="step3"
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <LogoUploader />
                <StampUploader />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Stepper Navigation Buttons */}
          <div className="flex justify-between pt-6 border-t border-gray-200 dark:border-gray-800 mt-8">
            <button
              type="button"
              onClick={handlePrev}
              className={`px-6 py-2.5 rounded-lg font-medium text-sm flex items-center gap-2 transition-colors ${
                currentStep === 1 
                  ? "text-gray-400 bg-gray-100 cursor-not-allowed dark:bg-gray-800 dark:text-gray-600" 
                  : "text-navy-700 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-slate-300 dark:hover:bg-gray-700"
              }`}
              disabled={currentStep === 1}
            >
              <Icon icon="solar:alt-arrow-left-linear" className="w-4 h-4" />
              Previous
            </button>

            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2.5 rounded-lg font-medium text-sm flex items-center gap-2 bg-teal-600 text-white hover:bg-teal-700 transition-colors shadow-sm"
              >
                Next Step
                <Icon icon="solar:alt-arrow-right-linear" className="w-4 h-4" />
              </button>
            ) : (
              <div className="px-6 py-2.5 rounded-lg font-medium text-sm flex items-center gap-2 bg-green-500 text-white shadow-sm opacity-50">
                <Icon icon="solar:check-circle-bold" className="w-4 h-4" />
                Form Complete
              </div>
            )}
          </div>
        </form>
      </div>
    </FormProvider>
  );
}
