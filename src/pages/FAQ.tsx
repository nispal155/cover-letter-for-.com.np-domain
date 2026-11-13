import { Icon } from "@iconify/react";
import { SEO } from "../components/SEO";

export default function FAQ() {
  const faqs = [
    {
      question: "Is registering a .com.np domain completely free?",
      answer: "Yes! Mercantile Communications provides .np domains completely free of charge for Nepalese citizens and registered companies."
    },
    {
      question: "What documents do I need for personal domain registration?",
      answer: "You need two main documents: 1. A scanned copy of your Nepalese Citizenship (both front and back). 2. A signed cover letter requesting the domain."
    },
    {
      question: "What documents do I need for company domain registration?",
      answer: "You need: 1. A scanned copy of your Company Registration Certificate. 2. A scanned copy of your company's PAN/VAT certificate. 3. A signed cover letter on your company's official letterhead."
    },
    {
      question: "Why was my .np domain application rejected?",
      answer: "Common rejection reasons include: 1. The requested domain doesn't match your actual name or company name exactly. 2. The cover letter format is incorrect. 3. The uploaded images exceed the 200KB limit. Our tool helps solve problems #2 and #3."
    },
    {
      question: "Can I register any name I want?",
      answer: "No. For personal domains, the domain must exactly match your name on the citizenship (e.g., if your name is Ram Kumar Thapa, you can get ramkumarthapa.com.np, ramthapa.com.np, etc. but not generic names like 'coolboy.com.np')."
    },
    {
      question: "How long does it take to get approved?",
      answer: "Typically, it takes 1 to 3 business days for Mercantile Communications to review and approve your domain application, provided all documents are correct."
    },
    {
      question: "Is this Cover Letter Generator official?",
      answer: "No, this is an independent utility created to help people format their documents correctly. We are not affiliated with Mercantile Communications."
    },
    {
      question: "Do you store my personal data?",
      answer: "Absolutely not. This entire tool runs locally in your web browser. When you type your name or compress an image, no data is sent to our servers. It is 100% private."
    }
  ];

  return (
    <>
      <SEO 
        title="Frequently Asked Questions (FAQ) | .NP Domain Registration"
        description="Find answers to common questions about registering a free .com.np domain in Nepal, document requirements, and using our cover letter generator tool."
        url="/faq"
      />
      <div className="bg-[#F5F8FC] dark:bg-[#142536] min-h-screen py-16 px-4 sm:px-6 lg:px-8 transition-colors">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E9F0F6] text-[#1166B3] dark:bg-[#27465F] dark:text-[#ABDAF0] border border-[#D9E4EC] dark:border-[#27465F] mb-3">
              Help Center &amp; Guidance
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#1B2E40] dark:text-white tracking-tight mb-3">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-[#3E5A74] dark:text-[#D9E4EC] max-w-2xl mx-auto">
              Everything you need to know about .NP domains and our tools.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-[#1B2E40] p-6 rounded-xl border border-[#D9E4EC] dark:border-[#27465F]">
                <h3 className="text-base sm:text-lg font-bold text-[#1B2E40] dark:text-white mb-2 flex items-start gap-2.5">
                  <Icon icon="solar:question-circle-bold" className="w-5 h-5 text-[#1166B3] dark:text-[#ABDAF0] shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-sm text-[#3E5A74] dark:text-[#D9E4EC] ml-7 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
