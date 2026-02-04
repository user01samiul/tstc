"use client";

import Image from "next/image";
import { useState } from "react";
import { FaClock, FaHeadset, FaPhoneAlt, FaShieldAlt } from "react-icons/fa";
import AnimatedSection from "../../components/AnimatedSection";

const TwentyFourHourResponsePage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Response Services
  const responseServices = [
    {
      title: "Rapid Deployment",
      description:
        "Quick response teams ready to deploy to any location across NSW at a moment's notice, equipped and prepared for immediate works.",
    },
    {
      title: "Central Control Centre",
      description:
        "Dedicated operations centre coordinating all emergency and scheduled works efficiently, maintaining communication with crews and clients.",
    },
    {
      title: "Emergency Works",
      description:
        "Immediate traffic management for urgent road repairs, incidents, and emergency situations requiring fast, professional response.",
    },
    {
      title: "Night Shift Operations",
      description:
        "Full traffic management capabilities for after-hours and night works, ensuring safe operations during low-traffic periods.",
    },
  ];

  // Response Capabilities
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
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/montage/2. About Us/Our Values/Taj Safety Check.JPG"
            alt="24 Hour Emergency Response"
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
              24 HOUR EMERGENCY <br />
              <span className="text-btn">RESPONSE</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Around the clock support for your traffic management needs
            </p>
            <div className="pt-6">
              <a
                href="tel:+611300008782"
                className="inline-flex items-center justify-center gap-3 bg-btn hover:bg-btn/90 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                <FaPhoneAlt className="text-xl" />
                Call 24/7: 1300 008 782
              </a>
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
                    Continuous Support <br />
                    <span className="text-btn">Day & Night</span>
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
                      src="/DSC02286.webp"
                      alt="24 Hour Response Team"
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
                    manage all day and night shift operations with precision and
                    efficiency.
                  </p>
                  <p>
                    Through our{" "}
                    <strong className="text-gray-900">
                      well-maintained communication systems
                    </strong>{" "}
                    and coordinated response procedures, we're able to deploy
                    resources rapidly and effectively, ensuring your traffic
                    management needs are met any time, day or night.
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

              {/* Right: Image - Desktop Only */}
              <div className="relative animate-element hidden lg:block">
                <div
                  className="relative w-full aspect-[4/5] overflow-hidden"
                  style={{
                    borderRadius: "40% 60% 60% 40% / 60% 40% 60% 40%",
                  }}
                >
                  <Image
                    src="/DSC02286.webp"
                    alt="24 Hour Response Team"
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

      {/* Response Services Section */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Emergency Response{" "}
                <span className="text-btn">Capabilities</span>
              </h2>
              <p
                className="mt-6 text-lg max-w-3xl mx-auto leading-relaxed"
                style={{ color: "#8E8E95" }}
              >
                Rapid deployment and professional management for all emergency
                works
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-element">
              {responseServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-btn rounded-full flex items-center justify-center mb-6">
                    {index === 0 && <FaClock className="text-2xl text-white" />}
                    {index === 1 && (
                      <FaHeadset className="text-2xl text-white" />
                    )}
                    {index === 2 && (
                      <FaShieldAlt className="text-2xl text-white" />
                    )}
                    {index === 3 && <FaClock className="text-2xl text-white" />}
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
                  alt="Emergency Response"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-bold font-anton uppercase">
                      RESPONSIVE
                    </h3>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg group">
                <Image
                  src="/montage/2. About Us/Our Values/Taj Safety Check.JPG"
                  alt="Professional Team"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-bold font-anton uppercase">
                      RELIABLE
                    </h3>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg group">
                <Image
                  src="/montage/3. Services We Offer/Site Risk Assesment/Team Photo.JPG"
                  alt="24/7 Operations"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-bold font-anton uppercase">
                      AVAILABLE
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Response Capabilities Section */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-[#181c2a]">
          <div className="max-w-3xl mx-auto animate-element">
            <div className="text-center mb-10">
              <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                What We <span className="text-btn">Provide</span>
              </h2>
              <p className="mt-4 text-lg max-w-2xl mx-auto leading-relaxed text-gray-300">
                Comprehensive emergency response services available anytime
              </p>
            </div>
            {/* Vertical Stepper Style */}
            <div className="relative pl-8">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-btn/30 rounded-full" />
              <ul className="space-y-8">
                {responseCapabilities.map((capability, index) => (
                  <li key={index} className="relative flex items-start">
                    <span className="absolute -left-8 top-1 w-8 h-8 rounded-full bg-btn text-white flex items-center justify-center font-bold text-lg shadow-md border-4 border-[#181c2a]">
                      {index + 1}
                    </span>
                    <div className="flex-1 bg-white/5 rounded-lg px-6 py-4">
                      <span className="text-white text-base leading-relaxed font-medium">
                        {capability}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
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
                    src="/DSC00949.JPG"
                    alt="Contact 24/7"
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
                    Need Emergency <br />
                    <span className="text-btn">Traffic Management?</span>
                  </h2>
                </div>

                <div
                  className="space-y-6 text-lg leading-relaxed"
                  style={{ color: "#8E8E95" }}
                >
                  <p>
                    Our{" "}
                    <strong className="text-gray-900">
                      24-hour response team
                    </strong>{" "}
                    is standing by to assist with your emergency traffic
                    management needs. Whether it's urgent road repairs, incident
                    management, or after-hours works, we're here to help.
                  </p>
                  <p>
                    Call us now to speak with our{" "}
                    <strong className="text-gray-900">Control Centre</strong>{" "}
                    and discuss your immediate requirements. We'll have a team
                    on-site fast.
                  </p>
                </div>

                <div className="pt-6">
                  <a
                    href="tel:+611300008782"
                    className="inline-flex items-center justify-center gap-3 bg-btn hover:bg-btn/90 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
                  >
                    <FaPhoneAlt className="text-xl" />
                    Call 1300 008 782
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default TwentyFourHourResponsePage;
