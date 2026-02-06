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
  FaChevronDown,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";
import AnimatedSection from "../../components/AnimatedSection";

const TeamLeadersPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const teamLeaderServices = [
    {
      title: "Site Coordination",
      description:
        "Experienced team leaders coordinating multiple traffic controllers, managing work zones, and ensuring smooth operations across your site.",
      icon: <FaUsers className="text-2xl" />,
    },
    {
      title: "Compliance Management",
      description:
        "Ensuring all traffic control setups comply with TfNSW TCAWS manual, Australian Standards, and site-specific requirements.",
      icon: <FaClipboardCheck className="text-2xl" />,
    },
    {
      title: "Safety Oversight",
      description:
        "Conducting regular site audits, toolbox talks, and safety checks to maintain the highest standards of workplace safety.",
      icon: <FaShieldAlt className="text-2xl" />,
    },
    {
      title: "Stakeholder Communication",
      description:
        "Direct liaison with clients, contractors, authorities, and the public to ensure clear communication throughout your project.",
      icon: <FaHeadset className="text-2xl" />,
    },
  ];

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

  const comparisonData = [
    {
      feature: "Accreditation",
      tc: "Yellow or Blue Card",
      leader: "Team Leader accreditation + TC Card",
    },
    {
      feature: "Responsibility",
      tc: "Implement traffic control on-site",
      leader: "Supervise TCs, manage site operations",
    },
    {
      feature: "TMP Authority",
      tc: "Follow the plan",
      leader: "Implement and oversee the plan",
    },
    {
      feature: "Stakeholder Contact",
      tc: "Refer to Team Leader",
      leader: "Primary point of contact",
    },
    {
      feature: "Site Audits",
      tc: "Participate in audits",
      leader: "Conduct and document audits",
    },
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
      {/* Hero Section - Right-Aligned with Accent Bar */}
      <section className="relative min-h-screen overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/3.webp"
            alt="Traffic Control Team Leaders"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/55 to-black/30"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-32">
          <div className="flex justify-end">
            <div className="max-w-2xl text-right">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-2 rounded-full text-sm font-semibold mb-8 uppercase tracking-wider">
                <FaUserTie className="text-btn" />
                Senior Personnel
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-anton uppercase text-white">
                TRAFFIC CONTROL{" "}
                <span className="text-btn">TEAM LEADERS</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mt-6 leading-relaxed">
                Experienced leaders coordinating operations, ensuring compliance,
                and keeping your project safe and on track.
              </p>
              <div className="flex flex-wrap justify-end gap-4 mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-btn hover:bg-btn/90 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
                >
                  <FaPhoneAlt className="text-xl" />
                  Get In Touch
                </Link>
                <a
                  href="tel:+611300008782"
                  className="inline-flex items-center justify-center gap-3 border-2 border-white/30 hover:border-white text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10"
                >
                  1300 008 782
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction - Centered Text + Full-Width Image Below */}
      <AnimatedSection direction="left">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center animate-element">
            <span className="text-btn font-bold tracking-widest uppercase text-sm block mb-4">
              About Our Team Leaders
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-anton uppercase">
              Experienced Leaders{" "}
              <span className="text-btn">For Your Project</span>
            </h2>
            <div className="w-24 h-1 bg-btn mx-auto mt-6 mb-8"></div>
            <div
              className="space-y-5 text-lg leading-relaxed max-w-3xl mx-auto"
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
                , our Team Leaders act as the primary point of contact between
                site operations, clients, and authorities, ensuring projects run
                smoothly and safely.
              </p>
            </div>
          </div>

          {/* Wide Image Below */}
          <div className="max-w-6xl mx-auto mt-14 animate-element">
            <div className="relative w-full aspect-[21/9] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/DSC00949.JPG"
                alt="Team Leaders in Action"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Services - 4-Column Vertical Cards with Top Border */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <span className="text-btn font-bold tracking-widest uppercase text-sm block mb-4">
                What They Do
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-anton uppercase">
                Team Leader{" "}
                <span className="text-btn">Responsibilities</span>
              </h2>
              <div className="w-24 h-1 bg-btn mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-element">
              {teamLeaderServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border-t-4 border-btn"
                >
                  <div className="p-7">
                    <div className="w-14 h-14 rounded-xl bg-btn/10 group-hover:bg-btn flex items-center justify-center text-btn group-hover:text-white transition-all duration-300 mb-5">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-anton uppercase">
                      {service.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
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

      {/* TC vs Team Leader Comparison */}
      <AnimatedSection direction="left">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14 animate-element">
              <span className="text-btn font-bold tracking-widest uppercase text-sm block mb-4">
                Understanding The Role
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-anton uppercase">
                TC vs <span className="text-btn">Team Leader</span>
              </h2>
              <div className="w-24 h-1 bg-btn mx-auto mt-6"></div>
              <p
                className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed"
                style={{ color: "#8E8E95" }}
              >
                Understanding the difference helps you choose the right
                personnel for your project
              </p>
            </div>

            <div className="animate-element overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr>
                    <th className="text-left py-4 px-6 text-sm font-bold text-gray-500 uppercase tracking-wider border-b-2 border-gray-100">
                      Feature
                    </th>
                    <th className="text-left py-4 px-6 text-sm font-bold text-gray-500 uppercase tracking-wider border-b-2 border-gray-100">
                      Traffic Controller
                    </th>
                    <th className="text-left py-4 px-6 text-sm font-bold text-btn uppercase tracking-wider border-b-2 border-btn">
                      Team Leader
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors duration-200"
                    >
                      <td className="py-4 px-6 font-semibold text-gray-900 border-b border-gray-100 text-sm">
                        {row.feature}
                      </td>
                      <td
                        className="py-4 px-6 border-b border-gray-100 text-sm"
                        style={{ color: "#8E8E95" }}
                      >
                        {row.tc}
                      </td>
                      <td className="py-4 px-6 border-b border-gray-100 text-sm font-medium text-gray-900 bg-btn/5">
                        {row.leader}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Two Images Side by Side */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-element">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl group">
                <Image
                  src="/montage/2. About Us/Our Values/Taj Safety Check.JPG"
                  alt="Leadership on Site"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-white text-2xl font-bold font-anton uppercase">
                      On-Site Leadership
                    </h3>
                    <p className="text-gray-300 text-sm mt-2">
                      Coordinating crews and managing operations
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl group">
                <Image
                  src="/montage/1. Home Page/Services We offer/Accredited TC.JPG"
                  alt="Safety Compliance"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-white text-2xl font-bold font-anton uppercase">
                      Safety & Compliance
                    </h3>
                    <p className="text-gray-300 text-sm mt-2">
                      Conducting audits and ensuring standards
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Capabilities - Pill/Tag Layout */}
      <AnimatedSection direction="left">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-[#181c2a]">
          <div className="max-w-4xl mx-auto animate-element">
            <div className="text-center mb-14">
              <span className="text-btn font-bold tracking-widest uppercase text-sm block mb-4">
                Skills & Qualifications
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-anton uppercase">
                Team Leader{" "}
                <span className="text-btn">Capabilities</span>
              </h2>
              <div className="w-24 h-1 bg-btn mx-auto mt-6"></div>
              <p className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed text-gray-300">
                Qualified professionals with the skills and experience to lead
                your project
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {teamLeaderCapabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-btn/40 rounded-full px-6 py-3 transition-all duration-300 group"
                >
                  <FaCheckCircle className="text-btn text-sm flex-shrink-0" />
                  <span className="text-white text-sm font-medium whitespace-nowrap">
                    {capability}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto animate-element">
            <div className="text-center mb-14">
              <span className="text-btn font-bold tracking-widest uppercase text-sm block mb-4">
                Common Questions
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

      {/* CTA Section - Gradient Background */}
      <AnimatedSection direction="left">
        <section className="relative py-20 md:py-28 px-5 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#181c2a] via-[#1e2340] to-[#181c2a]">
          {/* Decorative accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-btn/5 rounded-full -translate-y-1/2"></div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              {/* Left: Image (2 cols) */}
              <div className="lg:col-span-2 relative animate-element">
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/montage/3. Services We Offer/Site Risk Assesment/Team Photo.JPG"
                    alt="Team Leaders"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>

              {/* Right: Content (3 cols) */}
              <div className="lg:col-span-3 animate-element">
                <span className="text-btn font-bold tracking-widest uppercase text-sm block mb-4">
                  Let's Get Started
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-anton uppercase">
                  Need Experienced{" "}
                  <span className="text-btn">Team Leaders?</span>
                </h2>
                <div className="w-20 h-1 bg-btn mt-6 mb-6"></div>
                <div className="space-y-4 text-lg leading-relaxed text-gray-300 mb-10">
                  <p>
                    Partner with{" "}
                    <strong className="text-white">
                      T&S Traffic Control
                    </strong>{" "}
                    for experienced Team Leaders who coordinate operations,
                    ensure compliance, and deliver safe, efficient traffic
                    management on every project.
                  </p>
                  <p>
                    Our Team Leaders are ready to manage your traffic control
                    operations from start to finish. Contact us today to discuss
                    your requirements.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 bg-btn hover:bg-btn/90 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-btn/25"
                  >
                    Get A Quote
                  </Link>
                  <a
                    href="tel:+611300008782"
                    className="inline-flex items-center justify-center gap-3 border-2 border-white/20 hover:border-white text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/10"
                  >
                    <FaPhoneAlt />
                    1300 008 782
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

export default TeamLeadersPage;
