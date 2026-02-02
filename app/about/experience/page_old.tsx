"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaRoad, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import AnimatedSection from "../../components/AnimatedSection";

const OurExperience = () => {
  // Slideshow state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    { src: "/DSC00810.JPG", alt: "Highway Infrastructure Project" },
    { src: "/DSC00844.JPG", alt: "Road Traffic Management" },
    { src: "/DSC00850.JPG", alt: "Traffic Control Setup" },
    { src: "/DSC00717.JPG", alt: "Major Road Works" },
    { src: "/DSC00836.JPG", alt: "Highway Project NSW" },
    { src: "/DSC00847.JPG", alt: "Traffic Management Operation" },
    { src: "/DSC00723.JPG", alt: "Road Infrastructure" },
    { src: "/DSC00943.JPG", alt: "Traffic Control Project" },
    { src: "/DSC00809.JPG", alt: "Highway Management" },
    { src: "/DSC00852.JPG", alt: "Road Works Project" },
  ];

  const majorProjects = [
    "Olympic Hwy, Wallendbeen",
    "Stoney Creek Rd, Shanes Park",
    "Heathcote Rd, Hammondville",
    "Mitchell Hwy, Wellington",
    "Princess HWY, Nowra",
    "Great Western Hwy, Nepean",
    "M4 Motorway",
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
            src="/DSC00810.JPG"
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
              Delivering safe, compliant traffic management solutions across major
              infrastructure projects
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
                  <div
                    className="relative w-full aspect-[4/5] overflow-hidden"
                    style={{
                      borderRadius: "40% 60% 60% 40% / 60% 40% 60% 40%",
                    }}
                  >
                    <Image
                      src="/DSC00844.JPG"
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
                    <strong className="text-gray-900">T&S Traffic Control</strong>{" "}
                    has delivered traffic management solutions across a diverse
                    range of projects throughout the Sydney metropolitan and Greater
                    NSW area.
                  </p>
                  <p>
                    Our expertise spans both{" "}
                    <strong className="text-gray-900">
                      large-scale infrastructure developments
                    </strong>{" "}
                    and smaller, specialised works. From major highway projects to
                    local road upgrades, we bring the same level of professionalism,
                    safety focus, and attention to detail to every job.
                  </p>
                  <p>
                    Our proven track record demonstrates our capability to manage
                    complex traffic scenarios, coordinate with multiple stakeholders,
                    and deliver{" "}
                    <strong className="text-btn">
                      compliant, efficient solutions
                    </strong>{" "}
                    that keep projects moving forward safely.
                  </p>
                </div>
              </div>

              {/* Right: Image - Desktop Only */}
              <div className="relative animate-element hidden lg:block">
                <div
                  className="relative w-full aspect-[4/5] overflow-hidden"
                  style={{
                    borderRadius: "40% 60% 60% 40% / 60% 40% 60% 40%",
                  }}
                >
                  <Image
                    src="/DSC00844.JPG"
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

      {/* Major Projects Section */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Major <span className="text-btn">Infrastructure Projects</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-element">
              {majorProjects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-lg p-8 text-center transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-5 bg-btn rounded-full group-hover:scale-110 transition-transform duration-300">
                      <FaRoad className="text-3xl text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-btn transition-colors duration-300">
                    {project}
                  </h3>
                </div>
              ))}
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
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-btn text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Previous slide"
                >
                  <FaChevronLeft className="text-2xl" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-btn text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
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
                    className={`transition-all duration-300 rounded-full ${
                      index === currentSlide
                        ? "w-12 h-3 bg-btn"
                        : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Thumbnail Strip */}
              <div className="hidden md:grid grid-cols-5 gap-4 mt-8">
                {slides.slice(0, 5).map((slide, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`relative h-24 rounded-lg overflow-hidden transition-all duration-300 ${
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-element">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-transparent rounded-2xl p-8 border-2 border-dashed border-white/30 hover:border-btn transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-btn transition-colors duration-300">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
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
                    Our extensive experience across major NSW infrastructure
                    projects demonstrates our capability to deliver safe, compliant,
                    and professional traffic management services.
                  </p>
                  <p>
                    From highway works to local road upgrades, construction sites to
                    special events - we bring proven expertise and a commitment to
                    excellence on every project.
                  </p>
                  <p>
                    <strong className="text-gray-900">
                      Contact T&S Traffic Control today
                    </strong>{" "}
                    to discuss your traffic management requirements and benefit from
                    our proven track record.
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
