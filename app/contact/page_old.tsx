"use client";

import ContactForm2 from "@/components/ContactForm2";
import Image from "next/image";
import Link from "next/link";
import { FaHardHat, FaPhoneAlt, FaRoad, FaTrafficLight } from "react-icons/fa";
 
const ContactUs = () => {
  return (
    <main>
      {/* Hero Section (Black Background) */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center font-opensans">
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC00810.JPG"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        </div>
        <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-anton uppercase">
              T&S <span className="text-btn">SERVICES</span> <br />
              <span className="text-btn">GET IN TOUCH</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-opensans">
              Have questions or need assistance? Reach out to us today!
            </p>
            <div className="flex justify-center">
              <Link
                href="tel:+611300008782"
                className="flex items-center justify-center gap-3 bg-btn hover:bg-btn/90 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 font-opensans"
              >
                <FaPhoneAlt className="text-xl" />
                Call Us Now
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce flex flex-col items-center">
            <div className="w-8 h-12 border-2 border-btn rounded-full flex justify-center">
              <div className="w-1 h-3 bg-btn rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm2 />

      {/* Contact Information Section (Black Background) */}
      <section id="contact-info" className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-white font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              Reach Out
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              OUR <span className="text-btn">CONTACT DETAILS</span>
            </h2>
            <div className="w-24 h-1 bg-btn mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="p-5 bg-btn rounded-full">
                  <FaPhoneAlt className="text-3xl" />
                </div>
              </div>
              <h3 className="text-xl font-semibold font-opensans">Call Us</h3>
              <p className="text-gray-300 font-opensans">
                <Link
                  href="tel:+611300008782"
                  className="hover:text-btn transition-colors"
                >
                  +61 1300 008 782
                </Link>
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="p-5 bg-btn rounded-full">
                  <FaRoad className="text-3xl" />
                </div>
              </div>
              <h3 className="text-xl font-semibold font-opensans">Email Us</h3>
              <p className="text-gray-300 font-opensans">
                <Link
                  href="mailto:Operations@tstc.com.au"
                  className="hover:text-btn transition-colors"
                >
                  Operations@tstc.com.au
                </Link>
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="p-5 bg-btn rounded-full">
                  <FaHardHat className="text-3xl" />
                </div>
              </div>
              <h3 className="text-xl font-semibold font-opensans">
                Office Location
              </h3>
              <p className="text-gray-300 font-opensans">
                9 Epic PI, <br />
                Villawood NSW 2163
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Section (Black Background) */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-white font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              EXPLORE OUR <span className="text-btn">OTHER SERVICES</span>
            </h2>
            <div className="w-24 h-1 bg-btn mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Traffic Management Plans",
                icon: <FaHardHat className="text-3xl" />,
                description:
                  "Customized plans designed to ensure safety and efficiency, tailored to your project’s unique requirements.",
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
                className="group bg-black p-8 text-center border border-gray-800 hover:border-btn transition-all duration-500 hover:shadow-lg hover:shadow-btn/20 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-btn/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex justify-center mb-6 relative z-10">
                  <div className="p-5 bg-btn rounded-full group-hover:rotate-[15deg] transition-transform duration-500">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold relative z-10 group-hover:text-btn transition-colors duration-300 font-opensans">
                  {service.name}
                </h3>
                <p className="text-gray-300 mt-4 relative z-10 font-opensans">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
