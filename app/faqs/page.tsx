"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown, FaPhoneAlt } from "react-icons/fa";
import AnimatedSection from "../components/AnimatedSection";

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
  {
    question: "Do I need a permit for roadworks?",
    answer:
      "Yes, most roadworks affecting public roads require a permit from the relevant authority (council, TfNSW, etc.). This ensures your work is compliant with local regulations and safety standards. Our team can assist with permit applications and all necessary documentation.",
  },
  {
    question: "How quickly can you mobilize traffic controllers?",
    answer:
      "We offer 24/7 emergency response and can typically mobilize traffic controllers within hours of your call. For planned projects, we recommend booking in advance to ensure availability and proper planning.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We service all of NSW, with a primary focus on Greater Sydney and surrounding regions. Our experienced team is equipped to handle projects across metropolitan and regional areas.",
  },
  {
    question: "Are your traffic controllers certified?",
    answer:
      "Yes, all our traffic controllers are fully certified by TfNSW and hold current licenses. They undergo regular training and professional development to maintain the highest standards of safety and compliance.",
  },
  {
    question: "Can you provide traffic management plans?",
    answer:
      "Absolutely. We provide comprehensive traffic management plans (TMP), traffic guidance schemes (TGS), and traffic control plans (TCP) tailored to your specific project requirements. All plans are compliant with RMS TCAWS Manual and AS1742.3 standards.",
  },
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Hero Section - Keep current height */}
      <section className="relative min-h-[350px] md:min-h-[400px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC00810.JPG"
            alt="FAQs Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 w-full max-w-7xl px-5 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-anton uppercase mb-4">
            Frequently Asked <span className="text-btn">Questions</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Find answers to common questions about traffic management, permits,
            and our services.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <AnimatedSection direction="left">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8 animate-element">
              Got Questions? <span className="text-btn">We've Got Answers</span>
            </h2>
            <p
              className="text-lg sm:text-xl leading-relaxed animate-element"
              style={{ color: "#8E8E95" }}
            >
              Whether you're planning a construction project, organizing an event, or need emergency traffic management, we're here to help. Browse our frequently asked questions below, or contact our team for personalized assistance.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden transition-all duration-300 animate-element"
                >
                  <button
                    className="w-full flex justify-between items-center p-6 text-left text-gray-900 font-semibold text-lg hover:bg-gray-50 transition-colors"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-content-${index}`}
                  >
                    <span className="pr-8">{faq.question}</span>
                    <FaChevronDown
                      className={`text-btn flex-shrink-0 transition-transform duration-300 text-xl ${
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
                      <div className="px-6 pb-6 border-t border-gray-100">
                        <div className="pt-6">
                          <div className="w-12 h-px bg-btn mb-4"></div>
                          <p
                            className="text-base leading-relaxed"
                            style={{ color: "#8E8E95" }}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Still Have Questions CTA */}
      <AnimatedSection direction="left">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8 animate-element">
              <div>
                <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Still Have <span className="text-btn">Questions?</span>
                </h2>
                <p
                  className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
                  style={{ color: "#8E8E95" }}
                >
                  Our experienced team is ready to help. Contact us today for personalized advice and solutions tailored to your project needs.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-btn hover:bg-btn/90 text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
                >
                  <FaPhoneAlt className="text-lg" />
                  Contact Us Today
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-3 bg-white border-2 border-btn text-btn hover:bg-btn hover:text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
