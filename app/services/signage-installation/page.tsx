"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCheckCircle, FaChevronDown, FaPhoneAlt } from "react-icons/fa";
import AnimatedSection from "../../components/AnimatedSection";

const SignageInstallationPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Signage Services
  const signageServices = [
    {
      title: "Regulatory Signage",
      description:
        "Supply and installation of regulatory signs including No Stopping, Bus Zones, Work Zones, parking restrictions, and speed limits compliant with AS1742 standards.",
    },
    {
      title: "Advisory Signage",
      description:
        "Custom advisory signage for construction sites, roadworks, and temporary traffic changes to guide and inform road users effectively.",
    },
    {
      title: "Temporary Installation",
      description:
        "Rapid deployment of temporary signage for events, construction projects, and emergency road closures with full setup and removal services.",
    },
    {
      title: "Permanent Installation",
      description:
        "Professional permanent street sign installation for councils and developers with post installation, mounting, and reinstatement works.",
    },
  ];

  // What's Included
  const whatsIncluded = [
    "Supply of all regulatory and advisory signs",
    "Professional installation by trained personnel",
    "Site assessments and post installation",
    "Custom project-specific signage design",
    "Temporary and permanent mounting solutions",
    "Maintenance and sign replacement services",
    "Removal of outdated or damaged signs",
    "Full compliance with TfNSW and AS1742 standards",
  ];

  const faqs = [
    {
      question: "What types of signs can you install?",
      answer:
        "We install all types of street signage including regulatory signs (No Stopping, Bus Zones, Work Zones, parking restrictions), advisory signs, temporary construction signs, permanent street signs, and custom project-specific signage. All installations meet TfNSW and AS1742 standards.",
    },
    {
      question: "Do you provide both temporary and permanent signage?",
      answer:
        "Yes, we provide both temporary signage for construction, events, and roadworks, as well as permanent street sign installations for councils and developers. Our team handles everything from initial supply and installation to maintenance and eventual removal.",
    },
    {
      question: "Are your installations compliant with Australian Standards?",
      answer:
        "Absolutely. All signage installations are completed by trained personnel using approved materials and mounting methods that comply with TfNSW requirements and AS1742 Australian Standards. We ensure every sign meets visibility, durability, and compliance requirements.",
    },
    {
      question: "Can you handle council-approved signage projects?",
      answer:
        "Yes, we work directly with councils and developers on approved signage projects. Our team manages site assessments, post installation, mounting works, and reinstatement to ensure full compliance with council specifications and requirements.",
    },
  ];

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC00723.JPG"
            alt="Signage Installation Services"
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
              SIGNAGE <br />
              <span className="text-btn">INSTALLATION</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Professional street signage for temporary and permanent
              applications
            </p>
            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-btn hover:bg-btn/90 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                <FaPhoneAlt className="text-xl" />
                Get a Quote
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
                    Complete Signage <br />
                    <span className="text-btn">Supply & Installation</span>
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
                      src="/DSC00850.JPG"
                      alt="Professional Signage Installation"
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
                    T&S Traffic Control provides{" "}
                    <strong className="text-gray-900">
                      complete street signage installation services
                    </strong>{" "}
                    for both temporary and permanent applications across NSW.
                  </p>
                  <p>
                    Our experienced team handles everything from{" "}
                    <strong className="text-gray-900">
                      council-approved signage projects
                    </strong>{" "}
                    to construction-related and regulatory signage
                    installations, ensuring every sign meets TfNSW and AS1742
                    standards.
                  </p>
                  <p>
                    From supply and installation to maintenance and removal, we
                    deliver compliant, durable, and professional signage
                    solutions that keep road users informed and sites safe.
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
                    src="/DSC00850.JPG"
                    alt="Professional Signage Installation"
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

      {/* Signage Services Section */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Signage <span className="text-btn">Services</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-element">
              {signageServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-btn rounded-full flex items-center justify-center mb-6">
                    <FaCheckCircle className="text-2xl text-white" />
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
                  src="/DSC00726.JPG"
                  alt="Regulatory Signs"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-bold font-anton uppercase">
                      REGULATORY SIGNS
                    </h3>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg group">
                <Image
                  src="/montage/1. Home Page/Services We offer/Signage Installation.png"
                  alt="Advisory Signs"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-bold font-anton uppercase">
                      ADVISORY SIGNS
                    </h3>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg group">
                <Image
                  src="/DSC00723.JPG"
                  alt="Custom Signage"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-bold font-anton uppercase">
                      CUSTOM SIGNAGE
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* What's Included Section */}
      <AnimatedSection direction="right">
        <section
          className="py-20 md:py-24 px-5 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#151623" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                What's <span className="text-btn">Included</span>
              </h2>
              <p className="mt-6 text-lg max-w-3xl mx-auto leading-relaxed text-gray-400">
                Complete signage solutions from supply to maintenance
              </p>
            </div>

            <div className="max-w-4xl mx-auto animate-element">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whatsIncluded.map((item, index) => (
                  <div
                    key={index}
                    className="bg-transparent rounded-2xl p-6 border-2 border-dashed border-white/30 hover:border-btn transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <FaCheckCircle className="text-2xl text-btn" />
                      </div>
                      <p className="text-white text-base leading-relaxed pt-0.5">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Standards Compliance Card */}
            <div className="max-w-2xl mx-auto mt-16 animate-element">
              <div className="bg-transparent rounded-2xl p-8 border-2 border-dashed border-btn">
                <div className="text-center">
                  <FaCheckCircle className="text-4xl text-btn mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-6 font-anton uppercase">
                    Standards Compliance
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    All installations are completed by trained personnel using
                    approved materials and mounting methods to ensure
                    durability, visibility, and compliance with{" "}
                    <span className="text-btn font-semibold">
                      TfNSW and AS1742 Australian Standards
                    </span>
                    .
                  </p>
                </div>
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
                    src="/DSC00726.JPG"
                    alt="Professional Signage Services"
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
                    Need Professional <br />
                    <span className="text-btn">Signage Installation?</span>
                  </h2>
                </div>

                <div
                  className="space-y-6 text-lg leading-relaxed"
                  style={{ color: "#8E8E95" }}
                >
                  <p>
                    Contact T&S Traffic Control today for{" "}
                    <strong className="text-gray-900">
                      compliant, durable, and professional signage solutions
                    </strong>
                    .
                  </p>
                  <p>
                    Our team is ready to handle all your temporary and permanent
                    signage needs, from regulatory and advisory signs to custom
                    project-specific installations.
                  </p>
                </div>

                <div className="pt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 bg-btn hover:bg-btn/90 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
                  >
                    Get Started
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
                        gridTemplateRows:
                          openFaqIndex === index ? "1fr" : "0fr",
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

export default SignageInstallationPage;
