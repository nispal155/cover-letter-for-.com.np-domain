import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";

export default function About() {
  return (
    <>
      <SEO 
        title="About Us"
        description="Learn about Astra Technology Horizon and why we created the NP Domain Letter Generator to simplify .NP domain registration in Nepal."
        url="/about"
      />
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight mb-4">
            About Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Simplifying the .NP domain registration process for everyone in Nepal.
          </p>
        </div>

        <div className="bg-white dark:bg-[#0A0F1C] rounded-3xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden mb-12">
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
              <p>
                Registering a free .com.np domain is an amazing opportunity provided by Mercantile Communications for the people and businesses of Nepal. However, we noticed that many applicants were struggling with the exact formatting requirements for the cover letter and the strict 200KB image size limits.
              </p>
              <p>
                We went through the process ourselves and experienced the frustration of having our application rejected due to a minor formatting error in the cover letter. 
              </p>
              <p>
                That's why we built the <strong>NP Domain Letter Generator</strong>. We wanted to create a free, completely private tool that helps you generate a perfectly formatted cover letter in seconds, and compress your citizenship or PAN card scans to meet the exact requirements.
              </p>
            </div>
          </div>
          <div className="bg-teal-50 dark:bg-teal-900/20 p-8 md:p-12 border-t border-teal-100 dark:border-teal-900/30">
            <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              To empower Nepali students, professionals, and businesses to establish their online presence by removing the technical friction from the .NP domain registration process.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-[#0A0F1C] p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-xl text-teal-600 dark:text-teal-400">
                <Icon icon="solar:users-group-two-rounded-bold-duotone" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white">Who We Are</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This tool is developed and maintained by <strong>Astra Technology Horizon</strong>, a technology collective based in Nepal. We specialize in building user-centric web applications and digital tools.
            </p>
            <a href="https://astratech.com.np" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 font-medium hover:underline flex items-center gap-1">
              Visit Astra Technology Horizon
              <Icon icon="solar:arrow-right-up-linear" className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white dark:bg-[#0A0F1C] p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-xl text-teal-600 dark:text-teal-400">
                <Icon icon="solar:shield-check-bold-duotone" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white">Privacy First</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We respect your privacy. Because you are handling sensitive documents like your Citizenship and company registration, we designed this tool to work entirely in your browser. No data ever leaves your device.
            </p>
            <Link to="/privacy" className="text-teal-600 dark:text-teal-400 font-medium hover:underline flex items-center gap-1">
              Read our Privacy Policy
              <Icon icon="solar:arrow-right-linear" className="w-4 h-4" />
            </Link>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
