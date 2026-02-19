"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaCheckCircle,
  FaClipboardList,
  FaPhoneAlt,
  FaRoad,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";
import AnimatedSection from "../../components/AnimatedSection";

const TrafficManagementPlansPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  // TMP Process Steps
  const tmpProcess = [
    {
      step: "01",
      title: "Consultation",
      icon: <FaUsers className="text-3xl" />,
      description:
        "Thorough assessment of your project's scope, site layout, and safety requirements.",
      detail:
        "We meet with your team to understand the full scope — project duration, site access, stakeholder requirements, and any authority-specific conditions. This ensures the TMP we produce is right first time.",
    },
    {
      step: "02",
      title: "Custom Design",
      icon: <FaClipboardList className="text-3xl" />,
      description:
        "Expert planning using advanced tools to create clear, compliant TMPs including signage and traffic flow strategies.",
      detail:
        "Our planners develop a comprehensive document covering methodology, risk controls, communication procedures, traffic staging, detour management, and pedestrian/cyclist provisions — tailored to your project.",
    },
    {
      step: "03",
      title: "Implementation",
      icon: <FaRoad className="text-3xl" />,
      description:
        "Professional setup and ongoing management with real-time adjustments to keep your site safe.",
      detail:
        "We support your team through implementation, providing on-site guidance, coordinating with road authorities, and making real-time plan adjustments as site conditions evolve.",
    },
    {
      step: "04",
      title: "Compliance",
      icon: <FaShieldAlt className="text-3xl" />,
      description:
        "All plans developed in accordance with TCAWS Manual and Australian Standards.",
      detail:
        "Every TMP is reviewed against TfNSW's TCAWS manual and relevant Australian Standards, ensuring your project meets all regulatory requirements and can proceed without costly delays.",
    },
  ];

  // TMP Benefits
  const tmpBenefits = [
    "Minimise risk and enhance safety for all site users",
    "Ensure compliance with all regulatory requirements",
    "Reduce project delays and costly disruptions",
    "Clear communication and coordination for stakeholders",
    "Support for permit applications and council approvals",
    "Full risk assessment and hazard identification",
    "Pedestrian and cyclist management strategies",
    "24/7 support for ongoing project requirements",
  ];

  const photos = [
    { src: "/DSC00949.JPG", label: "Site Planning" },
    { src: "/DSC02286.webp", label: "On-Site Safety" },
    { src: "/DSC00732.JPG", label: "Traffic Control" },
    {
      src: "/montage/3. Services We Offer/Event Management/Marathon Taper.png",
      label: "Project Management",
    },
  ];

  return (
    <div className="font-sans overflow-x-hidden">
      {/* ─── HERO: Full-width with angled overlay ─── */}
      <section className="relative min-h-screen overflow-hidden flex items-end">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC00732.JPG"
            alt="Traffic Management Plans"
            fill
            className="object-cover"
            priority
          />
          {/* Dark gradient — stronger at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1120] via-[#0f1120]/70 to-[#0f1120]/20" />
        </div>

        {/* Content anchored to bottom */}
        <div className="relative z-10 w-full max-w-7xl px-5 sm:px-6 lg:px-8 pb-20 pt-40">
          <div className="max-w-3xl">
            {/* Label */}
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-btn" />
              <span className="text-btn text-sm font-semibold tracking-widest uppercase">
                Traffic Engineering
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-none font-anton uppercase text-white mb-6">
              TRAFFIC
              <br />
              MANAGEMENT
              <br />
              <span className="text-btn">PLANS</span>
            </h1>

            <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-xl">
              Comprehensive TMPs developed to{" "}
              <strong className="text-white">TfNSW TCAWS</strong> standards —
              keeping your project safe, compliant, and on schedule.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-btn hover:bg-btn/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                <FaPhoneAlt />
                Get A Free Quote
              </Link>
              <Link
                href="/services/permit-application"
                className="inline-flex items-center gap-3 border border-white/30 hover:border-btn text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                Permit Applications →
              </Link>
            </div>
          </div>
        </div>

        {/* Angled bottom cut */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-white z-10"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
        />
      </section>

      {/* ─── INTRO: Wide text + side photo mosaic ─── */}
      <AnimatedSection direction="left">
        <section className="py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Content */}
              <div className="space-y-8 animate-element">
                <div>
                  <div className="w-16 h-1 bg-btn mb-6" />
                  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                    Comprehensive TMPs <br />
                    <span className="text-btn">For Every Project</span>
                  </h2>
                </div>
                <div
                  className="space-y-5 text-lg leading-relaxed"
                  style={{ color: "#8E8E95" }}
                >
                  <p>
                    We prepare{" "}
                    <strong className="text-gray-900">
                      Traffic Management Plans
                    </strong>{" "}
                    that outline the methodology, risk controls, and
                    communication procedures for managing traffic impacts
                    throughout your project.
                  </p>
                  <p>
                    Our TMPs are developed in accordance with{" "}
                    <strong className="text-gray-900">
                      TfNSW's Traffic Control at Work Sites (TCAWS) manual
                    </strong>{" "}
                    and are tailored to meet council and state authority
                    requirements.
                  </p>
                  <p>
                    By managing the full TMP process, we ensure your works
                    proceed{" "}
                    <strong className="text-gray-900">
                      safely, efficiently, and with minimal disruption
                    </strong>{" "}
                    to the public.
                  </p>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-6 pt-4">
                  {[
                    { value: "5–7", unit: "days", label: "Standard delivery" },
                    { value: "24/7", unit: "", label: "Project support" },
                    { value: "100%", unit: "", label: "TCAWS compliant" },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className="text-center p-4 rounded-xl bg-gray-50"
                    >
                      <p className="text-3xl font-bold text-btn font-anton">
                        {s.value}
                        <span className="text-lg">{s.unit}</span>
                      </p>
                      <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide font-semibold">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Photo mosaic grid */}
              <div className="animate-element grid grid-cols-2 gap-4">
                {photos.map((photo, i) => (
                  <div
                    key={i}
                    className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.label}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Label */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white text-xs font-bold uppercase tracking-widest">
                        {photo.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── INTERACTIVE PROCESS ─── */}
      <AnimatedSection direction="right">
        <section className="py-24 px-5 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Our TMP <span className="text-btn">Process</span>
              </h2>
              <p
                className="mt-4 text-lg max-w-2xl mx-auto"
                style={{ color: "#8E8E95" }}
              >
                A systematic approach to delivering safe, compliant traffic
                management plans
              </p>
            </div>

            <div className="animate-element grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              {/* Step selector — left */}
              <div className="lg:col-span-2 space-y-3">
                {tmpProcess.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                      activeStep === i
                        ? "border-btn bg-white shadow-lg"
                        : "border-transparent bg-white/60 hover:bg-white hover:border-gray-200"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                          activeStep === i
                            ? "bg-btn text-white"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        <span className="font-bold text-sm font-anton">
                          {item.step}
                        </span>
                      </div>
                      <div>
                        <p
                          className={`font-bold font-anton uppercase text-lg ${activeStep === i ? "text-gray-900" : "text-gray-600"}`}
                        >
                          {item.title}
                        </p>
                        <p
                          className="text-sm mt-0.5"
                          style={{ color: "#8E8E95" }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Detail panel — right */}
              <div className="lg:col-span-3">
                <div
                  className="rounded-2xl p-10 h-full min-h-[380px] flex flex-col justify-between relative overflow-hidden"
                  style={{ backgroundColor: "#0f1120" }}
                >
                  {/* Grid bg */}
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        "linear-gradient(#4a9eff 1px, transparent 1px), linear-gradient(90deg, #4a9eff 1px, transparent 1px)",
                      backgroundSize: "35px 35px",
                    }}
                  />
                  <div className="relative z-10">
                    <div className="text-btn mb-6">
                      {tmpProcess[activeStep].icon}
                    </div>
                    <div className="w-12 h-px bg-btn mb-6" />
                    <h3 className="text-3xl font-bold text-white font-anton uppercase mb-4">
                      {tmpProcess[activeStep].title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {tmpProcess[activeStep].detail}
                    </p>
                  </div>

                  {/* Step counter */}
                  <div className="relative z-10 mt-8 flex items-center gap-2">
                    {tmpProcess.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveStep(i)}
                        className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                          i === activeStep ? "bg-btn w-8" : "bg-white/20 w-4"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── BENEFITS: Two-column with large image ─── */}
      <AnimatedSection direction="left">
        <section className="py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: benefits list */}
              <div className="animate-element space-y-8">
                <div>
                  <div className="w-16 h-1 bg-btn mb-6" />
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    The Benefits Of <br />
                    <span className="text-btn">Our TMPs</span>
                  </h2>
                  <p className="mt-4 text-lg" style={{ color: "#8E8E95" }}>
                    Comprehensive traffic management planning that delivers real
                    results
                  </p>
                </div>
                <div className="space-y-4">
                  {tmpBenefits.map((benefit, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-btn hover:shadow-sm transition-all duration-200"
                    >
                      <div className="w-7 h-7 rounded-full bg-btn flex-shrink-0 flex items-center justify-center mt-0.5">
                        <FaCheckCircle className="text-white text-sm" />
                      </div>
                      <p className="text-gray-800 text-base leading-relaxed font-medium">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: stacked image with accent */}
              <div className="animate-element relative">
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/sami/traffic-plan2.png"
                    alt="Traffic Management Planning"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1120]/60 to-transparent" />
                </div>
                {/* Floating accent */}
                <div
                  className="absolute -top-6 -left-6 rounded-2xl p-6 shadow-2xl"
                  style={{ backgroundColor: "#0f1120" }}
                >
                  <p className="text-btn text-4xl font-bold font-anton">TMP</p>
                  <p className="text-white text-xs font-semibold mt-1 uppercase tracking-wider">
                    TCAWS Compliant
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── CTA: Full-width dark banner ─── */}
      <AnimatedSection direction="right">
        <section
          className="relative py-28 px-5 sm:px-6 lg:px-8 overflow-hidden"
          style={{ backgroundColor: "#0f1120" }}
        >
          {/* Grid bg */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#4a9eff 1px, transparent 1px), linear-gradient(90deg, #4a9eff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Ghost text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <span
              className="text-[15vw] font-black font-anton text-white uppercase leading-none"
              style={{ opacity: 0.025, letterSpacing: "-0.05em" }}
            >
              TMP
            </span>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center animate-element">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-btn" />
              <span className="text-btn text-sm font-semibold tracking-widest uppercase">
                Ready to Start?
              </span>
              <div className="w-8 h-px bg-btn" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-anton uppercase mb-6">
              Ready For A Safe <br />
              <span className="text-btn">Project?</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              Partner with{" "}
              <strong className="text-white">T&S Traffic Control</strong> for
              expertly crafted Traffic Management Plans that keep your project
              safe, compliant, and on schedule. Our team is ready from planning
              through to completion.
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
                href="/services/traffic-plans"
                className="inline-flex items-center justify-center gap-3 border border-white/30 hover:border-btn text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                View TGS Plans →
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default TrafficManagementPlansPage;
