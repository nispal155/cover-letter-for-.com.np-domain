import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#0A0F1C] border-t border-[#1a2333] mt-auto selection:bg-teal-500/30">
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 border-b border-[#1a2333] pb-12">
          
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2">
                <Icon icon="solar:global-bold-duotone" className="w-5 h-5 text-teal-400" />
                NP Domain Generator
              </h3>
              <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-sm">
                A seamless, privacy-first utility designed to simplify the .NP domain registration process. Generate professional request letters in seconds—no data ever leaves your browser.
              </p>
            </div>
            
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-[#131b2c] border border-[#1e293b] shadow-inner">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Powered By</span>
              <div className="w-[1px] h-4 bg-slate-700"></div>
              <a 
                href="https://astratech.com.np" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-bold text-white hover:text-teal-400 transition-colors tracking-widest"
              >
                ASTRA TECHNOLOGY HORIZON
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-2 gap-8 lg:justify-items-end">
            
            <nav className="space-y-5 lg:justify-self-end" aria-label="Quick Links">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest">Quick Links</h4>
              <ul className="space-y-3.5">
                <li>
                  <Link to="/" className="text-sm text-slate-400 hover:text-white transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/compress" className="text-sm text-slate-400 hover:text-white transition-colors">Image Compressor</Link>
                </li>
                <li>
                  <Link to="/generate" className="text-sm text-slate-400 hover:text-white transition-colors">Create Letter</Link>
                </li>
              </ul>
            </nav>

            <nav className="space-y-5" aria-label="Resources">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest">Resources</h4>
              <ul className="space-y-3.5">
                <li>
                  <a 
                    href="https://register.com.np/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    Official .NP Registry
                    <Icon icon="solar:square-top-down-linear" className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a 
                    href="/#guidelines"
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    Registration Guidelines
                    <Icon icon="solar:book-2-bold-duotone" className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-col sm:flex-row">
            <p className="text-xs text-slate-500 font-medium">
              &copy; {new Date().getFullYear()} Astra Technology Horizon. All rights reserved.
            </p>
            <div className="hidden sm:block w-[1px] h-3 bg-slate-700"></div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-500/10 border border-teal-500/20 text-teal-400 text-[10px] font-bold uppercase tracking-wider">
              <Icon icon="solar:shield-check-bold" className="w-3.5 h-3.5" />
              100% Local Data Privacy
            </div>
          </div>
          <p className="text-xs text-slate-500 max-w-md text-center md:text-right">
            Disclaimer: This is an independent utility. Not affiliated with Mercantile Communications Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
