"use client";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    question: "What is a TGS or TCP",
    answer:
      "A TGS (Traffic Guidance Scheme) is a detailed plan that outlines how traffic will be managed around a worksite or event. A TCP (Traffic Control Plan) serves a similar purpose, providing specific instructions for managing traffic flow during roadworks, construction, or events that impact normal traffic conditions.",
  },
  {
    question: "What is a TMP or CTMP",
    answer:
      "A TMP (Traffic Management Plan) is a comprehensive document that outlines how traffic will be safely managed during construction or events. A CTMP (Construction Traffic Management Plan) is a specialized TMP required when construction activities impact public roads, footpaths, or traffic flow. Both plans ensure safety and compliance with road authority requirements.",
  },
  {
    question: "What is a ROL",
    answer:
      "A ROL (Road Occupancy Licence) is a permit issued by the relevant road authority that allows you to occupy part of a road or lane for construction, maintenance, or events. You need a ROL whenever your activities require the use of public road space.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-32 px-5 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Title and Description */}
          <div className="space-y-6 animate-element">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight text-black">
              Frequently Asked <span className="text-btn">Questions</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-black leading-relaxed">
              Have questions about traffic management? Find quick answers to
              common queries about our services, permits, and plans.
            </p>
            <Link
              href="/faqs"
              className="inline-flex items-center justify-center bg-btn hover:bg-btn/90 text-white px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <FaQuestionCircle className="mr-3 text-xl" />
              View All FAQs
            </Link>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="space-y-4 animate-element">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left text-black font-semibold text-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-content-${index}`}
                >
                  <span>{faq.question}</span>
                  <FaChevronDown
                    className={`text-btn flex-shrink-0 ml-4 transition-transform duration-300 text-xl ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id={`faq-content-${index}`}
                  className="grid transition-all duration-300 ease-in-out"
                  style={{
                    gridTemplateRows: openIndex === index ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-black text-base md:text-lg leading-relaxed">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
