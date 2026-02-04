"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaCarSide,
  FaDownload,
  FaDraftingCompass,
  FaExclamationTriangle,
  FaFileAlt,
  FaFileSignature,
  FaPhoneAlt,
  FaRoute,
  FaSyncAlt,
  FaTruckMoving,
} from "react-icons/fa";
import AnimatedSection from "../../components/AnimatedSection";

const SweptPathAnalysisPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // SPA Services Features
  const spaFeatures = [
    {
      title: "Access Verification",
      description:
        "Comprehensive checks for construction sites and temporary traffic setups to ensure safe vehicle access.",
    },
    {
      title: "Manoeuvre Analysis",
      description:
        "Verification of vehicle movements in restricted areas, tight corners, and complex intersections.",
    },
    {
      title: "Design Support",
      description:
        "Expert support for detours, entry/exit points, and turning areas to optimise site layout.",
    },
    {
      title: "Compliance Documentation",
      description:
        "Professional reports and documentation for approvals and engineering submissions.",
    },
  ];

  // What's included
  const serviceIncludes = [
    "Detailed vehicle movement simulation",
    "Compliance with Australian Standards",
    "Professional CAD drawings and diagrams",
    "Multiple vehicle type analysis",
    "Turning radius calculations",
    "Clearance and conflict identification",
    "Site access optimisation recommendations",
    "Supporting documentation for approvals",
  ];

  const faqs = [
    {
      question: "What is Swept Path Analysis?",
      answer:
        "Swept Path Analysis (SPA) is a technical assessment that simulates and analyses how vehicles navigate through spaces. It shows the path a vehicle's body and wheels take when turning or manoeuvring, helping identify potential conflicts with kerbs, obstacles, or other vehicles. SPA is essential for ensuring safe vehicle access in construction sites, intersections, and tight spaces.",
    },
    {
      question: "When do I need a Swept Path Analysis?",
      answer:
        "You need SPA when designing or modifying sites where large vehicles need to access, including construction sites, loading docks, intersections, car parks, and temporary traffic arrangements. It's required for DA submissions, road authority approvals, and ensuring compliance with Australian Standards for vehicle access.",
    },
    {
      question: "What vehicles can you analyse?",
      answer:
        "We can analyse any vehicle type including heavy rigid trucks, semi-trailers, B-doubles, road trains, buses, emergency vehicles (fire trucks, ambulances), delivery trucks, waste collection vehicles, and construction equipment. We use industry-standard software with comprehensive vehicle libraries.",
    },
    {
      question: "How long does SPA take?",
      answer:
        "Standard swept path analysis typically takes 3-5 business days depending on complexity. Simple single-vehicle assessments can be completed faster, while complex multi-vehicle or multi-stage projects may require additional time. We can provide expedited services for urgent projects.",
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
            alt="Swept Path Analysis"
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
              SWEPT PATH <br />
              <span className="text-btn">ANALYSIS (SPA)</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Accurate vehicle movement analysis ensuring safe access and
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
                    Professional SPA <br />
                    <span className="text-btn">Services</span>
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
                      src="/sami/traffic-plan1.png"
                      alt="Swept Path Analysis Services"
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
                    Our planning team provides{" "}
                    <strong className="text-gray-900">
                      accurate Swept Path Analysis
                    </strong>{" "}
                    to ensure heavy vehicles and machinery can safely move
                    through work zones, intersections, and tight environments.
                  </p>
                  <p>
                    Using{" "}
                    <strong className="text-gray-900">
                      industry-standard modelling software
                    </strong>
                    , we simulate vehicle movements to confirm access, turning
                    space, and safety before works begin.
                  </p>
                  <p>
                    With a precise and experienced design team, we deliver clear
                    swept path reports that help clients{" "}
                    <strong className="text-gray-900">
                      reduce risk, avoid delays
                    </strong>
                    , and maintain safe vehicle movement on site.
                  </p>
                </div>

                <div className="pt-4">
                  <a
                    href="/montage/3. Services We Offer/Traffic Planning/SPA.pdf"
                    download="SPA-Sample.pdf"
                    className="inline-flex items-center justify-center gap-3 bg-btn hover:bg-btn/90 text-white px-8 py-3 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <FaDownload className="text-lg" />
                    Download Sample SPA
                  </a>
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
                    src="/sami/traffic-plan1.png"
                    alt="Swept Path Analysis Services"
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

      {/* SPA Services Section */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Our SPA <span className="text-btn">Services Include</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-element">
              {spaFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-btn rounded-full flex items-center justify-center mb-6">
                    <FaCarSide className="text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-anton uppercase">
                    {feature.title}
                  </h3>
                  <div className="w-12 h-px bg-btn mb-4"></div>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "#8E8E95" }}
                  >
                    {feature.description}
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
                  alt="Vehicle Analysis"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-bold font-anton uppercase">
                      ANALYSIS
                    </h3>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg group">
                <Image
                  src="/sami/traffic-plan1.png"
                  alt="Simulation"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-bold font-anton uppercase">
                      SIMULATION
                    </h3>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg group">
                <Image
                  src="/3.webp"
                  alt="Documentation"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-bold font-anton uppercase">
                      REPORTS
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
                What's Included In <span className="text-btn">Our SPA</span>
              </h2>
              <p className="mt-6 text-lg max-w-3xl mx-auto leading-relaxed text-gray-400">
                Comprehensive swept path analysis with professional
                documentation
              </p>
            </div>

            <div className="max-w-5xl mx-auto animate-element">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {serviceIncludes.map((item, index) => {
                  const icons = [
                    <FaCarSide className="text-white text-2xl" />,
                    <FaFileAlt className="text-white text-2xl" />,
                    <FaDraftingCompass className="text-white text-2xl" />,
                    <FaTruckMoving className="text-white text-2xl" />,
                    <FaSyncAlt className="text-white text-2xl" />,
                    <FaExclamationTriangle className="text-white text-2xl" />,
                    <FaRoute className="text-white text-2xl" />,
                    <FaFileSignature className="text-white text-2xl" />,
                  ];
                  return (
                    <div
                      key={index}
                      className="bg-white/5 rounded-2xl p-8 flex flex-col items-center justify-center shadow-md hover:bg-btn/10 transition-all duration-300"
                    >
                      <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-btn/80">
                        {icons[index]}
                      </div>
                      <p className="text-white text-base text-center leading-relaxed">
                        {item}
                      </p>
                    </div>
                  );
                })}
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
                    src="/DSC00723.JPG"
                    alt="Get Your SPA Today"
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
                    Need Swept Path <br />
                    <span className="text-btn">Analysis?</span>
                  </h2>
                </div>

                <div
                  className="space-y-6 text-lg leading-relaxed"
                  style={{ color: "#8E8E95" }}
                >
                  <p>
                    Ready to ensure your project's vehicle movements are safe
                    and compliant?{" "}
                    <strong className="text-gray-900">
                      Contact T&S Traffic Control
                    </strong>{" "}
                    today to discuss your swept path analysis requirements.
                  </p>
                  <p>
                    Our team is ready to deliver clear, accurate swept path
                    reports that help you reduce risk and maintain safe
                    operations on site.
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

export default SweptPathAnalysisPage;
