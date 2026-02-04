"use client";

import VisualDividerSection from "@/app/components/VisualDividerSection";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaDownload,
  FaPhoneAlt,
  FaTimes,
} from "react-icons/fa";
import AnimatedSection from "../../components/AnimatedSection";

const EventManagementPlansPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Event Portfolio Gallery
  const eventPortfolio = [
    {
      image: "/sami/02- Haldon St Central Plan.png",
      pdf: "/montage/3. Services We Offer/Event Management/02- Haldon St Central Plan.pdf",
      title: "Haldon St Central",
    },
    {
      image: "/sami/TSTGS2901 - Pre Ramadan Day - Sadaqa.png",
      pdf: "/montage/3. Services We Offer/Event Management/TSTGS2901 - Pre Ramadan Day - Sadaqa.pdf",
      title: "Pre Ramadan Day",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % eventPortfolio.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + eventPortfolio.length) % eventPortfolio.length,
    );
  };

  const handleDownload = (pdfPath: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Event Management Services
  const eventServices = [
    {
      title: "Event Planning",
      description:
        "Comprehensive traffic management planning for all event types including community, charity, sporting, and large-scale public gatherings.",
    },
    {
      title: "Route Management",
      description:
        "Expert route-based and precinct event management with real-time tactical adjustments and operational support.",
    },
    {
      title: "Safety Coordination",
      description:
        "Mission-critical safety management prioritising participants, community, and general public throughout your event.",
    },
    {
      title: "Turnkey Solutions",
      description:
        "Complete event solutions including equipment, security, hostile vehicle mitigation, and event branding coordination.",
    },
  ];

  // Event Types We Support
  const eventTypes = [
    "Community events and festivals",
    "Charity runs and fundraisers",
    "Film and production shoots",
    "Sporting events and marathons",
    "Large-scale public gatherings",
    "Street parades and processions",
    "Concert and entertainment venues",
    "Corporate events and activations",
  ];

  const faqs = [
    {
      question: "What types of events do you manage?",
      answer:
        "We manage traffic for all event types including community events, charity runs, sporting events, film shoots, large-scale public gatherings, street parades, concerts, and corporate events. Our experienced team adapts to each event's unique requirements, whether it's a small community festival or a major city-wide event.",
    },
    {
      question: "How far in advance should I book event traffic management?",
      answer:
        "We recommend booking as early as possible, ideally 3-6 months in advance for major events. This allows adequate time for planning, permit applications, stakeholder coordination, and approvals. However, we can accommodate shorter timeframes for smaller events or urgent requirements.",
    },
    {
      question: "Do you provide equipment for events?",
      answer:
        "Yes, we provide complete turnkey solutions including all required traffic management equipment such as barriers, signage, VMS boards, security fencing, and hostile vehicle mitigation. We also coordinate with suppliers for event branding, lighting, and other specialized requirements.",
    },
    {
      question: "Can you help with event permits and approvals?",
      answer:
        "Absolutely. We assist with the entire permit application process including traffic management plans, risk assessments, and coordination with councils, TfNSW, police, and emergency services. Our established relationships with authorities help streamline the approval process.",
    },
  ];

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/montage/3. Services We Offer/Event Management/marathon-event.png"
            alt="Event Management Plans"
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
              EVENT MANAGEMENT <br />
              <span className="text-btn">PLANS</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Comprehensive traffic management solutions for safe, successful
              events across NSW
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
                    Expert Event Traffic <br />
                    <span className="text-btn">Management</span>
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
                      src="/montage/3. Services We Offer/Event Management/marathon-event.png"
                      alt="Event Management Services"
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
                    <strong className="text-gray-900">
                      T&S Traffic Control
                    </strong>{" "}
                    provides comprehensive traffic management solutions for
                    major events across NSW, including community, charity, film,
                    sporting, and large-scale public gatherings.
                  </p>
                  <p>
                    Our experienced team works closely with stakeholders
                    throughout the planning and execution phases, often staffing
                    operations centres to support{" "}
                    <strong className="text-gray-900">
                      tactical changes and ensure events run smoothly
                    </strong>
                    .
                  </p>
                  <p>
                    We are trusted to manage precinct and route-based events on
                    a mission-critical basis, prioritising the safety of
                    participants, the community, and the general public with the
                    highest standards of professionalism.
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
                    src="/montage/3. Services We Offer/Event Management/marathon-event.png"
                    alt="Event Management Services"
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

      {/* Event Services Section */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Our Event <span className="text-btn">Services</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-element">
              {eventServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-btn rounded-full flex items-center justify-center mb-6">
                    <FaCheckCircle className="text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-anton uppercase">
                    {service.title}
                  </h3>
                  <div className="w-12 h-px bg-btn mb-4"></div>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "#8E8E95" }}
                  >
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Event Portfolio Section */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Our Event <span className="text-btn">Portfolio</span>
              </h2>
              <p
                className="mt-6 text-lg max-w-3xl mx-auto leading-relaxed"
                style={{ color: "#8E8E95" }}
              >
                Professional event management plans showcasing our expertise
              </p>
            </div>

            {/* Carousel */}
            <div className="relative max-w-5xl mx-auto animate-element">
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                <Image
                  src={eventPortfolio[currentSlide].image}
                  alt={eventPortfolio[currentSlide].title}
                  fill
                  className="object-contain cursor-pointer"
                  onClick={() =>
                    setSelectedImage(eventPortfolio[currentSlide].image)
                  }
                />
              </div>

              <p
                className="text-center mt-4 text-sm"
                style={{ color: "#8E8E95" }}
              >
                Click image to view full size and download
              </p>

              {/* Navigation Arrows */}
              {eventPortfolio.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
                    aria-label="Previous slide"
                  >
                    <FaChevronLeft className="text-xl" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
                    aria-label="Next slide"
                  >
                    <FaChevronRight className="text-xl" />
                  </button>
                </>
              )}

              {/* Dots Indicator */}
              {eventPortfolio.length > 1 && (
                <div className="flex justify-center gap-2 mt-6">
                  {eventPortfolio.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                        currentSlide === index ? "bg-btn w-8" : "bg-gray-300"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            className="absolute top-6 right-6 md:top-8 md:right-8 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 cursor-pointer z-10"
            aria-label="Close"
          >
            <FaTimes className="text-2xl" />
          </button>

          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
              <Image
                src={selectedImage}
                alt="Event Plan"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <button
            onClick={() => {
              const currentItem = eventPortfolio.find(
                (item) => item.image === selectedImage,
              );
              if (currentItem) {
                handleDownload(currentItem.pdf, `${currentItem.title}.pdf`);
              }
            }}
            className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 cursor-pointer"
          >
            <FaDownload />
            Download PDF
          </button>
        </div>
      )}

      {/* Event Types Section */}
      <AnimatedSection direction="left">
        <section
          className="py-20 md:py-24 px-5 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#151623" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Event Types <span className="text-btn">We Support</span>
              </h2>
              <p className="mt-6 text-lg max-w-3xl mx-auto leading-relaxed text-gray-400">
                Comprehensive traffic management for all event types across NSW
              </p>
            </div>

            <div className="max-w-4xl mx-auto animate-element">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {eventTypes.map((type, index) => (
                  <div
                    key={index}
                    className="bg-transparent rounded-2xl p-6 border-2 border-dashed border-white/30 hover:border-btn transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <FaCheckCircle className="text-2xl text-btn" />
                      </div>
                      <p className="text-white text-base leading-relaxed pt-0.5">
                        {type}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Visual Divider Section */}
      <AnimatedSection direction="left">
        <VisualDividerSection
          title="Our TGS"
          titleHighlight="Capabilities"
          description="Professional traffic guidance scheme design across all project types"
          items={[
            {
              src: "/DSC00949.JPG",
              alt: "Professional Design",
              label: "PLANNING",
            },
            {
              src: "/montage/3. Services We Offer/Event Management/eff-fight-night.png",
              alt: "Compliance",
              label: "COMPLIANCE",
            },
            {
              src: "/DSC00732.JPG",
              alt: "Safety",
              label: "SAFETY",
            },
          ]}
        />
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
                    src="/montage/3. Services We Offer/Event Management/fire-truck.png"
                    alt="Plan Your Event"
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
                    Ready For A Successful <br />
                    <span className="text-btn">Event?</span>
                  </h2>
                </div>

                <div
                  className="space-y-6 text-lg leading-relaxed"
                  style={{ color: "#8E8E95" }}
                >
                  <p>
                    Partner with{" "}
                    <strong className="text-gray-900">
                      T&S Traffic Control
                    </strong>{" "}
                    for expertly managed event traffic solutions that keep your
                    event safe, compliant, and successful.
                  </p>
                  <p>
                    Our professional team is ready to deliver reliable, turnkey
                    traffic management for your event. Contact us today to
                    discuss your requirements or request a quote.
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

export default EventManagementPlansPage;
