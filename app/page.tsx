"use client";

import React from "react";
import Theme from "./layout/theme";
import Hero from "./pages/hero";
import FeaturesSection from "./sections/FeaturesSection";
import FAQSection from "./../components/FAQSection";
import CTASection from "./sections/CTASection";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function Home() {
  // Update the document title
  React.useEffect(() => {
    document.title = "Whizzy - AI That Thinks With You";
  }, []);

  return (
    <Theme>
      <Hero>
        <div className="flex flex-col sm:flex-row gap-4">
          <SignedIn>
            <Link
              href="/dashboard"
              className="group relative inline-flex items-center justify-center"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative px-6 py-3 bg-slate-900 rounded-full leading-none flex items-center">
                <span className="text-white font-medium">Go to Dashboard</span>
                <ArrowRight className="ml-2 h-4 w-4 text-white group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton
              mode="modal"
              fallbackRedirectUrl={"/dashboard"}
              forceRedirectUrl={"/dashboard"}
            >
              <button className="group relative inline-flex items-center justify-center">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative px-6 py-3 bg-slate-900 rounded-full leading-none flex items-center">
                  <span className="text-white font-medium">Try it now</span>
                  <ArrowRight className="ml-2 h-4 w-4 text-white group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </SignInButton>
          </SignedOut>

          <a
            href="#features"
            className="inline-flex items-center justify-center px-6 py-3 bg-slate-800/50 text-indigo-300 border border-indigo-500/20 font-medium rounded-full hover:bg-slate-800/80 transition-colors"
          >
            Learn more
          </a>
        </div>
      </Hero>
      <FeaturesSection />
      <FAQSection />
      <CTASection />
    </Theme>
  );
}

export default Home;
