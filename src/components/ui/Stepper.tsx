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
                      ? "bg-teal-600 text-white shadow-md shadow-teal-500/30"
                      : isCompleted
                      ? "bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400 cursor-pointer hover:bg-teal-200"
                      : "bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500"
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
                  className={`mt-2 text-xs font-medium text-center hidden sm:block ${
                    isActive
                      ? "text-navy-900 dark:text-white"
                      : isCompleted
                      ? "text-teal-600 dark:text-teal-400"
                      : "text-gray-400 dark:text-gray-500"
                  }`}
                >
                  {step.title}
                </span>
              </div>
              
              {index < steps.length - 1 && (
                <div 
                  className={`absolute top-5 left-1/2 w-full h-[2px] -z-0 transition-colors ${
                    isCompleted ? "bg-teal-500" : "bg-gray-200 dark:bg-gray-700"
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
