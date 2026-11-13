import { Icon } from "@iconify/react";

export function DisclaimerSection() {
  return (
    <section className="py-10 bg-[#F5F8FC] dark:bg-[#142536] border-t border-[#D9E4EC] dark:border-[#27465F] transition-colors">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center justify-center p-2 bg-white dark:bg-[#1B2E40] rounded-full mb-3 border border-[#D9E4EC] dark:border-[#27465F] shadow-2xs">
            <Icon icon="solar:info-circle-bold" className="w-4 h-4 text-[#5C768D] dark:text-[#ABDAF0]" />
          </div>
          <p className="text-[#3E5A74] dark:text-[#D9E4EC] text-xs sm:text-sm leading-relaxed max-w-2xl">
            <strong className="text-[#1B2E40] dark:text-white font-semibold">Important Disclaimer:</strong> This application is an independent client-side utility engineered by Astra Technology Horizon to generate letters and optimize scans. Official domain registration and policy verification are administered solely by Mercantile Communications Pvt. Ltd.
          </p>
        </div>
      </div>
    </section>
  );
}
