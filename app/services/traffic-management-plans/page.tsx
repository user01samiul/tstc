"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import AnimatedSection from "../../components/AnimatedSection";
import VisualDividerSection from "../../components/VisualDividerSection";

const TrafficManagementPlansPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // TMP Process Steps
  const tmpProcess = [
    {
      step: "01",
      title: "Consultation",
      description:
        "Thorough assessment of your project's scope, site layout, and safety requirements.",
    },
    {
      step: "02",
      title: "Custom Design",
      description:
        "Expert planning using advanced tools to create clear, compliant TMPs including signage and traffic flow strategies.",
    },
    {
      step: "03",
      title: "Implementation",
      description:
        "Professional setup and ongoing management with real-time adjustments to keep your site safe.",
    },
    {
      step: "04",
      title: "Compliance",
      description:
        "All plans developed in accordance with TCAWS Manual and Australian Standards.",
    },
  ];

  // TMP Benefits
  const tmpBenefits = [
    "Minimise risk and enhance safety for all site users",
    "Ensure compliance with all regulatory requirements",
    "Reduce project delays and costly disruptions",
    "Clear communication and coordination for stakeholders",
    "Support for permit applications and council approvals",
    "Full risk assessment and hazard identification",
    "Pedestrian and cyclist management strategies",
    "24/7 support for ongoing project requirements",
  ];

  const faqs = [
    {
      question: "What is a TMP or CTMP?",
      answer:
        "A TMP (Traffic Management Plan) is a comprehensive document that outlines how traffic will be safely managed during construction or events. A CTMP (Construction Traffic Management Plan) is a specialized TMP required when construction activities impact public roads, footpaths, or traffic flow. Both plans ensure safety and compliance with road authority requirements.",
    },
    {
      question: "Do I need a TMP for my project?",
      answer:
        "If your project impacts public roads, footpaths, or traffic flow, you'll typically need a TMP. This includes construction sites, roadworks, utility works, and events. Most councils and road authorities require an approved TMP before works can commence, especially for larger or more complex projects.",
    },
    {
      question: "What's included in a TMP?",
      answer:
        "A TMP includes detailed methodology, risk controls, communication procedures, traffic staging plans, detour management, pedestrian/cyclist provisions, signage requirements, and coordination with authorities. It outlines how traffic impacts will be managed from project start to completion.",
    },
    {
      question: "How long does TMP preparation take?",
      answer:
        "Standard TMP preparation typically takes 5-7 business days depending on project complexity. For urgent works, we can provide expedited services. Complex multi-stage projects or those requiring extensive stakeholder consultation may require additional time.",
    },
  ];

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC00732.JPG"
            alt="Traffic Management Plans"
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
              TRAFFIC MANAGEMENT <br />
              <span className="text-btn">PLANS (TMP)</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Comprehensive traffic management plans ensuring safety,
              compliance, and efficiency
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
                    Comprehensive TMPs <br />
                    <span className="text-btn">For Every Project</span>
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
                      src="/DSC00949.JPG"
                      alt="Traffic Management Plan Services"
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
                    We prepare{" "}
                    <strong className="text-gray-900">
                      Traffic Management Plans
                    </strong>{" "}
                    that outline the methodology, risk controls, and
                    communication procedures for managing traffic impacts
                    throughout your project.
                  </p>
                  <p>
                    Our TMPs are developed in accordance with{" "}
                    <strong className="text-gray-900">
                      TfNSW's Traffic Control at Work Sites (TCAWS) manual
                    </strong>{" "}
                    and are tailored to meet council and state authority
                    requirements.
                  </p>
                  <p>
                    By managing the full TMP process, we ensure your works
                    proceed{" "}
                    <strong className="text-gray-900">
                      safely, efficiently, and with minimal disruption
                    </strong>{" "}
                    to the public.
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
                    src="/DSC00949.JPG"
                    alt="Traffic Management Plan Services"
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

      {/* TMP Process Section */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Our TMP <span className="text-btn">Process</span>
              </h2>
              <p
                className="mt-6 text-lg max-w-3xl mx-auto leading-relaxed"
                style={{ color: "#8E8E95" }}
              >
                A systematic approach to delivering safe, compliant traffic
                management plans
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-element">
              {tmpProcess.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-btn rounded-full flex items-center justify-center">
                        <span className="text-white text-2xl font-bold font-anton">
                          {item.step}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 font-anton uppercase">
                        {item.title}
                      </h3>
                      <div className="w-12 h-px bg-btn mb-3"></div>
                      <p
                        className="text-base leading-relaxed"
                        style={{ color: "#8E8E95" }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Visual Divider Section */}
      <AnimatedSection direction="left">
        <VisualDividerSection
          title="Our TMP"
          titleHighlight="Capabilities"
          description="Professional traffic guidance scheme design across all project types"
          items={[
            {
              src: "/DSC00949.JPG",
              alt: "Professional Design",
              label: "PLANNING",
            },
            {
              src: "/DSC02286.webp",
              alt: "Compliance",
              label: "COMPLIANCE",
            },
            {
              src: "/DSC00732.JPG",
              alt: "Safety",
              label: "SAFETY",
            },
          ]}
        />
      </AnimatedSection>

      {/* TMP Benefits Section */}
      <AnimatedSection direction="right">
        <section
          className="py-20 md:py-24 px-5 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#151623" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                The Benefits Of <span className="text-btn">Our TMPs</span>
              </h2>
              <p className="mt-6 text-lg max-w-3xl mx-auto leading-relaxed text-gray-400">
                Comprehensive traffic management planning that delivers real
                results
              </p>
            </div>

            <div className="max-w-3xl mx-auto animate-element">
              <div className="relative pl-8">
                {tmpBenefits.map((benefit, index) => (
                  <div key={index} className="relative mb-12 last:mb-0">
                    <div className="absolute -left-6 top-0 w-8 h-8 rounded-full bg-btn flex items-center justify-center shadow-lg">
                      <FaCheckCircle className="text-white text-xl" />
                    </div>
                    <div className="ml-4">
                      <p className="text-white text-lg leading-relaxed font-medium">
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
                    src="/DSC00811.JPG"
                    alt="Get Your TMP Today"
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
                    Ready For A Safe <br />
                    <span className="text-btn">Project?</span>
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
                    for expertly crafted Traffic Management Plans that keep your
                    project safe, compliant, and on schedule.
                  </p>
                  <p>
                    Our team is ready to support you from planning through to
                    completion. Contact us today to discuss your requirements or
                    request a quote.
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
    </div>
  );
};

export default TrafficManagementPlansPage;
