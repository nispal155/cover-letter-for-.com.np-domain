import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { ThemeToggle } from "../ui/ThemeToggle";
import { useScrollSpy } from "../../hooks/useScrollSpy";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const activeId = useScrollSpy(['hero', 'guidelines'], 100);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const isHomeActive = location.pathname === '/' && (!activeId || activeId === 'hero');
  const isGuidelinesActive = location.pathname === '/' && activeId === 'guidelines';
  const isCompressorActive = location.pathname === '/compress';

  const navItemClass = (isActive: boolean) =>
    `text-sm font-semibold transition-colors py-1 ${
      isActive 
        ? "text-[#1166B3] dark:text-[#7DC0E5] border-b-2 border-[#1166B3] dark:border-[#7DC0E5]" 
        : "text-[#142536] hover:text-[#1166B3] dark:text-[#D9E4EC] dark:hover:text-white"
    }`;

  return (
    <header className="bg-white dark:bg-[#1B2E40] border-b border-[#D9E4EC] dark:border-[#27465F] sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="bg-[#1166B3] text-white p-2 rounded-lg group-hover:bg-[#0e5494] transition-colors shadow-xs">
                <Icon icon="solar:document-bold" className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base text-[#1B2E40] dark:text-white tracking-tight hidden sm:block">
                  NP Domain Letter Generator
                </span>
                <span className="font-bold text-base text-[#1B2E40] dark:text-white sm:hidden">
                  NP Letters
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#5C768D] dark:text-[#ABDAF0]">
                  By Astra Technology Horizon
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-7 items-center">
            <Link to="/" className={navItemClass(isHomeActive)}>
              Home
            </Link>
            <a href="/#guidelines" className={navItemClass(isGuidelinesActive)}>
              Guidelines
            </a>
            <Link to="/compress" className={navItemClass(isCompressorActive)}>
              Image Compressor
            </Link>
            <ThemeToggle />
            <Link
              to="/generate"
              className="bg-[#1166B3] hover:bg-[#0e5494] text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors shadow-xs min-h-[40px] inline-flex items-center"
            >
              Create Letter
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#142536] hover:text-[#1166B3] dark:text-[#D9E4EC] dark:hover:text-white p-1.5 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <Icon icon="solar:close-circle-linear" className="h-6 w-6" />
              ) : (
                <Icon icon="solar:hamburger-menu-linear" className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#D9E4EC] dark:border-[#27465F] bg-white dark:bg-[#1B2E40] px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <Link
            to="/"
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-lg text-base font-semibold ${
              isHomeActive
                ? "bg-[#F5F8FC] text-[#1166B3] dark:bg-[#27465F] dark:text-[#ABDAF0]"
                : "text-[#142536] dark:text-[#D9E4EC]"
            }`}
          >
            Home
          </Link>
          <a
            href="/#guidelines"
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-lg text-base font-semibold ${
              isGuidelinesActive
                ? "bg-[#F5F8FC] text-[#1166B3] dark:bg-[#27465F] dark:text-[#ABDAF0]"
                : "text-[#142536] dark:text-[#D9E4EC]"
            }`}
          >
            Guidelines
          </a>
          <Link
            to="/compress"
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-lg text-base font-semibold ${
              isCompressorActive
                ? "bg-[#F5F8FC] text-[#1166B3] dark:bg-[#27465F] dark:text-[#ABDAF0]"
                : "text-[#142536] dark:text-[#D9E4EC]"
            }`}
          >
            Image Compressor
          </Link>
          <div className="pt-2">
            <Link
              to="/generate"
              onClick={closeMenu}
              className="w-full inline-flex items-center justify-center bg-[#1166B3] hover:bg-[#0e5494] text-white px-5 py-3 rounded-lg font-semibold text-base transition-colors"
            >
              Create Letter
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
