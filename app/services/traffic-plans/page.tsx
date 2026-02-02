"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaCheckCircle,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaDownload,
  FaFileAlt,
  FaPhoneAlt,
  FaTimes,
} from "react-icons/fa";
import AnimatedSection from "../../components/AnimatedSection";
import VisualDividerSection from "../../components/VisualDividerSection";

const TrafficPlansPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    pdfPath: string;
  } | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Traffic Plan Gallery - Images with corresponding PDF files (matched serially)
  const trafficPlanGallery = [
    {
      image: "/sami/traffic-plan1.png",
      pdfPath: "/montage/3. Services We Offer/Traffic Planning/SPA.pdf",
      title: "Swept Path Analysis",
    },
    {
      image: "/sami/traffic-plan2.png",
      pdfPath: "/montage/3. Services We Offer/Traffic Planning/TGS.pdf",
      title: "Traffic Guidance Scheme",
    },
    {
      image: "/sami/traffic-plan3.png",
      pdfPath:
        "/montage/3. Services We Offer/Traffic Planning/TSTGS 2801 - Stage 2.2 Marina St Closure - Young Town Centre Upgrade.pdf",
      title: "Marina St Closure - Young Town Centre",
    },
    {
      image: "/sami/traffic-plan4.png",
      pdfPath:
        "/montage/3. Services We Offer/Traffic Planning/TSTGS2701 - EWP Works - Sussex St, Sydney.pdf",
      title: "EWP Works - Sussex St, Sydney",
    },
    {
      image: "/sami/traffic-pplan5.png",
      pdfPath:
        "/montage/3. Services We Offer/Traffic Planning/TSTGS2903 - Stage 1 - Westbound Shoulder Closure - 83 Main Rd Heddon Greta.pdf",
      title: "Westbound Shoulder Closure - Heddon Greta",
    },
  ];

  const openLightbox = (image: string, pdfPath: string) => {
    setSelectedImage({ src: image, pdfPath });
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const handleDownload = () => {
    if (selectedImage) {
      const link = document.createElement("a");
      link.href = selectedImage.pdfPath;
      link.download = selectedImage.pdfPath.split("/").pop() || "document.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % trafficPlanGallery.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + trafficPlanGallery.length) % trafficPlanGallery.length,
    );
  };

  // Key features of TGS services
  const tgsFeatures = [
    {
      title: "Professional Design",
      description:
        "Detailed traffic control plans using professional CAD software, compliant with TfNSW (RMS) and AS1742.3 standards.",
    },
    {
      title: "Custom Solutions",
      description:
        "Tailored designs for roadworks, lane closures, shoulder works, and intersections based on your specific site conditions.",
    },
    {
      title: "Multi-Stage Layouts",
      description:
        "Complex, long-term layouts for civil and infrastructure projects requiring multiple traffic staging phases.",
    },
    {
      title: "Specialist Works",
      description:
        "Night works, event management, and emergency traffic management designs with fast turnaround times.",
    },
  ];

  // What's included in our service
  const serviceIncludes = [
    "Site assessment and traffic volume analysis",
    "Compliant TGS designs to TfNSW and AS1742.3 standards",
    "Professional CAD drawings and documentation",
    "Risk assessment and hazard identification",
    "Staging plans for complex or long-term works",
    "Supporting documentation for permit applications",
    "Consultation with road authorities and stakeholders",
    "Design revisions and ongoing support",
  ];

  const faqs = [
    {
      question: "What is a TGS or TCP?",
      answer:
        "A TGS (Traffic Guidance Scheme) is a detailed plan that outlines how traffic will be managed around a worksite or event. A TCP (Traffic Control Plan) serves a similar purpose, providing specific instructions for managing traffic flow during roadworks, construction, or events that impact normal traffic conditions.",
    },
    {
      question: "Do I need a TGS for my project?",
      answer:
        "If your works impact public roads, footpaths, or traffic flow, you'll typically need a TGS. This includes roadworks, construction sites, utility works, events, and maintenance activities. Most councils and road authorities require an approved TGS before works can commence.",
    },
    {
      question: "How long does it take to get a TGS designed?",
      answer:
        "Standard TGS designs typically take 3-5 business days. For urgent or emergency works, we offer expedited services with turnaround times as fast as 24 hours. Complex multi-stage projects may require additional time depending on scope and stakeholder requirements.",
    },
    {
      question: "Can you help with permit applications?",
      answer:
        "Yes, we provide complete permit application services. Once your TGS is designed, we can assist with submitting applications to TfNSW, local councils, and other road authorities. We handle all required documentation and liaise with authorities on your behalf.",
    },
  ];

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC00810.JPG"
            alt="Traffic Guidance Schemes"
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
              TRAFFIC GUIDANCE <br />
              <span className="text-btn">SCHEMES (TGS)</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Professional TGS designs compliant with TfNSW and AS1742.3
              standards
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
                    Compliant TGS Designs <br />
                    <span className="text-btn">For Every Site</span>
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
                      src="/sami/traffic-plan1.png"
                      alt="TGS Design Services"
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
                    Our in-house design team develops{" "}
                    <strong className="text-gray-900">
                      Traffic Guidance Schemes
                    </strong>{" "}
                    that comply with{" "}
                    <strong className="text-gray-900">
                      TfNSW (RMS) and AS1742.3 standards
                    </strong>
                    , ensuring safety and practicality for every site.
                  </p>
                  <p>
                    Each TGS is designed with real-world application in mind -{" "}
                    balancing the needs of workers, motorists, and pedestrians.
                    We assess traffic volumes, road geometry, and environmental
                    factors to create layouts that are both{" "}
                    <strong className="text-gray-900">
                      compliant and efficient
                    </strong>
                    .
                  </p>
                  <p>
                    Whether it's a simple shoulder closure or a complex
                    multi-stage highway project, our experienced designers
                    deliver TGS plans that meet regulatory requirements and keep
                    your project moving forward safely.
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
                    src="/sami/traffic-plan1.png"
                    alt="TGS Design Services"
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
              </div>
            </div>

            {/* Traffic Plan Gallery Carousel */}
            <div className="mt-20 animate-element">
              <div className="text-center mb-12">
                <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  Sample TGS <span className="text-btn">Designs</span>
                </h3>
                <p
                  className="mt-6 text-lg max-w-3xl mx-auto leading-relaxed"
                  style={{ color: "#8E8E95" }}
                >
                  Browse our portfolio of traffic guidance schemes and download
                  detailed plans
                </p>
              </div>

              {/* Carousel */}
              <div className="relative max-w-5xl mx-auto">
                {/* Main Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
                  <Image
                    src={trafficPlanGallery[currentSlide].image}
                    alt={trafficPlanGallery[currentSlide].title}
                    fill
                    className="object-contain bg-gray-100 cursor-pointer"
                    onClick={() =>
                      openLightbox(
                        trafficPlanGallery[currentSlide].image,
                        trafficPlanGallery[currentSlide].pdfPath,
                      )
                    }
                  />
                </div>

                {/* Title */}
                <div className="text-center mt-6">
                  <h4 className="text-xl font-semibold text-gray-900">
                    {trafficPlanGallery[currentSlide].title}
                  </h4>
                  <p className="text-sm mt-2" style={{ color: "#8E8E95" }}>
                    Click image to view full size and download
                  </p>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-btn hover:text-white text-gray-900 rounded-full shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
                  aria-label="Previous slide"
                >
                  <FaChevronLeft className="text-xl" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-btn hover:text-white text-gray-900 rounded-full shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
                  aria-label="Next slide"
                >
                  <FaChevronRight className="text-xl" />
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-6">
                  {trafficPlanGallery.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentSlide === index
                          ? "bg-btn w-8"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
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
            className="absolute top-4 right-4 z-50 p-3 bg-white/10 hover:bg-btn text-white rounded-full transition-all duration-300 hover:scale-110 cursor-pointer"
            aria-label="Close lightbox"
          >
            <FaTimes className="text-2xl" />
          </button>

          {/* Download Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDownload();
            }}
            className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-50 flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-2xl cursor-pointer"
            aria-label="Download PDF"
          >
            <FaDownload className="text-lg" />
            Download PDF
          </button>

          <div
            className="relative w-full max-w-6xl h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt="Traffic Plan"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* TGS Features Section */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Our TGS <span className="text-btn">Services Include</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-element">
              {tgsFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-btn rounded-full flex items-center justify-center mb-6">
                    <FaFileAlt className="text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-anton uppercase">
                    {feature.title}
                  </h3>
                  <div className="w-12 h-px bg-btn mb-4"></div>
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
              src: "/sami/traffic-plan2.png",
              alt: "Professional Design",
              label: "DESIGN",
            },
            {
              src: "/DSC00949.JPG",
              alt: "Compliance",
              label: "COMPLIANCE",
            },
            {
              src: "/DSC02286.webp",
              alt: "Safety",
              label: "SAFETY",
            },
          ]}
        />
      </AnimatedSection>

      {/* What's Included Section */}
      <AnimatedSection direction="right">
        <section
          className="py-20 md:py-24 px-5 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#151623" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                What's Included In <span className="text-btn">Our Service</span>
              </h2>
              <p className="mt-6 text-lg max-w-3xl mx-auto leading-relaxed text-gray-400">
                Comprehensive TGS design services with full documentation and
                support
              </p>
            </div>

            <div className="max-w-4xl mx-auto animate-element">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceIncludes.map((item, index) => (
                  <div
                    key={index}
                    className="bg-transparent rounded-2xl p-6 border-2 border-dashed border-white/30 hover:border-btn transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <FaCheckCircle className="text-2xl text-btn" />
                      </div>
                      <p className="text-white text-base leading-relaxed pt-0.5">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
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
                    src="/DSC00862.JPG"
                    alt="Get Your TGS Today"
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
                    Need A TGS For <br />
                    <span className="text-btn">Your Project?</span>
                  </h2>
                </div>

                <div
                  className="space-y-6 text-lg leading-relaxed"
                  style={{ color: "#8E8E95" }}
                >
                  <p>
                    Whether you're planning roadworks, a construction project,
                    or a special event,{" "}
                    <strong className="text-gray-900">
                      T&S Traffic Control
                    </strong>{" "}
                    can design a compliant TGS tailored to your specific site
                    conditions.
                  </p>
                  <p>
                    Our experienced team delivers fast turnaround times without
                    compromising on quality or compliance. Contact us today to
                    discuss your TGS requirements and get your project moving.
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

      {/* FAQ Section */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Frequently Asked <span className="text-btn">Questions</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto animate-element">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg overflow-hidden"
                  >
                    <button
                      className="w-full flex justify-between items-center p-6 text-left text-gray-900 font-semibold text-lg hover:bg-gray-50 transition-colors cursor-pointer"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={openFaqIndex === index}
                      aria-controls={`faq-content-${index}`}
                    >
                      <span>{faq.question}</span>
                      <FaChevronDown
                        className={`text-btn flex-shrink-0 ml-4 transition-transform duration-300 ${
                          openFaqIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      id={`faq-content-${index}`}
                      className="grid transition-all duration-300 ease-in-out"
                      style={{
                        gridTemplateRows:
                          openFaqIndex === index ? "1fr" : "0fr",
                      }}
                    >
                      <div className="overflow-hidden">
                        <div
                          className="p-6 pt-0 leading-relaxed"
                          style={{ color: "#8E8E95" }}
                        >
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default TrafficPlansPage;
