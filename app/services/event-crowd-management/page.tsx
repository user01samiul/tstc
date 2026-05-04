"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaBullhorn,
  FaCheckCircle,
  FaPhoneAlt,
  FaRunning,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection";

const eventTypes = [
  "Marathons & Fun Runs",
  "Community Festivals",
  "Charity & Fundraising Days",
  "Concerts & Live Venues",
  "Sporting Events & Race Days",
  "Cultural & Religious Gatherings",
  "Street Parades & Processions",
  "Corporate Activations",
];

const onTheDay = [
  {
    icon: <FaUsers />,
    title: "Crowd Marshalling",
    desc: "Trained marshals positioned at every pinch point, gateway, and crossing — guiding people calmly through high-density flow.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Pedestrian Safety",
    desc: "Physical separation between vehicles and the public using barriers, cones, and signage — engineered to crowd density.",
  },
  {
    icon: <FaBullhorn />,
    title: "Live Coordination",
    desc: "Operations centre staffed for the duration of the event, in radio contact with marshals, police, and emergency services.",
  },
  {
    icon: <FaRunning />,
    title: "Real-Time Adjustments",
    desc: "If queues, weather, or attendance shift the plan, our team re-stages diversions and crossings on the fly.",
  },
];

const photos = [
  {
    src: "/montage/3. Services We Offer/Event Management/Marathon Taper.png",
    alt: "Marathon traffic taper setup",
    label: "Marathon Taper",
  },
  {
    src: "/montage/3. Services We Offer/Event Management/marathon-event.png",
    alt: "Live marathon event in progress",
    label: "Marathon Event",
  },
  {
    src: "/montage/3. Services We Offer/Event Management/eff-fight-night.png",
    alt: "Crowd management at evening event",
    label: "Fight Night",
  },
  {
    src: "/montage/3. Services We Offer/Event Management/fire-truck.png",
    alt: "Emergency vehicle access during event",
    label: "Emergency Access",
  },
];

const EventCrowdManagementPage = () => {
  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/montage/3. Services We Offer/Event Management/marathon-event.png"
            alt="Event and crowd management"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/75" />
        </div>
        <div className="relative z-10 w-full max-w-7xl px-5 sm:px-6 lg:px-8 text-center">
          <div className="text-white space-y-6">
            <span className="text-btn text-xs sm:text-sm font-bold tracking-[0.25em] uppercase">
              Live Event Operations
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight font-anton uppercase">
              EVENT & CROWD <span className="text-btn">MANAGEMENT</span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-200">
              Marshals, barriers, and traffic plans engineered for the way
              people actually move — from finish lines and stage exits to
              fireworks and mass-gathering days.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-btn hover:bg-btn/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                <FaPhoneAlt /> Plan Your Event
              </Link>
              <a
                href="tel:1300008782"
                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Call 1300 008 782
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <AnimatedSection direction="left">
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-1 bg-btn mb-6" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                When the crowd shows up,{" "}
                <span className="text-btn">the plan has to hold.</span>
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Events behave differently from worksites. Pedestrian density
                  spikes without warning, vehicles arrive in waves, and the
                  road network around your venue has to flex around tens of
                  thousands of people — without losing emergency access.
                </p>
                <p>
                  We plan and run that flex. From road closures and detour
                  signage to crowd marshalling and pedestrian crossings, our
                  teams design event traffic schemes that work end-to-end —
                  council and police approvals, on-site setup, live
                  coordination, and post-event pack-down.
                </p>
              </div>
            </div>
            <div className="relative h-[420px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/montage/3. Services We Offer/Event Management/Marathon Taper.png"
                alt="Marathon traffic taper"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Crowd Management section */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-24 bg-[#0f1120] text-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[420px] rounded-xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="/montage/3. Services We Offer/Event Management/eff-fight-night.png"
                alt="Crowd management at evening event"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-16 h-1 bg-btn mb-6" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Crowd <span className="text-btn">marshalling</span> done right
              </h2>
              <div className="space-y-5 text-gray-300 leading-relaxed">
                <p>
                  Marshals are the difference between a controlled flow and a
                  bottleneck. Our teams brief on crowd density modelling, exit
                  capacity, and likely failure points before anyone shows up —
                  so the people on the ground know exactly where to stand,
                  what to say, and when to escalate.
                </p>
                <p>
                  Every marshal carries radio comms tied back to the operations
                  centre. If a queue starts building or weather changes the
                  plan, decisions move in seconds, not minutes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Event types grid */}
      <AnimatedSection direction="left">
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="w-16 h-1 bg-btn mb-6 mx-auto" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Events <span className="text-btn">we cover</span>
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                From a 200-person community fun run to a 50,000-person
                fireworks night — we scale the plan to the audience.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {eventTypes.map((t) => (
                <div
                  key={t}
                  className="px-5 py-4 rounded-xl border border-gray-200 hover:border-btn/40 hover:shadow-md transition-all flex items-center gap-3"
                >
                  <FaCheckCircle className="text-btn flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-800">
                    {t}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* On the day */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="w-16 h-1 bg-btn mb-6 mx-auto" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                On the <span className="text-btn">day</span>
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Setup, live operations, and pack-down — everything that
                happens between gates open and gates close.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {onTheDay.map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-all"
                >
                  <div className="text-btn text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Photo gallery */}
      <AnimatedSection direction="left">
        <section className="py-20 md:py-24 bg-[#0f1120]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="w-16 h-1 bg-btn mb-6 mx-auto" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                On site, <span className="text-btn">in the work</span>
              </h2>
              <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                Recent event work — marathons, fight nights, community days,
                and emergency-vehicle access coordination.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {photos.map((p) => (
                <div
                  key={p.src}
                  className="relative aspect-[4/5] rounded-xl overflow-hidden group"
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-white font-semibold text-sm">
                      {p.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-square rounded-xl overflow-hidden order-2 lg:order-1">
                <Image
                  src="/sami/TSTGS2901 - Pre Ramadan Day - Sadaqa.png"
                  alt="Event traffic and crowd management plan"
                  fill
                  className="object-contain bg-gray-100"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="space-y-8 order-1 lg:order-2">
                <div>
                  <div className="w-16 h-1 bg-btn mb-6" />
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Bringing a crowd to a public space?{" "}
                    <span className="text-btn">Let&apos;s plan it.</span>
                  </h2>
                </div>
                <p className="text-lg leading-relaxed text-gray-600">
                  Tell us the event, the venue, and the expected attendance.
                  We&apos;ll scope the traffic and crowd plan, run the council
                  and police approvals, and put marshals on the ground for the
                  day itself.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 bg-btn hover:bg-btn/90 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
                  >
                    Get Started
                  </Link>
                  <a
                    href="tel:1300008782"
                    className="inline-flex items-center justify-center gap-3 border border-gray-300 hover:border-btn hover:text-btn text-gray-700 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                  >
                    <FaPhoneAlt /> 1300 008 782
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

export default EventCrowdManagementPage;
