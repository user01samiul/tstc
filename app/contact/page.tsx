"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaHardHat, FaMapMarkerAlt, FaPhoneAlt, FaRoad, FaTrafficLight } from "react-icons/fa";
import AnimatedSection from "../components/AnimatedSection";

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const ContactUs = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC02286.webp"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 w-full max-w-7xl px-5 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center text-white space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-anton uppercase">
              T&S <span className="text-btn">SERVICES</span> <br />
              <span className="text-btn">GET IN TOUCH</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Have questions or need assistance? Reach out to us today!
            </p>
            <div className="pt-6">
              <Link
                href="tel:+611300008782"
                className="inline-flex items-center justify-center gap-3 bg-btn hover:bg-btn/90 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                <FaPhoneAlt className="text-xl" />
                Call Us Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <AnimatedSection direction="left">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              {/* Left: Image */}
              <div className="relative animate-element order-2 lg:order-1">
                <div
                  className="relative w-full aspect-[4/5] overflow-hidden"
                  style={{
                    borderRadius: "40% 60% 60% 40% / 60% 40% 60% 40%",
                  }}
                >
                  <Image
                    src="/DSC00844.JPG"
                    alt="Contact Us"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Right: Form */}
              <div className="space-y-8 animate-element order-1 lg:order-2">
                <div>
                  <div className="w-16 h-1 bg-btn mb-6"></div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    Contact <span className="text-btn">Us</span>
                  </h2>
                  <p className="text-lg leading-relaxed" style={{ color: "#8E8E95" }}>
                    Got any questions or comments? Don't hesitate to call us at{" "}
                    <a href="tel:+611300008782" className="text-btn font-semibold hover:underline">
                      +61 1300 008 782
                    </a>{" "}
                    or fill out the form below, and we'll get back to you promptly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-btn focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-btn focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-btn focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-900 mb-2">
                      Select Service *
                    </label>
                    <select
                      name="service"
                      id="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-btn focus:border-transparent"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Traffic Management Plans">Traffic Management Plans</option>
                      <option value="Permit Applications">Permit Applications</option>
                      <option value="Equipment Hire">Equipment Hire</option>
                      <option value="Emergency Response">Emergency Response</option>
                      <option value="Traffic Controllers">Traffic Controllers</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-btn focus:border-transparent"
                      rows={5}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full bg-btn hover:bg-btn/90 text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 ${
                      isLoading ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
                    }`}
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </button>

                  {submitStatus === "success" && (
                    <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 text-center">
                      Message sent successfully! We'll get back to you soon.
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 text-center">
                      Error sending message. Please try again.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Information Section */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Our <span className="text-btn">Contact Details</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center space-y-6 animate-element">
                <div className="flex justify-center">
                  <div className="p-6 bg-btn text-white rounded-full">
                    <FaPhoneAlt className="text-3xl" />
                  </div>
                </div>
                <div>
                  <div className="w-12 h-px bg-btn mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Call Us
                  </h3>
                  <p className="text-base" style={{ color: "#8E8E95" }}>
                    <a
                      href="tel:+611300008782"
                      className="hover:text-btn transition-colors"
                    >
                      +61 1300 008 782
                    </a>
                  </p>
                </div>
              </div>

              <div className="text-center space-y-6 animate-element">
                <div className="flex justify-center">
                  <div className="p-6 bg-btn text-white rounded-full">
                    <FaEnvelope className="text-3xl" />
                  </div>
                </div>
                <div>
                  <div className="w-12 h-px bg-btn mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Email Us
                  </h3>
                  <p className="text-base" style={{ color: "#8E8E95" }}>
                    <a
                      href="mailto:Operations@tstc.com.au"
                      className="hover:text-btn transition-colors"
                    >
                      Operations@tstc.com.au
                    </a>
                  </p>
                </div>
              </div>

              <div className="text-center space-y-6 animate-element">
                <div className="flex justify-center">
                  <div className="p-6 bg-btn text-white rounded-full">
                    <FaMapMarkerAlt className="text-3xl" />
                  </div>
                </div>
                <div>
                  <div className="w-12 h-px bg-btn mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Office Location
                  </h3>
                  <p className="text-base" style={{ color: "#8E8E95" }}>
                    9 Epic PI, <br />
                    Villawood NSW 2163
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection direction="left">
        <section
          className="py-20 md:py-32 px-5 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#151623" }}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight text-white mb-8 md:mb-12 animate-element">
              Explore Our
              <br />
              <span className="text-btn">Other Services</span>
            </h2>

            <div className="mb-16 md:mb-20 max-w-4xl">
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed animate-element">
                From traffic management plans to emergency response, we provide
                comprehensive solutions to keep your projects safe and compliant.
                Discover how we can help you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Traffic Management Plans",
                  icon: <FaHardHat className="text-3xl" />,
                  description:
                    "Customized plans designed to ensure safety and efficiency, tailored to your project's unique requirements.",
                },
                {
                  name: "Permit Applications",
                  icon: <FaTrafficLight className="text-3xl" />,
                  description:
                    "Streamlined permit application services for hassle-free project compliance with councils and authorities.",
                },
                {
                  name: "Equipment Hire",
                  icon: <FaRoad className="text-3xl" />,
                  description:
                    "Access a wide range of high-quality traffic management equipment, including signs, barriers, and more.",
                },
                {
                  name: "Emergency Response",
                  icon: <FaPhoneAlt className="text-3xl" />,
                  description:
                    "Our 24/7 emergency response service addresses unexpected traffic issues with rapid deployment and expertise.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="space-y-6 animate-element p-8 rounded-2xl border-2 border-dashed border-white/30 hover:border-white/50 transition-all duration-300 text-center"
                >
                  <div className="flex justify-center">
                    <div className="p-5 bg-btn text-white rounded-full">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {service.name}
                  </h3>

                  <p className="text-base leading-relaxed text-white/90">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default ContactUs;
