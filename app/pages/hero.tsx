import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
  children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ children }) => {
  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-indigo-500/10 rounded-full blur-3xl animate-spin-slow"></div>
        <div
          className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-3xl animate-spin-slow"
          style={{ animationDirection: "reverse" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-xl">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                <Sparkles className="h-4 w-4 text-indigo-400" />
                <span className="text-sm text-indigo-300">
                  AI-Powered Intelligence
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Think Smarter with{" "}
                <span className="relative">
                  <span className="relative z-10 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    Whizzy AI
                  </span>
                  <div className="absolute -inset-1 bg-indigo-400/20 blur-xl rounded-full"></div>
                </span>
              </h1>
            </div>
            <p className="text-xl text-indigo-200">
              Experience AI that thinks alongside you. Get intelligent
              responses, creative solutions, and deep insights with our
              next-generation AI assistant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {children || (
                <>
                  <a
                    href="#demo"
                    className="group relative inline-flex items-center justify-center"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative px-6 py-3 bg-slate-900 rounded-full leading-none flex items-center">
                      <span className="text-white font-medium">Try it now</span>
                      <ArrowRight className="ml-2 h-4 w-4 text-white group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                  <a
                    href="#features"
                    className="inline-flex items-center justify-center px-6 py-3 bg-slate-800/50 text-indigo-300 border border-indigo-500/20 font-medium rounded-full hover:bg-slate-800/80 transition-colors"
                  >
                    Learn more
                  </a>
                </>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 border border-indigo-500/20 shadow-glow animate-float">
              <div className="aspect-[4/3] bg-slate-950 rounded-2xl p-6 backdrop-blur-xl">
                <div className="flex space-x-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="space-y-4">
                  <div className="bg-indigo-500/20 rounded-lg p-3 max-w-[80%] border border-indigo-500/20">
                    <p className="text-indigo-200">
                      How can AI enhance my creative process?
                    </p>
                  </div>
                  <div className="bg-purple-500/20 rounded-lg p-3 max-w-[80%] ml-auto border border-purple-500/20">
                    <p className="text-purple-200">
                      AI can amplify your creativity by generating ideas,
                      exploring variations, and providing inspiration while you
                      maintain creative control...
                    </p>
                  </div>
                  <div className="bg-indigo-500/20 rounded-lg p-3 max-w-[80%] border border-indigo-500/20">
                    <p className="text-indigo-200">
                      Can you give me specific examples?
                    </p>
                  </div>
                  <div className="flex space-x-2 p-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce"></div>
                    <div
                      className="w-2 h-2 rounded-full bg-purple-400 animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-purple-400 animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
