"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Link from "next/link";

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

const FAQsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 font-opensans bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 font-anton uppercase">
          FAQs
        </h2>
        <div className="space-y-4 mb-10">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left text-gray-900 font-semibold text-base md:text-lg hover:bg-gray-100 transition-colors cursor-pointer"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <span>{faq.question}</span>
                <FaChevronDown
                  className={`text-btn flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                id={`faq-content-${index}`}
                className="grid transition-all duration-300 ease-in-out"
                style={{
                  gridTemplateRows: openIndex === index ? '1fr' : '0fr',
                }}
              >
                <div className="overflow-hidden">
                  <div className="p-5 pt-3 text-gray-700 leading-relaxed">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
