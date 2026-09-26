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
    `font-medium transition-colors ${
      isActive ? "text-teal-600 dark:text-teal-400" : "text-navy-600 hover:text-navy-900 dark:text-slate-400 dark:hover:text-white"
    }`;

  return (
    <header className="bg-white/80 dark:bg-[#0A0F1C]/80 backdrop-blur-md border-b border-gray-200 dark:border-[#1a2333] sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-teal-600 text-white p-2 rounded-lg group-hover:bg-teal-700 transition-colors shadow-sm">
                <Icon icon="solar:document-bold-duotone" className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg text-navy-900 dark:text-white hidden sm:block">
                NP Domain Letter Generator
              </span>
              <span className="font-bold text-lg text-navy-900 dark:text-white sm:hidden">
                NP Letters
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
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
              className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors shadow-sm"
            >
              Create Letter
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-navy-600 hover:text-navy-900 dark:text-slate-400 dark:hover:text-white focus:outline-none"
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
        <div className="md:hidden bg-white dark:bg-[#0A0F1C] border-t border-gray-100 dark:border-[#1a2333]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg rounded-b-lg">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base ${
                isHomeActive
                  ? "text-teal-600 bg-teal-50 dark:bg-teal-900/20 dark:text-teal-400"
                  : "text-navy-700 hover:text-navy-900 hover:bg-gray-50 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800"
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <a
              href="/#guidelines"
              className={`block px-3 py-2 rounded-md text-base ${
                isGuidelinesActive
                  ? "text-teal-600 bg-teal-50 dark:bg-teal-900/20 dark:text-teal-400"
                  : "text-navy-700 hover:text-navy-900 hover:bg-gray-50 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800"
              }`}
              onClick={closeMenu}
            >
              Guidelines
            </a>
            <Link
              to="/compress"
              className={`block px-3 py-2 rounded-md text-base ${
                isCompressorActive
                  ? "text-teal-600 bg-teal-50 dark:bg-teal-900/20 dark:text-teal-400"
                  : "text-navy-700 hover:text-navy-900 hover:bg-gray-50 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800"
              }`}
              onClick={closeMenu}
            >
              Image Compressor
            </Link>
            <Link
              to="/generate"
              className="block px-3 py-2 text-base font-medium text-teal-600 hover:text-teal-700"
              onClick={closeMenu}
            >
              Create Letter
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
