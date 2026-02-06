"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaCertificate,
  FaCheckCircle,
  FaChevronDown,
  FaPhoneAlt,
  FaShieldAlt,
  FaTruck,
  FaIdCard,
  FaExclamationTriangle,
} from "react-icons/fa";
import AnimatedSection from "../../components/AnimatedSection";

const TMAOperatorsPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const tmaServices = [
    {
      title: "Impact Protection",
      description:
        "Skilled TMA operators providing critical impact protection for work crews on high-speed roads, freeways, and complex traffic environments.",
      icon: <FaShieldAlt className="text-3xl" />,
      image: "/DSC00810.JPG",
    },
    {
      title: "Mobile Operations",
      description:
        "Expert operation of mobile lane closures and rolling roadblocks for works requiring continuous traffic management along highway corridors.",
      icon: <FaTruck className="text-3xl" />,
      image: "/DSC00723.JPG",
    },
    {
      title: "TfNSW Compliance",
      description:
        "All TMA operators hold current TfNSW TMA accreditation, Heavy Rigid licenses, and complete regular competency assessments.",
      icon: <FaCertificate className="text-3xl" />,
      image: "/DSC00847.JPG",
    },
    {
      title: "Safety Coordination",
      description:
        "Professional coordination with traffic controllers, project teams, and emergency services to ensure safe operations in high-risk work zones.",
      icon: <FaCheckCircle className="text-3xl" />,
      image: "/DSC00717.JPG",
    },
  ];

  const tmaRequirements = [
    {
      title: "TMA Accreditation",
      detail: "Current TfNSW TMA operator accreditation",
      icon: <FaCertificate className="text-xl" />,
    },
    {
      title: "HR License",
      detail: "Heavy Rigid (HR) driver's license",
      icon: <FaIdCard className="text-xl" />,
    },
    {
      title: "Traffic Control Card",
      detail: "Traffic control (Yellow or Blue Card)",
      icon: <FaCheckCircle className="text-xl" />,
    },
    {
      title: "High-Speed Experience",
      detail: "Extensive experience on high-speed roads",
      icon: <FaTruck className="text-xl" />,
    },
    {
      title: "Emergency Training",
      detail: "Emergency response training",
      icon: <FaExclamationTriangle className="text-xl" />,
    },
    {
      title: "Safety Commitment",
      detail: "Commitment to safety and professionalism",
      icon: <FaShieldAlt className="text-xl" />,
    },
  ];

  const faqs = [
    {
      question: "What is a Truck-Mounted Attenuator (TMA)?",
      answer:
        "A Truck-Mounted Attenuator (TMA) is a specialized safety device mounted on the rear of a truck that absorbs impact energy if a vehicle collides with the work zone. TMAs are required for works on high-speed roads (speeds above 80 km/h) to provide critical protection for workers and reduce the severity of rear-end collisions. They're essential for freeway and highway works.",
    },
    {
      question: "What qualifications do TMA operators need?",
      answer:
        "TMA operators must hold a Heavy Rigid (HR) driver's license, current TfNSW TMA operator accreditation, and traffic control accreditation (Yellow or Blue Card). They undergo specialized training in TMA deployment, emergency procedures, and high-speed road operations. All our TMA operators have extensive experience and regular competency assessments.",
    },
    {
      question: "When is a TMA required for my project?",
      answer:
        "TMAs are generally required for works on roads with speed limits above 80 km/h, including freeways, highways, and motorways. They're mandated by TfNSW for specific work types and conditions outlined in the TCAWS manual. If your project involves high-speed roads or has been identified as requiring impact protection, a TMA will be necessary. We can assess your requirements.",
    },
    {
      question: "Can you provide TMA operators for emergency works?",
      answer:
        "Yes, our 24/7 operations include TMA operator availability for emergency and urgent works on high-speed roads. Our experienced TMA operators can deploy rapidly to provide impact protection for incident management, emergency repairs, and after-hours works. Call 1300 008 782 for immediate TMA operator requirements.",
    },
  ];

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Hero Section - Diagonal Split */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC00717.JPG"
            alt="TMA Operators"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/55"></div>
        </div>

        {/* Diagonal accent */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-white z-10" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="w-full py-32">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-2 rounded-full text-sm font-semibold mb-8 uppercase tracking-wider">
                <FaShieldAlt className="text-btn" />
                Impact Protection Specialists
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-anton uppercase text-white">
                TMA{" "}
                <span className="text-btn">OPERATORS</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mt-6 leading-relaxed max-w-2xl mx-auto">
                Skilled operators providing critical impact protection for
                high-speed road works across NSW
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-10">
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

      {/* What is a TMA - Feature Block */}
      <AnimatedSection direction="left">
        <section className="py-20 md:py-28 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left: Image with overlay badge */}
              <div className="relative animate-element order-2 lg:order-1">
                <div className="relative w-full aspect-square overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/DSC00723.JPG"
                    alt="TMA Truck"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Overlay info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-btn rounded-lg flex items-center justify-center flex-shrink-0">
                        <FaShieldAlt className="text-white text-xl" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">
                          Critical Safety Equipment
                        </div>
                        <div className="text-gray-300 text-sm">
                          Required for roads above 80 km/h
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="space-y-6 animate-element order-1 lg:order-2">
                <span className="text-btn font-bold tracking-widest uppercase text-sm block">
                  Understanding TMAs
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-anton uppercase">
                  What is a{" "}
                  <span className="text-btn">Truck-Mounted Attenuator?</span>
                </h2>
                <div className="w-20 h-1 bg-btn"></div>
                <div
                  className="space-y-5 text-lg leading-relaxed"
                  style={{ color: "#8E8E95" }}
                >
                  <p>
                    A TMA is a{" "}
                    <strong className="text-gray-900">
                      specialized safety device
                    </strong>{" "}
                    mounted on the rear of a truck that absorbs impact energy in
                    the event of a collision with the work zone. TMAs provide{" "}
                    <strong className="text-gray-900">
                      critical protection
                    </strong>{" "}
                    for workers on high-speed roads.
                  </p>
                  <p>
                    Our{" "}
                    <strong className="text-gray-900">
                      TfNSW-accredited TMA operators
                    </strong>{" "}
                    hold Heavy Rigid licenses and have extensive experience in
                    freeway works, mobile operations, and emergency response
                    situations.
                  </p>
                  <p>
                    From stationary shadow vehicles to mobile lane closures, our
                    operators deliver{" "}
                    <strong className="text-gray-900">
                      safety-focused service
                    </strong>{" "}
                    that protects workers and maintains traffic flow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Services - Alternating Image Cards */}
      <section className="bg-gray-50 py-20 md:py-24 px-5 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection direction="right">
            <div className="text-center mb-16 animate-element">
              <span className="text-btn font-bold tracking-widest uppercase text-sm block mb-4">
                Our Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-anton uppercase">
                TMA Operator{" "}
                <span className="text-btn">Services</span>
              </h2>
              <div className="w-24 h-1 bg-btn mx-auto mt-6"></div>
              <p
                className="mt-6 text-lg max-w-3xl mx-auto leading-relaxed"
                style={{ color: "#8E8E95" }}
              >
                Professional impact protection for high-speed road works
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tmaServices.map((service, index) => (
              <AnimatedSection
                key={index}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 animate-element">
                  {/* Image top half */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-btn rounded-xl flex items-center justify-center text-white shadow-lg">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  {/* Content bottom half */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-anton uppercase">
                      {service.title}
                    </h3>
                    <div className="w-10 h-0.5 bg-btn mb-3"></div>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "#8E8E95" }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Full Width Image Break */}
      <section className="relative h-[40vh] min-h-[350px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/DSC00810.JPG"
            alt="TMA Operations"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/65"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-5">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-anton uppercase leading-tight">
              PROTECTING WORKERS ON{" "}
              <span className="text-btn">HIGH-SPEED ROADS</span>
            </h2>
            <p className="text-gray-300 text-lg mt-4 max-w-xl mx-auto">
              Critical impact protection for freeways, highways, and motorways
              across NSW
            </p>
          </div>
        </div>
      </section>

      {/* Qualifications - Badge Grid */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-[#181c2a]">
          <div className="max-w-5xl mx-auto animate-element">
            <div className="text-center mb-14">
              <span className="text-btn font-bold tracking-widest uppercase text-sm block mb-4">
                Qualifications
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-anton uppercase">
                TMA Operator{" "}
                <span className="text-btn">Requirements</span>
              </h2>
              <div className="w-24 h-1 bg-btn mx-auto mt-6"></div>
              <p className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed text-gray-300">
                Fully licensed and accredited professionals for high-risk
                operations
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {tmaRequirements.map((req, index) => (
                <div
                  key={index}
                  className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-btn/30 rounded-xl p-6 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-btn/20 group-hover:bg-btn flex items-center justify-center text-btn group-hover:text-white transition-all duration-300 mb-4">
                    {req.icon}
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">
                    {req.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {req.detail}
                  </p>
                </div>
              ))}
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
                Common Questions
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-anton uppercase">
                TMA <span className="text-btn">FAQs</span>
              </h2>
              <div className="w-24 h-1 bg-btn mx-auto mt-6"></div>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
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

      {/* CTA - Split with Image Background */}
      <AnimatedSection direction="right">
        <section className="relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Image */}
            <div className="relative h-[400px] lg:h-auto lg:min-h-[500px]">
              <Image
                src="/DSC00810.JPG"
                alt="Contact for TMA Services"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
            {/* Right: Content */}
            <div className="bg-[#181c2a] flex items-center px-8 sm:px-12 lg:px-16 py-16 lg:py-20">
              <div className="max-w-lg">
                <span className="text-btn font-bold tracking-widest uppercase text-sm block mb-4">
                  Let's Talk
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-anton uppercase">
                  Need TMA Operators{" "}
                  <span className="text-btn">For Your Project?</span>
                </h2>
                <div className="w-20 h-1 bg-btn mt-6 mb-6"></div>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Partner with T&S Traffic Control for experienced TMA operators
                  who provide critical impact protection and ensure safe
                  operations on high-speed roads.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 bg-btn hover:bg-btn/90 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
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

export default TMAOperatorsPage;
