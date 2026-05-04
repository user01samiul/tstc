"use client";
import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    logo: "/client logos/QMC Logo.jpeg",
    quote:
      "T&S has been an invaluable partner on multiple projects for QMC Group. They successfully delivered traffic management design, planning, and execution across two CBD Cycleway projects, town upgrades and maintenance work for the City of Sydney, navigating the complexities of inner-city Sydney with professionalism and great execution.",
    author: "Jordan Commisso",
    company: "QMC Group",
    project: "CBD Cycleway, Sydney",
  },
  {
    logo: "/client logos 2/1. Client Daracon.png",
    quote:
      "When it comes to complex infrastructure projects, T&S consistently rises to the challenge. Their ability to plan and execute traffic management scenarios across technically demanding sites is second to none. We get round the clock service, no matter the time.",
    author: "Tim Piot",
    company: "Daracon Group",
    project: "Richmond Rd, Marsden Park",
  },
  {
    logo: "/client logos 2/Abergilde.png",
    quote:
      "Their ability to handle the full end-to-end process, from TMP and local council approvals right through to on-site execution, made them an invaluable partner on this project. They developed great staging plans with attention to detail, and the proactive communication they brought to every stage was great.",
    author: "Harry Iqbal",
    company: "Abergilde",
    project: "",
  },
  {
    logo: "/client logos 2/FDC.gif",
    quote:
      "T&S demonstrated exceptional expertise and professionalism on one of our most high-profile and logistically demanding projects. Their knowledge of the approval process and their ability to liaise effectively with councils, authorities, and emergency services gave us complete confidence throughout the entire operation. They are our go-to traffic management partner for complex construction projects and we look forward to continuing to work with them.",
    author: "Jake Dufferin",
    company: "FDC",
    project: "York St, Sydney",
  },
  {
    logo: "/client logos/EMO Civil Logo.avif",
    quote:
      "Having a traffic management partner that covers every stage of the process, from initial planning right through to aftercare, makes a significant difference on a civil project. T&S Traffic are a professional, reliable, and highly capable team that we would recommend without hesitation.",
    author: "Najee",
    company: "EMO Civil",
    project: "",
  },
  {
    logo: "/client logos 2/hacer_group_logo.jpeg",
    quote:
      "They served as a critical link between our project team, council, and the surrounding community, handling every challenge with a calm, solutions-focused approach. T&S Traffic are an outstanding team and an asset to any construction project operating in a shared or community-sensitive environment. We will absolutely be engaging them again on future projects.",
    author: "Bianca Reddy",
    company: "Hacer Group",
    project: "",
  },
  {
    logo: "/client logos 2/Impact Cranes Logo.png",
    quote:
      "In the crane industry, time is everything. Their ability to turn around quotes, traffic plans, and approvals quickly has been a game changer for our business, allowing us to move faster on projects without ever compromising on compliance. They understand our operation and deliver every time.",
    author: "Paul Pederson",
    company: "Impact Cranes",
    project: "",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const trackTestimonials = [...testimonials, ...testimonials.slice(0, 3)];

  useEffect(() => {
    const timer = window.setInterval(() => {
      showNext();
    }, 5500);

    return () => window.clearInterval(timer);
  });

  const showPrevious = () => {
    if (activeIndex === 0) {
      setIsTransitioning(false);
      setActiveIndex(testimonials.length);

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setIsTransitioning(true);
          setActiveIndex(testimonials.length - 1);
        });
      });
      return;
    }

    setIsTransitioning(true);
    setActiveIndex((current) => current - 1);
  };

  const showNext = () => {
    setIsTransitioning(true);
    setActiveIndex((current) => current + 1);
  };

  const handleTransitionEnd = () => {
    if (activeIndex !== testimonials.length) {
      return;
    }

    setIsTransitioning(false);
    setActiveIndex(0);

    window.requestAnimationFrame(() => {
      setIsTransitioning(true);
    });
  };

  return (
    <section
      className="py-20 md:py-32 px-5 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#151623" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Very Big Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight text-white mb-8 md:mb-12 animate-element">
          Providing Services to
          <br />
          Industrial Sectors and
          <br className="hidden sm:block" /> Government Divisions
        </h2>

        {/* Description */}
        <div className="mb-16 md:mb-20 max-w-4xl">
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed animate-element">
            As a leading Australian traffic control company, we've had the
            privilege of partnering with clients across various industries, many
            of which are a household name. Check out some of the reviews from
            businesses we've worked with since we first opened our doors.
          </p>
        </div>

        {/* Subheading */}
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-12 md:mb-16 animate-element">
          Client Testimonials
        </h3>

        {/* Testimonials Slider */}
        <div className="relative">
          <button
            type="button"
            aria-label="Previous testimonials"
            onClick={showPrevious}
            className="absolute -left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur transition-all hover:bg-white hover:text-[#151623] sm:-left-5 lg:-left-16 lg:h-12 lg:w-12 xl:-left-20"
          >
            <FaChevronLeft />
          </button>

          <div className="overflow-hidden">
            <div
              onTransitionEnd={handleTransitionEnd}
              className={`-mx-4 flex will-change-transform [transform:translateX(calc(var(--active-index)*-100%))] md:[transform:translateX(calc(var(--active-index)*-33.333333%))] ${
                isTransitioning
                  ? "transition-transform duration-700 ease-in-out"
                  : ""
              }`}
              style={
                {
                  "--active-index": activeIndex,
                } as CSSProperties
              }
            >
              {trackTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.company}-${testimonial.author}-${index}`}
                  className="shrink-0 basis-full px-4 md:basis-1/3"
                >
                  <div className="min-h-[520px] space-y-6 animate-element p-8 rounded-2xl border-2 border-dashed border-white/30 hover:border-white/50 transition-all duration-300">
                    {/* Logo */}
                    <div className="relative flex h-20 w-40 items-center">
                      <Image
                        src={testimonial.logo}
                        alt={`${testimonial.company} logo`}
                        fill
                        className="object-contain object-left"
                        unoptimized
                      />
                    </div>

                    {/* Quote */}
                    <p className="text-sm sm:text-base leading-relaxed text-white/90">
                      "{testimonial.quote}"
                    </p>

                    {/* Attribution */}
                    <div className="space-y-1">
                      <p className="text-xl font-semibold text-white">
                        {testimonial.company}
                      </p>
                      <p className="text-sm font-medium text-white/75">
                        {testimonial.author}
                        {testimonial.project ? ` - ${testimonial.project}` : ""}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Next testimonials"
            onClick={showNext}
            className="absolute -right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur transition-all hover:bg-white hover:text-[#151623] sm:-right-5 lg:-right-16 lg:h-12 lg:w-12 xl:-right-20"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center">
          <div className="flex justify-center gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={`${testimonial.company}-dot`}
                type="button"
                aria-label={`Show ${testimonial.company} testimonial`}
                onClick={() => {
                  setIsTransitioning(true);
                  setActiveIndex(index);
                }}
                className={`h-2.5 rounded-full transition-all ${
                  activeIndex % testimonials.length === index
                    ? "w-8 bg-white"
                    : "w-2.5 bg-white/35"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
