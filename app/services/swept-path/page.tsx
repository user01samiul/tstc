"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaCarSide,
  FaDraftingCompass,
  FaDownload,
  FaFileSignature,
  FaPhoneAlt,
  FaRoute,
} from "react-icons/fa";
import AnimatedSection from "../../components/AnimatedSection";

const SweptPathAnalysisPage = () => {
  const spaFeatures = [
    {
      title: "Access Verification",
      description:
        "Comprehensive checks for construction sites and temporary traffic setups to ensure safe vehicle access.",
      icon: <FaRoute className="text-xl" />,
    },
    {
      title: "Manoeuvre Analysis",
      description:
        "Verification of vehicle movements in restricted areas, tight corners, and complex intersections.",
      icon: <FaCarSide className="text-xl" />,
    },
    {
      title: "Design Support",
      description:
        "Expert support for detours, entry/exit points, and turning areas to optimise site layout.",
      icon: <FaDraftingCompass className="text-xl" />,
    },
    {
      title: "Compliance Documentation",
      description:
        "Professional reports and documentation for approvals and engineering submissions.",
      icon: <FaFileSignature className="text-xl" />,
    },
  ];

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

  const process = [
    {
      step: "01",
      title: "Site Brief",
      desc: "We gather your site details, vehicle types, and access requirements.",
    },
    {
      step: "02",
      title: "CAD Modelling",
      desc: "Industry-standard software simulates real vehicle paths accurately.",
    },
    {
      step: "03",
      title: "Analysis",
      desc: "We identify conflicts, clearance issues, and safe turning radii.",
    },
    {
      step: "04",
      title: "Delivery",
      desc: "Clear, professional report ready for submissions and approvals.",
    },
  ];

  return (
    <div className="font-sans overflow-x-hidden">

      {/* ─── HERO: Split layout ─── */}
      <section className="relative min-h-screen flex">
        {/* Mobile background image */}
        <div className="absolute inset-0 lg:hidden z-0">
          <Image
            src="/DSC00723.JPG"
            alt="Swept Path Analysis"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0f1120]/85" />
        </div>

        {/* Left: Dark content panel */}
        <div
          className="relative z-10 flex flex-col justify-center w-full lg:w-[55%] px-8 sm:px-12 lg:px-16 py-36 lg:py-0"
          style={{ backgroundColor: "#0f1120" }}
        >
          {/* Grid bg */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#4a9eff 1px, transparent 1px), linear-gradient(90deg, #4a9eff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-10 h-px bg-btn" />
              <span className="text-btn text-sm font-semibold tracking-widest uppercase">
                Traffic Engineering
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-anton uppercase leading-none text-white mb-8">
              SWEPT PATH
              <br />
              <span className="text-btn">ANALYSIS</span>
            </h1>

            <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-lg">
              Precision vehicle movement simulation — ensuring safe access,
              compliance, and conflict-free design before works begin.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-btn hover:bg-btn/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                <FaPhoneAlt />
                Get A Quote
              </Link>
              <a
                href="/montage/3. Services We Offer/Traffic Planning/SPA.pdf"
                download="SPA-Sample.pdf"
                className="inline-flex items-center gap-3 border border-white/30 hover:border-btn text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                <FaDownload />
                Sample SPA
              </a>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {[
                { value: "3–5", unit: "days", label: "Standard delivery" },
                { value: "100%", unit: "", label: "AS compliant" },
                { value: "Any", unit: "", label: "Vehicle type" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-3xl font-bold text-btn font-anton">
                    {s.value}
                    <span className="text-base">{s.unit}</span>
                  </p>
                  <p className="text-xs text-gray-400 mt-1 uppercase tracking-wide font-semibold">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Photo panel — desktop only */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[50%]">
          <Image
            src="/DSC00723.JPG"
            alt="Swept Path Analysis"
            fill
            className="object-cover"
            priority
          />
          {/* Diagonal mask merging into left dark panel */}
          <div
            className="absolute inset-y-0 left-0 w-28 bg-[#0f1120]"
            style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
          />
        </div>
      </section>

      {/* ─── INTRO + BLUEPRINT PLAN PREVIEW ─── */}
      <AnimatedSection direction="left">
        <section className="py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left: Blueprint-style plan display */}
              <div className="animate-element relative">
                <div
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl"
                  style={{ backgroundColor: "#0f1120" }}
                >
                  {/* Blueprint grid */}
                  <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage:
                        "linear-gradient(#4a9eff 1px, transparent 1px), linear-gradient(90deg, #4a9eff 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                    }}
                  />
                  <Image
                    src="/sami/traffic-plan1.png"
                    alt="Swept Path Analysis Sample"
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Download button */}
                  <div className="absolute bottom-4 left-4">
                    <a
                      href="/montage/3. Services We Offer/Traffic Planning/SPA.pdf"
                      download="SPA-Sample.pdf"
                      className="inline-flex items-center gap-2 bg-btn hover:bg-btn/90 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
                    >
                      <FaDownload />
                      Download Sample SPA
                    </a>
                  </div>
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-btn text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                    SPA
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="space-y-8 animate-element">
                <div>
                  <div className="w-16 h-1 bg-btn mb-6" />
                  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                    Precise Vehicle
                    <br />
                    <span className="text-btn">Movement Analysis</span>
                  </h2>
                </div>

                <div
                  className="space-y-5 text-lg leading-relaxed"
                  style={{ color: "#8E8E95" }}
                >
                  <p>
                    Our planning team provides{" "}
                    <strong className="text-gray-900">
                      accurate Swept Path Analysis
                    </strong>{" "}
                    to ensure heavy vehicles and machinery can safely navigate
                    work zones, intersections, and tight environments.
                  </p>
                  <p>
                    Using{" "}
                    <strong className="text-gray-900">
                      industry-standard modelling software
                    </strong>
                    , we simulate vehicle movements to confirm access, turning
                    space, and clearances before works begin — reducing risk and
                    avoiding costly on-site surprises.
                  </p>
                  <p>
                    Our swept path reports are accepted by{" "}
                    <strong className="text-gray-900">
                      TfNSW, local councils, and DA authorities
                    </strong>{" "}
                    across NSW.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── PROCESS: Horizontal numbered steps ─── */}
      <AnimatedSection direction="right">
        <section className="py-24 px-5 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                How We Deliver <span className="text-btn">Your SPA</span>
              </h2>
            </div>

            <div className="animate-element grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((item, i) => (
                <div key={i} className="relative">
                  {/* Connector */}
                  {i < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[calc(50%+2.5rem)] w-full h-px bg-gray-200 z-0" />
                  )}
                  <div className="relative z-10 bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 text-center h-full">
                    <div className="w-16 h-16 rounded-full bg-btn/10 border-2 border-btn flex items-center justify-center mx-auto mb-6">
                      <span className="text-btn text-2xl font-bold font-anton">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 font-anton uppercase mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#8E8E95" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── CAPABILITIES: Sticky heading + feature cards ─── */}
      <AnimatedSection direction="left">
        <section className="py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Left: Sticky heading + image */}
              <div className="animate-element lg:sticky lg:top-32 space-y-8">
                <div>
                  <div className="w-16 h-1 bg-btn mb-6" />
                  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                    Our SPA
                    <br />
                    <span className="text-btn">Capabilities</span>
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed" style={{ color: "#8E8E95" }}>
                    Covering every access scenario — from simple driveways to
                    complex multi-vehicle construction environments.
                  </p>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/DSC00949.JPG"
                    alt="SPA Capabilities"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Right: Feature cards */}
              <div className="animate-element space-y-4">
                {spaFeatures.map((feature, i) => (
                  <div
                    key={i}
                    className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-btn hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-btn flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 font-anton uppercase mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-base leading-relaxed" style={{ color: "#8E8E95" }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── WHAT'S INCLUDED: Dark, large numbered list ─── */}
      <AnimatedSection direction="right">
        <section
          className="relative py-24 px-5 sm:px-6 lg:px-8 overflow-hidden"
          style={{ backgroundColor: "#0f1120" }}
        >
          {/* Grid bg */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#4a9eff 1px, transparent 1px), linear-gradient(90deg, #4a9eff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                What&apos;s Included In{" "}
                <span className="text-btn">Your SPA</span>
              </h2>
            </div>

            <div className="animate-element grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {serviceIncludes.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-5 p-5 rounded-xl border border-white/10 hover:border-btn/50 hover:bg-white/5 transition-all duration-300"
                >
                  <span
                    className="text-4xl font-black font-anton leading-none flex-shrink-0 w-12 text-right"
                    style={{ color: "rgba(var(--btn-rgb, 59 130 246), 0.25)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-white text-base leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── CTA ─── */}
      <AnimatedSection direction="left">
        <section className="py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left: Content */}
              <div className="animate-element space-y-8">
                <div>
                  <div className="w-16 h-1 bg-btn mb-6" />
                  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                    Need Swept Path
                    <br />
                    <span className="text-btn">Analysis?</span>
                  </h2>
                </div>
                <div
                  className="space-y-5 text-lg leading-relaxed"
                  style={{ color: "#8E8E95" }}
                >
                  <p>
                    Ready to ensure your project&apos;s vehicle movements are
                    safe and compliant?{" "}
                    <strong className="text-gray-900">
                      T&S Traffic Control
                    </strong>{" "}
                    delivers clear, accurate swept path reports that meet all
                    authority requirements.
                  </p>
                  <p>
                    Fast turnaround, professional documentation, and end-to-end
                    support from brief through to submission.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-btn hover:bg-btn/90 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
                  >
                    <FaPhoneAlt />
                    Get A Quote
                  </Link>
                  <Link
                    href="/services/traffic-plans"
                    className="inline-flex items-center gap-3 border-2 border-gray-200 hover:border-btn text-gray-900 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                  >
                    View TGS Plans →
                  </Link>
                </div>
              </div>

              {/* Right: Image with cut-corner clip and floating badge */}
              <div className="animate-element relative">
                <div
                  className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 82%, 82% 100%, 0 100%)" }}
                >
                  <Image
                    src="/DSC00947.JPG"
                    alt="Swept Path Analysis"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0f1120]/40 to-transparent" />
                </div>
                {/* Floating badge */}
                <div
                  className="absolute -bottom-4 -right-4 rounded-2xl p-6 shadow-2xl z-10"
                  style={{ backgroundColor: "#0f1120" }}
                >
                  <p className="text-btn text-3xl font-bold font-anton">SPA</p>
                  <p className="text-white text-xs font-semibold mt-1 uppercase tracking-wider">
                    AS Compliant
                  </p>
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
