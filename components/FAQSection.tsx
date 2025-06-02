"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is generative AI?",
    answer:
      "Generative AI refers to artificial intelligence algorithms that can generate new content such as text, images, audio, and video based on the data they've been trained on. Unlike traditional AI that follows specific rules, generative AI can create original outputs that weren't explicitly programmed.",
  },
  {
    question: "How accurate are the AI responses?",
    answer:
      "Our AI system is designed to provide highly accurate information based on its training data. However, like any AI, it may occasionally provide incomplete or incorrect answers, especially for very recent events or highly specialized topics. We continuously improve the model to enhance accuracy.",
  },
  {
    question: "Can I use this AI for business purposes?",
    answer:
      "Yes! We offer both personal and business plans. Our business plans include additional features like team collaboration, higher usage limits, priority support, and the ability to fine-tune the AI for your specific industry needs.",
  },
  {
    question: "How is my data handled?",
    answer:
      "We take data privacy seriously. Your conversations with the AI are used to improve the service, but personal information is never shared with third parties. You can request data deletion at any time through your account settings. For more details, please review our privacy policy.",
  },
  {
    question: "What types of questions can I ask?",
    answer:
      "You can ask almost anything! Our AI can help with general knowledge questions, technical explanations, creative writing assistance, business advice, language learning, and much more. However, it's designed to refuse inappropriate requests or content generation that could be harmful.",
  },
  {
    question: "Is there a limit to how many questions I can ask?",
    answer:
      "Free accounts have a daily limit of 20 questions. Premium accounts have higher or unlimited usage depending on the subscription tier. Enterprise plans offer customized usage limits based on your organization's needs.",
  },
];

const FAQSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-indigo-950"></div>

      {/* Animated background elements */}
      <div className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 bg-indigo-500/10 rounded-full blur-3xl animate-spin-slow"></div>
      <div
        className="absolute bottom-1/3 -left-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-3xl animate-spin-slow"
        style={{ animationDirection: "reverse" }}
      ></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4">
            <span className="text-sm text-indigo-300">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Get answers to common questions about our AI platform
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-slate-900 rounded-xl border border-indigo-500/20 overflow-hidden">
                <button
                  className="w-full text-left p-5 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium text-white">{faq.question}</span>
                  {expandedIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-indigo-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-indigo-400" />
                  )}
                </button>
                <div
                  className={`px-5 transition-all duration-300 ease-in-out overflow-hidden ${
                    expandedIndex === index ? "max-h-96 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-indigo-200">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
