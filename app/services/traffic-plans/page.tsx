"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaBolt,
  FaCheckCircle,
  FaDraftingCompass,
  FaDownload,
  FaLayerGroup,
  FaPhoneAlt,
  FaRulerCombined,
  FaTimes,
} from "react-icons/fa";
import AnimatedSection from "../../components/AnimatedSection";

const TrafficPlansPage = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    pdfPath: string;
  } | null>(null);

  // Traffic Plan Gallery - Images with corresponding PDF files (matched serially)
  const trafficPlanGallery = [
    {
      image: "/sami/traffic-plan1.png",
      pdfPath: "/montage/3. Services We Offer/Traffic Planning/SPA.pdf",
      title: "Swept Path Analysis",
    },
    {
      image: "/sami/traffic-plan2.png",
      pdfPath: "/montage/3. Services We Offer/Traffic Planning/TGS.pdf",
      title: "Traffic Guidance Scheme",
    },
    {
      image: "/sami/traffic-plan3.png",
      pdfPath:
        "/montage/3. Services We Offer/Traffic Planning/TSTGS 2801 - Stage 2.2 Marina St Closure - Young Town Centre Upgrade.pdf",
      title: "Marina St Closure - Young Town Centre",
    },
    {
      image: "/sami/traffic-plan4.png",
      pdfPath:
        "/montage/3. Services We Offer/Traffic Planning/TSTGS2701 - EWP Works - Sussex St, Sydney.pdf",
      title: "EWP Works - Sussex St, Sydney",
    },
    {
      image: "/sami/traffic-pplan5.png",
      pdfPath:
        "/montage/3. Services We Offer/Traffic Planning/TSTGS2903 - Stage 1 - Westbound Shoulder Closure - 83 Main Rd Heddon Greta.pdf",
      title: "Westbound Shoulder Closure - Heddon Greta",
    },
  ];

  const openLightbox = (image: string, pdfPath: string) => {
    setSelectedImage({ src: image, pdfPath });
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const handleDownload = () => {
    if (selectedImage) {
      const link = document.createElement("a");
      link.href = selectedImage.pdfPath;
      link.download = selectedImage.pdfPath.split("/").pop() || "document.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Key features of TGS services
  const tgsFeatures = [
    {
      icon: <FaDraftingCompass />,
      title: "Professional Design",
      description:
        "Detailed traffic control plans using professional CAD software, compliant with TfNSW (RMS) and AS1742.3 standards.",
    },
    {
      icon: <FaRulerCombined />,
      title: "Custom Solutions",
      description:
        "Tailored designs for roadworks, lane closures, shoulder works, and intersections based on your specific site conditions.",
    },
    {
      icon: <FaLayerGroup />,
      title: "Multi-Stage Layouts",
      description:
        "Complex, long-term layouts for civil and infrastructure projects requiring multiple traffic staging phases.",
    },
    {
      icon: <FaBolt />,
      title: "Specialist Works",
      description:
        "Night works, event management, and emergency traffic management designs with fast turnaround times.",
    },
  ];

  // What's included in our service
  const serviceIncludes = [
    "Site assessment and traffic volume analysis",
    "Compliant TGS designs to TfNSW and AS1742.3 standards",
    "Professional CAD drawings and documentation",
    "Risk assessment and hazard identification",
    "Staging plans for complex or long-term works",
    "Supporting documentation for permit applications",
    "Consultation with road authorities and stakeholders",
    "Design revisions and ongoing support",
  ];

  return (
    <div className="font-sans overflow-x-hidden">
      {/* ── HERO: full-bleed photo, bottom-anchored content + stats strip ── */}
      <section className="relative h-screen min-h-[640px] flex flex-col justify-end overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0">
          <Image
            src="/DSC00947.JPG"
            alt="Traffic Guidance Schemes"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Gradient: dark from bottom, lighter toward top */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/25" />
        </div>

        {/* Main content — bottom-left */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="pb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-btn" />
              <span className="text-btn text-sm font-semibold uppercase tracking-widest">
                Traffic Engineering
              </span>
            </div>

            <h1
              className="font-anton uppercase text-white leading-none mb-6"
              style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
            >
              TRAFFIC GUIDANCE
              <br />
              <span className="text-btn">SCHEMES (TGS)</span>
            </h1>

            <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
              Professional TGS designs compliant with TfNSW and AS1742.3
              standards — tailored for every site condition.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-btn hover:bg-btn/90 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              <FaPhoneAlt />
              Get In Touch
            </Link>
          </div>

          {/* Stats strip */}
          <div className="border-t border-white/20 grid grid-cols-3 divide-x divide-white/20">
            {[
              { value: "TfNSW", label: "Compliant" },
              { value: "48 hr", label: "Fast Turnaround" },
              { value: "AS1742.3", label: "Certified Standard" },
            ].map((stat) => (
              <div key={stat.label} className="py-6 px-4 sm:px-8 text-center">
                <p className="text-white font-bold text-xl sm:text-2xl font-anton">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO: blueprint-framed plan + text ── */}
      <AnimatedSection direction="left">
        <section className="py-20 md:py-28 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: technical-frame image */}
              <div className="animate-element">
                <div className="relative border-2 border-gray-200 rounded-sm p-4 bg-gray-50">
                  {/* Corner markers */}
                  <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-btn z-10" />
                  <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-btn z-10" />
                  <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-btn z-10" />
                  <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-btn z-10" />

                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/sami/traffic-plan1.png"
                      alt="TGS Design Services"
                      fill
                      className="object-cover"
                      sizes="50vw"
                    />
                  </div>

                  {/* Frame label bar */}
                  <div className="mt-3 flex items-center justify-between text-xs text-gray-400 font-mono px-1">
                    <span>TGS-2024-001</span>
                    <span>AS1742.3 COMPLIANT</span>
                    <span>TSTC</span>
                  </div>
                </div>
              </div>

              {/* Right: text */}
              <div className="space-y-8 animate-element">
                <div>
                  <div className="w-16 h-1 bg-btn mb-6" />
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Compliant TGS Designs
                    <br />
                    <span className="text-btn">For Every Site</span>
                  </h2>
                </div>

                <div
                  className="space-y-5 text-lg leading-relaxed"
                  style={{ color: "#8E8E95" }}
                >
                  <p>
                    Our in-house design team develops{" "}
                    <strong className="text-gray-900">
                      Traffic Guidance Schemes
                    </strong>{" "}
                    that comply with{" "}
                    <strong className="text-gray-900">
                      TfNSW (RMS) and AS1742.3 standards
                    </strong>
                    , ensuring safety and practicality for every site.
                  </p>
                  <p>
                    Each TGS is designed with real-world application in mind —
                    balancing the needs of workers, motorists, and pedestrians.
                    We assess traffic volumes, road geometry, and environmental
                    factors to create layouts that are both{" "}
                    <strong className="text-gray-900">
                      compliant and efficient
                    </strong>
                    .
                  </p>
                  <p>
                    Whether it's a simple shoulder closure or a complex
                    multi-stage highway project, our experienced designers
                    deliver TGS plans that meet regulatory requirements and keep
                    your project moving forward safely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── PLAN GALLERY: document card grid ── */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-28 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Header – left aligned with count */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 animate-element">
              <div>
                <div className="w-16 h-1 bg-btn mb-6" />
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-anton uppercase">
                  Sample TGS <span className="text-btn">Designs</span>
                </h2>
                <p className="mt-4 text-gray-500 text-lg max-w-xl leading-relaxed">
                  Browse our portfolio of traffic guidance schemes and download
                  detailed plans
                </p>
              </div>
              <span className="font-mono text-sm text-gray-400 lg:pb-2 flex-shrink-0">
                {trafficPlanGallery.length} plans available
              </span>
            </div>

            {/* Top row – 2 large cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5 animate-element">
              {trafficPlanGallery.slice(0, 2).map((plan, i) => (
                <div
                  key={i}
                  onClick={() => openLightbox(plan.image, plan.pdfPath)}
                  className="group cursor-pointer bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Image area */}
                  <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
                    {/* Number badge */}
                    <div className="absolute top-4 left-4 z-10 w-9 h-9 bg-btn text-white text-xs font-bold font-mono flex items-center justify-center">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <Image
                      src={plan.image}
                      alt={plan.title}
                      fill
                      className="object-contain p-2 group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#0f1120]/0 group-hover:bg-[#0f1120]/25 transition-all duration-300 flex items-end justify-center pb-6">
                      <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-semibold bg-[#0f1120]/80 px-4 py-2 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        View Full Size
                      </span>
                    </div>
                  </div>
                  {/* Card footer */}
                  <div className="px-5 py-4 flex items-center justify-between border-t border-gray-100">
                    <p className="font-semibold text-gray-900 text-sm leading-tight">
                      {plan.title}
                    </p>
                    <a
                      href={plan.pdfPath}
                      download
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-btn border border-btn hover:bg-btn hover:text-white transition-all duration-300 whitespace-nowrap"
                    >
                      <FaDownload />
                      PDF
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom row – 3 smaller cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 animate-element">
              {trafficPlanGallery.slice(2).map((plan, i) => (
                <div
                  key={i}
                  onClick={() => openLightbox(plan.image, plan.pdfPath)}
                  className="group cursor-pointer bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Image area */}
                  <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
                    {/* Number badge */}
                    <div className="absolute top-3 left-3 z-10 w-8 h-8 bg-btn text-white text-xs font-bold font-mono flex items-center justify-center">
                      {String(i + 3).padStart(2, "0")}
                    </div>
                    <Image
                      src={plan.image}
                      alt={plan.title}
                      fill
                      className="object-contain p-2 group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#0f1120]/0 group-hover:bg-[#0f1120]/25 transition-all duration-300 flex items-end justify-center pb-4">
                      <span className="opacity-0 group-hover:opacity-100 text-white text-xs font-semibold bg-[#0f1120]/80 px-3 py-1.5 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        View Full Size
                      </span>
                    </div>
                  </div>
                  {/* Card footer */}
                  <div className="px-4 py-3 flex items-center justify-between border-t border-gray-100">
                    <p className="font-semibold text-gray-900 text-xs leading-tight">
                      {plan.title}
                    </p>
                    <a
                      href={plan.pdfPath}
                      download
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-btn border border-btn hover:bg-btn hover:text-white transition-all duration-300 whitespace-nowrap ml-2"
                    >
                      <FaDownload className="text-[10px]" />
                      PDF
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-3 bg-white/10 hover:bg-btn text-white rounded-full transition-all duration-300 hover:scale-110 cursor-pointer"
            aria-label="Close lightbox"
          >
            <FaTimes className="text-2xl" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDownload();
            }}
            className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-50 flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-2xl cursor-pointer"
            aria-label="Download PDF"
          >
            <FaDownload className="text-lg" />
            Download PDF
          </button>

          <div
            className="relative w-full max-w-6xl h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt="Traffic Plan"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* ── FEATURES: numbered cards with ghost number ── */}
      <AnimatedSection direction="left">
        <section className="py-20 md:py-28 px-5 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Our TGS <span className="text-btn">Services Include</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-element">
              {tgsFeatures.map((feature, i) => (
                <div
                  key={i}
                  className="relative bg-white p-8 rounded-sm border-b-4 border-btn shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden"
                >
                  {/* Ghost number */}
                  <div
                    className="absolute top-4 right-4 font-anton leading-none text-gray-100 group-hover:text-btn/8 transition-colors duration-300 select-none"
                    style={{ fontSize: "5rem" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-btn rounded-full flex items-center justify-center mb-6 text-white text-xl">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-anton uppercase">
                      {feature.title}
                    </h3>
                    <div className="w-8 h-px bg-btn mb-4" />
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#8E8E95" }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── WHAT'S INCLUDED: two-column dark layout ── */}
      <AnimatedSection direction="right">
        <section
          className="relative py-20 md:py-28 px-5 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#0f1120" }}
        >
          {/* Blueprint grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#4a9eff 1px, transparent 1px), linear-gradient(90deg, #4a9eff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              opacity: 0.03,
            }}
          />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left: heading + plan preview */}
              <div className="animate-element">
                <div className="w-16 h-1 bg-btn mb-6" />
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                  What's Included In{" "}
                  <span className="text-btn">Our Service</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                  Comprehensive TGS design services with full documentation and
                  support
                </p>
                {/* Plan preview image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-white/10">
                  <Image
                    src="/sami/traffic-plan4.png"
                    alt="TGS Plan Detail"
                    fill
                    className="object-contain bg-white"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Right: numbered checklist */}
              <div className="animate-element divide-y divide-white/10">
                {serviceIncludes.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-5 py-5 group"
                  >
                    <span className="font-mono text-xs font-bold text-btn/50 group-hover:text-btn transition-colors duration-300 mt-1 flex-shrink-0 w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex items-start gap-3 flex-1">
                      <FaCheckCircle className="text-btn flex-shrink-0 text-sm mt-1" />
                      <p className="text-gray-300 text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── CTA: full-bleed photo overlay ── */}
      <section className="relative py-28 px-5 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/sami/traffic-plan3.png"
            alt="Get Your TGS"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "#0f1120", opacity: 0.9 }}
          />
        </div>
        {/* Blueprint grid */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#4a9eff 1px, transparent 1px), linear-gradient(90deg, #4a9eff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.04,
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="w-16 h-1 bg-btn mx-auto mb-6" />
          <h2
            className="font-anton uppercase text-white leading-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            NEED A TGS FOR
            <br />
            <span className="text-btn">YOUR PROJECT?</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Whether you're planning roadworks, a construction project, or a
            special event,{" "}
            <strong className="text-white">T&amp;S Traffic Control</strong> can
            design a compliant TGS tailored to your specific site conditions.
            Fast turnaround, quality guaranteed.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-btn hover:bg-btn/90 text-white px-12 py-5 rounded-full font-semibold text-xl transition-all duration-300 hover:scale-105"
          >
            Get A Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TrafficPlansPage;
