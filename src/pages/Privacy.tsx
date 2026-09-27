import { Icon } from "@iconify/react";
import { SEO } from "../components/SEO";

export default function Privacy() {
  return (
    <>
      <SEO 
        title="Privacy Policy"
        description="Learn how we protect your data. NP Domain Letter Generator processes everything locally in your browser to ensure complete privacy."
        url="/privacy"
      />
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-3xl mx-auto bg-white dark:bg-[#0A0F1C] p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100 dark:border-gray-800">
          <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-xl text-teal-600 dark:text-teal-400">
            <Icon icon="solar:shield-keyhole-bold-duotone" className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-extrabold text-navy-900 dark:text-white tracking-tight">Privacy Policy</h1>
        </div>

        <div className="space-y-8 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-xl font-bold text-navy-900 dark:text-white mb-4">1. Data Collection and Storage</h2>
            <p className="mb-4">
              <strong>Your data is yours.</strong> NP Domain Letter Generator operates entirely within your web browser. 
              We do not collect, store, transmit, or process any of the personal information you enter into our tool on our servers.
            </p>
            <p>
              When you use our generator, all processing happens locally on your device. Any data saved (like form drafts) is stored in your browser's <code>localStorage</code> and remains entirely under your control.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-900 dark:text-white mb-4">2. Third-Party Services</h2>
            <p className="mb-4">To provide a better user experience, we utilize some third-party services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google Fonts:</strong> We use Google Fonts (Inter) for typography. Google may collect some technical data (like IP addresses) when serving these fonts.</li>
              <li><strong>Iconify:</strong> We use Iconify for serving SVG icons.</li>
              <li><strong>Vercel:</strong> Our website is hosted on Vercel, which may collect standard access logs (IP address, browser type, timestamp) for security and performance monitoring.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-900 dark:text-white mb-4">3. Image Compression</h2>
            <p>
              Our Image Compressor tool processes images entirely in your browser using JavaScript. Your sensitive documents (Citizenship, PAN card, etc.) are never uploaded to our servers or any third-party service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-900 dark:text-white mb-4">4. Advertising and Analytics</h2>
            <p className="mb-4">
              We may use third-party advertising companies (such as Google AdSense) to serve ads when you visit our website. These companies may use cookies and similar technologies to collect non-personally identifiable information about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.
            </p>
            <p>
              Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet. Users may opt out of personalized advertising by visiting Google's Ads Settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-900 dark:text-white mb-4">5. Changes to This Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. Any changes will be reflected on this page. We encourage you to review this Privacy Policy periodically for any updates.
            </p>
          </section>

          <div className="pt-8 mt-8 border-t border-gray-100 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400">
            Last updated: September 27, 2026
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
