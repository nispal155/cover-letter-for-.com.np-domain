import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export function HeroSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-teal-50 text-teal-600 rounded-2xl mb-4">
          <Icon icon="solar:document-bold-duotone" className="w-8 h-8" />
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 tracking-tight mb-4">
          Generate Your .NP Domain <br className="hidden sm:block" />
          <span className="text-amber-600">Registration Letter</span>
        </h1>
        <p className="mt-4 text-xl text-navy-600 max-w-2xl mx-auto mb-6">
          Create a professional domain registration request letter for Nepal in just a few steps.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/generate"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all shadow-sm hover:shadow-md"
          >
            Create Letter
            <Icon icon="solar:arrow-right-linear" className="w-5 h-5" />
          </Link>
        </div>
        <p className="mt-6 text-sm text-navy-500 font-medium">
          Free, simple and browser-based. No account required.
        </p>
      </div>
    </section>
  );
}
