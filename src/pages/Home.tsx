import { HeroSection } from "../components/home/HeroSection";
import { DisclaimerSection } from "../components/home/DisclaimerSection";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/ui/Reveal";
import { SEO } from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO 
        title="Free .NP Domain Cover Letter Generator & Image Compressor"
        description="Generate perfectly formatted cover letters and compress citizenship/PAN images for .com.np domain registration in Nepal. Free, instant, and 100% private."
        url="/"
      />
      <div>
        <HeroSection />

      <div id="guidelines" className="bg-gray-50 dark:bg-[#0A0F1C] py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800 transition-colors">
        <div className="max-w-4xl mx-auto space-y-10">
          <Reveal>
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 dark:text-white tracking-tight">
              .NP Domain Registration Guidelines
            </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Everything you need to know to successfully register a free .np domain in Nepal. Ensure you follow these strict rules to avoid rejection.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg text-red-600 dark:text-red-400">
                  <Icon icon="solar:danger-triangle-bold-duotone" className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Critical Document Rules</h3>
              </div>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-3">
                <Icon icon="solar:check-circle-bold-duotone" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p><strong>Strict File Size Limit:</strong> Every single uploaded document (including the cover letter, citizenship, PAN, etc.) <strong>must be less than 200KB</strong>.</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon icon="solar:check-circle-bold-duotone" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p><strong>Allowed Formats:</strong> The official registry only accepts images in <strong>JPG or PNG format</strong>. PDFs are typically not accepted for direct uploads.</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon icon="solar:check-circle-bold-duotone" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p><strong>Our Tool:</strong> Our generator automatically scales and compresses your cover letter to ensure it downloads as a JPG image completely under the 200KB limit.</p>
              </div>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={0.2} width="100%">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 h-full">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b dark:border-gray-800 pb-4">For Personal Domains</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="font-bold text-teal-600">1.</span>
                  <span><strong>Required Document:</strong> A scanned copy of your Nepalese Citizenship, Passport, or Driving License. Both front and back sides are highly recommended.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-teal-600 dark:text-teal-400">2.</span>
                    <span><strong>Cover Letter:</strong> A signed personal request letter (you can generate this using our tool).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-teal-600 dark:text-teal-400">3.</span>
                  <span><strong>Domain Naming:</strong> The domain name MUST perfectly match your actual name as printed on your citizenship. You cannot register random words for a personal domain.</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.3} width="100%">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 h-full">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b dark:border-gray-800 pb-4">For Company / Organization</h3>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="flex gap-3">
                    <span className="font-bold text-teal-600 dark:text-teal-400">1.</span>
                  <span><strong>Required Document:</strong> A scanned copy of your Company Registration Certificate.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-teal-600 dark:text-teal-400">2.</span>
                    <span><strong>Tax Document:</strong> A scanned copy of the company's PAN or VAT certificate.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-teal-600 dark:text-teal-400">3.</span>
                  <span><strong>Cover Letter:</strong> An official cover letter printed on the company letterhead, stamped, and signed by an authorized person.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-teal-600 dark:text-teal-400">4.</span>
                    <span><strong>Domain Naming:</strong> The domain name must be an exact match or a highly relevant abbreviation of the registered company name.</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.4}>
            <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-100 dark:border-teal-900/50 flex items-start gap-4">
              <Icon icon="solar:question-circle-bold-duotone" className="w-6 h-6 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-1" />
              <div className="text-sm text-teal-900 dark:text-teal-100">
              <p className="font-bold mb-1">Important Note on Processing Times</p>
              <p>.NP domain registrations are manually reviewed by Mercantile Communications Pvt. Ltd. If your documents are correct and under 200KB, approval typically takes 1 to 3 business days. If rejected, you will need to re-submit with corrected documents.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Compressor Promo Section */}
      <div className="bg-white dark:bg-[#0A0F1C] py-16 px-4 sm:px-6 lg:px-8 transition-colors">
        <Reveal>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-teal-600 to-teal-800 dark:from-teal-800 dark:to-teal-950 rounded-3xl p-8 sm:p-12 text-center text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Need to compress your citizenship or PAN card?
            </h2>
            <p className="text-teal-100 text-lg max-w-2xl mx-auto">
              Our free browser-native image compressor instantly resizes your document scans to under 200KB for .NP domain registration. No server uploads, 100% private.
            </p>
              <div className="pt-4">
                <Link to="/compress" className="inline-block bg-white dark:bg-gray-900 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-gray-800 font-bold px-8 py-4 rounded-xl transition-colors shadow-sm">
                  Open Image Compressor
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <DisclaimerSection />
      </div>
    </>
  );
}
