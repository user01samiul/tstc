"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaCheckCircle, FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import AnimatedSection from "../../components/AnimatedSection";

const AccreditedTCPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Personnel Services
  const personnelServices = [
    {
      title: "Traffic Controllers (TCs)",
      description:
        "Highly trained professionals ensuring safe and efficient traffic management for all project scales, equipped with current TfNSW accreditation.",
    },
    {
      title: "Team Leaders & Supervisors",
      description:
        "Experienced leaders coordinating operations, managing teams on-site, and ensuring compliance with industry standards and project requirements.",
    },
    {
      title: "TMA Operators",
      description:
        "Skilled Truck-Mounted Attenuator operators with Heavy Rigid licenses and TfNSW accreditation for complex traffic scenarios on high-speed roads.",
    },
    {
      title: "Project Supervisors",
      description:
        "Senior personnel overseeing multiple sites, conducting audits, and maintaining direct communication with stakeholders and authorities.",
    },
  ];

  // What Our Personnel Bring
  const personnelBenefits = [
    "Current TfNSW traffic control accreditations",
    "Full safety inductions and site-specific training",
    "Professional uniforms and high-visibility PPE",
    "Comprehensive site equipment and tools",
    "Strong communication and safety awareness",
    "Experience across construction and civil projects",
    "Reliable attendance and professional conduct",
    "Commitment to T&S standards and values",
  ];

  const faqs = [
    {
      question: "Are your traffic controllers accredited?",
      answer:
        "Yes, all our traffic controllers hold current TfNSW accreditations (Blue Card or Yellow Card). They undergo regular training, site-specific inductions, and are equipped with full PPE and uniforms. Our personnel are experienced professionals committed to maintaining the highest standards of safety and professionalism.",
    },
    {
      question: "What's the difference between TCs, Team Leaders, and TMA Operators?",
      answer:
        "Traffic Controllers (TCs) manage traffic flow and implement traffic control plans on-site. Team Leaders coordinate multiple TCs and oversee site operations. TMA Operators hold Heavy Rigid licenses and specialized TfNSW accreditation to operate Truck-Mounted Attenuators on high-speed roads. We match the right personnel to your project requirements.",
    },
    {
      question: "Can you provide personnel for short-term or urgent works?",
      answer:
        "Absolutely. We maintain a team of trained personnel available for short-notice and emergency deployments. Our 24/7 operations centre can mobilize crews rapidly to meet urgent project requirements across NSW. Call 1300 008 782 for immediate personnel needs.",
    },
    {
      question: "Do you provide personnel for long-term projects?",
      answer:
        "Yes, we supply dedicated traffic control personnel for long-term construction, infrastructure, and maintenance projects. Our team members are reliable, professional, and committed to consistent site attendance. We can provide individual personnel or complete crews depending on your project needs.",
    },
  ];

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/montage/3. Services We Offer/Acreditted TC/1.png"
            alt="Accredited Traffic Control Personnel"
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
              ACCREDITED TRAFFIC <br />
              <span className="text-btn">CONTROL PERSONNEL</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Our people are the backbone of our operation
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
                    Trained & Accredited <br />
                    <span className="text-btn">Traffic Control Teams</span>
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
                      src="/montage/3. Services We Offer/Acreditted TC/2.JPG"
                      alt="Traffic Control Personnel"
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
                    Our people are the backbone of our operation. We supply{" "}
                    <strong className="text-gray-900">
                      highly trained and accredited traffic management personnel
                    </strong>{" "}
                    to suit any scale of work across NSW.
                  </p>
                  <p>
                    Each team member is{" "}
                    <strong className="text-gray-900">
                      equipped, uniformed, and committed
                    </strong>{" "}
                    to upholding the highest standards of safety and
                    professionalism. With a strong focus on reliability,
                    communication, and site awareness, our crews represent T&S
                    with pride on every project.
                  </p>
                  <p>
                    From standard traffic control to complex TMA operations, we
                    have the expertise and personnel to ensure your project runs{" "}
                    <strong className="text-gray-900">
                      safely and efficiently
                    </strong>
                    .
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
                    src="/montage/3. Services We Offer/Acreditted TC/2.JPG"
                    alt="Traffic Control Personnel"
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

      {/* Personnel Services Section */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Available Roles & <span className="text-btn">Services</span>
              </h2>
              <p
                className="mt-6 text-lg max-w-3xl mx-auto leading-relaxed"
                style={{ color: "#8E8E95" }}
              >
                Professional traffic control personnel for every project requirement
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-element">
              {personnelServices.map((service, index) => (
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
                  src="/montage/1. Home Page/Services We offer/Accredited TC.JPG"
                  alt="Professional Personnel"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-bold font-anton uppercase">
                      PROFESSIONAL
                    </h3>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg group">
                <Image
                  src="/montage/2. About Us/Our Values/Taj Safety Check.JPG"
                  alt="Trained Personnel"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-bold font-anton uppercase">
                      TRAINED
                    </h3>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg group">
                <Image
                  src="/montage/3. Services We Offer/Site Risk Assesment/Team Photo.JPG"
                  alt="Experienced Personnel"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-bold font-anton uppercase">
                      EXPERIENCED
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Personnel Benefits Section */}
      <AnimatedSection direction="right">
        <section
          className="py-20 md:py-24 px-5 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#151623" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                What Our Personnel <span className="text-btn">Bring</span>
              </h2>
              <p className="mt-6 text-lg max-w-3xl mx-auto leading-relaxed text-gray-400">
                Fully equipped, trained, and committed professionals on every site
              </p>
            </div>

            <div className="max-w-4xl mx-auto animate-element">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {personnelBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-transparent rounded-2xl p-6 border-2 border-dashed border-white/30 hover:border-btn transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <FaCheckCircle className="text-2xl text-btn" />
                      </div>
                      <p className="text-white text-base leading-relaxed pt-0.5">
                        {benefit}
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
                    src="/montage/3. Services We Offer/Acreditted TC/3.png"
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
                    Ready For Professional <br />
                    <span className="text-btn">Traffic Control?</span>
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
                    for accredited, professional personnel who deliver safe,
                    reliable service on every project.
                  </p>
                  <p>
                    Our team is ready to support your project from planning
                    through to completion. Contact us today to discuss your
                    personnel requirements or request a quote.
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

export default AccreditedTCPage;
