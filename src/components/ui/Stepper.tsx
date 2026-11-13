import { Icon } from "@iconify/react";

interface StepperProps {
  currentStep: number;
  steps: { id: number; title: string; icon: string }[];
  onStepClick: (step: number) => void;
  completedSteps: number[];
}

export function Stepper({ currentStep, steps, onStepClick, completedSteps }: StepperProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isActive = currentStep === step.id;
          const isCompleted = completedSteps.includes(step.id);
          const isClickable = isCompleted || isActive || step.id < currentStep;

          return (
            <div key={step.id} className="flex-1 relative">
              <div className="flex flex-col items-center group">
                <button
                  type="button"
                  onClick={() => isClickable && onStepClick(step.id)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors relative z-10 ${
                    isActive
                      ? "bg-[#1166B3] text-white shadow-xs"
                      : isCompleted
                      ? "bg-[#E9F0F6] text-[#1166B3] dark:bg-[#27465F] dark:text-[#ABDAF0] cursor-pointer hover:bg-[#D9E4EC]"
                      : "bg-gray-100 text-gray-400 dark:bg-[#1B2E40] dark:text-gray-500"
                  }`}
                  disabled={!isClickable}
                >
                  {isCompleted && !isActive ? (
                    <Icon icon="solar:check-circle-bold" className="w-6 h-6" />
                  ) : (
                    <Icon icon={step.icon} className="w-5 h-5" />
                  )}
                </button>
                <span
                  className={`mt-2 text-xs font-semibold text-center hidden sm:block ${
                    isActive
                      ? "text-[#1B2E40] dark:text-white"
                      : isCompleted
                      ? "text-[#1166B3] dark:text-[#7DC0E5]"
                      : "text-gray-400 dark:text-gray-500"
                  }`}
                >
                  {step.title}
                </span>
              </div>
              
              {index < steps.length - 1 && (
                <div 
                  className={`absolute top-5 left-1/2 w-full h-[2px] -z-0 transition-colors ${
                    isCompleted ? "bg-[#1166B3]" : "bg-[#D9E4EC] dark:bg-[#27465F]"
                  }`} 
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
