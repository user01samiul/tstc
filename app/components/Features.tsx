"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const projectSlides = [
  {
    label: "Traffic control operations",
    images: [
      "/new_photos_May_2026/new/IMG_6736.webp",
      "/new_photos_May_2026/new/IMG_0944.webp",
      "/new_photos_May_2026/new/DSC02504.webp",
    ],
  },
  {
    label: "Traffic planning and equipment",
    images: [
      "/montage/1. Home Page/Services We offer/TMP & TGS.jpeg",
      "/montage/1. Home Page/Services We offer/Council applications.png",
      "/montage/1. Home Page/Services We offer/Event-management.png",
    ],
  },
];

export default function Features() {
  const features = [
    {
      title: "Accredited Traffic Controllers",
      description:
        "Professional traffic controllers certified by TfNSW, ensuring compliance and safety on every project.",
    },
    {
      title: "Equipment Hire",
      description:
        "Comprehensive range of traffic management equipment available for hire, including signs, barriers, and VMS boards.",
    },
    {
      title: "TMP/ TGS/ TCP",
      description:
        "Fully compliant Traffic Management Plans, Traffic Guidance Schemes, and Traffic Control Plans tailored to your project.",
    },
    {
      title: "Council Permit Applications",
      description:
        "Expert assistance with council permit applications, ensuring all documentation meets local authority requirements.",
    },
    {
      title: "Event Management",
      description:
        "Comprehensive traffic management solutions for events of all sizes, ensuring smooth flow and participant safety.",
    },
    {
      title: "Signage Installation",
      description:
        "Professional installation and maintenance of traffic signs, ensuring visibility and compliance with Australian standards.",
    },
  ];

  const [activeSlides, setActiveSlides] = useState([0, 1]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlides((current) =>
        current.map(
          (slideIndex, galleryIndex) =>
            (slideIndex + 1) % projectSlides[galleryIndex].images.length
        )
      );
    }, 3500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="py-6 md:py-16 px-5 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-stretch">
          {/* Left Side - Project Image Sliders */}
          <div className="relative order-2 lg:order-1 animate-element grid grid-rows-2 gap-5 h-full">
            {projectSlides.map((gallery, galleryIndex) => (
              <div
                key={gallery.label}
                className="relative min-h-[260px] overflow-hidden rounded-lg"
                style={{
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
                }}
              >
                {gallery.images.map((src, imageIndex) => (
                  <Image
                    key={src}
                    src={src}
                    alt={gallery.label}
                    fill
                    className={`object-cover transition-opacity duration-700 ${
                      activeSlides[galleryIndex] === imageIndex
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={galleryIndex === 0 && imageIndex === 0}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Right Side - Title and Features */}
          <div className="order-1 lg:order-2 space-y-10">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-black leading-[1.15] animate-element">
              Compliant traffic plans, permits and on-site control for projects
              across Australia.
            </h2>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {features.map((feature, index) => (
                <div key={index} className="space-y-3 animate-element">
                  {/* Horizontal Line */}
                  <div className="w-12 h-px bg-black"></div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-btn">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "#8E8E95" }}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
