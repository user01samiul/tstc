"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaCheckCircle,
  FaClipboardCheck,
  FaHeadset,
  FaPhoneAlt,
  FaUserTie,
} from "react-icons/fa";
import AnimatedSection from "../../components/AnimatedSection";

const TeamLeadersPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Team Leader Services
  const teamLeaderServices = [
    {
      title: "Site Coordination",
      description:
        "Experienced team leaders coordinating multiple traffic controllers, managing work zones, and ensuring smooth operations across your site.",
    },
    {
      title: "Compliance Management",
      description:
        "Ensuring all traffic control setups comply with TfNSW TCAWS manual, Australian Standards, and site-specific requirements.",
    },
    {
      title: "Safety Oversight",
      description:
        "Conducting regular site audits, toolbox talks, and safety checks to maintain the highest standards of workplace safety.",
    },
    {
      title: "Stakeholder Communication",
      description:
        "Direct liaison with clients, contractors, authorities, and the public to ensure clear communication throughout your project.",
    },
  ];

  // Team Leader Capabilities
  const teamLeaderCapabilities = [
    "Current TfNSW Team Leader accreditation",
    "Experience managing multiple TC crews",
    "Site audit and compliance documentation",
    "Traffic Management Plan implementation",
    "Coordination with authorities and stakeholders",
    "Risk assessment and hazard identification",
    "Emergency response and incident management",
    "Professional communication and reporting",
  ];

  const faqs = [
    {
      question: "What is the role of a Traffic Control Team Leader?",
      answer:
        "A Team Leader is a senior traffic controller with additional accreditation who coordinates and supervises traffic control crews on-site. They're responsible for implementing Traffic Management Plans, conducting safety audits, managing multiple TCs, liaising with stakeholders, and ensuring all setups comply with standards. Team Leaders act as the primary point of contact for clients and authorities.",
    },
    {
      question: "When do I need a Team Leader on my project?",
      answer:
        "Team Leaders are required for complex projects involving multiple traffic controllers, high-risk work zones, or when specified by your Traffic Management Plan. Many councils and authorities mandate a Team Leader for works on classified roads, multi-stage projects, or when specific coordination is needed. We can help determine if your project requires a Team Leader.",
    },
    {
      question: "What's the difference between a TC and a Team Leader?",
      answer:
        "Traffic Controllers (TCs) implement traffic control on-site using signs, barriers, and manual control. Team Leaders hold additional TfNSW accreditation and are responsible for supervising TCs, implementing TMPs, conducting audits, liaising with authorities, and managing overall site operations. Team Leaders have greater authority and responsibility for ensuring compliance and safety.",
    },
    {
      question: "Can Team Leaders work independently without TCs?",
      answer:
        "Yes, Team Leaders hold full traffic control accreditation and can perform all TC duties in addition to their supervisory role. For smaller projects, a single Team Leader may manage the site independently. For larger projects, Team Leaders coordinate multiple TCs to ensure safe, efficient operations across the entire work zone.",
    },
  ];

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/3.webp"
            alt="Traffic Control Team Leaders"
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
              TRAFFIC CONTROL <br />
              <span className="text-btn">TEAM LEADERS</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Experienced leaders coordinating operations and ensuring
              compliance
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
                    Experienced Team Leaders <br />
                    <span className="text-btn">For Your Project</span>
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
                      alt="Team Leaders"
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
                      TfNSW-accredited Team Leaders
                    </strong>{" "}
                    bring extensive experience in coordinating traffic control
                    operations, managing crews, and ensuring compliance with all
                    regulatory requirements.
                  </p>
                  <p>
                    With{" "}
                    <strong className="text-gray-900">
                      strong leadership and communication skills
                    </strong>
                    , our Team Leaders act as the primary point of contact
                    between site operations, clients, and authorities, ensuring
                    projects run smoothly and safely.
                  </p>
                  <p>
                    From implementing Traffic Management Plans to conducting
                    site audits and managing emergency situations, our Team
                    Leaders provide the expertise and oversight your project
                    needs.
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
                    alt="Team Leaders"
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

      {/* Team Leader Services Section */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Team Leader <span className="text-btn">Responsibilities</span>
              </h2>
              <p
                className="mt-6 text-lg max-w-3xl mx-auto leading-relaxed"
                style={{ color: "#8E8E95" }}
              >
                Comprehensive coordination and oversight for safe, compliant
                operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-element">
              {teamLeaderServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-btn rounded-full flex items-center justify-center mb-6">
                    {index === 0 && (
                      <FaUserTie className="text-2xl text-white" />
                    )}
                    {index === 1 && (
                      <FaClipboardCheck className="text-2xl text-white" />
                    )}
                    {index === 2 && (
                      <FaCheckCircle className="text-2xl text-white" />
                    )}
                    {index === 3 && (
                      <FaHeadset className="text-2xl text-white" />
                    )}
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
                  src="/montage/2. About Us/Our Values/Taj Safety Check.JPG"
                  alt="Leadership"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-bold font-anton uppercase">
                      LEADERSHIP
                    </h3>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg group">
                <Image
                  src="/montage/1. Home Page/Services We offer/Accredited TC.JPG"
                  alt="Coordination"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-bold font-anton uppercase">
                      COORDINATION
                    </h3>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg group">
                <Image
                  src="/DSC00947.JPG"
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

      {/* Team Leader Capabilities Section */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-[#181c2a]">
          <div className="max-w-3xl mx-auto animate-element">
            <div className="text-center mb-10">
              <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                Team Leader <span className="text-btn">Capabilities</span>
              </h2>
              <p className="mt-4 text-lg max-w-2xl mx-auto leading-relaxed text-gray-300">
                Qualified professionals with the skills and experience to lead
                your project
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-8 border-l-4 border-btn relative overflow-hidden">
              {/* Subtle background pattern */}
              <svg
                className="absolute right-0 top-0 w-40 h-40 opacity-10 text-btn pointer-events-none"
                viewBox="0 0 100 100"
                fill="none"
              >
                <circle cx="80" cy="20" r="20" fill="currentColor" />
                <rect
                  x="10"
                  y="70"
                  width="40"
                  height="10"
                  rx="5"
                  fill="currentColor"
                />
              </svg>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                {teamLeaderCapabilities.map((capability, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-btn text-white flex items-center justify-center font-bold text-base shadow-md">
                      {index + 1}
                    </span>
                    <span className="text-white text-base leading-relaxed">
                      {capability}
                    </span>
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
                    src="/montage/3. Services We Offer/Site Risk Assesment/Team Photo.JPG"
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
                    Need Experienced <br />
                    <span className="text-btn">Team Leaders?</span>
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
                    for experienced Team Leaders who coordinate operations,
                    ensure compliance, and deliver safe, efficient traffic
                    management on every project.
                  </p>
                  <p>
                    Our Team Leaders are ready to manage your traffic control
                    operations from start to finish. Contact us today to discuss
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
    </div>
  );
};

export default TeamLeadersPage;
