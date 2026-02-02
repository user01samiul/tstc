"use client";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const ServicesPage = () => {
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
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center font-opensans">
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC00810.JPG"
            alt="Services We Offer"
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
              <span className="text-btn">WE OFFER</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-opensans">
              Complete traffic management solutions from design to implementation
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

      {/* Introduction Section */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              SERVICES <span className="text-btn">WE OFFER</span>
            </h2>
            <div className="w-24 h-1 bg-btn mx-auto"></div>
          </div>
          <div className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed space-y-6 font-opensans">
            <p>
              At T&S Traffic Control, we provide a complete range of traffic management services ranging from initial design and planning to on-site implementation and compliance. Whether it's a one-day utility job or a multi-stage infrastructure project, our team delivers safe, efficient, and fully compliant solutions tailored to your site conditions.
            </p>
            <p>
              We work closely with builders, civil contractors, utility providers, and local councils across NSW to keep worksites safe and traffic flowing.
            </p>
          </div>
        </div>
      </section>

      {/* Traffic Planning Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-white font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              Traffic Planning
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              PLANNING & <span className="text-btn">DESIGN SERVICES</span>
            </h2>
            <div className="w-24 h-1 bg-btn mx-auto"></div>
          </div>

          {/* TGS Section */}
          <div className="mb-16 bg-white/5 p-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-6 font-anton uppercase">
              TRAFFIC GUIDANCE <span className="text-btn">SCHEMES (TGS)</span>
            </h3>
            <div className="text-gray-300 text-lg leading-relaxed space-y-4 font-opensans">
              <p>
                Our in-house design team develops <strong>Traffic Guidance Schemes</strong> that comply with <strong>TfNSW (RMS) and AS1742.3 standards</strong>, ensuring safety and practicality for every site.
              </p>
              <p>
                Each TGS is designed with real-world application in mind- balancing the needs of workers, motorists, and pedestrians. We assess traffic volumes, road geometry, and environmental factors to create layouts that are both compliant and efficient.
              </p>
              <p className="font-semibold text-white">Our TGS services include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Detailed traffic control plans using professional software</li>
                <li>Custom designs for roadworks, lane closures, shoulder works, and intersections</li>
                <li>Multi-stage and long-term layouts for civil and infrastructure projects</li>
                <li>Night works, event management, and complex staging designs</li>
                <li>Fast turnarounds for emergency and short-notice works</li>
              </ul>
            </div>
          </div>

          {/* TMP Section */}
          <div className="mb-16 bg-white/5 p-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-6 font-anton uppercase">
              TRAFFIC MANAGEMENT <span className="text-btn">PLANS (TMP)</span>
            </h3>
            <div className="text-gray-300 text-lg leading-relaxed space-y-4 font-opensans">
              <p>
                We prepare <strong>Traffic Management Plans</strong> that outline the methodology, risk controls, and communication procedures for managing traffic impacts.
              </p>
              <p>
                Our TMPs are developed in accordance with <strong>TfNSW's Traffic Control at Work Sites (TCAWS) manual</strong> and are tailored to meet council and state authority requirements.
              </p>
              <p className="font-semibold text-white">We handle:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full TMP documentation and supporting risk and safety assessments</li>
                <li>Impact analysis and mitigation strategies</li>
                <li>Site-specific access and detour management</li>
                <li>Pedestrian and cyclist management</li>
                <li>Coordination with local councils, TfNSW, and emergency services</li>
              </ul>
              <p>
                By managing the full TMP process, we ensure your works proceed safely, efficiently, and with minimal disruption to the public.
              </p>
            </div>
          </div>

          {/* SPA Section */}
          <div className="bg-white/5 p-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-6 font-anton uppercase">
              SWEPT PATH <span className="text-btn">ANALYSIS (SPA)</span>
            </h3>
            <div className="text-gray-300 text-lg leading-relaxed space-y-4 font-opensans">
              <p>
                Our planning team provides accurate Swept Path Analysis to ensure heavy vehicles and machinery can safely move through work zones, intersections, and tight environments.
              </p>
              <p>
                Using industry-standard modelling software, we simulate vehicle movements to confirm access, turning space, and safety before works begin.
              </p>
              <p className="font-semibold text-white">Our SPA services include:</p>
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
        </div>
      </section>

      {/* Visual Section with Images */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative h-[400px] border-4 border-btn shadow-xl rounded-lg overflow-hidden group">
              <Image
                src="/DSC00844.JPG"
                alt="Traffic Planning Services"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-bold font-anton">TRAFFIC PLANNING</h3>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] border-4 border-btn shadow-xl rounded-lg overflow-hidden group">
              <Image
                src="/DSC00717.JPG"
                alt="On-site Implementation"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-bold font-anton">IMPLEMENTATION</h3>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] border-4 border-btn shadow-xl rounded-lg overflow-hidden group">
              <Image
                src="/DSC00850.JPG"
                alt="Compliance & Safety"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-bold font-anton">COMPLIANCE</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-btn"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                PARTNER WITH <span className="text-btn">T&S TRAFFIC CONTROL</span>
              </h3>
              <div className="space-y-5 text-gray-300 mb-10 font-opensans">
                <p className="leading-relaxed">
                  Ready to ensure your project's success with comprehensive traffic management services? Contact T&S Traffic Control to discuss your specific requirements.
                </p>
                <p className="leading-relaxed">
                  Our team is ready to deliver safe, efficient, and fully compliant solutions tailored to your site conditions.
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
            <div className="relative h-[500px] border-4 border-btn shadow-xl">
              <Image
                src="/DSC00811.JPG"
                alt="Contact T&S Traffic Control"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-btn/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
      <ContactForm />
    </main>
  );
};

export default ServicesPage;
