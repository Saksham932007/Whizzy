import React from "react";
import FeatureCard from "./../../components/FeatureCard";
import { Feature } from "./../types";

const features: Feature[] = [
  {
    id: "1",
    title: "Advanced Natural Language Processing",
    description:
      "Our AI understands context, nuance, and intent to provide meaningful responses to complex questions.",
    icon: "brain",
  },
  {
    id: "2",
    title: "Conversational Interface",
    description:
      "Engage in natural back-and-forth conversations that flow seamlessly like talking to a human expert.",
    icon: "messages",
  },
  {
    id: "3",
    title: "Data-Driven Insights",
    description:
      "Get answers backed by vast amounts of data, analyzed and synthesized for your specific needs.",
    icon: "chart",
  },
  {
    id: "4",
    title: "Content Generation",
    description:
      "Create drafts, summaries, and creative content with AI assistance that adapts to your style.",
    icon: "document",
  },
  {
    id: "5",
    title: "Privacy-Focused Design",
    description:
      "Your conversations and data are protected with enterprise-grade security and privacy controls.",
    icon: "security",
  },
  {
    id: "6",
    title: "Blazing Fast Responses",
    description:
      "Get immediate answers with our optimized models that deliver high performance without sacrificing quality.",
    icon: "performance",
  },
  {
    id: "7",
    title: "Multilingual Support",
    description:
      "Communicate in over 50 languages with accurate translation and culturally appropriate responses.",
    icon: "globe",
  },
  {
    id: "8",
    title: "API Integration",
    description:
      "Easily integrate our AI capabilities into your existing applications with our developer-friendly API.",
    icon: "code",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-indigo-950"></div>

      {/* Animated orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-spin-slow"></div>
      <div
        className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-spin-slow"
        style={{ animationDirection: "reverse" }}
      ></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4">
            <span className="text-sm text-indigo-300">Powerful Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
            AI That Works Like Magic
          </h2>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Experience the next generation of AI with features that transform
            how you work and create
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="transform hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
