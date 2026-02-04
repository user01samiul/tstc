"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaClipboardList,
  FaCog,
  FaFileAlt,
  FaHardHat,
  FaPhoneAlt,
  FaRoad,
} from "react-icons/fa";
import AnimatedSection from "./../../../components/AnimatedSection";

const ServicesPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Services categories
  const planningServices = [
    {
      icon: FaFileAlt,
      title: "Traffic Guidance Schemes",
      description:
        "Detailed TGS designs compliant with TfNSW (RMS) and AS1742.3 standards, tailored to your site conditions.",
      features: [
        "Professional CAD software designs",
        "Multi-stage and long-term layouts",
        "Night works and event management",
        "Fast turnaround for emergency works",
      ],
    },
    {
      icon: FaClipboardList,
      title: "Traffic Management Plans",
      description:
        "Comprehensive TMP documentation outlining methodology, risk controls, and stakeholder communication procedures.",
      features: [
        "Full TMP documentation and risk assessments",
        "Impact analysis and mitigation strategies",
        "Pedestrian and cyclist management",
        "Council and TfNSW coordination",
      ],
    },
    {
      icon: FaRoad,
      title: "Swept Path Analysis",
      description:
        "Accurate SPA using industry-standard software to ensure safe vehicle movements through work zones.",
      features: [
        "Access checks for construction sites",
        "Vehicle manoeuvre verification",
        "Design support for detours and turning areas",
        "Documentation for approvals",
      ],
    },
  ];

  const implementationServices = [
    {
      icon: FaHardHat,
      title: "On-Site Implementation",
      description:
        "Professional traffic control crews delivering safe, compliant setups across NSW.",
      features: [
        "Qualified TCPs and TGSs",
        "Full equipment supply and installation",
        "24/7 availability for emergency works",
        "Daily site audits and reporting",
      ],
    },
    {
      icon: FaCog,
      title: "Permit Applications",
      description:
        "Complete permit application services for TfNSW, councils, and other road authorities.",
      features: [
        "TfNSW TMC ROL applications",
        "Council permit submissions",
        "STA bus approvals",
        "Emergency approval coordination",
      ],
    },
    {
      icon: FaFileAlt,
      title: "Fleet & Equipment Hire",
      description:
        "Modern traffic control equipment and signage hire for self-managed projects.",
      features: [
        "VMS boards and arrow boards",
        "Traffic control signage",
        "Barriers and delineation",
        "Delivery and pickup services",
      ],
    },
  ];

  const faqs = [
    {
      question: "What is a TGS or TCP?",
      answer:
        "A TGS (Traffic Guidance Scheme) is a detailed plan that outlines how traffic will be managed around a worksite or event. A TCP (Traffic Control Plan) serves a similar purpose, providing specific instructions for managing traffic flow during roadworks, construction, or events that impact normal traffic conditions.",
    },
    {
      question: "What is a TMP or CTMP?",
      answer:
        "A TMP (Traffic Management Plan) is a comprehensive document that outlines how traffic will be safely managed during construction or events. A CTMP (Construction Traffic Management Plan) is a specialized TMP required when construction activities impact public roads, footpaths, or traffic flow. Both plans ensure safety and compliance with road authority requirements.",
    },
    {
      question: "What is a ROL?",
      answer:
        "A ROL (Road Occupancy Licence) is a permit issued by the relevant road authority that allows you to occupy part of a road or lane for construction, maintenance, or events. You need a ROL whenever your activities require the use of public road space.",
    },
    {
      question: "Do you provide 24/7 services?",
      answer:
        "Yes, T&S Traffic Control provides 24/7 traffic management services across NSW. We understand that roadworks and construction often occur outside standard business hours, and our team is ready to respond to emergency and after-hours requirements.",
    },
  ];

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC00726.JPG"
            alt="Services We Offer"
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
              COMPLETE TRAFFIC <br />
              <span className="text-btn">MANAGEMENT SOLUTIONS</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              From design and planning to on-site implementation and compliance
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
                    Services Built For <br />
                    <span className="text-btn">Your Success</span>
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
                      src="/DSC00844.JPG"
                      alt="T&S Traffic Control Services"
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
                    At{" "}
                    <strong className="text-gray-900">
                      T&S Traffic Control
                    </strong>
                    , we provide a complete range of traffic management services
                    - from initial design and planning to on-site implementation
                    and compliance.
                  </p>
                  <p>
                    Whether it's a one-day utility job or a multi-stage
                    infrastructure project, our team delivers{" "}
                    <strong className="text-gray-900">
                      safe, efficient, and fully compliant solutions
                    </strong>{" "}
                    tailored to your site conditions.
                  </p>
                  <p>
                    We work closely with builders, civil contractors, utility
                    providers, and local councils across NSW to keep worksites
                    safe and traffic flowing smoothly.
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
                    src="/DSC00844.JPG"
                    alt="T&S Traffic Control Services"
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

      {/* Planning & Design Services Section */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Planning & <span className="text-btn">Design Services</span>
              </h2>
              <p
                className="mt-6 text-lg max-w-3xl mx-auto leading-relaxed"
                style={{ color: "#8E8E95" }}
              >
                Our in-house design team develops compliant traffic management
                plans that balance safety, efficiency, and real-world
                practicality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-element">
              {planningServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-btn rounded-full flex items-center justify-center mb-6">
                    <service.icon className="text-3xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-anton uppercase">
                    {service.title}
                  </h3>
                  <div className="w-12 h-px bg-btn mb-4"></div>
                  <p
                    className="text-base mb-6 leading-relaxed"
                    style={{ color: "#8E8E95" }}
                  >
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm leading-relaxed"
                        style={{ color: "#8E8E95" }}
                      >
                        <span className="text-btn mr-3 flex-shrink-0 font-bold text-lg">
                          •
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
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
                  src="/DSC00717.JPG"
                  alt="Traffic Planning"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-bold font-anton uppercase">
                      PLANNING
                    </h3>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg group">
                <Image
                  src="/DSC00850.JPG"
                  alt="Implementation"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-bold font-anton uppercase">
                      IMPLEMENTATION
                    </h3>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg group">
                <Image
                  src="/DSC00836.JPG"
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

      {/* Implementation Services Section */}
      <AnimatedSection direction="right">
        <section
          className="py-20 md:py-24 px-5 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#151623" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Implementation &{" "}
                <span className="text-btn">Support Services</span>
              </h2>
              <p className="mt-6 text-lg max-w-3xl mx-auto leading-relaxed text-gray-400">
                Professional on-site delivery, permit management, and equipment
                hire services across NSW.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-element">
              {implementationServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-transparent rounded-2xl p-8 border-2 border-dashed border-white/30 hover:border-btn transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-16 h-16 bg-btn rounded-full flex items-center justify-center mb-6">
                    <service.icon className="text-3xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-anton uppercase">
                    {service.title}
                  </h3>
                  <div className="w-12 h-px bg-btn mb-4"></div>
                  <p className="text-base mb-6 leading-relaxed text-gray-400">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm leading-relaxed text-gray-400"
                      >
                        <span className="text-btn mr-3 flex-shrink-0 font-bold text-lg">
                          •
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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
                    src="/DSC00732.JPG"
                    alt="Partner with T&S"
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
                    Ready To Get <br />
                    <span className="text-btn">Started?</span>
                  </h2>
                </div>

                <div
                  className="space-y-6 text-lg leading-relaxed"
                  style={{ color: "#8E8E95" }}
                >
                  <p>
                    Whether you need a simple traffic plan or a comprehensive
                    traffic management solution for a major project,{" "}
                    <strong className="text-gray-900">
                      T&S Traffic Control is here to help
                    </strong>
                    .
                  </p>
                  <p>
                    Our team is ready to deliver safe, efficient, and fully
                    compliant solutions tailored to your site conditions.
                    Contact us today to discuss your specific requirements.
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

export default ServicesPage;
