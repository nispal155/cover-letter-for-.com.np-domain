import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";

export default function About() {
  return (
    <>
      <SEO 
        title="About Us — Astra Technology Horizon"
        description="Learn about Astra Technology Horizon (Itahari, Nepal) and why we created the NP Domain Letter Generator to simplify .NP domain registration in Nepal."
        url="/about"
      />
      <div className="bg-[#F5F8FC] dark:bg-[#142536] min-h-screen py-16 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E9F0F6] text-[#1166B3] dark:bg-[#27465F] dark:text-[#ABDAF0] border border-[#D9E4EC] dark:border-[#27465F] mb-3">
            Astra Technology Horizon • Itahari, Nepal
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1B2E40] dark:text-white tracking-tight mb-3">
            About This Utility
          </h1>
          <p className="text-base sm:text-lg text-[#3E5A74] dark:text-[#D9E4EC] max-w-2xl mx-auto">
            Simplifying the .NP domain registration process for individuals and businesses across Nepal.
          </p>
        </div>

        <div className="bg-white dark:bg-[#1B2E40] rounded-xl border border-[#D9E4EC] dark:border-[#27465F] overflow-hidden mb-10">
          <div className="p-7 sm:p-10">
            <h2 className="text-xl font-bold text-[#1B2E40] dark:text-white mb-4">Our Purpose</h2>
            <div className="space-y-3.5 text-sm sm:text-base text-[#3E5A74] dark:text-[#D9E4EC] leading-relaxed">
              <p>
                Registering a free <strong className="text-[#1B2E40] dark:text-white">.com.np</strong> or official .NP domain is a tremendous national service provided by Mercantile Communications Pvt. Ltd. However, many applicants experience delays or rejections due to strict 200KB upload limits and manual cover letter verification guidelines.
              </p>
              <p>
                To eliminate that friction, <strong className="text-[#1B2E40] dark:text-white">Astra Technology Horizon</strong> engineered this free, open client-side utility. It generates properly formatted, signed cover letters and compresses photos/scans to fit under 200KB—instantly, right in your browser.
              </p>
            </div>
          </div>
          <div className="bg-[#E9F0F6] dark:bg-[#27465F]/40 p-6 sm:p-8 border-t border-[#D9E4EC] dark:border-[#27465F]">
            <h3 className="text-base font-bold text-[#1B2E40] dark:text-white mb-2">Our Mission</h3>
            <p className="text-sm text-[#3E5A74] dark:text-[#D9E4EC] leading-relaxed">
              Empower Nepali developers, students, creators, and entrepreneurs to establish their presence on the web with dependable tools that uphold privacy and simplicity.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white dark:bg-[#1B2E40] p-6 sm:p-7 rounded-xl border border-[#D9E4EC] dark:border-[#27465F]">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="bg-[#E9F0F6] dark:bg-[#27465F] p-2.5 rounded-lg text-[#1166B3] dark:text-[#ABDAF0]">
                <Icon icon="solar:buildings-bold" className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#1B2E40] dark:text-white">Engineered in Itahari</h3>
            </div>
            <p className="text-sm text-[#3E5A74] dark:text-[#D9E4EC] leading-relaxed mb-4">
              Built and maintained by <strong>Astra Technology Horizon</strong>, located in <strong>Itahari, Nepal</strong>. We craft reliable digital systems, modern web tools, and thoughtful software experiences.
            </p>
            <a 
              href="https://astratech.com.np" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#1166B3] dark:text-[#7DC0E5] font-semibold text-xs sm:text-sm hover:underline inline-flex items-center gap-1"
            >
              astratech.com.np
              <Icon icon="solar:arrow-right-up-linear" className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="bg-white dark:bg-[#1B2E40] p-6 sm:p-7 rounded-xl border border-[#D9E4EC] dark:border-[#27465F]">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="bg-[#E9F0F6] dark:bg-[#27465F] p-2.5 rounded-lg text-[#1166B3] dark:text-[#ABDAF0]">
                <Icon icon="solar:shield-check-bold" className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#1B2E40] dark:text-white">Zero Server Data Storage</h3>
            </div>
            <p className="text-sm text-[#3E5A74] dark:text-[#D9E4EC] leading-relaxed mb-4">
              Citizenship cards and registration documents contain sensitive personal data. Every calculation, PDF/JPG render, and compression happens locally on your device.
            </p>
            <Link 
              to="/privacy" 
              className="text-[#1166B3] dark:text-[#7DC0E5] font-semibold text-xs sm:text-sm hover:underline inline-flex items-center gap-1"
            >
              Review Privacy Standards
              <Icon icon="solar:arrow-right-linear" className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
