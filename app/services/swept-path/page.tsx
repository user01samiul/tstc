"use client";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const TrafficControlManagement = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

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

  return (
    <main>
      {/* Hero Section (Black Background) */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center font-opensans">
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC00723.JPG"
            alt="Traffic Control Management and Planning"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-anton uppercase">
              T&S SERVICES <br />
              <span className="text-btn">SWEPT PATH ANALYSIS</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-opensans">
              Accurate swept path analysis to ensure safe vehicle movement through your project
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 bg-btn hover:bg-btn/90 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 font-opensans"
              >
                <FaPhoneAlt className="text-xl" />
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce flex flex-col items-center">
            <div className="w-8 h-12 border-2 border-btn rounded-full flex justify-center">
              <div className="w-1 h-3 bg-btn rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Swept Path Analysis Section (White Background) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              SPA
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              SWEPT PATH <span className="text-btn">ANALYSIS</span>
            </h2>
            <div className="w-24 h-1 bg-btn mx-auto"></div>
          </div>
          <div className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed space-y-6 font-opensans">
            <p>
              Our planning team provides accurate Swept Path Analysis to ensure heavy vehicles and machinery can safely move through work zones, intersections, and tight environments.
            </p>
            <p>
              Using industry-standard modelling software, we simulate vehicle movements to confirm access, turning space, and safety before works begin.
            </p>
            <p className="font-semibold text-gray-800">Our SPA services include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access checks for construction sites and temporary traffic setups</li>
              <li>Verification of vehicle manoeuvres in restricted areas</li>
              <li>Design support for detours, entry/exit points, and turning areas</li>
              <li>Documentation for approvals and engineering submissions</li>
            </ul>
            <p>
              With a precise and experienced design team, we deliver clear swept path reports that help clients reduce risk, avoid delays, and maintain safe vehicle movement on site.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed SPA Services (Black Background, Right Side Image) */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-btn"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                PROFESSIONAL{" "}
                <span className="text-btn">SPA SERVICES</span>
              </h3>
              <div className="space-y-5 text-gray-300 mb-10 font-opensans">
                <p className="leading-relaxed">
                  T&S Traffic Control provides professional swept path analysis
                  services to ensure your project's vehicle movements are safe
                  and compliant. Swept path analysis is essential for assessing
                  how vehicles—especially large or articulated ones—navigate
                  through constrained sites, intersections, or construction zones.
                </p>
                <p className="leading-relaxed">
                  Using advanced software, our experienced team simulates and
                  analyses the turning paths of various vehicles based on their
                  dimensions and your site layout. This process helps identify
                  potential conflicts, clearance issues, and optimises site
                  access for construction, delivery, or emergency vehicles.
                </p>
                <p className="leading-relaxed">
                  Our swept path analysis service includes detailed diagrams and
                  recommendations to ensure compliance with Australian Standards
                  and local authority requirements. We help you minimise risk,
                  avoid costly design changes, and ensure the safety of all road
                  users and workers.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] border-4 border-btn shadow-xl">
              <Image
                src="/DSC00717.JPG"
                alt="Swept Path Analysis"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-btn/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section (White Background, Left Side Image) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] border-4 border-btn shadow-xl">
              <Image
                src="/DSC00949.JPG"
                alt="Get in Touch"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-btn/20 mix-blend-multiply"></div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-btn"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                CONTACT US FOR{" "}
                <span className="text-btn">SWEPT PATH ANALYSIS</span>
              </h3>
              <div className="space-y-5 text-gray-600 mb-10 font-opensans">
                <p className="leading-relaxed">
                  Ready to ensure your project's vehicle movements are safe and
                  compliant? Contact T&S Traffic Control today to discuss your
                  swept path analysis requirements.
                </p>
                <p className="leading-relaxed">
                  Our team is ready to deliver clear, accurate swept path reports
                  that help you reduce risk and maintain safe operations.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-block px-10 py-4 bg-btn text-white font-bold hover:bg-white hover:text-btn transition-all duration-300 border border-btn group relative overflow-hidden font-opensans"
              >
                <span className="relative z-10">GET A QUOTE</span>
                <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (White Background) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              Have Questions?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              FREQUENTLY ASKED <span className="text-btn">QUESTIONS</span>
            </h2>
            <div className="w-24 h-1 bg-btn mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4 mb-10">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200"
                >
                  <button
                    className="w-full flex justify-between items-center p-5 text-left text-gray-900 font-semibold text-base md:text-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openFaqIndex === index}
                    aria-controls={`faq-content-${index}`}
                  >
                    <span>{faq.question}</span>
                    <FaChevronDown
                      className={`text-btn flex-shrink-0 ml-4 transition-transform duration-300 ${
                        openFaqIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    id={`faq-content-${index}`}
                    className="grid transition-all duration-300 ease-in-out"
                    style={{
                      gridTemplateRows: openFaqIndex === index ? '1fr' : '0fr',
                    }}
                  >
                    <div className="overflow-hidden">
                      <div className="p-5 pt-3 text-gray-700 leading-relaxed font-opensans">
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
      <ContactForm/>
    </main>
  );
};

export default TrafficControlManagement;
