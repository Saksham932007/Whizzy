import React from "react";
import { Sparkles, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-indigo-950"></div>

      {/* Animated background elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center group">
              <div className="relative">
                <Sparkles className="h-8 w-8 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" />
                <div className="absolute inset-0 bg-indigo-400/20 blur-xl rounded-full scale-150 group-hover:bg-indigo-300/30 transition-all duration-300"></div>
              </div>
              <span className="ml-3 text-xl font-bold tracking-tight bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
                Whizzy
              </span>
            </div>
            <p className="mt-4 text-indigo-200 max-w-xs">
              Transforming the way you interact with AI through natural,
              intuitive conversations.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-indigo-200 hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-indigo-200 hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-indigo-200 hover:text-white transition-colors"
                >
                  Use Cases
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-indigo-200 hover:text-white transition-colors"
                >
                  API
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-indigo-200 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-indigo-200 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-indigo-200 hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-indigo-200 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-indigo-200 hover:text-white transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-indigo-200 hover:text-white transition-colors"
                >
                  Tutorials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-indigo-200 hover:text-white transition-colors"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-indigo-200 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-indigo-500/20 mt-12 pt-8">
          <p className="text-indigo-200/60 text-sm text-center">
            &copy; {currentYear} Whizzy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
