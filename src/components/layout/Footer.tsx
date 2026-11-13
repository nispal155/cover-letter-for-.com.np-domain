import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#1B2E40] border-t border-[#27465F] text-[#D9E4EC] mt-auto">
      <div className="max-w-7xl mx-auto pt-14 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 border-b border-[#27465F] pb-10">
          
          <div className="lg:col-span-5 space-y-5">
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <Icon icon="solar:document-bold" className="w-5 h-5 text-[#ABDAF0]" />
                NP Domain Letter Generator
              </h3>
              <p className="mt-3 text-sm text-[#ABDAF0]/80 leading-relaxed max-w-sm">
                A dependable utility designed by Astra Technology Horizon to simplify .NP domain applications. Free, private, and client-side.
              </p>
            </div>
            
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-lg bg-[#27465F]/60 border border-[#7DC0E5]/20">
              <span className="text-[11px] font-semibold text-[#ABDAF0] uppercase tracking-wider">Engineered By</span>
              <div className="w-[1px] h-3.5 bg-[#7DC0E5]/30"></div>
              <a 
                href="https://astratech.com.np" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-bold text-white hover:text-[#ABDAF0] transition-colors tracking-wider"
              >
                ASTRA TECHNOLOGY HORIZON
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:justify-items-end">
            
            <nav className="space-y-4 lg:justify-self-end" aria-label="Quick Links">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link to="/" className="text-sm text-[#D9E4EC] hover:text-[#ABDAF0] transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/compress" className="text-sm text-[#D9E4EC] hover:text-[#ABDAF0] transition-colors">Image Compressor</Link>
                </li>
                <li>
                  <Link to="/generate" className="text-sm text-[#D9E4EC] hover:text-[#ABDAF0] transition-colors">Create Letter</Link>
                </li>
              </ul>
            </nav>

            <nav className="space-y-4" aria-label="Resources">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2.5">
                <li>
                  <a 
                    href="https://register.com.np/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm text-[#D9E4EC] hover:text-[#ABDAF0] transition-colors"
                  >
                    Official Registry
                    <Icon icon="solar:square-top-down-linear" className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a 
                    href="/#guidelines"
                    className="group inline-flex items-center gap-1.5 text-sm text-[#D9E4EC] hover:text-[#ABDAF0] transition-colors"
                  >
                    Registration Rules
                    <Icon icon="solar:book-2-bold" className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              </ul>
            </nav>

            <nav className="space-y-4" aria-label="Legal & Info">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Company &amp; Legal</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link to="/about" className="text-sm text-[#D9E4EC] hover:text-[#ABDAF0] transition-colors">About Astra</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-[#D9E4EC] hover:text-[#ABDAF0] transition-colors">Contact</Link>
                </li>
                <li>
                  <Link to="/faq" className="text-sm text-[#D9E4EC] hover:text-[#ABDAF0] transition-colors">FAQ</Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-sm text-[#D9E4EC] hover:text-[#ABDAF0] transition-colors">Privacy</Link>
                </li>
                <li>
                  <Link to="/terms" className="text-sm text-[#D9E4EC] hover:text-[#ABDAF0] transition-colors">Terms</Link>
                </li>
              </ul>
            </nav>
          </div>
          
        </div>
        
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-col sm:flex-row">
            <p className="text-xs text-[#ABDAF0]/70 font-medium">
              &copy; {new Date().getFullYear()} Astra Technology Horizon. Itahari, Nepal. All rights reserved.
            </p>
            <div className="hidden sm:block w-[1px] h-3 bg-[#27465F]"></div>
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#27465F] text-[#ABDAF0] text-[10px] font-bold uppercase tracking-wider border border-[#7DC0E5]/20">
              <Icon icon="solar:shield-check-bold" className="w-3 h-3 text-[#ABDAF0]" />
              100% In-Browser Privacy
            </div>
          </div>
          <p className="text-xs text-[#ABDAF0]/60 max-w-md text-center md:text-right">
            Independent community utility. Domain approvals are governed exclusively by Mercantile Communications Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
