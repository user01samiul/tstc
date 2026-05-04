"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaCheckCircle,
  FaChevronDown,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import AnimatedSection from "../../components/AnimatedSection";

const PermitApplicationPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Permit Services
  const permitServices = [
    {
      title: "Road Occupancy Licences (ROLs)",
      description:
        "Complete ROL application preparation and submission through Transport for NSW (TfNSW), including Traffic Management Plan coordination and compliance documentation.",
    },
    {
      title: "Council Permits",
      description:
        "Council road occupancy permits, local road access approvals, footpath closures, works zones, and parking bay suspensions across NSW councils.",
    },
    {
      title: "Bus Approvals",
      description:
        "Coordination with bus operators and transport authorities for works affecting bus routes, temporary bus stop relocations, and bus lane closures.",
    },
    {
      title: "Police & Event Permits",
      description:
        "Police notifications for emergency and planned works, event traffic permits, and coordination with emergency services for critical projects.",
    },
  ];

  // What We Handle
  const servicesWeHandle = [
    "Complete application preparation and submission",
    "Traffic Management Plan coordination",
    "Liaison with TfNSW and council representatives",
    "Approval tracking and follow-up communications",
    "Compliance documentation and record keeping",
    "Footpath and parking bay suspensions",
    "Hoarding and scaffolding permits",
    "Utility and third-party authority clearances",
  ];

  const faqs = [
    {
      question: "What is a Road Occupancy Licence (ROL)?",
      answer:
        "A Road Occupancy Licence (ROL) is a permit issued by Transport for NSW (TfNSW) that allows you to occupy part of a classified road for construction, maintenance, or events. ROLs are required for works on state roads and major highways, and must be obtained before works can commence.",
    },
    {
      question: "How long does the permit approval process take?",
      answer:
        "Approval timeframes vary depending on the authority and complexity of works. TfNSW ROLs typically take 10-15 business days for standard applications. Council permits range from 5-10 business days. Complex or high-risk applications may require additional time. We work to expedite all applications and keep you informed throughout the process.",
    },
    {
      question: "Do you handle urgent or emergency permit applications?",
      answer:
        "Yes, we provide 24/7 emergency permit services for urgent works. Our established relationships with road authorities enable us to fast-track applications when required. Contact us anytime on 1300 008 782 for urgent permit requirements.",
    },
    {
      question: "What councils do you work with?",
      answer:
        "We have established relationships with councils throughout NSW, including all Sydney metropolitan councils and regional councils. Our team understands each council's unique requirements and submission processes, enabling efficient applications regardless of location.",
    },
  ];

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[350px] md:min-h-[400px] w-full flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC00732.JPG"
            alt="Permit Application Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl px-5 sm:px-6 lg:px-8 text-center">
          <div className="text-white space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight font-anton uppercase">
              PERMIT <span className="text-btn">APPLICATIONS</span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Navigating approvals can be time-consuming — we take care of it
              for you
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
                    Approvals & Permits <br />
                    <span className="text-btn">Managed For You</span>
                  </h2>
                </div>

                {/* Image - Mobile Only */}
                <div className="relative animate-element lg:hidden">
                  <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg">
                    <Image
                      src="/3.webp"
                      alt="Permit Application Services"
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
                    Our team manages the{" "}
                    <strong className="text-gray-900">
                      complete submission and approval process
                    </strong>{" "}
                    for Road Occupancy Licences (ROLs), council permits, bus
                    approvals, police notifications, and utility clearances.
                  </p>
                  <p>
                    With{" "}
                    <strong className="text-gray-900">
                      established relationships across multiple NSW councils and
                      road authorities
                    </strong>
                    , T&S ensures your paperwork is handled efficiently, keeping
                    your project on schedule and compliant.
                  </p>
                  <p>
                    From initial application to final approval, we handle all
                    liaison, tracking, and documentation so you can focus on
                    your project.
                  </p>
                </div>
              </div>

              {/* Right: Image - Desktop Only */}
              <div className="relative animate-element hidden lg:block">
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg">
                  <Image
                    src="/3.webp"
                    alt="Permit Application Services"
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

      {/* Permit Services Section */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Permits & Approvals <span className="text-btn">We Manage</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-element">
              {permitServices.map((service, index) => (
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
                  src="/DSC00949.JPG"
                  alt="Applications"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-bold font-anton uppercase">
                      APPLICATIONS
                    </h3>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg group">
                <Image
                  src="/DSC00862.JPG"
                  alt="Approvals"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-bold font-anton uppercase">
                      APPROVALS
                    </h3>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg group">
                <Image
                  src="/DSC00732.JPG"
                  alt="Compliance"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-bold font-anton uppercase">
                      COMPLIANCE
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* What We Handle Section */}
      <AnimatedSection direction="right">
        <section
          className="py-20 md:py-24 px-5 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#151623" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                What We <span className="text-btn">Handle</span>
              </h2>
              <p className="mt-6 text-lg max-w-3xl mx-auto leading-relaxed text-gray-400">
                Comprehensive permit management from application to approval
              </p>
            </div>

            <div className="max-w-4xl mx-auto animate-element">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {servicesWeHandle.map((item, index) => (
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

            {/* Contact Info Card */}
            <div className="max-w-2xl mx-auto mt-16 animate-element">
              <div className="bg-transparent rounded-2xl p-8 border-2 border-dashed border-btn">
                <div className="text-center">
                  <FaEnvelope className="text-4xl text-btn mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-6 font-anton uppercase">
                    Contact Our Permit Team
                  </h3>
                  <div className="space-y-3 text-white mb-6">
                    <p>
                      <span className="font-semibold">Permits Email:</span>{" "}
                      <a
                        href="mailto:Plans@tstc.com.au"
                        className="text-btn hover:underline"
                      >
                        Plans@tstc.com.au
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold">Phone:</span>{" "}
                      <a
                        href="tel:+611300008782"
                        className="text-btn hover:underline"
                      >
                        1300 008 782
                      </a>
                    </p>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Available 24/7 for emergency permit requirements
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
                    alt="Streamline Your Permits"
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
                    Streamline Your <br />
                    <span className="text-btn">Permit Process</span>
                  </h2>
                </div>

                <div
                  className="space-y-6 text-lg leading-relaxed"
                  style={{ color: "#8E8E95" }}
                >
                  <p>
                    Ready to streamline your permit process?{" "}
                    <strong className="text-gray-900">
                      Contact our permit specialists
                    </strong>{" "}
                    today and let us handle all approvals, tracking, and
                    documentation for your project.
                  </p>
                  <p>
                    With established relationships across NSW road authorities
                    and councils, we ensure efficient processing and keep your
                    project on schedule.
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

export default PermitApplicationPage;
