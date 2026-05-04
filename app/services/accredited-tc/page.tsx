"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  FaCheckCircle,
  FaPhoneAlt,
  FaUserShield,
  FaUsers,
  FaTruck,
  FaClipboardCheck,
  FaChevronDown,
} from "react-icons/fa";
import AnimatedSection from "../../components/AnimatedSection";

const AccreditedTCPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Counter animation hook
  const useCounter = (target: number, duration = 2000) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            let start = 0;
            const step = target / (duration / 16);
            const timer = setInterval(() => {
              start += step;
              if (start >= target) {
                setCount(target);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, 16);
          }
        },
        { threshold: 0.5 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, [target, duration]);

    return { count, ref };
  };

  const stat1 = useCounter(500, 2000);
  const stat2 = useCounter(100, 2000);
  const stat3 = useCounter(24, 1500);
  const stat4 = useCounter(15, 1500);

  const personnelRoles = [
    {
      title: "Traffic Controllers (TCs)",
      description:
        "Highly trained professionals ensuring safe and efficient traffic management for all project scales, equipped with current TfNSW accreditation.",
      icon: <FaUserShield className="text-3xl" />,
      image: "/montage/3. Services We Offer/Acreditted TC/1.png",
    },
    {
      title: "Team Leaders & Supervisors",
      description:
        "Experienced leaders coordinating operations, managing teams on-site, and ensuring compliance with industry standards and project requirements.",
      icon: <FaUsers className="text-3xl" />,
      image: "/montage/2. About Us/Our Values/Taj Safety Check.JPG",
    },
    {
      title: "TMA Operators",
      description:
        "Skilled Truck-Mounted Attenuator operators with Heavy Rigid licenses and TfNSW accreditation for complex traffic scenarios on high-speed roads.",
      icon: <FaTruck className="text-3xl" />,
      image: "/montage/1. Home Page/Services We offer/Accredited TC.JPG",
    },
    {
      title: "Project Supervisors",
      description:
        "Senior personnel overseeing multiple sites, conducting audits, and maintaining direct communication with stakeholders and authorities.",
      icon: <FaClipboardCheck className="text-3xl" />,
      image: "/montage/3. Services We Offer/Site Risk Assesment/Team Photo.JPG",
    },
  ];

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
      question:
        "What's the difference between TCs, Team Leaders, and TMA Operators?",
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
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/montage/3. Services We Offer/Acreditted TC/1.png"
            alt="Accredited Traffic Control Personnel"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="max-w-2xl py-32">
            <div className="w-20 h-1 bg-btn mb-8"></div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-anton uppercase text-white">
              ACCREDITED TRAFFIC{" "}
              <span className="text-btn">CONTROL PERSONNEL</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mt-6 leading-relaxed max-w-xl">
              Our people are the backbone of our operation — trained,
              accredited, and ready for any project.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-btn hover:bg-btn/90 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                <FaPhoneAlt className="text-xl" />
                Get In Touch
              </Link>
              <a
                href="tel:+611300008782"
                className="inline-flex items-center justify-center gap-3 border-2 border-white/40 hover:border-white text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10"
              >
                1300 008 782
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-btn py-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {[
              {
                counter: stat1,
                suffix: "+",
                label: "Projects Completed",
              },
              {
                counter: stat2,
                suffix: "%",
                label: "Safety Record",
              },
              {
                counter: stat3,
                suffix: "/7",
                label: "Availability",
              },
              {
                counter: stat4,
                suffix: "+",
                label: "Years Experience",
              },
            ].map((stat, index) => (
              <div
                key={index}
                ref={stat.counter.ref}
                className="py-8 px-6 text-center border-r border-white/20 last:border-r-0 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-anton">
                  {stat.counter.count}
                  {stat.suffix}
                </div>
                <div className="text-white/80 text-sm sm:text-base mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction - Offset Image */}
      <AnimatedSection direction="left">
        <section className="py-20 md:py-28 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left: Content - 5 cols */}
              <div className="lg:col-span-5 space-y-8 animate-element">
                <div>
                  <span className="text-btn font-bold tracking-widest uppercase text-sm block mb-4">
                    About Our Team
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-anton uppercase">
                    Trained & Accredited{" "}
                    <span className="text-btn">Traffic Control Teams</span>
                  </h2>
                  <div className="w-24 h-1 bg-btn mt-6"></div>
                </div>

                <div
                  className="space-y-5 text-lg leading-relaxed"
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
                    professionalism.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-btn hover:bg-btn/90 text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </Link>
              </div>

              {/* Right: Stacked Images - 7 cols */}
              <div className="lg:col-span-7 relative animate-element">
                <div className="relative">
                  {/* Main image */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      src="/montage/3. Services We Offer/Acreditted TC/2.JPG"
                      alt="Traffic Control Personnel"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </div>
                  {/* Floating accent card */}
                  <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-btn text-white p-5 sm:p-6 rounded-xl shadow-xl z-10 max-w-[200px]">
                    <div className="text-3xl font-bold font-anton">100%</div>
                    <div className="text-sm text-white/80 mt-1">
                      TfNSW Accredited Personnel
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Personnel Roles - Alternating Rows */}
      <section className="bg-gray-50">
        {personnelRoles.map((role, index) => (
          <AnimatedSection
            key={index}
            direction={index % 2 === 0 ? "left" : "right"}
          >
            <div
              className={`py-16 md:py-20 px-5 sm:px-6 lg:px-8 ${
                index % 2 !== 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              <div className="max-w-7xl mx-auto">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    index % 2 !== 0 ? "direction-rtl" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative animate-element ${
                      index % 2 !== 0
                        ? "order-1 lg:order-2"
                        : "order-1 lg:order-1"
                    }`}
                  >
                    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src={role.image}
                        alt={role.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      {/* Accent border */}
                      <div className="absolute inset-0 border-4 border-btn/0 hover:border-btn/40 rounded-lg transition-all duration-500"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`space-y-6 animate-element ${
                      index % 2 !== 0
                        ? "order-2 lg:order-1"
                        : "order-2 lg:order-2"
                    }`}
                  >
                    <div className="w-14 h-14 bg-btn rounded-xl flex items-center justify-center text-white shadow-lg">
                      {role.icon}
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 font-anton uppercase">
                      {role.title}
                    </h3>
                    <div className="w-16 h-1 bg-btn"></div>
                    <p
                      className="text-lg leading-relaxed"
                      style={{ color: "#8E8E95" }}
                    >
                      {role.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </section>

      {/* Full-Width Image Banner */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/montage/3. Services We Offer/Acreditted TC/3.png"
            alt="Professional Traffic Control"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-5">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-anton uppercase leading-tight">
              SAFETY IS OUR <span className="text-btn">PRIORITY</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl mx-auto">
              Every team member upholds the highest standards of professionalism
              and safety awareness on every site
            </p>
          </div>
        </div>
      </section>

      {/* What Our Personnel Bring - Two Column Cards */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-[#181c2a]">
          <div className="max-w-7xl mx-auto animate-element">
            <div className="text-center mb-14">
              <span className="text-btn font-bold tracking-widest uppercase text-sm block mb-4">
                Our Standards
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-anton uppercase">
                What Our Personnel <span className="text-btn">Bring</span>
              </h2>
              <div className="w-24 h-1 bg-btn mx-auto mt-6"></div>
              <p className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed text-gray-300">
                Fully equipped, trained, and committed professionals on every
                site
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personnelBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white/5 hover:bg-white/10 rounded-xl px-6 py-5 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-btn/20 flex items-center justify-center flex-shrink-0 group-hover:bg-btn/40 transition-colors duration-300">
                    <FaCheckCircle className="text-btn text-lg" />
                  </div>
                  <span className="text-white text-base leading-relaxed">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection direction="left">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-gray-50">
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
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
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

      {/* CTA Section - Full Width Centered */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-28 px-5 sm:px-6 lg:px-8 bg-btn relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-anton uppercase">
              Ready For Professional Traffic Control?
            </h2>
            <p className="mt-6 text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
              Partner with T&S Traffic Control for accredited, professional
              personnel who deliver safe, reliable service on every project.
              Contact us today to discuss your requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-btn px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Get A Quote
              </Link>
              <a
                href="tel:+611300008782"
                className="inline-flex items-center justify-center gap-3 border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-btn"
              >
                <FaPhoneAlt className="text-xl" />
                1300 008 782
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default AccreditedTCPage;
