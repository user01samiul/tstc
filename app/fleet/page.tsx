"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaBolt,
  FaCheckCircle,
  FaPhoneAlt,
  FaShieldAlt,
  FaTools,
  FaTruck,
} from "react-icons/fa";
import AnimatedSection from "../components/AnimatedSection";

const FleetPage = () => {
  const stats = [
    { value: "15+", label: "Fleet Vehicles" },
    { value: "24/7", label: "Deployment Ready" },
    { value: "100%", label: "Certified & Maintained" },
    { value: "NSW", label: "Wide Coverage" },
  ];

  const equipment = [
    {
      icon: <FaTruck className="text-2xl" />,
      title: "Traffic Control Vehicles",
      items: [
        "TMA-fitted attenuator trucks",
        "Signage-equipped utes",
        "Patrol & escort vehicles",
      ],
    },
    {
      icon: <FaBolt className="text-2xl" />,
      title: "Message & Arrow Boards",
      items: [
        "Variable message signs (VMS)",
        "LED arrow boards",
        "Portable warning lights",
      ],
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Safety Equipment",
      items: [
        "Water-filled barriers & delineators",
        "Traffic cones & bollards",
        "Exclusion zone fencing",
      ],
    },
    {
      icon: <FaTools className="text-2xl" />,
      title: "Signage & Accessories",
      items: [
        "Road signs (all AS1742 categories)",
        "Sign stands & holders",
        "Safety vests, PPE & comms",
      ],
    },
  ];

  const photos = [
    { src: "/DSC00844.JPG", label: "Traffic Control Ute" },
    { src: "/DSC00845.JPG", label: "Fleet Vehicle" },
    { src: "/DSC00850.JPG", label: "Site Equipment" },
    { src: "/DSC00838.JPG", label: "Patrol Vehicle" },
  ];

  return (
    <div className="font-sans overflow-x-hidden">

      {/* ─── HERO: 70vh with diagonal bottom cut ─── */}
      <section className="relative h-[70vh] min-h-[520px] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC00838.JPG"
            alt="T&S Traffic Control Fleet"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient: strong top-left, fades to right */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f1120]/92 via-[#0f1120]/65 to-[#0f1120]/20" />
        </div>

        {/* Diagonal bottom cut into stats strip */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20 z-10"
          style={{
            backgroundColor: "#0f1120",
            clipPath: "polygon(0 100%, 100% 100%, 100% 0)",
          }}
        />

        <div className="relative z-10 w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-btn" />
              <span className="text-btn text-sm font-semibold tracking-widest uppercase">
                Equipment &amp; Vehicles
              </span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold font-anton uppercase leading-none text-white mb-6">
              OUR
              <br />
              <span className="text-btn">FLEET</span>
            </h1>

            <p className="text-gray-300 text-xl leading-relaxed max-w-lg">
              A fully equipped fleet of certified traffic control vehicles and
              equipment — maintained to the highest industry standards, ready
              to deploy anywhere across NSW.
            </p>
          </div>
        </div>
      </section>

      {/* ─── STATS STRIP ─── */}
      <section style={{ backgroundColor: "#0f1120" }} className="pb-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10 border border-white/10 rounded-2xl overflow-hidden">
            {stats.map((s, i) => (
              <div key={i} className="text-center py-6 px-4">
                <p className="text-3xl font-bold text-btn font-anton">{s.value}</p>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <AnimatedSection direction="left">
        <section className="pt-20 pb-4 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto text-center animate-element">
            <div className="w-16 h-1 bg-btn mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Built For Every{" "}
              <span className="text-btn">Site Condition</span>
            </h2>
            <p
              className="text-lg leading-relaxed max-w-3xl mx-auto"
              style={{ color: "#8E8E95" }}
            >
              T&S enhances site and road safety with a fully equipped fleet of
              certified traffic control vehicles, signage, and equipment. Our
              tools are tailored to meet the unique demands of every project —
              from roadwork and civil construction to emergency events across
              NSW. From setup to pack-down, T&S ensures your site runs safely,
              smoothly, and on schedule.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── FLEET PHOTO SHOWCASE ─── */}
      <AnimatedSection direction="right">
        <section className="py-16 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto space-y-4">

            {/* Top row: 2 landscape photos */}
            <div className="animate-element grid grid-cols-1 md:grid-cols-2 gap-4">
              {photos.slice(0, 2).map((photo, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg group"
                >
                  <Image
                    src={photo.src}
                    alt={photo.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1120]/65 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white text-xs font-bold uppercase tracking-widest bg-btn px-3 py-1.5 rounded-full">
                      {photo.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom row: 2 square photos + dark info card */}
            <div className="animate-element grid grid-cols-1 sm:grid-cols-3 gap-4">
              {photos.slice(2).map((photo, i) => (
                <div
                  key={i}
                  className="relative aspect-square overflow-hidden rounded-2xl shadow-lg group"
                >
                  <Image
                    src={photo.src}
                    alt={photo.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1120]/65 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white text-xs font-bold uppercase tracking-widest bg-btn px-3 py-1.5 rounded-full">
                      {photo.label}
                    </span>
                  </div>
                </div>
              ))}

              {/* Info card in third slot */}
              <div
                className="relative aspect-square rounded-2xl overflow-hidden flex flex-col justify-between p-8"
                style={{ backgroundColor: "#0f1120" }}
              >
                {/* Blueprint grid */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#4a9eff 1px, transparent 1px), linear-gradient(90deg, #4a9eff 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />
                <div className="relative z-10">
                  <p className="text-btn text-xs font-bold uppercase tracking-widest mb-4">
                    Always Ready
                  </p>
                  <p className="text-white text-2xl font-bold font-anton leading-tight uppercase">
                    Fully Equipped For Every Project
                  </p>
                </div>
                <div className="relative z-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-btn hover:bg-btn/90 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
                  >
                    <FaPhoneAlt />
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── EQUIPMENT CATEGORIES ─── */}
      <AnimatedSection direction="left">
        <section className="py-24 px-5 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                What&apos;s In{" "}
                <span className="text-btn">Our Fleet</span>
              </h2>
              <p
                className="mt-4 text-lg max-w-2xl mx-auto"
                style={{ color: "#8E8E95" }}
              >
                Everything needed to safely manage any site condition or project
                scale across NSW
              </p>
            </div>

            <div className="animate-element grid grid-cols-1 md:grid-cols-2 gap-6">
              {equipment.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-btn hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-btn flex items-center justify-center text-white">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 font-anton uppercase mb-4">
                        {item.title}
                      </h3>
                      <ul className="space-y-2">
                        {item.items.map((spec, j) => (
                          <li
                            key={j}
                            className="flex items-center gap-3 text-sm"
                            style={{ color: "#8E8E95" }}
                          >
                            <FaCheckCircle className="text-btn flex-shrink-0" />
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── CTA: Dark with ghost text ─── */}
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
              className="text-[15vw] font-black font-anton text-white uppercase leading-none"
              style={{ opacity: 0.025, letterSpacing: "-0.05em" }}
            >
              FLEET
            </span>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center animate-element">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-btn" />
              <span className="text-btn text-sm font-semibold tracking-widest uppercase">
                Ready When You Are
              </span>
              <div className="w-8 h-px bg-btn" />
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-anton uppercase leading-tight mb-6">
              Ready To Deploy
              <br />
              <span className="text-btn">For Your Project?</span>
            </h2>

            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              Our fully equipped fleet is available across NSW.{" "}
              <strong className="text-white">T&S Traffic Control</strong> is
              ready to discuss your project requirements and get your site
              running safely.
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

export default FleetPage;
