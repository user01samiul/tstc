"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaPhone } from "react-icons/fa";

const WeAreSection = () => {
  const coreValues = [
    {
      title: "Safety First",
      description:
        "Every decision we make prioritizes the safety of road users, workers, and the community.",
    },
    {
      title: "Professional Excellence",
      description:
        "Our team maintains the highest standards through continuous training and development.",
    },
    {
      title: "Reliable Service",
      description:
        "24/7 availability with rapid response times for emergency traffic management needs.",
    },
    {
      title: "Local Expertise",
      description:
        "Over 10 years serving NSW with deep knowledge of local regulations and requirements.",
    },
  ];

  const emergencyContent = {
    title: "24/7 Emergency Response",
    description:
      "Need immediate traffic management? Our control room is ready around the clock. We respond within hours to keep your project moving safely.",
    phone: "0450819004",
    phoneDisplay: "Call Now: 0450 819 004",
    ctaText: "Contact Us",
    ctaLink: "/contact",
    image: "/ts-logo-white.png",
    imageAlt: "T&S Traffic Control logo",
    showImage: true, // Set to false to hide image completely
  };

  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-white">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left: Content */}
          <div className="order-1 lg:order-1 space-y-8">
            <div>
              <div className="w-16 h-1 bg-btn mb-6"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                We Are <span className="text-btn">T&S Traffic Management</span>
              </h2>
            </div>

            <p
              className="text-lg sm:text-xl leading-relaxed"
              style={{ color: "#8E8E95" }}
            >
              For over 10 years, our passion for road safety has driven
              everything we do. As a trusted NSW-based traffic management
              company, we deliver{" "}
              <span className="font-bold text-btn italic">
                &quot;A Safe Way Home&quot;
              </span>{" "}
              for everyone, every day.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-600">
              Excellence begins with education. Our team is committed to ongoing
              training and professional development, ensuring we stay at the
              forefront of industry standards, safety practices, and innovative
              solutions.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 bg-btn hover:bg-btn/90 text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:shadow-xl hover:gap-4 group"
            >
              Discover Our Story
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right: Image */}
          <div className="relative order-2 lg:order-2">
            <div
              className="relative w-full aspect-[4/3] lg:h-full lg:max-h-[520px] overflow-hidden rounded-lg"
              style={{
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Image
                src="/montage/1. Home Page/Services We offer/Equipment Hire.png"
                alt="T&S Traffic Management Operations"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-btn/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-10 h-1 bg-btn mb-4 group-hover:w-16 transition-all duration-300"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#8E8E95" }}
              >
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Emergency CTA Banner */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>

          <div className="relative z-10 px-8 py-12 md:py-16 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left: Text Content */}
              <div className="text-white space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold leading-tight font-anton uppercase">
                  {emergencyContent.title}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {emergencyContent.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a
                    href={`tel:${emergencyContent.phone}`}
                    className="inline-flex items-center justify-center gap-3 bg-btn hover:bg-btn/90 text-white px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:shadow-2xl hover:shadow-btn/50"
                  >
                    <FaPhone className="text-lg" />
                    {emergencyContent.phoneDisplay}
                  </a>
                  <Link
                    href={emergencyContent.ctaLink}
                    className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-4 rounded-full font-semibold text-base border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300"
                  >
                    {emergencyContent.ctaText}
                  </Link>
                </div>
              </div>

              {/* Right: Brand Icon - Hidden on mobile */}
              {emergencyContent.showImage && (
                <div className="flex relative h-[350px] rounded-2xl overflow-hidden items-center justify-center p-12">
                  <Image
                    src={emergencyContent.image}
                    alt={emergencyContent.imageAlt}
                    fill
                    className="object-contain p-12"
                    sizes="50vw"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeAreSection;
