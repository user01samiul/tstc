"use client";

import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaRoad, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";

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
    { src: "/DSC00852.JPG", alt: "Road Works Project" }
  ];

  // Auto-play slideshow
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

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
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center font-opensans">
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC00810.JPG"
            alt="Our Experience"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-anton uppercase">
              OUR <span className="text-[#2B7FFF]">EXPERIENCE</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-opensans">
              Delivering traffic management solutions across NSW
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 bg-[#2B7FFF] hover:bg-[#2B7FFF]/90 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 font-opensans"
              >
                <FaPhoneAlt className="text-xl" />
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce flex flex-col items-center">
            <div className="w-8 h-12 border-2 border-[#2B7FFF] rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#2B7FFF] rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              Our Track Record
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              PROVEN EXPERIENCE <span className="text-[#2B7FFF]">ACROSS NSW</span>
            </h2>
            <div className="w-24 h-1 bg-[#2B7FFF] mx-auto"></div>
          </div>
          <div className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed space-y-6 font-opensans">
            <p>
              Since our establishment, <strong>T&S Traffic Control</strong> has delivered traffic management solutions across a diverse range of projects throughout the Sydney metropolitan and Greater NSW area. Our expertise spans both large-scale infrastructure developments and smaller, specialised works.
            </p>
          </div>
        </div>
      </section>

      {/* Major Projects Section */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              Major Projects
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              KEY <span className="text-[#2B7FFF]">INFRASTRUCTURE PROJECTS</span>
            </h2>
            <div className="w-24 h-1 bg-[#2B7FFF] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Olympic Hwy, Wallendbeen",
              "Stoney Creek Rd, Shanes Park",
              "Heathcote Rd, Hammondville",
              "Mitchell Hwy, Wellington",
              "Princess HWY, Nowra",
              "Great Western Hwy, Nepean",
              "M4 Motorway"
            ].map((project, index) => (
              <div key={index} className="group bg-white p-8 text-center border-2 border-gray-200 hover:border-[#2B7FFF] transition-all duration-500 hover:shadow-lg hover:shadow-[#2B7FFF]/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#2B7FFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex justify-center mb-6 relative z-10">
                  <div className="p-5 bg-[#2B7FFF] rounded-full group-hover:rotate-[15deg] transition-transform duration-500">
                    <FaRoad className="text-3xl text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold relative z-10 text-black group-hover:text-[#2B7FFF] transition-colors duration-300 font-opensans">
                  {project}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Slideshow Section */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              Project Gallery
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              OUR WORK IN <span className="text-[#2B7FFF]">ACTION</span>
            </h2>
            <div className="w-24 h-1 bg-[#2B7FFF] mx-auto"></div>
          </div>

          {/* Slideshow Container */}
          <div
            className="relative max-w-5xl mx-auto"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Main Slideshow */}
            <div className="relative h-[500px] md:h-[600px] border-4 border-[#2B7FFF] shadow-2xl overflow-hidden rounded-lg">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Image Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-lg font-opensans font-semibold">
                      {slide.alt}
                    </p>
                  </div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-[#2B7FFF] text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Previous slide"
              >
                <FaChevronLeft className="text-2xl" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-[#2B7FFF] text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Next slide"
              >
                <FaChevronRight className="text-2xl" />
              </button>

              {/* Slide Counter */}
              <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-white font-opensans font-semibold">
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
                      ? "w-12 h-3 bg-[#2B7FFF]"
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
                      ? "ring-4 ring-[#2B7FFF] scale-105"
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

      {/* Client Testimonials Section */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              Client Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              TRUSTED BY <span className="text-[#2B7FFF]">INDUSTRY LEADERS</span>
            </h2>
            <div className="w-24 h-1 bg-[#2B7FFF] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Jordan Commisso", company: "QMC Group" },
              { name: "Ash", company: "Axial Construction" },
              { name: "Firas", company: "Pavement Management Services" },
              { name: "Greg", company: "TQM" },
              { name: "Hovig", company: "Delaney Civil" },
              { name: "Vanessa", company: "CIP Projects" },
              { name: "Najee", company: "E.M.O Civil" },
              { name: "Jamieson Coote", company: "Earthbuilt" },
              { name: "Omar Harris", company: "Icon Build" },
              { name: "Adam", company: "AM2PM" }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white p-8 border-2 border-gray-200 hover:border-[#2B7FFF] transition-all duration-500 hover:shadow-lg hover:shadow-[#2B7FFF]/20 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#2B7FFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2 text-black group-hover:text-[#2B7FFF] transition-colors duration-300 font-opensans">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm font-opensans">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] border-4 border-[#2B7FFF] shadow-xl">
              <Image
                src="/DSC00810.JPG"
                alt="Contact T&S"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#2B7FFF]/20 mix-blend-multiply"></div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#2B7FFF]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                PARTNER WITH AN <span className="text-[#2B7FFF]">EXPERIENCED TEAM</span>
              </h3>
              <div className="space-y-5 text-gray-300 mb-10 font-opensans">
                <p className="leading-relaxed">
                  Our extensive experience across major NSW infrastructure projects demonstrates our capability to deliver safe, compliant, and professional traffic management services.
                </p>
                <p className="leading-relaxed">
                  Contact T&S Traffic Control today to discuss your traffic management requirements and benefit from our proven track record.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-block px-10 py-4 bg-[#2B7FFF] text-white font-bold hover:bg-white hover:text-[#2B7FFF] transition-all duration-300 border border-[#2B7FFF] group relative overflow-hidden font-opensans"
              >
                <span className="relative z-10">GET A QUOTE</span>
                <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  );
};

export default OurExperience;
