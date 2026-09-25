import { FileEdit, Eye, Download } from "lucide-react";

export function StepsSection() {
  const steps = [
    {
      title: "01 — Enter Details",
      description: "Provide your company, domain and authorized person's information.",
      icon: <FileEdit className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "02 — Preview",
      description: "Review your professionally formatted request letter.",
      icon: <Eye className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "03 — Download Image",
      description: "Download the final optimized JPG image and use it for your .NP domain registration application.",
      icon: <Download className="w-6 h-6 text-blue-600" />,
    },
  ];

  return (
    <section className="bg-white pb-12 pt-4 sm:pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-navy-900 mb-8">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 relative hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">{step.title}</h3>
              <p className="text-navy-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
