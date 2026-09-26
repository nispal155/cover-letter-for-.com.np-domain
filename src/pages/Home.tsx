import { HeroSection } from "../components/home/HeroSection";
import { StepsSection } from "../components/home/StepsSection";
import { DisclaimerSection } from "../components/home/DisclaimerSection";
import { CheckCircle2, FileWarning, HelpCircle } from "lucide-react";

export default function Home() {
  return (
    <div>
      <HeroSection />
      
      <div id="how-it-works">
        <StepsSection />
      </div>

      <div id="guidelines" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">
              .NP Domain Registration Guidelines
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know to successfully register a free .np domain in Nepal. Ensure you follow these strict rules to avoid rejection.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-100 p-2 rounded-lg text-red-600">
                <FileWarning className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Critical Document Rules</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p><strong>Strict File Size Limit:</strong> Every single uploaded document (including the cover letter, citizenship, PAN, etc.) <strong>must be less than 200KB</strong>.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p><strong>Allowed Formats:</strong> The official registry only accepts images in <strong>JPG or PNG format</strong>. PDFs are typically not accepted for direct uploads.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p><strong>Our Tool:</strong> Our generator automatically scales and compresses your cover letter to ensure it downloads as a JPG image completely under the 200KB limit.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">For Personal Domains</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">1.</span>
                  <span><strong>Required Document:</strong> A scanned copy of your Nepalese Citizenship, Passport, or Driving License. Both front and back sides are highly recommended.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">2.</span>
                  <span><strong>Cover Letter:</strong> A signed personal request letter (you can generate this using our tool).</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">3.</span>
                  <span><strong>Domain Naming:</strong> The domain name MUST perfectly match your actual name as printed on your citizenship. You cannot register random words for a personal domain.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">For Company / Organization</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">1.</span>
                  <span><strong>Required Document:</strong> A scanned copy of your Company Registration Certificate.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">2.</span>
                  <span><strong>Tax Document:</strong> A scanned copy of the company's PAN or VAT certificate.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">3.</span>
                  <span><strong>Cover Letter:</strong> An official cover letter printed on the company letterhead, stamped, and signed by an authorized person.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">4.</span>
                  <span><strong>Domain Naming:</strong> The domain name must be an exact match or a highly relevant abbreviation of the registered company name.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex items-start gap-4">
            <HelpCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div className="text-sm text-blue-900">
              <p className="font-bold mb-1">Important Note on Processing Times</p>
              <p>.NP domain registrations are manually reviewed by Mercantile Communications Pvt. Ltd. If your documents are correct and under 200KB, approval typically takes 1 to 3 business days. If rejected, you will need to re-submit with corrected documents.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Compressor Promo Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 sm:p-12 text-center text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Need to compress your citizenship or PAN card?
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Our free browser-native image compressor instantly resizes your document scans to under 200KB for .NP domain registration. No server uploads, 100% private.
            </p>
            <div className="pt-4">
              <a href="/compress" className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-4 rounded-xl transition-colors shadow-sm">
                Open Image Compressor
              </a>
            </div>
          </div>
        </div>
      </div>

      <DisclaimerSection />
    </div>
  );
}
