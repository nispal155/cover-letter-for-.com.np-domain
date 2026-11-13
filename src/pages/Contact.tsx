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
      <div className="bg-[#F5F8FC] dark:bg-[#142536] min-h-screen py-16 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E9F0F6] text-[#1166B3] border border-[#D9E4EC] mb-3">
            Astra Technology Horizon
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1B2E40] dark:text-white tracking-tight mb-3">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg text-[#3E5A74] dark:text-[#D9E4EC] max-w-xl mx-auto">
            Have questions, feedback, or need help? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-5">
            <div className="bg-white dark:bg-[#1B2E40] p-6 rounded-xl border border-[#D9E4EC] dark:border-[#27465F] flex items-start gap-4">
              <div className="bg-[#E9F0F6] dark:bg-[#27465F] p-3 rounded-lg text-[#1166B3] dark:text-[#ABDAF0] mt-1">
                <Icon icon="solar:letter-bold" className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-[#1B2E40] dark:text-white text-base mb-1">Email Us</h3>
                <p className="text-xs sm:text-sm text-[#3E5A74] dark:text-[#D9E4EC] mb-2">For inquiries and support.</p>
                <a href="mailto:contact@astratech.com.np" className="text-[#1166B3] dark:text-[#7DC0E5] font-semibold text-sm hover:underline">
                  contact@astratech.com.np
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-[#1B2E40] p-6 rounded-xl border border-[#D9E4EC] dark:border-[#27465F] flex items-start gap-4">
              <div className="bg-[#E9F0F6] dark:bg-[#27465F] p-3 rounded-lg text-[#1166B3] dark:text-[#ABDAF0] mt-1">
                <Icon icon="solar:map-point-bold" className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-[#1B2E40] dark:text-white text-base mb-1">Location</h3>
                <p className="text-xs sm:text-sm text-[#3E5A74] dark:text-[#D9E4EC] leading-relaxed">
                  Itahari, Nepal<br />
                  <span className="font-medium text-[#1B2E40] dark:text-white">Astra Technology Horizon</span>
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 bg-white dark:bg-[#1B2E40] p-6 sm:p-8 rounded-xl border border-[#D9E4EC] dark:border-[#27465F]">
            <h2 className="text-xl font-bold text-[#1B2E40] dark:text-white mb-5">Send us a message</h2>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thanks for your message! Please email contact@astratech.com.np directly."); }}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-semibold text-[#142536] dark:text-[#D9E4EC] mb-1.5">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-3.5 py-2.5 bg-[#F5F8FC] dark:bg-[#27465F]/40 border border-[#D9E4EC] dark:border-[#27465F] rounded-lg focus:border-[#1166B3] focus:ring-1 focus:ring-[#1166B3] outline-none text-sm text-[#142536] dark:text-white transition-all"
                    placeholder="Ram"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-semibold text-[#142536] dark:text-[#D9E4EC] mb-1.5">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-3.5 py-2.5 bg-[#F5F8FC] dark:bg-[#27465F]/40 border border-[#D9E4EC] dark:border-[#27465F] rounded-lg focus:border-[#1166B3] focus:ring-1 focus:ring-[#1166B3] outline-none text-sm text-[#142536] dark:text-white transition-all"
                    placeholder="Sharma"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-[#142536] dark:text-[#D9E4EC] mb-1.5">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-3.5 py-2.5 bg-[#F5F8FC] dark:bg-[#27465F]/40 border border-[#D9E4EC] dark:border-[#27465F] rounded-lg focus:border-[#1166B3] focus:ring-1 focus:ring-[#1166B3] outline-none text-sm text-[#142536] dark:text-white transition-all"
                  placeholder="ram@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-[#142536] dark:text-[#D9E4EC] mb-1.5">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-3.5 py-2.5 bg-[#F5F8FC] dark:bg-[#27465F]/40 border border-[#D9E4EC] dark:border-[#27465F] rounded-lg focus:border-[#1166B3] focus:ring-1 focus:ring-[#1166B3] outline-none text-sm text-[#142536] dark:text-white transition-all resize-none"
                  placeholder="How can we assist you with your domain request letter?"
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#1166B3] hover:bg-[#0e5494] text-white font-semibold py-3 px-6 rounded-lg transition-colors text-sm shadow-xs"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
