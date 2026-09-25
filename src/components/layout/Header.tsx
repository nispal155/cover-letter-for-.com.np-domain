import { Link, useLocation } from "react-router-dom";
import { FileText, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMobileMenuOpen(false);

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) =>
    `font-medium transition-colors ${
      isActive(path) ? "text-blue-600" : "text-navy-600 hover:text-navy-900"
    }`;

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-blue-600 text-white p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
                <FileText className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg text-navy-900 hidden sm:block">
                NP Domain Letter Generator
              </span>
              <span className="font-bold text-lg text-navy-900 sm:hidden">
                NP Letters
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className={linkClass("/")}>
              Home
            </Link>
            <a href="/#how-it-works" className="font-medium text-navy-600 hover:text-navy-900 transition-colors">
              How It Works
            </a>
            <a href="/#guidelines" className="font-medium text-navy-600 hover:text-navy-900 transition-colors">
              Guidelines
            </a>
            <Link
              to="/generate"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors"
            >
              Create Letter
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-navy-600 hover:text-navy-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg rounded-b-lg">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base ${
                isActive("/")
                  ? "text-blue-600 bg-blue-50"
                  : "text-navy-700 hover:text-navy-900 hover:bg-gray-50"
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <a
              href="/#how-it-works"
              className="block px-3 py-2 rounded-md text-base text-navy-700 hover:text-navy-900 hover:bg-gray-50"
              onClick={closeMenu}
            >
              How It Works
            </a>
            <a
              href="/#guidelines"
              className="block px-3 py-2 rounded-md text-base text-navy-700 hover:text-navy-900 hover:bg-gray-50"
              onClick={closeMenu}
            >
              Guidelines
            </a>
            <Link
              to="/generate"
              className="block px-3 py-2 text-base font-medium text-blue-600 hover:text-blue-700"
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
