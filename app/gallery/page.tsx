"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaTimes } from "react-icons/fa";
import { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  // Gallery categories with images
  const galleryCategories = [
    {
      title: "Telecommunications",
      description:
        "Traffic management for telecommunications infrastructure installation, maintenance, and upgrades across NSW.",
      images: [
        { src: "/DSC00836.JPG", alt: "Telecom Equipment Installation" },
        { src: "/DSC00847.JPG", alt: "Telecom Traffic Control Setup" },
        { src: "/DSC00850.JPG", alt: "Telecom Project Work" },
        { src: "/DSC00852.JPG", alt: "Telecom Site Management" },
      ],
    },
    {
      title: "Crane & Heavy Equipment",
      description:
        "Specialized traffic control for crane operations, heavy equipment movement, and large-scale lifting activities.",
      images: [
        { src: "/DSC00810.JPG", alt: "Crane Operation Traffic Management" },
        { src: "/DSC00943.JPG", alt: "Night Crane Traffic Control" },
        { src: "/DSC00807.JPG", alt: "Heavy Equipment Traffic Control" },
        { src: "/DSC00809.JPG", alt: "Crane Site Safety" },
        { src: "/DSC00811.JPG", alt: "Large Equipment Operations" },
      ],
    },
    {
      title: "Construction Projects",
      description:
        "Comprehensive traffic management solutions for construction sites, roadworks, and infrastructure development.",
      images: [
        { src: "/DSC00717.JPG", alt: "Construction Site Traffic Control" },
        { src: "/DSC00721.JPG", alt: "Construction Traffic Management" },
        { src: "/DSC00723.JPG", alt: "Construction Zone Setup" },
        { src: "/DSC00726.JPG", alt: "Construction Site Safety" },
        { src: "/DSC00732.JPG", alt: "Construction Traffic Plan" },
        { src: "/DSC00849.JPG", alt: "Construction Vehicle Operations" },
        { src: "/DSC00844.JPG", alt: "Construction Site Work" },
        { src: "/DSC00845.JPG", alt: "Construction Zone Management" },
      ],
    },
    {
      title: "Civil Infrastructure",
      description:
        "Traffic control for civil engineering projects, utility works, and public infrastructure maintenance.",
      images: [
        { src: "/DSC00838.JPG", alt: "Civil Works Traffic Control" },
        { src: "/DSC00862.JPG", alt: "Civil Project Management" },
        { src: "/DSC00947.JPG", alt: "Civil Infrastructure Work" },
        { src: "/DSC00949.JPG", alt: "Civil Engineering Traffic Setup" },
        { src: "/DSC00807 (1).JPG", alt: "Civil Works Night Operations" },
      ],
    },
  ];

  const openLightbox = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[350px] md:min-h-[400px] w-full flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC00726.JPG"
            alt="Project Gallery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl px-5 sm:px-6 lg:px-8 text-center">
          <div className="text-white space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight font-anton uppercase">
              PROJECT <span className="text-btn">GALLERY</span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of traffic control projects across NSW
            </p>
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
                    Our Work <br />
                    <span className="text-btn">Across NSW</span>
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
                      src="/DSC00810.JPG"
                      alt="Traffic Control Projects"
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
                    From{" "}
                    <strong className="text-gray-900">
                      telecommunications and construction
                    </strong>{" "}
                    to crane operations and civil infrastructure, our portfolio
                    showcases the diverse range of projects we've delivered
                    across New South Wales.
                  </p>
                  <p>
                    Each image represents our commitment to{" "}
                    <strong className="text-gray-900">
                      safety, compliance, and professional execution
                    </strong>{" "}
                    - no matter the project size or complexity.
                  </p>
                  <p>
                    Browse through our gallery to see how T&S Traffic Control
                    manages traffic on sites of all scales, delivering
                    solutions that keep workers safe and traffic flowing.
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
                    src="/DSC00810.JPG"
                    alt="Traffic Control Projects"
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

      {/* Gallery Sections */}
      {galleryCategories.map((category, categoryIndex) => (
        <AnimatedSection
          key={categoryIndex}
          direction={categoryIndex % 2 === 0 ? "right" : "left"}
        >
          <section
            className={`py-20 md:py-24 px-5 sm:px-6 lg:px-8 ${
              categoryIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
            }`}
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 animate-element">
                <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  {category.title.split(" ")[0]}{" "}
                  <span className="text-btn">
                    {category.title.split(" ").slice(1).join(" ")}
                  </span>
                </h2>
                <p
                  className="text-lg max-w-3xl mx-auto leading-relaxed"
                  style={{ color: "#8E8E95" }}
                >
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-element">
                {category.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    onClick={() => openLightbox(image)}
                    className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <p className="text-white text-base font-semibold">
                          {image.alt}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>
      ))}

      {/* Visual Divider Section */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-element">
              <div className="relative aspect-square overflow-hidden rounded-lg group">
                <Image
                  src="/DSC00943.JPG"
                  alt="Day Operations"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-bold font-anton uppercase">
                      DAY OPERATIONS
                    </h3>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg group">
                <Image
                  src="/DSC00807.JPG"
                  alt="Night Operations"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-bold font-anton uppercase">
                      NIGHT OPERATIONS
                    </h3>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg group">
                <Image
                  src="/DSC00852.JPG"
                  alt="Emergency Response"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-bold font-anton uppercase">
                      24/7 RESPONSE
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection direction="left">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              {/* Left: Image */}
              <div className="relative animate-element order-2 lg:order-1">
                <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/DSC00949.JPG"
                    alt="Start Your Project"
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
                    Ready to Start <br />
                    <span className="text-btn">Your Project?</span>
                  </h2>
                </div>

                <div
                  className="space-y-6 text-lg leading-relaxed"
                  style={{ color: "#8E8E95" }}
                >
                  <p>
                    Whether you're planning a construction project, telecom
                    installation, or need emergency traffic management,{" "}
                    <strong className="text-gray-900">
                      we're ready to deliver
                    </strong>
                    .
                  </p>
                  <p>
                    Contact our team today to discuss your traffic control
                    requirements and see how we can support your next project.
                  </p>
                </div>

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
            className="absolute top-4 right-4 z-50 p-3 bg-white/10 hover:bg-btn text-white rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Close lightbox"
          >
            <FaTimes className="text-2xl" />
          </button>
          <div
            className="relative w-full max-w-6xl h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white text-xl font-semibold text-center">
                {selectedImage.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
