import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function NotFound() {
  return (
    <div className="bg-gray-50 flex flex-col items-center justify-center min-h-[calc(100vh-160px)] px-4">
      <div className="text-center">
        <Icon icon="solar:ghost-bold-duotone" className="w-32 h-32 text-teal-500 mx-auto mb-6 opacity-80" />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-900 mb-4 tracking-tight">404</h1>
        <h2 className="text-xl sm:text-2xl font-bold text-navy-800 mb-6">Page Not Found</h2>
        <p className="text-navy-600 mb-8 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>
        <Link 
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-xl transition-all shadow-md shadow-teal-500/20 hover:shadow-lg hover:shadow-teal-500/30 hover:-translate-y-0.5"
        >
          <Icon icon="solar:home-smile-bold-duotone" className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
