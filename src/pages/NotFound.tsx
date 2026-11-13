import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function NotFound() {
  return (
    <div className="bg-[#F5F8FC] dark:bg-[#142536] flex flex-col items-center justify-center min-h-[calc(100vh-160px)] px-4">
      <div className="text-center">
        <Icon icon="solar:ghost-bold" className="w-24 h-24 text-[#1166B3] dark:text-[#7DC0E5] mx-auto mb-5 opacity-90" />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1B2E40] dark:text-white mb-2 tracking-tight">404</h1>
        <h2 className="text-xl font-bold text-[#27465F] dark:text-[#ABDAF0] mb-4">Page Not Found</h2>
        <p className="text-[#3E5A74] dark:text-[#D9E4EC] text-sm mb-6 max-w-sm mx-auto leading-relaxed">
          The requested page does not exist or has been relocated.
        </p>
        <Link 
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#1166B3] hover:bg-[#0e5494] text-white font-semibold text-sm rounded-lg transition-colors shadow-xs"
        >
          <Icon icon="solar:home-smile-bold" className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
