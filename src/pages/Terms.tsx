import { Icon } from "@iconify/react";
import { SEO } from "../components/SEO";

export default function Terms() {
  return (
    <>
      <SEO 
        title="Terms of Service"
        description="Terms of Service for the NP Domain Letter Generator tool. Please read before generating your .NP domain registration documents."
        url="/terms"
      />
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-3xl mx-auto bg-white dark:bg-[#0A0F1C] p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100 dark:border-gray-800">
          <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-xl text-teal-600 dark:text-teal-400">
            <Icon icon="solar:document-text-bold-duotone" className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-extrabold text-navy-900 dark:text-white tracking-tight">Terms of Service</h1>
        </div>

        <div className="space-y-8 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-xl font-bold text-navy-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the NP Domain Letter Generator ("the Tool"), you accept and agree to be bound by the terms and provisions of this agreement. 
              If you do not agree to abide by these terms, please do not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-900 dark:text-white mb-4">2. Description of Service</h2>
            <p className="mb-4">
              The Tool provides a browser-based utility for formatting cover letters and compressing images intended for .NP domain registration in Nepal.
            </p>
            <p>
              <strong>Disclaimer of Affiliation:</strong> This Tool is an independent utility created by Astra Technology Horizon. It is NOT affiliated with, endorsed by, or connected to Mercantile Communications Pvt. Ltd. or the official .NP Domain Registry.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-900 dark:text-white mb-4">3. No Guarantee of Approval</h2>
            <p>
              While we strive to provide templates that match the registry's requirements, using this Tool <strong>does not guarantee</strong> that your domain registration application will be approved. The final decision rests entirely with the official .NP domain registry. We are not responsible for any rejected applications.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-900 dark:text-white mb-4">4. User Responsibilities</h2>
            <p className="mb-4">
              You are responsible for ensuring that all information you enter into the Tool is accurate, truthful, and lawful. 
              You must not use the Tool to generate fraudulent documents or attempt to register domains that you do not have the legal right to register.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-900 dark:text-white mb-4">5. Intellectual Property</h2>
            <p>
              The code, design, and branding of the Tool are the intellectual property of Astra Technology Horizon. You may not copy, reverse engineer, or distribute the Tool without explicit permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-900 dark:text-white mb-4">6. Limitation of Liability</h2>
            <p>
              In no event shall Astra Technology Horizon be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in any way connected with your use of the Tool, whether based on contract, tort, strict liability, or otherwise.
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
