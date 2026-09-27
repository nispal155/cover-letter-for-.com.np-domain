import { Icon } from "@iconify/react";
import { SEO } from "../components/SEO";

export default function Contact() {
  return (
    <>
      <SEO 
        title="Contact Us"
        description="Get in touch with Astra Technology Horizon for support and feedback regarding the NP Domain Letter Generator."
        url="/contact"
      />
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have questions, feedback, or need help? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white dark:bg-[#0A0F1C] p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 flex items-start gap-4">
              <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-xl text-teal-600 dark:text-teal-400 mt-1">
                <Icon icon="solar:letter-bold-duotone" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-navy-900 dark:text-white text-lg mb-1">Email Us</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">For general inquiries and support.</p>
                <a href="mailto:contact@astratech.com.np" className="text-teal-600 dark:text-teal-400 font-medium hover:underline">
                  contact@astratech.com.np
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-[#0A0F1C] p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 flex items-start gap-4">
              <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-xl text-teal-600 dark:text-teal-400 mt-1">
                <Icon icon="solar:map-point-bold-duotone" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-navy-900 dark:text-white text-lg mb-1">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Kathmandu, Nepal<br />
                  Astra Technology Horizon
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 bg-white dark:bg-[#0A0F1C] p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-6">Send us a message</h2>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Thanks for your message! This is a static demo, please email us directly."); }}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-900/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-gray-900 dark:text-white transition-all"
                    placeholder="Ram"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-900/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-gray-900 dark:text-white transition-all"
                    placeholder="Sharma"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-900/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-gray-900 dark:text-white transition-all"
                  placeholder="ram.sharma@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-900/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-gray-900 dark:text-white transition-all resize-none"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <Icon icon="solar:plain-bold" className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
