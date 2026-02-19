"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaBriefcase,
  FaDownload,
  FaFilm,
  FaFlag,
  FaHeart,
  FaMusic,
  FaPhoneAlt,
  FaRunning,
  FaTimes,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";
import AnimatedSection from "../../components/AnimatedSection";

const EventManagementPlansPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  const eventPortfolio = [
    {
      image: "/sami/02- Haldon St Central Plan.png",
      pdf: "/montage/3. Services We Offer/Event Management/02- Haldon St Central Plan.pdf",
      title: "Haldon St Central",
    },
    {
      image: "/sami/TSTGS2901 - Pre Ramadan Day - Sadaqa.png",
      pdf: "/montage/3. Services We Offer/Event Management/TSTGS2901 - Pre Ramadan Day - Sadaqa.pdf",
      title: "Pre Ramadan Day",
    },
  ];

  const handleDownload = (pdfPath: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openLightbox = (image: string, pdf: string, title: string) => {
    setSelectedImage(image);
    setSelectedPdf(pdf);
    setSelectedTitle(title);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setSelectedPdf(null);
    setSelectedTitle(null);
    document.body.style.overflow = "unset";
  };

  const eventTypes = [
    { icon: <FaRunning className="text-2xl" />, name: "Marathons & Fun Runs" },
    { icon: <FaUsers className="text-2xl" />, name: "Community Festivals" },
    { icon: <FaHeart className="text-2xl" />, name: "Charity Events" },
    { icon: <FaFilm className="text-2xl" />, name: "Film & Production Shoots" },
    { icon: <FaTrophy className="text-2xl" />, name: "Sporting Events" },
    { icon: <FaFlag className="text-2xl" />, name: "Street Parades" },
    { icon: <FaMusic className="text-2xl" />, name: "Concerts & Venues" },
    { icon: <FaBriefcase className="text-2xl" />, name: "Corporate Activations" },
  ];

  const tickerItems = [
    "MARATHONS", "·", "COMMUNITY EVENTS", "·", "FILM SHOOTS", "·",
    "SPORTING EVENTS", "·", "PARADES", "·", "CONCERTS", "·",
    "FESTIVALS", "·", "CORPORATE EVENTS", "·",
    // Duplicate for seamless loop
    "MARATHONS", "·", "COMMUNITY EVENTS", "·", "FILM SHOOTS", "·",
    "SPORTING EVENTS", "·", "PARADES", "·", "CONCERTS", "·",
    "FESTIVALS", "·", "CORPORATE EVENTS", "·",
  ];

  const howWeWork = [
    {
      num: "01",
      title: "Consultation",
      desc: "We meet with your team to understand event scope, crowd sizes, site layout, and authority requirements.",
    },
    {
      num: "02",
      title: "Plan Development",
      desc: "We develop a comprehensive Event Management Plan covering all traffic, pedestrian, and public safety aspects.",
    },
    {
      num: "03",
      title: "Permits & Approvals",
      desc: "We liaise with councils, TfNSW, police, and emergency services to secure all necessary approvals.",
    },
    {
      num: "04",
      title: "On-Day Operations",
      desc: "Our team staffs operations centres, manages real-time adjustments, and keeps your event running safely.",
    },
  ];

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Ticker keyframe */}
      <style>{`
        @keyframes tickerMove {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-animate { animation: tickerMove 30s linear infinite; }
      `}</style>

      {/* ─── HERO: Left-to-right gradient + ticker ─── */}
      <section className="relative min-h-screen flex flex-col">
        {/* Full photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/montage/3. Services We Offer/Event Management/marathon-event.png"
            alt="Event Management Plans"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient: opaque on left, transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1120] via-[#0f1120]/75 to-[#0f1120]/15" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex items-center">
          <div className="w-full max-w-7xl px-5 sm:px-6 lg:px-8 pt-36 pb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="w-10 h-px bg-btn" />
                <span className="text-btn text-sm font-semibold tracking-widest uppercase">
                  Event Management
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-anton uppercase leading-none text-white mb-8">
                EVENT
                <br />
                MANAGEMENT
                <br />
                <span className="text-btn">PLANS</span>
              </h1>

              <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-xl">
                From community festivals to major city events — safe, compliant,
                and expertly managed traffic solutions across NSW.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-btn hover:bg-btn/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
                >
                  <FaPhoneAlt />
                  Plan Your Event
                </Link>
                <a
                  href="#portfolio"
                  className="inline-flex items-center gap-3 border border-white/30 hover:border-btn text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                >
                  View Our Plans →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Animated event types ticker at bottom */}
        <div className="relative z-10 bg-btn py-3 overflow-hidden flex-shrink-0">
          <div className="flex whitespace-nowrap ticker-animate">
            {tickerItems.map((item, i) => (
              <span
                key={i}
                className={`text-white text-xs font-bold tracking-widest uppercase px-4 ${
                  item === "·" ? "opacity-30" : ""
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTRO: Tall portrait photo + floating stats, text right ─── */}
      <AnimatedSection direction="left">
        <section className="py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

              {/* Left: Photo with floating stat cards */}
              <div className="animate-element relative">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/montage/3. Services We Offer/Event Management/eff-fight-night.png"
                    alt="Event Operations"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1120]/60 to-transparent" />
                </div>

                {/* Floating stat — top right */}
                <div
                  className="absolute top-6 -right-4 sm:-right-6 rounded-2xl p-5 shadow-2xl text-center min-w-[110px] z-10"
                  style={{ backgroundColor: "#0f1120" }}
                >
                  <p className="text-btn text-3xl font-bold font-anton">24/7</p>
                  <p className="text-white text-xs uppercase tracking-wider mt-1 font-semibold">
                    Operations
                  </p>
                </div>

                {/* Floating stat — bottom left */}
                <div
                  className="absolute -bottom-5 left-6 rounded-2xl p-5 shadow-2xl min-w-[150px] z-10"
                  style={{ backgroundColor: "#0f1120" }}
                >
                  <p className="text-btn text-3xl font-bold font-anton">100%</p>
                  <p className="text-white text-xs uppercase tracking-wider mt-1 font-semibold">
                    Compliant EMPs
                  </p>
                </div>
              </div>

              {/* Right: Content */}
              <div className="space-y-8 animate-element">
                <div>
                  <div className="w-16 h-1 bg-btn mb-6" />
                  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                    Expert Event Traffic
                    <br />
                    <span className="text-btn">Management</span>
                  </h2>
                </div>

                <div
                  className="space-y-5 text-lg leading-relaxed"
                  style={{ color: "#8E8E95" }}
                >
                  <p>
                    <strong className="text-gray-900">
                      T&S Traffic Control
                    </strong>{" "}
                    provides comprehensive traffic management solutions for
                    major events across NSW, including community, charity, film,
                    sporting, and large-scale public gatherings.
                  </p>
                  <p>
                    Our experienced team works closely with stakeholders
                    throughout the planning and execution phases, often staffing
                    operations centres to support{" "}
                    <strong className="text-gray-900">
                      tactical changes and ensure events run smoothly
                    </strong>
                    .
                  </p>
                  <p>
                    We manage precinct and route-based events on a
                    mission-critical basis, prioritising the safety of{" "}
                    <strong className="text-gray-900">
                      participants, the community, and the general public
                    </strong>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── HOW WE WORK: Vertical timeline ─── */}
      <AnimatedSection direction="right">
        <section className="py-24 px-5 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Left: Sticky heading + photo */}
              <div className="animate-element lg:sticky lg:top-32 space-y-8">
                <div>
                  <div className="w-16 h-1 bg-btn mb-6" />
                  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                    How We Manage
                    <br />
                    <span className="text-btn">Your Event</span>
                  </h2>
                  <p
                    className="mt-5 text-lg leading-relaxed"
                    style={{ color: "#8E8E95" }}
                  >
                    A seamless end-to-end service — from first consultation
                    through to on-day operations.
                  </p>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/montage/3. Services We Offer/Event Management/fire-truck.png"
                    alt="Event Operations"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Right: Vertical timeline */}
              <div className="animate-element relative pl-2">
                {/* Connecting line */}
                <div className="absolute left-9 top-7 bottom-7 w-px bg-gray-200" />

                <div className="space-y-2">
                  {howWeWork.map((item, i) => (
                    <div key={i} className="relative flex gap-7 pb-10 last:pb-0">
                      {/* Numbered node */}
                      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-btn border-4 border-white shadow-md flex items-center justify-center z-10">
                        <span className="text-white text-sm font-bold font-anton">
                          {item.num}
                        </span>
                      </div>

                      {/* Step content */}
                      <div className="flex-1 pt-3">
                        <h3 className="text-xl font-bold text-gray-900 font-anton uppercase mb-2">
                          {item.title}
                        </h3>
                        <p
                          className="text-base leading-relaxed"
                          style={{ color: "#8E8E95" }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── EVENT TYPES: Dark icon grid ─── */}
      <AnimatedSection direction="left">
        <section
          className="relative py-24 px-5 sm:px-6 lg:px-8 overflow-hidden"
          style={{ backgroundColor: "#0f1120" }}
        >
          {/* Blueprint grid bg */}
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
              className="text-[18vw] font-black font-anton text-white uppercase leading-none"
              style={{ opacity: 0.025, letterSpacing: "-0.05em" }}
            >
              EVENTS
            </span>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Event Types{" "}
                <span className="text-btn">We Support</span>
              </h2>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                Comprehensive traffic management for all event types across NSW
              </p>
            </div>

            <div className="animate-element grid grid-cols-2 sm:grid-cols-4 gap-4">
              {eventTypes.map((type, i) => (
                <div
                  key={i}
                  className="group flex flex-col items-center gap-4 p-6 rounded-2xl border border-white/10 hover:border-btn hover:bg-btn/10 transition-all duration-300 text-center cursor-default"
                >
                  <div className="w-12 h-12 rounded-full bg-btn/20 group-hover:bg-btn flex items-center justify-center text-btn group-hover:text-white transition-all duration-300">
                    {type.icon}
                  </div>
                  <p className="text-white text-sm font-semibold leading-snug">
                    {type.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── PORTFOLIO: Side-by-side blueprint cards ─── */}
      <AnimatedSection direction="right">
        <section id="portfolio" className="py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Sample Event{" "}
                <span className="text-btn">Plans</span>
              </h2>
              <p
                className="mt-4 text-lg max-w-2xl mx-auto"
                style={{ color: "#8E8E95" }}
              >
                Click any plan to view full size and download
              </p>
            </div>

            <div className="animate-element grid grid-cols-1 md:grid-cols-2 gap-8">
              {eventPortfolio.map((plan, i) => (
                <div
                  key={i}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(plan.image, plan.pdf, plan.title)}
                >
                  {/* Blueprint-style dark frame */}
                  <div
                    className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"
                    style={{ backgroundColor: "#0f1120" }}
                  >
                    <div
                      className="absolute inset-0 opacity-[0.06]"
                      style={{
                        backgroundImage:
                          "linear-gradient(#4a9eff 1px, transparent 1px), linear-gradient(90deg, #4a9eff 1px, transparent 1px)",
                        backgroundSize: "22px 22px",
                      }}
                    />
                    <Image
                      src={plan.image}
                      alt={plan.title}
                      fill
                      className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-btn/0 group-hover:bg-btn/10 transition-all duration-300">
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-gray-900 px-5 py-2.5 rounded-full font-semibold text-sm">
                        Click to enlarge
                      </span>
                    </div>
                  </div>

                  {/* Title + download */}
                  <div className="mt-4 flex items-center justify-between px-1">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 font-anton uppercase">
                        {plan.title}
                      </h3>
                      <p className="text-sm mt-0.5" style={{ color: "#8E8E95" }}>
                        Event Management Plan
                      </p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownload(plan.pdf, `${plan.title}.pdf`);
                      }}
                      className="flex items-center gap-2 bg-gray-100 hover:bg-btn hover:text-white text-gray-700 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                    >
                      <FaDownload />
                      PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-3 bg-white/10 hover:bg-btn text-white rounded-full transition-all duration-300 cursor-pointer"
            aria-label="Close"
          >
            <FaTimes className="text-2xl" />
          </button>

          {selectedPdf && selectedTitle && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDownload(selectedPdf, `${selectedTitle}.pdf`);
              }}
              className="absolute bottom-6 left-6 z-50 flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 rounded-full font-semibold transition-all duration-300 shadow-2xl cursor-pointer"
            >
              <FaDownload />
              Download PDF
            </button>
          )}

          <div
            className="relative w-full max-w-6xl h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Event Plan"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* ─── CTA: Full-bleed background photo, centred content ─── */}
      <AnimatedSection direction="left">
        <section className="relative py-32 px-5 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/montage/3. Services We Offer/Event Management/Marathon Taper.png"
              alt="Plan Your Event"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#0f1120]/82" />
          </div>
          {/* Grid overlay */}
          <div
            className="absolute inset-0 z-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#4a9eff 1px, transparent 1px), linear-gradient(90deg, #4a9eff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 max-w-4xl mx-auto text-center animate-element">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-btn" />
              <span className="text-btn text-sm font-semibold tracking-widest uppercase">
                Ready To Start?
              </span>
              <div className="w-8 h-px bg-btn" />
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-anton uppercase leading-tight mb-6">
              Ready For A
              <br />
              <span className="text-btn">Successful Event?</span>
            </h2>

            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              Partner with{" "}
              <strong className="text-white">T&S Traffic Control</strong> for
              expertly managed event traffic solutions. From planning through to
              on-day operations — we keep your event safe, compliant, and
              running on schedule.
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
                href="/services/traffic-management-plans"
                className="inline-flex items-center justify-center gap-3 border border-white/30 hover:border-btn text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                View TMPs →
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default EventManagementPlansPage;
