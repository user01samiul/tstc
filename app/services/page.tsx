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
  FaTruck,
  FaUsers,
} from "react-icons/fa";
import AnimatedSection from "../components/AnimatedSection";

const heroPhotos = [
  { src: "/DSC00949.JPG", alt: "Traffic Control" },
  { src: "/montage/3. Services We Offer/Event Management/marathon-event.png", alt: "Event Management" },
  { src: "/DSC00726.JPG", alt: "Fleet & Equipment" },
  { src: "/DSC02286.webp", alt: "Site Operations" },
];

const engineeringServices = [
  {
    icon: FaFileAlt,
    name: "Traffic Plans",
    desc: "Detailed traffic plans and guidance schemes (TGS/TCP) for safe, compliant site operations, tailored to your project needs.",
    href: "/services/traffic-plans",
  },
  {
    icon: FaClipboardList,
    name: "Traffic Management Plans (TMP) (CTMP)",
    desc: "Comprehensive TMPs and CTMPs outlining methodology, risk controls, and communication for construction and events.",
    href: "/services/traffic-management-plans",
  },
  {
    icon: FaDraftingCompass,
    name: "Swept Path Analysis (SPA)",
    desc: "Accurate swept path analysis using industry-standard software to ensure safe vehicle movements through work zones.",
    href: "/services/swept-path",
  },
  {
    icon: FaCalendarAlt,
    name: "Event Management Plans",
    desc: "Traffic and crowd management plans for events, including road closures, detours, and stakeholder coordination.",
    href: "/services/event-management-plans",
  },
];

const permitServices = [
  {
    name: "TfNSW TMC ROL",
    desc: "Preparation and submission of Road Occupancy Licences (ROLs) through Transport for NSW, including compliance documentation.",
    href: "/services/permit-application#tf-nsw",
  },
  {
    name: "Council Permits",
    desc: "Council road occupancy permits, local road access, footpath closures, and parking bay suspensions across NSW.",
    href: "/services/permit-application#council-permits",
  },
  {
    name: "STA Bus Approvals",
    desc: "Coordination with bus operators and authorities for works affecting bus routes, stops, and bus lane closures.",
    href: "/services/permit-application#sta-bus",
  },
  {
    name: "Emergency Approvals",
    desc: "Fast-tracked permit applications and approvals for urgent and emergency works requiring immediate response.",
    href: "/services/permit-application#emergency-approvals",
  },
];

const controllerServices = [
  {
    icon: FaHardHat,
    name: "Accredited TC",
    desc: "Qualified and accredited traffic controllers for all project scales, ensuring safe and efficient site operations.",
    href: "/services/accredited-tc",
    photo: "/DSC00836.JPG",
  },
  {
    icon: FaClock,
    name: "24 Hour Response",
    desc: "Rapid deployment teams available 24/7 for emergency and after-hours traffic management needs.",
    href: "/services/24-hour-response",
    photo: "/DSC00847.JPG",
  },
  {
    icon: FaUsers,
    name: "Team Leaders",
    desc: "Experienced team leaders coordinating traffic controllers, managing compliance, and ensuring site safety.",
    href: "/services/team-leaders",
    photo: "/DSC00862.JPG",
  },
  {
    icon: FaTruck,
    name: "TMA Operators",
    desc: "Skilled Truck-Mounted Attenuator operators for high-speed and complex traffic environments.",
    href: "/services/tma-operators",
    photo: "/DSC00852.JPG",
  },
];

export default function Services() {
  return (
    <div className="font-sans overflow-x-hidden">

      {/* ─── HERO: 4-photo quadrant grid ─── */}
      <section className="relative min-h-screen overflow-hidden">
        {/* 2×2 photo grid fills the entire hero */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
          {heroPhotos.map((photo, i) => (
            <div key={i} className="relative overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                priority={i < 2}
                sizes="50vw"
              />
            </div>
          ))}
        </div>

        {/* Unified dark overlay */}
        <div className="absolute inset-0 bg-[#0f1120]/78" />

        {/* Blueprint grid tint */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#4a9eff 1px, transparent 1px), linear-gradient(90deg, #4a9eff 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* Centered heading */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-5 sm:px-6 lg:px-8 py-36">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-10 h-px bg-btn" />
            <span className="text-btn text-sm font-semibold tracking-widest uppercase">
              T&S Traffic Control
            </span>
            <div className="w-10 h-px bg-btn" />
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-[9rem] font-bold font-anton uppercase leading-none text-white mb-6 tracking-tight">
            OUR
            <br />
            <span className="text-btn">SERVICES</span>
          </h1>

          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed mb-10">
            Explore our full range of traffic management, planning, and
            implementation services. Click any service to learn more.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-btn hover:bg-btn/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              <FaPhoneAlt />
              Get A Quote
            </Link>
            <Link
              href="/services/all-services"
              className="inline-flex items-center gap-3 border border-white/30 hover:border-btn text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Full Directory →
            </Link>
          </div>
        </div>

        {/* Bottom fade into white */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* ─── TRAFFIC ENGINEERING & PLANNING ─── */}
      <AnimatedSection direction="left">
        <section className="py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Left: sticky label + photo */}
              <div className="animate-element lg:sticky lg:top-28 space-y-8">
                <div>
                  <div className="w-16 h-1 bg-btn mb-5" />
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-anton uppercase leading-tight">
                    Traffic Engineering
                    <br />
                    <span className="text-btn">&amp; Planning</span>
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed" style={{ color: "#8E8E95" }}>
                    Our in-house design team produces compliant traffic
                    management plans that balance safety, efficiency, and
                    real-world practicality.
                  </p>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/sami/traffic-plan2.png"
                    alt="Traffic Engineering"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Right: services as text-link rows */}
              <div className="animate-element divide-y divide-gray-100">
                {engineeringServices.map((service, i) => (
                  <Link
                    key={i}
                    href={service.href}
                    className="group flex items-center justify-between gap-6 py-7 hover:pl-2 transition-all duration-300"
                  >
                    <div className="flex items-start gap-5 min-w-0">
                      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-btn/10 group-hover:bg-btn flex items-center justify-center text-btn group-hover:text-white transition-all duration-300 mt-0.5">
                        <service.icon className="text-lg" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xl font-bold text-gray-900 font-anton uppercase group-hover:text-btn transition-colors leading-tight">
                          {service.name}
                        </h3>
                        <p className="text-sm mt-1.5 leading-relaxed" style={{ color: "#8E8E95" }}>
                          {service.desc}
                        </p>
                        <span className="inline-block mt-3 text-xs font-bold text-btn uppercase tracking-wide">
                          View Details
                        </span>
                      </div>
                    </div>
                    <FaArrowRight className="flex-shrink-0 text-gray-200 group-hover:text-btn group-hover:translate-x-1 transition-all duration-300 text-lg" />
                  </Link>
                ))}
              </div>

            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── PERMIT APPLICATIONS: Dark band ─── */}
      <AnimatedSection direction="right">
        <section
          className="relative py-24 px-5 sm:px-6 lg:px-8 overflow-hidden"
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left: permit links */}
              <div className="animate-element space-y-8">
                <div>
                  <div className="w-16 h-1 bg-btn mb-5" />
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-anton uppercase leading-tight">
                    Permit
                    <br />
                    <span className="text-btn">Applications</span>
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed text-gray-400">
                    We handle the full permit process — liaising with TfNSW,
                    councils, and authorities to keep your project moving.
                  </p>
                </div>

                <div className="divide-y divide-white/10">
                  {permitServices.map((permit, i) => (
                    <Link
                      key={i}
                      href={permit.href}
                      className="group flex items-start gap-5 py-5 hover:pl-2 transition-all duration-300"
                    >
                      <span className="text-btn text-sm font-bold font-anton flex-shrink-0 w-8 pt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-white group-hover:text-btn transition-colors font-anton uppercase">
                          {permit.name}
                        </p>
                        <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                          {permit.desc}
                        </p>
                        <span className="inline-block mt-2 text-xs font-bold text-btn uppercase tracking-wide">
                          View Details
                        </span>
                      </div>
                      <FaArrowRight className="flex-shrink-0 text-white/20 group-hover:text-btn group-hover:translate-x-1 transition-all duration-300 mt-1" />
                    </Link>
                  ))}
                </div>

                <Link
                  href="/services/permit-application"
                  className="inline-flex items-center gap-3 border border-white/20 hover:border-btn text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
                >
                  All Permit Services
                  <FaArrowRight />
                </Link>
              </div>

              {/* Right: photo */}
              <div className="animate-element relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/DSC00947.JPG"
                    alt="Permit Applications"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0f1120]/50 to-transparent" />
                </div>
                <div
                  className="absolute -bottom-4 -left-4 rounded-2xl p-6 shadow-2xl z-10"
                  style={{ backgroundColor: "#0f1120", border: "1px solid rgba(255,255,255,0.1)" }}
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

      {/* ─── TRAFFIC CONTROLLERS: Photo-background tiles ─── */}
      <AnimatedSection direction="left">
        <section className="py-24 px-5 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">

            <div className="animate-element mb-12">
              <div className="w-16 h-1 bg-btn mb-5" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-anton uppercase leading-tight">
                Traffic <span className="text-btn">Controllers</span>
              </h2>
            </div>

            <div className="animate-element grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {controllerServices.map((service, i) => (
                <Link
                  key={i}
                  href={service.href}
                  className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg"
                >
                  <Image
                    src={service.photo}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1120]/90 via-[#0f1120]/30 to-transparent group-hover:from-btn/80 group-hover:via-btn/20 transition-all duration-500" />

                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="w-10 h-10 rounded-full bg-white/15 group-hover:bg-white/25 flex items-center justify-center text-white transition-all duration-300">
                      <service.icon className="text-base" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold font-anton uppercase text-xl leading-tight mb-2">
                        {service.name}
                      </h3>
                      <p className="text-white/70 text-xs leading-relaxed mb-4">
                        {service.desc}
                      </p>
                      <span className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all duration-300">
                        View Details <FaArrowRight className="text-[10px]" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>
      </AnimatedSection>

      {/* ─── SIGNAGE INSTALLATION: Full-width highlight card ─── */}
      <AnimatedSection direction="right">
        <section className="py-12 pb-24 px-5 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto animate-element">

            <div className="mb-8">
              <div className="w-16 h-1 bg-btn mb-5" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-anton uppercase leading-tight">
                Signage <span className="text-btn">Installation</span>
              </h2>
            </div>

            <Link
              href="/services/signage-installation"
              className="group relative flex flex-col sm:flex-row items-center gap-8 p-8 sm:p-10 rounded-2xl border-2 border-gray-200 hover:border-btn bg-white hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <span className="hidden sm:block absolute right-8 top-1/2 -translate-y-1/2 text-[8rem] font-black font-anton text-gray-100 leading-none select-none pointer-events-none group-hover:text-btn/10 transition-colors">
                04
              </span>
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-btn/10 group-hover:bg-btn flex items-center justify-center text-btn group-hover:text-white transition-all duration-300">
                <FaRoad className="text-2xl" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-2xl font-bold text-gray-900 font-anton uppercase group-hover:text-btn transition-colors">
                  Temporary &amp; Permanent Street Signage
                </h3>
                <p className="mt-2 text-base leading-relaxed" style={{ color: "#8E8E95" }}>
                  Supply and installation of regulatory, advisory, temporary, and
                  permanent street signage for all project types.
                </p>
                <span className="inline-block mt-3 text-xs font-bold text-btn uppercase tracking-wide">
                  View Details
                </span>
              </div>
              <FaArrowRight className="flex-shrink-0 text-gray-300 group-hover:text-btn group-hover:translate-x-1 transition-all duration-300 text-xl relative z-10" />
            </Link>

          </div>
        </section>
      </AnimatedSection>

      {/* ─── CTA ─── */}
      <AnimatedSection direction="left">
        <section className="py-16 px-5 sm:px-6 lg:px-8 bg-btn">
          <div className="max-w-3xl mx-auto text-center text-white animate-element">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-anton uppercase">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Contact us today for expert traffic management, planning, and permit
              solutions. Our team is ready to help you deliver your project safely
              and efficiently.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-white text-btn px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/90 hover:scale-105"
            >
              Get A Quote
            </Link>
          </div>
        </section>
      </AnimatedSection>

    </div>
  );
}
