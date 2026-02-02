'use client';

import { useRef, useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-20 px-5 sm:px-6 lg:px-8 bg-gradient-to-br from-black/5 to-black/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq }: { faq: FAQ }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-white rounded-2xl border border-black/10 overflow-hidden transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between cursor-pointer hover:bg-black/5 transition-colors"
      >
        <span className="text-xl font-bold text-black pr-8">{faq.question}</span>
        <svg
          className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
        }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <p className="px-6 pb-6 text-lg text-black/80 leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}
