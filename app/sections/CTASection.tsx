import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection: React.FC = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-indigo-950"></div>

      {/* Animated background elements */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-indigo-500/10 rounded-full blur-3xl animate-spin-slow"></div>
      <div
        className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-3xl animate-spin-slow"
        style={{ animationDirection: "reverse" }}
      ></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8">
            <Sparkles className="h-4 w-4 text-indigo-400" />
            <span className="text-sm text-indigo-300">
              Join the AI Revolution
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
            Ready to transform how you interact with AI?
          </h2>
          <p className="text-xl text-indigo-200 mb-12 max-w-2xl mx-auto">
            Join thousands of users already experiencing the power of our
            generative AI platform. Get started for free today.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="group relative inline-flex items-center justify-center"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative px-6 py-3 bg-slate-900 rounded-full leading-none flex items-center">
                <span className="text-white font-medium">
                  Get started for free
                </span>
                <ArrowRight className="ml-2 h-4 w-4 text-white group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 bg-slate-800/50 text-indigo-300 border border-indigo-500/20 font-medium rounded-full hover:bg-slate-800/80 transition-colors"
            >
              Schedule a demo
            </a>
          </div>

          <p className="text-indigo-300/80 mt-8 text-sm">
            No credit card required. Free plan includes 20 questions per day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
