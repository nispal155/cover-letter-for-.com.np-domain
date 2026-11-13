import { SEO } from "../components/SEO";
import { HeroSection } from "../components/home/HeroSection";
import { DisclaimerSection } from "../components/home/DisclaimerSection";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <SEO 
        title="Free .NP Domain Registration Letter Generator & Compressor"
        description="Generate official .np domain registration request letters in standard format and compress documents to under 200KB. Powered by Astra Technology Horizon."
        url="/"
      />
      
      <div className="min-h-screen bg-[#F5F8FC] dark:bg-[#142536] transition-colors">
        <HeroSection />

        {/* Guidelines Section */}
        <div id="guidelines" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-[#D9E4EC] dark:border-[#27465F]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E9F0F6] text-[#1166B3] dark:bg-[#27465F] dark:text-[#ABDAF0] border border-[#D9E4EC] dark:border-[#27465F] mb-3">
                Official Mercantile Standards
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B2E40] dark:text-white tracking-tight">
                .NP Domain Registration Guidelines
              </h2>
              <p className="mt-3 text-base sm:text-lg text-[#3E5A74] dark:text-[#D9E4EC] max-w-2xl mx-auto">
                Mercantile Communications Pvt. Ltd. manually reviews each application. Ensure your submission satisfies every requirement below.
              </p>
            </div>

            {/* Critical Rules Card */}
            <div className="bg-white dark:bg-[#1B2E40] p-6 sm:p-8 rounded-xl border border-[#D9E4EC] dark:border-[#27465F] mb-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#D9E4EC] dark:border-[#27465F]">
                <div className="bg-[#E9F0F6] dark:bg-[#27465F] p-2.5 rounded-lg text-[#1166B3] dark:text-[#ABDAF0]">
                  <Icon icon="solar:shield-warning-bold" className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#1B2E40] dark:text-white">Mandatory Submission Rules</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-5 text-sm">
                <div className="flex items-start gap-3">
                  <Icon icon="solar:check-circle-bold" className="w-5 h-5 text-[#1166B3] dark:text-[#7DC0E5] flex-shrink-0 mt-0.5" />
                  <p className="text-[#3E5A74] dark:text-[#D9E4EC] leading-relaxed">
                    <strong className="text-[#1B2E40] dark:text-white">Strict 200 KB Limit:</strong> Every single uploaded document (cover letter, citizenship, PAN, registration) must be strictly less than 200KB.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon icon="solar:check-circle-bold" className="w-5 h-5 text-[#1166B3] dark:text-[#7DC0E5] flex-shrink-0 mt-0.5" />
                  <p className="text-[#3E5A74] dark:text-[#D9E4EC] leading-relaxed">
                    <strong className="text-[#1B2E40] dark:text-white">Standard JPG Format:</strong> The registry accepts documents in JPG/JPEG. PDFs are not accepted on the image upload portal.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon icon="solar:check-circle-bold" className="w-5 h-5 text-[#1166B3] dark:text-[#7DC0E5] flex-shrink-0 mt-0.5" />
                  <p className="text-[#3E5A74] dark:text-[#D9E4EC] leading-relaxed">
                    <strong className="text-[#1B2E40] dark:text-white">Our Generator:</strong> Automatically structures, signs, and formats your cover letter into a compliant JPG image under 200KB.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon icon="solar:check-circle-bold" className="w-5 h-5 text-[#1166B3] dark:text-[#7DC0E5] flex-shrink-0 mt-0.5" />
                  <p className="text-[#3E5A74] dark:text-[#D9E4EC] leading-relaxed">
                    <strong className="text-[#1B2E40] dark:text-white">Short &amp; Sweet File Names:</strong> Use clean, concise file names (e.g. <code className="bg-[#E9F0F6] dark:bg-[#27465F] px-1.5 py-0.5 rounded text-xs text-[#1166B3] dark:text-[#ABDAF0] font-mono">citizenship-front.jpg</code>, <code className="bg-[#E9F0F6] dark:bg-[#27465F] px-1.5 py-0.5 rounded text-xs text-[#1166B3] dark:text-[#ABDAF0] font-mono">pan-card.jpg</code>) without spaces or messy camera codes.
                  </p>
                </div>
              </div>
            </div>

            {/* Split Comparison: Personal vs Organization */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-[#1B2E40] p-6 sm:p-7 rounded-xl border border-[#D9E4EC] dark:border-[#27465F]">
                <h3 className="text-lg font-bold text-[#1B2E40] dark:text-white mb-4 pb-3 border-b border-[#D9E4EC] dark:border-[#27465F]">
                  For Personal Domains
                </h3>
                <ul className="space-y-3.5 text-sm text-[#3E5A74] dark:text-[#D9E4EC]">
                  <li className="flex gap-3">
                    <span className="font-bold text-[#1166B3] dark:text-[#7DC0E5]">1.</span>
                    <span><strong>Required Document:</strong> Scanned copy of your Nepalese Citizenship, Passport, or Driving License (front &amp; back).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-[#1166B3] dark:text-[#7DC0E5]">2.</span>
                    <span><strong>Cover Letter:</strong> Signed personal request letter generated to official registry format.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-[#1166B3] dark:text-[#7DC0E5]">3.</span>
                    <span><strong>Domain Naming:</strong> Must directly reflect your legal name as printed on your government document.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-[#1B2E40] p-6 sm:p-7 rounded-xl border border-[#D9E4EC] dark:border-[#27465F]">
                <h3 className="text-lg font-bold text-[#1B2E40] dark:text-white mb-4 pb-3 border-b border-[#D9E4EC] dark:border-[#27465F]">
                  For Company / Organization
                </h3>
                <ul className="space-y-3.5 text-sm text-[#3E5A74] dark:text-[#D9E4EC]">
                  <li className="flex gap-3">
                    <span className="font-bold text-[#1166B3] dark:text-[#7DC0E5]">1.</span>
                    <span><strong>Company Registration:</strong> Clear scan of company incorporation certificate.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-[#1166B3] dark:text-[#7DC0E5]">2.</span>
                    <span><strong>Tax Certificate:</strong> Scanned copy of PAN or VAT certificate.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-[#1166B3] dark:text-[#7DC0E5]">3.</span>
                    <span><strong>Official Cover Letter:</strong> Printed on company letterhead, stamped with official rubber seal, and signed.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-[#1166B3] dark:text-[#7DC0E5]">4.</span>
                    <span><strong>Domain Naming:</strong> Must exact match or logically abbreviate the registered entity name.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Note on Processing Times */}
            <div className="bg-[#E9F0F6] dark:bg-[#1B2E40] p-5 rounded-xl border border-[#D9E4EC] dark:border-[#27465F] flex items-start gap-3.5 mb-14">
              <Icon icon="solar:info-circle-bold" className="w-5 h-5 text-[#1166B3] dark:text-[#ABDAF0] flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-[#142536] dark:text-[#D9E4EC] leading-relaxed">
                <span className="font-bold text-[#1B2E40] dark:text-white">Registry Processing Note: </span>
                Applications are reviewed during Kathmandu business hours by Mercantile Communications Pvt. Ltd. Approval typically takes 1 to 3 business days if all documents meet size and format criteria.
              </div>
            </div>

            {/* Compressor Promo Banner (Engineered, Human Design) */}
            <div className="bg-[#1B2E40] text-white rounded-xl p-8 sm:p-10 border border-[#27465F] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ABDAF0] uppercase tracking-wider">
                  <Icon icon="solar:minimize-square-3-bold" className="w-4 h-4 text-[#ABDAF0]" />
                  Astra Browser Utility
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Need to compress your citizenship or PAN card?
                </h3>
                <p className="text-sm text-[#D9E4EC] max-w-xl">
                  Resize high-resolution phone scans to under 200KB in standard JPG format. 100% private, runs entirely inside your browser.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link
                  to="/compress"
                  className="inline-flex items-center gap-2 bg-[#1166B3] hover:bg-[#0e5494] text-white px-6 py-3.5 rounded-lg font-semibold text-sm transition-colors shadow-xs"
                >
                  Open Image Compressor
                  <Icon icon="solar:arrow-right-linear" className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        <DisclaimerSection />
      </div>
    </>
  );
}
