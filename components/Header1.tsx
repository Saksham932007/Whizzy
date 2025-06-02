import React, { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const Header1: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/90 backdrop-blur-xl shadow-lg shadow-indigo-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center group">
          <div className="relative">
            <Sparkles className="h-8 w-8 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" />
            <div className="absolute inset-0 bg-indigo-400/20 blur-xl rounded-full scale-150 group-hover:bg-indigo-300/30 transition-all duration-300"></div>
          </div>
          <span className="ml-3 text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">
            Whizzy
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-indigo-200 hover:text-white transition-colors duration-300"
          >
            Features
          </a>
          <a
            href="#demo"
            className="text-indigo-200 hover:text-white transition-colors duration-300"
          >
            Try It
          </a>
          <a
            href="#faq"
            className="text-indigo-200 hover:text-white transition-colors duration-300"
          >
            FAQ
          </a>
          <button className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative px-6 py-2 bg-slate-900 rounded-full leading-none">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Get Started
              </span>
            </div>
          </button>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl shadow-lg shadow-indigo-500/10">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#features"
              className="text-indigo-200 hover:text-white transition-colors duration-300 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#demo"
              className="text-indigo-200 hover:text-white transition-colors duration-300 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Try It
            </a>
            <a
              href="#faq"
              className="text-indigo-200 hover:text-white transition-colors duration-300 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <button className="relative group w-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative px-6 py-2 bg-slate-900 rounded-full leading-none text-center">
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Get Started
                </span>
              </div>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header1;
