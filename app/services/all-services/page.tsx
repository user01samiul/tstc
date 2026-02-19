"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaClipboardList,
  FaClock,
  FaDraftingCompass,
  FaFileAlt,
  FaHardHat,
  FaPhoneAlt,
  FaRoad,
  FaTools,
  FaTruck,
  FaUsers,
} from "react-icons/fa";
import AnimatedSection from "./../../../components/AnimatedSection";

const ServicesPage = () => {
  const planningServices = [
    {
      icon: FaFileAlt,
      title: "Traffic Guidance Schemes",
      shortTitle: "TGS",
      description:
        "Compliant TGS designs to TfNSW (RMS) and AS1742.3 standards, tailored for any site condition.",
      href: "/services/traffic-plans",
    },
    {
      icon: FaClipboardList,
      title: "Traffic Management Plans",
      shortTitle: "TMP",
      description:
        "Comprehensive TMP documentation covering methodology, risk controls, and stakeholder communication.",
      href: "/services/traffic-management-plans",
    },
    {
      icon: FaDraftingCompass,
      title: "Swept Path Analysis",
      shortTitle: "SPA",
      description:
        "Precision vehicle movement simulation ensuring safe access and conflict-free design before works begin.",
      href: "/services/swept-path",
    },
    {
      icon: FaCalendarAlt,
      title: "Event Management Plans",
      shortTitle: "EMP",
      description:
        "Full traffic management solutions for community, sporting, film, and large-scale public events.",
      href: "/services/event-management-plans",
    },
  ];

  const permitServices = [
    { label: "TfNSW TMC ROL Approval", href: "/services/permit-application#tf-nsw" },
    { label: "Council Permits", href: "/services/permit-application#council-permits" },
    { label: "STA Bus Approvals", href: "/services/permit-application#sta-bus" },
    { label: "Emergency Approvals", href: "/services/permit-application#emergency-approvals" },
  ];

  const controllerServices = [
    {
      icon: FaHardHat,
      title: "Accredited TC",
      description: "Fully qualified and accredited traffic controllers for any site and project scale.",
      href: "/services/accredited-tc",
    },
    {
      icon: FaClock,
      title: "24 Hour Response",
      description: "Round-the-clock emergency traffic management response across NSW.",
      href: "/services/24-hour-response",
    },
    {
      icon: FaUsers,
      title: "Team Leaders",
      description: "Experienced supervisors overseeing crew coordination and site compliance.",
      href: "/services/team-leaders",
    },
    {
      icon: FaTruck,
      title: "TMA Operators",
      description: "Certified truck-mounted attenuator operators for high-risk worksites.",
      href: "/services/tma-operators",
    },
  ];

  const categories = [
    { num: "01", label: "Traffic Engineering", sub: "Planning & Design", anchor: "#engineering" },
    { num: "02", label: "Permit Applications", sub: "Approvals & Compliance", anchor: "#permits" },
    { num: "03", label: "Traffic Controllers", sub: "On-Site Crews", anchor: "#controllers" },
  ];

  return (
    <div className="font-sans overflow-x-hidden">

      {/* ─── HERO: Dark directory-style, no photo ─── */}
      <section
        className="relative flex flex-col overflow-hidden"
        style={{ backgroundColor: "#0f1120" }}
      >
        {/* Blueprint grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#4a9eff 1px, transparent 1px), linear-gradient(90deg, #4a9eff 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        {/* Ghost text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span
            className="font-black font-anton text-white uppercase leading-none"
            style={{
              fontSize: "clamp(6rem, 20vw, 22rem)",
              opacity: 0.028,
              letterSpacing: "-0.05em",
            }}
          >
            SERVICES
          </span>
        </div>

        {/* Main content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-5 sm:px-6 lg:px-8 pt-40 pb-16">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-10 h-px bg-btn" />
            <span className="text-btn text-sm font-semibold tracking-widest uppercase">
              T&S Traffic Control
            </span>
            <div className="w-10 h-px bg-btn" />
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold font-anton uppercase leading-none text-white mb-6">
            ALL
            <br />
            <span className="text-btn">SERVICES</span>
          </h1>

          <p className="text-gray-400 text-xl max-w-2xl leading-relaxed mb-12">
            From traffic design and planning to on-site implementation and
            compliance — everything you need, under one roof.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-btn hover:bg-btn/90 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
          >
            <FaPhoneAlt />
            Get A Quote
          </Link>
        </div>

        {/* Category jump strips */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 border-t border-white/10 mt-8">
          {categories.map((cat, i) => (
            <a
              key={i}
              href={cat.anchor}
              className="group flex items-center gap-5 p-7 border-b sm:border-b-0 sm:border-r border-white/10 last:border-r-0 hover:bg-white/5 transition-all duration-300"
            >
              <span className="text-5xl font-black font-anton text-white/10 group-hover:text-btn/40 transition-colors leading-none flex-shrink-0">
                {cat.num}
              </span>
              <div>
                <p className="text-white font-bold font-anton uppercase tracking-wide">
                  {cat.label}
                </p>
                <p className="text-gray-500 text-sm mt-0.5">{cat.sub}</p>
                <span className="text-btn text-xs font-semibold flex items-center gap-1 mt-1 group-hover:gap-2 transition-all">
                  Explore <FaArrowRight className="text-[10px]" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ─── SECTION 01: Traffic Engineering ─── */}
      <AnimatedSection direction="left">
        <section id="engineering" className="py-24 px-5 sm:px-6 lg:px-8 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto">

            {/* Section header */}
            <div className="flex items-end justify-between mb-12 animate-element">
              <div>
                <div className="w-16 h-1 bg-btn mb-4" />
                <p className="text-btn text-xs font-bold uppercase tracking-widest mb-1">01</p>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 font-anton uppercase leading-tight">
                  Traffic Engineering
                </h2>
                <p className="text-gray-500 mt-1 font-medium">Planning &amp; Design</p>
              </div>
              <span className="hidden lg:block text-[9rem] font-black font-anton text-gray-100 leading-none select-none">
                01
              </span>
            </div>

            {/* Service cards — navigational links */}
            <div className="animate-element grid grid-cols-1 md:grid-cols-2 gap-5">
              {planningServices.map((service, i) => (
                <Link
                  key={i}
                  href={service.href}
                  className="group flex gap-5 p-7 rounded-2xl border border-gray-100 hover:border-btn hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-btn/10 group-hover:bg-btn flex items-center justify-center text-btn group-hover:text-white transition-all duration-300">
                    <service.icon className="text-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-btn text-xs font-bold uppercase tracking-widest">
                          {service.shortTitle}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 font-anton uppercase leading-tight mt-0.5">
                          {service.title}
                        </h3>
                      </div>
                      <FaArrowRight className="text-gray-300 group-hover:text-btn transition-colors flex-shrink-0 mt-1" />
                    </div>
                    <p className="text-sm mt-2 leading-relaxed" style={{ color: "#8E8E95" }}>
                      {service.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── VISUAL BREAK: 3-photo strip ─── */}
      <AnimatedSection direction="right">
        <div className="px-5 sm:px-6 lg:px-8 pb-0 bg-white">
          <div className="max-w-7xl mx-auto animate-element grid grid-cols-3 gap-4">
            {[
              { src: "/montage/1. Home Page/Services We offer/TMP & TGS.jpeg", label: "PLANNING" },
              { src: "/DSC00949.JPG", label: "IMPLEMENTATION" },
              { src: "/DSC02286.webp", label: "COMPLIANCE" },
            ].map((img, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-2xl group">
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1120]/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-xs font-bold uppercase tracking-widest">
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ─── SECTION 02: Permit Applications ─── */}
      <AnimatedSection direction="left">
        <section id="permits" className="py-24 px-5 sm:px-6 lg:px-8 bg-gray-50 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left: content */}
              <div className="animate-element space-y-8">
                <div className="flex items-end gap-6">
                  <div>
                    <div className="w-16 h-1 bg-btn mb-4" />
                    <p className="text-btn text-xs font-bold uppercase tracking-widest mb-1">02</p>
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 font-anton uppercase leading-tight">
                      Permit
                      <br />
                      Applications
                    </h2>
                    <p className="text-gray-500 mt-1 font-medium">Approvals &amp; Compliance</p>
                  </div>
                  <span className="hidden sm:block text-[7rem] font-black font-anton text-gray-200 leading-none select-none pb-1">
                    02
                  </span>
                </div>

                <p className="text-lg leading-relaxed" style={{ color: "#8E8E95" }}>
                  We manage the full permit application process with TfNSW,
                  local councils, and other road authorities — handling all
                  documentation and liaison on your behalf.
                </p>

                <div className="space-y-3">
                  {permitServices.map((permit, i) => (
                    <Link
                      key={i}
                      href={permit.href}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-btn hover:shadow-sm transition-all duration-300 group"
                    >
                      <span className="text-btn text-sm font-bold font-anton w-8 flex-shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-semibold text-gray-800 group-hover:text-btn transition-colors flex-1">
                        {permit.label}
                      </span>
                      <FaArrowRight className="text-gray-300 group-hover:text-btn transition-colors flex-shrink-0" />
                    </Link>
                  ))}
                </div>

                <Link
                  href="/services/permit-application"
                  className="inline-flex items-center gap-3 bg-btn hover:bg-btn/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  View All Permit Services
                  <FaArrowRight />
                </Link>
              </div>

              {/* Right: photo */}
              <div className="animate-element relative">
                <div
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)" }}
                >
                  <Image
                    src="/DSC00947.JPG"
                    alt="Permit Applications"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0f1120]/40 to-transparent" />
                </div>
                <div
                  className="absolute -bottom-4 -right-4 rounded-2xl p-6 shadow-2xl z-10"
                  style={{ backgroundColor: "#0f1120" }}
                >
                  <p className="text-btn text-3xl font-bold font-anton">ROL</p>
                  <p className="text-white text-xs font-semibold mt-1 uppercase tracking-wider">
                    TfNSW Approved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── SECTION 03: Traffic Controllers ─── */}
      <AnimatedSection direction="right">
        <section
          id="controllers"
          className="relative py-24 px-5 sm:px-6 lg:px-8 overflow-hidden scroll-mt-20"
          style={{ backgroundColor: "#0f1120" }}
        >
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#4a9eff 1px, transparent 1px), linear-gradient(90deg, #4a9eff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center gap-8 mb-16 animate-element">
              <span className="text-[8rem] font-black font-anton text-white/5 leading-none select-none hidden lg:block">
                03
              </span>
              <div>
                <div className="w-16 h-1 bg-btn mb-4" />
                <p className="text-btn text-xs font-bold uppercase tracking-widest mb-1">03</p>
                <h2 className="text-4xl sm:text-5xl font-bold text-white font-anton uppercase leading-tight">
                  Traffic Controllers
                </h2>
                <p className="text-gray-500 mt-1 font-medium">
                  Qualified crews ready to deploy across NSW
                </p>
              </div>
            </div>

            {/* Controller cards */}
            <div className="animate-element grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {controllerServices.map((service, i) => (
                <Link
                  key={i}
                  href={service.href}
                  className="group flex flex-col p-7 rounded-2xl border border-white/10 hover:border-btn hover:bg-btn/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-btn/20 group-hover:bg-btn flex items-center justify-center text-btn group-hover:text-white transition-all duration-300 mb-5">
                    <service.icon className="text-xl" />
                  </div>
                  <h3 className="text-white font-bold font-anton uppercase text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-btn text-sm font-semibold">
                    Learn More
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── ADDITIONAL: Signage + Fleet ─── */}
      <AnimatedSection direction="left">
        <section className="py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto animate-element">
            <div className="w-16 h-1 bg-btn mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-anton uppercase mb-12">
              Also Available
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/services/signage-installation"
                className="group flex gap-5 p-7 rounded-2xl border border-gray-100 hover:border-btn hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-btn/10 group-hover:bg-btn flex items-center justify-center text-btn group-hover:text-white transition-all duration-300">
                  <FaRoad className="text-xl" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-gray-900 font-anton uppercase">
                      Signage Installation
                    </h3>
                    <FaArrowRight className="text-gray-300 group-hover:text-btn transition-colors flex-shrink-0 mt-1" />
                  </div>
                  <p className="text-sm mt-2 leading-relaxed" style={{ color: "#8E8E95" }}>
                    Temporary and permanent street signage supply, installation,
                    and maintenance across NSW.
                  </p>
                </div>
              </Link>

              <Link
                href="/fleet"
                className="group flex gap-5 p-7 rounded-2xl border border-gray-100 hover:border-btn hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-btn/10 group-hover:bg-btn flex items-center justify-center text-btn group-hover:text-white transition-all duration-300">
                  <FaTools className="text-xl" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-gray-900 font-anton uppercase">
                      Fleet &amp; Equipment
                    </h3>
                    <FaArrowRight className="text-gray-300 group-hover:text-btn transition-colors flex-shrink-0 mt-1" />
                  </div>
                  <p className="text-sm mt-2 leading-relaxed" style={{ color: "#8E8E95" }}>
                    A fully equipped fleet of certified vehicles, VMS boards,
                    barriers, signage, and safety equipment — ready to deploy.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── CTA ─── */}
      <AnimatedSection direction="right">
        <section
          className="relative py-28 px-5 sm:px-6 lg:px-8 overflow-hidden"
          style={{ backgroundColor: "#0f1120" }}
        >
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#4a9eff 1px, transparent 1px), linear-gradient(90deg, #4a9eff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <span
              className="text-[14vw] font-black font-anton text-white uppercase leading-none"
              style={{ opacity: 0.025, letterSpacing: "-0.05em" }}
            >
              READY
            </span>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center animate-element">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-btn" />
              <span className="text-btn text-sm font-semibold tracking-widest uppercase">
                Let&apos;s Get Started
              </span>
              <div className="w-8 h-px bg-btn" />
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-anton uppercase leading-tight mb-6">
              Ready To Get
              <br />
              <span className="text-btn">Started?</span>
            </h2>

            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              Whether you need a simple traffic plan or a comprehensive
              management solution for a major project,{" "}
              <strong className="text-white">T&S Traffic Control</strong> is
              here to help. Contact us to discuss your requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-btn hover:bg-btn/90 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                <FaPhoneAlt />
                Get A Quote
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-3 border border-white/30 hover:border-btn text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                About Us →
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default ServicesPage;
