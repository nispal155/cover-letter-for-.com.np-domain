import { Icon } from "@iconify/react";
import { Reveal } from "../ui/Reveal";

export function DisclaimerSection() {
  return (
    <section className="py-12 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 transition-colors">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex justify-center">
        <Reveal>
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center justify-center p-2 bg-gray-50 dark:bg-gray-800 rounded-full mb-4 border border-gray-200 dark:border-gray-700">
              <Icon icon="solar:info-circle-bold-duotone" className="w-5 h-5 text-navy-500 dark:text-slate-400" />
            </div>
            <p className="text-navy-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              <strong className="text-navy-900 dark:text-slate-200">Disclaimer:</strong> This tool generates a request letter. Domain registration and approval are handled by the official .NP Domain Registry.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
