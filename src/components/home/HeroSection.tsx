import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export function HeroSection() {
  return (
    <section id="hero" className="bg-[#1B2E40] text-white py-16 sm:py-24 border-b border-[#27465F] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Subdued Astra Horizon Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#27465F]/60 border border-[#7DC0E5]/20 text-[#ABDAF0] text-xs font-semibold tracking-wide uppercase mb-6">
          <Icon icon="solar:star-fall-minimalistic-2-bold" className="w-3.5 h-3.5 text-[#ABDAF0]" />
          Astra Technology Horizon Utility
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 leading-tight">
          Generate Your .NP Domain <br className="hidden sm:inline" />
          <span className="text-[#ABDAF0]">Registration Request Letter</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-[#D9E4EC] max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
          Create a correctly formatted, compliant domain request letter for Mercantile Communications in seconds. Browser-based and completely private.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <Link
            to="/generate"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1166B3] hover:bg-[#0e5494] text-white px-7 py-3.5 rounded-lg font-semibold text-base transition-colors shadow-sm min-h-[44px]"
          >
            Create Your Letter
            <Icon icon="solar:arrow-right-linear" className="w-5 h-5" />
          </Link>
          <Link
            to="/compress"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#27465F]/80 hover:bg-[#27465F] text-[#F5F8FC] border border-[#7DC0E5]/30 px-6 py-3.5 rounded-lg font-semibold text-base transition-colors min-h-[44px]"
          >
            <Icon icon="solar:minimize-square-3-bold-duotone" className="w-5 h-5 text-[#ABDAF0]" />
            Compress Documents &lt; 200KB
          </Link>
        </div>

        <p className="mt-7 text-xs text-[#ABDAF0]/80 font-medium">
          100% Client-Side Processing • No Server Uploads • Free for Individuals &amp; Businesses
        </p>
      </div>
    </section>
  );
}
