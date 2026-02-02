"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaCheckCircle, FaChevronDown, FaTruck, FaShieldAlt, FaCertificate } from "react-icons/fa";
import { useState } from "react";
import AnimatedSection from "../../components/AnimatedSection";

const TMAOperatorsPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // TMA Operator Services
  const tmaServices = [
    {
      title: "Impact Protection",
      description:
        "Skilled TMA operators providing critical impact protection for work crews on high-speed roads, freeways, and complex traffic environments.",
    },
    {
      title: "Mobile Operations",
      description:
        "Expert operation of mobile lane closures and rolling roadblocks for works requiring continuous traffic management along highway corridors.",
    },
    {
      title: "TfNSW Compliance",
      description:
        "All TMA operators hold current TfNSW TMA accreditation, Heavy Rigid licenses, and complete regular competency assessments.",
    },
    {
      title: "Safety Coordination",
      description:
        "Professional coordination with traffic controllers, project teams, and emergency services to ensure safe operations in high-risk work zones.",
    },
  ];

  // TMA Operator Requirements
  const tmaRequirements = [
    "Current TfNSW TMA operator accreditation",
    "Heavy Rigid (HR) driver's license",
    "Traffic control (Yellow or Blue Card)",
    "Extensive experience on high-speed roads",
    "Emergency response training",
    "Clear communication and coordination skills",
    "Understanding of TMA deployment procedures",
    "Commitment to safety and professionalism",
  ];

  const faqs = [
    {
      question: "What is a Truck-Mounted Attenuator (TMA)?",
      answer:
        "A Truck-Mounted Attenuator (TMA) is a specialized safety device mounted on the rear of a truck that absorbs impact energy if a vehicle collides with the work zone. TMAs are required for works on high-speed roads (speeds above 80 km/h) to provide critical protection for workers and reduce the severity of rear-end collisions. They're essential for freeway and highway works.",
    },
    {
      question: "What qualifications do TMA operators need?",
      answer:
        "TMA operators must hold a Heavy Rigid (HR) driver's license, current TfNSW TMA operator accreditation, and traffic control accreditation (Yellow or Blue Card). They undergo specialized training in TMA deployment, emergency procedures, and high-speed road operations. All our TMA operators have extensive experience and regular competency assessments.",
    },
    {
      question: "When is a TMA required for my project?",
      answer:
        "TMAs are generally required for works on roads with speed limits above 80 km/h, including freeways, highways, and motorways. They're mandated by TfNSW for specific work types and conditions outlined in the TCAWS manual. If your project involves high-speed roads or has been identified as requiring impact protection, a TMA will be necessary. We can assess your requirements.",
    },
    {
      question: "Can you provide TMA operators for emergency works?",
      answer:
        "Yes, our 24/7 operations include TMA operator availability for emergency and urgent works on high-speed roads. Our experienced TMA operators can deploy rapidly to provide impact protection for incident management, emergency repairs, and after-hours works. Call 1300 008 782 for immediate TMA operator requirements.",
    },
  ];

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC00810.JPG"
            alt="TMA Operators"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl px-5 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center text-white space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-anton uppercase">
              TRUCK-MOUNTED ATTENUATOR <br />
              <span className="text-btn">OPERATORS (TMA)</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Skilled operators providing critical impact protection for high-speed road works
            </p>
            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-btn hover:bg-btn/90 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                <FaPhoneAlt className="text-xl" />
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <AnimatedSection direction="left">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              {/* Left: Content */}
              <div className="space-y-8 animate-element">
                <div>
                  <div className="w-16 h-1 bg-btn mb-6"></div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Accredited TMA Operators <br />
                    <span className="text-btn">For High-Speed Roads</span>
                  </h2>
                </div>

                {/* Image - Mobile Only */}
                <div className="relative animate-element lg:hidden">
                  <div
                    className="relative w-full aspect-[4/5] overflow-hidden"
                    style={{
                      borderRadius: "40% 60% 60% 40% / 60% 40% 60% 40%",
                    }}
                  >
                    <Image
                      src="/DSC00723.JPG"
                      alt="TMA Operations"
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                </div>

                <div
                  className="space-y-6 text-lg leading-relaxed"
                  style={{ color: "#8E8E95" }}
                >
                  <p>
                    Our{" "}
                    <strong className="text-gray-900">
                      TfNSW-accredited TMA operators
                    </strong>{" "}
                    provide critical impact protection for works on freeways,
                    highways, and high-speed roads across NSW. Each operator holds
                    a Heavy Rigid license and specialized TMA accreditation.
                  </p>
                  <p>
                    With{" "}
                    <strong className="text-gray-900">
                      extensive experience in high-risk traffic environments
                    </strong>
                    , our TMA operators understand the complexities of freeway
                    works, mobile operations, and emergency response situations.
                  </p>
                  <p>
                    From stationary shadow vehicles to mobile lane closures, our
                    TMA operators deliver{" "}
                    <strong className="text-gray-900">
                      professional, safety-focused service
                    </strong>{" "}
                    that protects workers and maintains traffic flow.
                  </p>
                </div>
              </div>

              {/* Right: Image - Desktop Only */}
              <div className="relative animate-element hidden lg:block">
                <div
                  className="relative w-full aspect-[4/5] overflow-hidden"
                  style={{
                    borderRadius: "40% 60% 60% 40% / 60% 40% 60% 40%",
                  }}
                >
                  <Image
                    src="/DSC00723.JPG"
                    alt="TMA Operations"
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* TMA Services Section */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                TMA Operator <span className="text-btn">Services</span>
              </h2>
              <p
                className="mt-6 text-lg max-w-3xl mx-auto leading-relaxed"
                style={{ color: "#8E8E95" }}
              >
                Professional impact protection for high-speed road works
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-element">
              {tmaServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-btn rounded-full flex items-center justify-center mb-6">
                    {index === 0 && <FaShieldAlt className="text-2xl text-white" />}
                    {index === 1 && <FaTruck className="text-2xl text-white" />}
                    {index === 2 && <FaCertificate className="text-2xl text-white" />}
                    {index === 3 && <FaCheckCircle className="text-2xl text-white" />}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-anton uppercase">
                    {service.title}
                  </h3>
                  <div className="w-12 h-px bg-btn mb-4"></div>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "#8E8E95" }}
                  >
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Visual Divider Section */}
      <AnimatedSection direction="left">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-element">
              <div className="relative aspect-square overflow-hidden rounded-lg group">
                <Image
                  src="/DSC00810.JPG"
                  alt="Protection"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-bold font-anton uppercase">
                      PROTECTION
                    </h3>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg group">
                <Image
                  src="/DSC00723.JPG"
                  alt="Expertise"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-bold font-anton uppercase">
                      EXPERTISE
                    </h3>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg group">
                <Image
                  src="/DSC00847.JPG"
                  alt="Safety"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-bold font-anton uppercase">
                      SAFETY
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* TMA Requirements Section */}
      <AnimatedSection direction="right">
        <section
          className="py-20 md:py-24 px-5 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#151623" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                TMA Operator <span className="text-btn">Qualifications</span>
              </h2>
              <p className="mt-6 text-lg max-w-3xl mx-auto leading-relaxed text-gray-400">
                Fully licensed and accredited professionals for high-risk operations
              </p>
            </div>

            <div className="max-w-4xl mx-auto animate-element">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tmaRequirements.map((requirement, index) => (
                  <div
                    key={index}
                    className="bg-transparent rounded-2xl p-6 border-2 border-dashed border-white/30 hover:border-btn transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <FaCheckCircle className="text-2xl text-btn" />
                      </div>
                      <p className="text-white text-base leading-relaxed pt-0.5">
                        {requirement}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection direction="left">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              {/* Left: Image */}
              <div className="relative animate-element order-2 lg:order-1">
                <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/DSC00810.JPG"
                    alt="Contact Us"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Right: Content */}
              <div className="space-y-8 animate-element order-1 lg:order-2">
                <div>
                  <div className="w-16 h-1 bg-btn mb-6"></div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Need TMA Operators <br />
                    <span className="text-btn">For Your Project?</span>
                  </h2>
                </div>

                <div
                  className="space-y-6 text-lg leading-relaxed"
                  style={{ color: "#8E8E95" }}
                >
                  <p>
                    Partner with{" "}
                    <strong className="text-gray-900">
                      T&S Traffic Control
                    </strong>{" "}
                    for experienced TMA operators who provide critical impact
                    protection and ensure safe operations on high-speed roads.
                  </p>
                  <p>
                    Our qualified TMA operators are ready to support your freeway,
                    highway, and motorway projects. Contact us today to discuss
                    your requirements or request a quote.
                  </p>
                </div>

                <div className="pt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 bg-btn hover:bg-btn/90 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
                  >
                    Get A Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Frequently Asked <span className="text-btn">Questions</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto animate-element">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg overflow-hidden"
                  >
                    <button
                      className="w-full flex justify-between items-center p-6 text-left text-gray-900 font-semibold text-lg hover:bg-gray-50 transition-colors cursor-pointer"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={openFaqIndex === index}
                      aria-controls={`faq-content-${index}`}
                    >
                      <span>{faq.question}</span>
                      <FaChevronDown
                        className={`text-btn flex-shrink-0 ml-4 transition-transform duration-300 ${
                          openFaqIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      id={`faq-content-${index}`}
                      className="grid transition-all duration-300 ease-in-out"
                      style={{
                        gridTemplateRows: openFaqIndex === index ? "1fr" : "0fr",
                      }}
                    >
                      <div className="overflow-hidden">
                        <div
                          className="p-6 pt-0 leading-relaxed"
                          style={{ color: "#8E8E95" }}
                        >
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
      </AnimatedSection>
    </div>
  );
};

export default TMAOperatorsPage;
