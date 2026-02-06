"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaClock,
  FaHeadset,
  FaPhoneAlt,
  FaShieldAlt,
  FaBolt,
  FaChevronDown,
  FaMapMarkerAlt,
  FaSatelliteDish,
} from "react-icons/fa";
import AnimatedSection from "../../components/AnimatedSection";

const TwentyFourHourResponsePage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const responseServices = [
    {
      title: "Rapid Deployment",
      description:
        "Quick response teams ready to deploy to any location across NSW at a moment's notice, equipped and prepared for immediate works.",
      icon: <FaBolt className="text-2xl" />,
    },
    {
      title: "Central Control Centre",
      description:
        "Dedicated operations centre coordinating all emergency and scheduled works efficiently, maintaining communication with crews and clients.",
      icon: <FaSatelliteDish className="text-2xl" />,
    },
    {
      title: "Emergency Works",
      description:
        "Immediate traffic management for urgent road repairs, incidents, and emergency situations requiring fast, professional response.",
      icon: <FaShieldAlt className="text-2xl" />,
    },
    {
      title: "Night Shift Operations",
      description:
        "Full traffic management capabilities for after-hours and night works, ensuring safe operations during low-traffic periods.",
      icon: <FaClock className="text-2xl" />,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "You Call",
      description:
        "Contact our 24/7 control centre any time, day or night. Our dispatchers are always standing by.",
      icon: <FaPhoneAlt className="text-xl" />,
    },
    {
      step: "02",
      title: "We Dispatch",
      description:
        "Our control centre immediately coordinates the nearest available crew and equipment for your location.",
      icon: <FaHeadset className="text-xl" />,
    },
    {
      step: "03",
      title: "Crew Deploys",
      description:
        "Fully equipped teams mobilise rapidly — typically within 1-2 hours in metro Sydney.",
      icon: <FaMapMarkerAlt className="text-xl" />,
    },
    {
      step: "04",
      title: "Site Managed",
      description:
        "Professional traffic management is established and maintained until works are complete.",
      icon: <FaShieldAlt className="text-xl" />,
    },
  ];

  const responseCapabilities = [
    "24/7 emergency response teams",
    "Central operations and dispatch centre",
    "Night shift and after-hours coverage",
    "Rapid crew mobilization across NSW",
    "Complete equipment and vehicle fleet",
    "Incident and emergency works support",
    "Continuous client communication",
    "Coordinated multi-site management",
  ];

  const faqs = [
    {
      question: "How quickly can you respond to emergency works?",
      answer:
        "Our 24-hour response teams can typically deploy within 1-2 hours for emergency situations in metropolitan Sydney, and within 2-4 hours for regional NSW locations. Our central control centre coordinates rapid mobilization of crews and equipment to ensure the fastest possible response to your urgent traffic management needs.",
    },
    {
      question: "What types of emergency works do you cover?",
      answer:
        "We provide traffic management for all emergency situations including urgent road repairs, incident management, utility emergencies, after-hours works, storm damage response, and any situation requiring immediate traffic control. Our crews are equipped to handle both planned after-hours works and unexpected emergency scenarios.",
    },
    {
      question: "Do you charge extra for after-hours or emergency response?",
      answer:
        "After-hours and emergency works may attract additional rates to cover crew availability and rapid deployment requirements. However, we maintain transparent pricing and will provide clear costings upfront. Contact our 24/7 control centre on 1300 008 782 to discuss your specific requirements and obtain pricing.",
    },
    {
      question: "Can you handle multiple emergency sites simultaneously?",
      answer:
        "Yes, our central control centre is designed to coordinate multiple crews across different locations simultaneously. We maintain adequate personnel and equipment resources to respond to multiple emergency situations at once, ensuring all clients receive prompt, professional service regardless of demand.",
    },
  ];

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Hero Section - Dark Urgent Theme with Pulsing Badge */}
      <section className="relative min-h-screen overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/montage/2. About Us/Our Values/Taj Safety Check.JPG"
            alt="24 Hour Emergency Response"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#181c2a]"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-btn/20 border border-btn/40 text-btn px-4 py-2 rounded-full text-sm font-semibold mb-8 uppercase tracking-wider">
                <span className="w-2 h-2 bg-btn rounded-full animate-pulse"></span>
                Always Available
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-anton uppercase text-white">
                24 HOUR <br />
                EMERGENCY{" "}
                <span className="text-btn">RESPONSE</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mt-6 leading-relaxed max-w-xl">
                Around the clock support for your traffic management needs.
                Our control centre never sleeps.
              </p>
              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="tel:+611300008782"
                  className="inline-flex items-center justify-center gap-3 bg-btn hover:bg-btn/90 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
                >
                  <FaPhoneAlt className="text-xl" />
                  Call 24/7: 1300 008 782
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 border-2 border-white/30 hover:border-white text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10"
                >
                  Request Callback
                </Link>
              </div>
            </div>

            {/* Right: Large 24/7 visual */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                <div className="w-72 h-72 rounded-full border-4 border-btn/30 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full border-4 border-btn/10 animate-ping"></div>
                  <div className="text-center">
                    <div className="text-8xl font-bold text-white font-anton leading-none">
                      24<span className="text-btn">/7</span>
                    </div>
                    <div className="text-white/60 text-lg mt-2 tracking-widest uppercase">
                      Response
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Horizontal Process */}
      <AnimatedSection direction="left">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <span className="text-btn font-bold tracking-widest uppercase text-sm block mb-4">
                Our Process
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-anton uppercase">
                How Our <span className="text-btn">Response</span> Works
              </h2>
              <div className="w-24 h-1 bg-btn mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-element">
              {processSteps.map((item, index) => (
                <div key={index} className="relative text-center group">
                  {/* Connector line - hidden on mobile, hidden on last */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gray-200 z-0">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-btn rounded-full"></div>
                    </div>
                  )}
                  <div className="relative z-10 mx-auto w-20 h-20 rounded-full bg-btn/10 flex items-center justify-center mb-6 group-hover:bg-btn group-hover:text-white text-btn transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="text-xs font-bold text-btn tracking-widest uppercase mb-2">
                    Step {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-anton uppercase">
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#8E8E95" }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* About Our Response - Offset Layout */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-28 px-5 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Image - 7 cols */}
              <div className="lg:col-span-7 relative animate-element">
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/DSC02286.webp"
                    alt="24 Hour Response Team"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-5 right-4 sm:right-8 bg-[#181c2a] text-white px-6 py-4 rounded-xl shadow-xl z-10">
                  <div className="flex items-center gap-3">
                    <FaClock className="text-btn text-2xl" />
                    <div>
                      <div className="text-lg font-bold font-anton">1-2 HRS</div>
                      <div className="text-xs text-gray-400">Metro Response</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content - 5 cols */}
              <div className="lg:col-span-5 space-y-6 animate-element">
                <span className="text-btn font-bold tracking-widest uppercase text-sm block">
                  About Our Service
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-anton uppercase">
                  Continuous Support{" "}
                  <span className="text-btn">Day & Night</span>
                </h2>
                <div className="w-20 h-1 bg-btn"></div>
                <div
                  className="space-y-5 text-lg leading-relaxed"
                  style={{ color: "#8E8E95" }}
                >
                  <p>
                    <strong className="text-gray-900">
                      T&S Traffic Control
                    </strong>{" "}
                    operates around the clock to ensure continuous support for
                    our clients and the community. Our dedicated{" "}
                    <strong className="text-gray-900">
                      24-hour response team
                    </strong>{" "}
                    and central{" "}
                    <strong className="text-gray-900">Control Centre</strong>{" "}
                    manage all day and night shift operations with precision.
                  </p>
                  <p>
                    Whether it's planned after-hours works or unexpected
                    emergency situations, our team is ready to respond with{" "}
                    <strong className="text-gray-900">
                      professional, reliable service
                    </strong>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Services - Stacked Full-Width Cards */}
      <AnimatedSection direction="left">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <span className="text-btn font-bold tracking-widest uppercase text-sm block mb-4">
                What We Cover
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-anton uppercase">
                Emergency Response{" "}
                <span className="text-btn">Capabilities</span>
              </h2>
              <div className="w-24 h-1 bg-btn mx-auto mt-6"></div>
            </div>

            <div className="space-y-4 animate-element">
              {responseServices.map((service, index) => (
                <div
                  key={index}
                  className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 sm:p-8 rounded-xl border border-gray-100 hover:border-btn/30 hover:shadow-lg transition-all duration-300 bg-white"
                >
                  <div className="w-14 h-14 rounded-xl bg-btn/10 group-hover:bg-btn flex items-center justify-center text-btn group-hover:text-white transition-all duration-300 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-anton uppercase">
                      {service.title}
                    </h3>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "#8E8E95" }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Stats Banner - Full Width Dark */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/montage/1. Home Page/Services We offer/Accredited TC.JPG"
            alt="Emergency Response Operations"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#181c2a]/90"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "24/7", label: "Operations Centre" },
              { value: "1-2hr", label: "Metro Response" },
              { value: "NSW", label: "State-Wide Coverage" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-btn font-anton group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm sm:text-base mt-2 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Checklist */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Content */}
              <div className="animate-element">
                <span className="text-btn font-bold tracking-widest uppercase text-sm block mb-4">
                  Our Capabilities
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-anton uppercase">
                  What We <span className="text-btn">Provide</span>
                </h2>
                <div className="w-20 h-1 bg-btn mt-6 mb-8"></div>
                <p
                  className="text-lg leading-relaxed mb-8"
                  style={{ color: "#8E8E95" }}
                >
                  Comprehensive emergency response services available anytime,
                  anywhere across NSW.
                </p>
                <ul className="space-y-4">
                  {responseCapabilities.map((capability, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-lg bg-btn/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-btn font-bold text-sm">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <span className="text-gray-700 text-base leading-relaxed">
                        {capability}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Image */}
              <div className="relative animate-element">
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/DSC00949.JPG"
                    alt="Emergency Response Team"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Accent stripe */}
                <div className="absolute -left-3 top-8 bottom-8 w-1.5 bg-btn rounded-full"></div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection direction="left">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto animate-element">
            <div className="text-center mb-14">
              <span className="text-btn font-bold tracking-widest uppercase text-sm block mb-4">
                Got Questions?
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-anton uppercase">
                Frequently <span className="text-btn">Asked</span>
              </h2>
              <div className="w-24 h-1 bg-btn mx-auto mt-6"></div>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-100 rounded-xl overflow-hidden hover:border-btn/20 transition-colors duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <FaChevronDown
                      className={`text-btn flex-shrink-0 transition-transform duration-300 ${
                        openFaqIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaqIndex === index ? "max-h-96 pb-6" : "max-h-0"
                    }`}
                  >
                    <p
                      className="px-6 text-base leading-relaxed"
                      style={{ color: "#8E8E95" }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section - Urgent Dark */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-28 px-5 sm:px-6 lg:px-8 bg-[#181c2a] relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-btn/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-btn/5 rounded-full translate-y-1/2 -translate-x-1/3"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-btn/20 border border-btn/30 text-btn px-4 py-2 rounded-full text-sm font-semibold mb-8 uppercase tracking-wider">
              <span className="w-2 h-2 bg-btn rounded-full animate-pulse"></span>
              Available Now
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-anton uppercase">
              Need Emergency{" "}
              <span className="text-btn">Traffic Management?</span>
            </h2>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Our 24-hour response team is standing by to assist with your
              emergency traffic management needs. Whether it's urgent road
              repairs, incident management, or after-hours works — call us now.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <a
                href="tel:+611300008782"
                className="inline-flex items-center justify-center gap-3 bg-btn hover:bg-btn/90 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-btn/25"
              >
                <FaPhoneAlt className="text-xl" />
                Call 1300 008 782
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 border-2 border-white/20 hover:border-white text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default TwentyFourHourResponsePage;
