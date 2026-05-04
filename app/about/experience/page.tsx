"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaHardHat,
  FaPhoneAlt,
  FaRoad,
  FaTruck,
} from "react-icons/fa";
import AnimatedSection from "../../components/AnimatedSection";

const OurExperience = () => {
  // Slideshow state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Updated slides with actual project images
  const slides = [
    {
      src: "/montage/4. Career/Our Experience/Brighton Asphalt.png",
      alt: "Brighton Asphalt Project",
    },
    {
      src: "/montage/4. Career/Our Experience/Cantebury Rd - Crane.png",
      alt: "Canterbury Rd - Crane Operations",
    },
    {
      src: "/montage/4. Career/Our Experience/Cantebury Rd - Crane 2.png",
      alt: "Canterbury Rd - Crane Setup 2",
    },
    {
      src: "/montage/4. Career/Our Experience/Cantebury Rd - Crane 3.png",
      alt: "Canterbury Rd - Crane Setup 3",
    },
    {
      src: "/montage/4. Career/Our Experience/Crane - Cronulla.png",
      alt: "Crane Operations - Cronulla",
    },
    {
      src: "/montage/4. Career/Our Experience/Warwick Farm - 5G Telecom.png",
      alt: "Warwick Farm - 5G Telecommunications",
    },
  ];

  const projectCategories = [
    {
      title: "Highway Infrastructure",
      icon: FaRoad,
      description:
        "Major highway and motorway projects across NSW requiring complex traffic management solutions",
      projects: [
        "Olympic Hwy, Wallendbeen",
        "Mitchell Hwy, Wellington",
        "Princess HWY, Nowra",
        "Great Western Hwy, Nepean",
        "M4 Motorway",
      ],
    },
    {
      title: "Construction Sites",
      icon: FaHardHat,
      description:
        "Large-scale construction and civil works requiring comprehensive traffic control",
      projects: [
        "Stoney Creek Rd, Shanes Park",
        "Heathcote Rd, Hammondville",
        "Canterbury Rd - Crane Operations",
        "College St Development",
      ],
    },
    {
      title: "Specialized Works",
      icon: FaTruck,
      description:
        "Telecommunications, utility, and specialized infrastructure projects",
      projects: [
        "Warwick Farm - 5G Telecom",
        "Brighton Asphalt Works",
        "Crane Operations - Cronulla",
        "Canterbury Rd - Multiple Crane Sites",
      ],
    },
  ];

  const testimonials = [
    { name: "Jordan Commisso", company: "QMC Group" },
    { name: "Ash", company: "Axial Construction" },
    { name: "Firas", company: "Pavement Management Services" },
    { name: "Greg", company: "TQM" },
    { name: "Hovig", company: "Delaney Civil" },
    { name: "Vanessa", company: "CIP Projects" },
    { name: "Najee", company: "E.M.O Civil" },
    { name: "Jamieson Coote", company: "Earthbuilt" },
    { name: "Omar Harris", company: "Icon Build" },
    { name: "Adam", company: "AM2PM" },
  ];

  // Auto-play slideshow
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/montage/4. Career/Our Experience/Brighton Asphalt.png"
            alt="Our Experience"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl px-5 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center text-white space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-anton uppercase">
              PROVEN EXPERIENCE <br />
              <span className="text-btn">ACROSS NSW</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Delivering safe, compliant traffic management solutions across
              major infrastructure projects
            </p>
            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-btn hover:bg-btn/90 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                <FaPhoneAlt className="text-xl" />
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <AnimatedSection direction="left">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              {/* Left: Content */}
              <div className="space-y-8 animate-element">
                <div>
                  <div className="w-16 h-1 bg-btn mb-6"></div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Experience You Can <br />
                    <span className="text-btn">Count On</span>
                  </h2>
                </div>

                {/* Image - Mobile Only */}
                <div className="relative animate-element lg:hidden">
                  <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg">
                    <Image
                      src="/3.webp"
                      alt="T&S Traffic Control Experience"
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                </div>

                <div
                  className="space-y-6 text-lg leading-relaxed"
                  style={{ color: "#8E8E95" }}
                >
                  <p>
                    Since our establishment,{" "}
                    <strong className="text-gray-900">
                      T&S Traffic Control
                    </strong>{" "}
                    has delivered traffic management solutions across a diverse
                    range of projects throughout the Sydney metropolitan and
                    Greater NSW area.
                  </p>
                  <p>
                    Our expertise spans{" "}
                    <strong className="text-gray-900">
                      highway infrastructure, construction sites, crane
                      operations, telecommunications installations,
                    </strong>{" "}
                    and specialized works. From major motorway projects to
                    complex urban crane lifts, we bring proven capability and
                    professional execution to every job.
                  </p>
                  <p>
                    Our track record demonstrates our ability to manage{" "}
                    <strong className="text-gray-900">
                      high-risk environments, coordinate with multiple
                      stakeholders,
                    </strong>{" "}
                    and deliver compliant, efficient solutions that keep
                    projects moving forward safely.
                  </p>
                </div>
              </div>

              {/* Right: Image - Desktop Only */}
              <div className="relative animate-element hidden lg:block">
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg">
                  <Image
                    src="/3.webp"
                    alt="T&S Traffic Control Experience"
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Project Categories Section */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Our Project <span className="text-btn">Portfolio</span>
              </h2>
              <p
                className="mt-6 text-lg max-w-3xl mx-auto leading-relaxed"
                style={{ color: "#8E8E95" }}
              >
                Comprehensive traffic management across diverse project types
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-element">
              {projectCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-8 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-btn rounded-full flex items-center justify-center mb-6">
                      <IconComponent className="text-3xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-anton uppercase">
                      {category.title}
                    </h3>
                    <div className="w-12 h-px bg-btn mb-4"></div>
                    <p
                      className="text-base leading-relaxed mb-6"
                      style={{ color: "#8E8E95" }}
                    >
                      {category.description}
                    </p>
                    <ul className="space-y-2">
                      {category.projects.map((project, pIndex) => (
                        <li
                          key={pIndex}
                          className="flex items-start text-sm"
                          style={{ color: "#8E8E95" }}
                        >
                          <span className="text-btn mr-2 flex-shrink-0">•</span>
                          <span>{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Photo Gallery Section */}
      <AnimatedSection direction="left">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Our Work In <span className="text-btn">Action</span>
              </h2>
              <p
                className="mt-6 text-lg max-w-3xl mx-auto leading-relaxed"
                style={{ color: "#8E8E95" }}
              >
                Real projects showcasing our professional traffic management
                services
              </p>
            </div>

            {/* Slideshow Container */}
            <div
              className="relative max-w-5xl mx-auto animate-element"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Main Slideshow */}
              <div className="relative h-[400px] md:h-[600px] overflow-hidden rounded-lg shadow-2xl">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide
                        ? "opacity-100 z-10"
                        : "opacity-0 z-0"
                    }`}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Image Caption */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white text-lg font-semibold">
                        {slide.alt}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-btn text-white p-4 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer"
                  aria-label="Previous slide"
                >
                  <FaChevronLeft className="text-2xl" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-btn text-white p-4 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer"
                  aria-label="Next slide"
                >
                  <FaChevronRight className="text-2xl" />
                </button>

                {/* Slide Counter */}
                <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-white font-semibold">
                    {currentSlide + 1} / {slides.length}
                  </span>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      index === currentSlide
                        ? "w-12 h-3 bg-btn"
                        : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Thumbnail Strip */}
              <div className="hidden md:grid grid-cols-6 gap-4 mt-8">
                {slides.map((slide, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`relative h-24 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer ${
                      index === currentSlide
                        ? "ring-4 ring-btn scale-105"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={slide.src}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Client Testimonials Section */}
      <AnimatedSection direction="right">
        <section
          className="py-20 md:py-24 px-5 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#151623" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Trusted By <span className="text-btn">Industry Leaders</span>
              </h2>
              <p className="mt-6 text-lg max-w-3xl mx-auto leading-relaxed text-gray-400">
                Building strong partnerships with major contractors across NSW
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 animate-element">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-transparent rounded-2xl p-6 border-2 border-dashed border-white/30 hover:border-btn transition-all duration-300"
                >
                  <div className="relative z-10 text-center">
                    <h3 className="text-lg font-bold mb-2 text-white group-hover:text-btn transition-colors duration-300">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection direction="left">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              {/* Left: Image */}
              <div className="relative animate-element order-2 lg:order-1">
                <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/DSC00850.JPG"
                    alt="Partner with T&S"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Right: Content */}
              <div className="space-y-8 animate-element order-1 lg:order-2">
                <div>
                  <div className="w-16 h-1 bg-btn mb-6"></div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Partner With An <br />
                    <span className="text-btn">Experienced Team</span>
                  </h2>
                </div>

                <div
                  className="space-y-6 text-lg leading-relaxed"
                  style={{ color: "#8E8E95" }}
                >
                  <p>
                    Our extensive experience across{" "}
                    <strong className="text-gray-900">
                      major NSW infrastructure projects
                    </strong>{" "}
                    demonstrates our capability to deliver safe, compliant, and
                    professional traffic management services.
                  </p>
                  <p>
                    From highway works to local road upgrades, construction
                    sites to special events, crane operations to
                    telecommunications -{" "}
                    <strong className="text-gray-900">
                      we bring proven expertise
                    </strong>{" "}
                    and a commitment to excellence on every project.
                  </p>
                  <p>
                    Contact T&S Traffic Control today to discuss your traffic
                    management requirements and benefit from our proven track
                    record.
                  </p>
                </div>

                <div className="pt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 bg-btn hover:bg-btn/90 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
                  >
                    Get A Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default OurExperience;
