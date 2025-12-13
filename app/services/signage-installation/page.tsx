"use client";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";
import { FaHardHat, FaPhoneAlt, FaRoad, FaTrafficLight } from "react-icons/fa";

const SignageInstallation = () => {
  return (
    <main>
      {/* Hero Section (Black Background) */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center font-opensans">
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC00723.webp"
            alt="Signage Installation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-anton">
              T&S <span className="text-btn">SIGNAGE</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-opensans">
              Professional signage installation ensuring safe and efficient traffic control systems
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 bg-btn hover:bg-btn/90 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 font-opensans"
              >
                <FaPhoneAlt className="text-xl" />
                Contact Us Today
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

      {/* Our Expertise Section (White Background) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton">
              TRAFFIC CONTROL{" "}
              <span className="text-btn">SIGNAGE INSTALLATION</span>
            </h2>
            <div className="w-24 h-1 bg-btn mx-auto"></div>
          </div>
          <div className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed space-y-6 font-opensans">
            <p>
              At T&S Traffic Control, we provide complete signage installation services that ensure traffic safety and compliance with regulations. From temporary construction sites to permanent installations, our signage guarantees clarity, durability, and proper visibility for all road users.
            </p>
            <p>
              Our certified professionals handle every aspect of signage installation — planning, placement, mounting, and compliance checks. We ensure each sign is strategically positioned to guide vehicles and pedestrians safely while minimizing disruptions.
            </p>
          </div>
        </div>
      </section>

      {/* Signage Planning Section (Black Background, Right Side Image) */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-btn"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                Signage Planning &{" "}
                <span className="text-btn">Placement</span>
              </h3>
              <div className="space-y-5 text-gray-300 mb-10 font-opensans">
                <p className="leading-relaxed">
                  Before installation, our team conducts a detailed assessment of the site to determine the most effective signage strategy. This includes the placement of speed limit signs, warning signs, directional boards, and barrier signage to ensure maximum visibility and safety.
                </p>
                <p className="leading-relaxed">
                  We comply with Australian Standards and TCAWS guidelines to guarantee every signage installation meets legal and safety requirements.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] border-4 border-btn shadow-xl">
              <Image
                src="/montage/1. Home Page/Services We offer/Signage Installation.png"
                alt="Signage Planning"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-btn/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Installation Section (White Background, Left Side Image) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] border-4 border-btn shadow-xl">
              <Image
                src="/DSC00726.JPG"
                alt="Signage Installation"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-btn/20 mix-blend-multiply"></div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-btn"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                Professional{" "}
                <span className="text-btn">Installation</span>
              </h3>
              <div className="space-y-5 text-gray-600 mb-10 font-opensans">
                <p className="leading-relaxed">
                  Our installation team uses state-of-the-art tools and equipment to mount traffic signs securely in any environment. We ensure that every installation is durable, weather-resistant, and aligned with road safety standards.
                </p>
                <p className="leading-relaxed">
                  From temporary worksites to permanent fixtures, we provide end-to-end signage solutions that guarantee smooth traffic flow and public safety.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-block px-10 py-4 bg-btn text-white font-bold hover:bg-white hover:text-btn transition-all duration-300 border border-btn group relative overflow-hidden font-opensans"
              >
                <span className="relative z-10">GET A QUOTE</span>
                <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section (Black Background, Right Side Image) */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-btn"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                Get in Touch for{" "}
                <span className="text-btn">Signage Solutions</span>
              </h3>
              <div className="space-y-5 text-gray-300 mb-10 font-opensans">
                <p className="leading-relaxed">
                  Need professional signage installation for your next project? Contact us today to ensure compliance, safety, and smooth traffic control.
                </p>
                <p className="leading-relaxed">
                  Our team is ready to provide tailored solutions for any size project — from construction zones to permanent installations.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-block px-10 py-4 bg-btn text-white font-bold hover:bg-white hover:text-btn transition-all duration-300 border border-btn group relative overflow-hidden font-opensans"
              >
                <span className="relative z-10">CONTACT US</span>
                <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
              </Link>
            </div>
            <div className="relative h-[500px] border-4 border-btn shadow-xl">
              <Image
                src="/DSC00850.JPG"
                alt="Signage Solutions Contact"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-btn/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Section (White Background) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              Signage Solutions
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton">
              TEMPORARY & PERMANENT{" "}
              <span className="text-btn">STREET SIGNAGE</span>
            </h2>
            <div className="w-24 h-1 bg-btn mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Temporary Signage",
                icon: <FaHardHat className="text-3xl" />,
                description:
                  "Complete temporary signage solutions for construction sites, roadworks, and events. Quick installation and removal with full compliance to safety standards.",
              },
              {
                name: "Permanent Signage",
                icon: <FaTrafficLight className="text-3xl" />,
                description:
                  "Durable permanent signage installations designed to withstand Australian weather conditions. Long-lasting materials and professional mounting for years of reliable service.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white p-8 text-center border-2 border-gray-200 hover:border-btn transition-all duration-500 hover:shadow-lg hover:shadow-btn/20 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-btn/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex justify-center mb-6 relative z-10">
                  <div className="p-5 bg-btn rounded-full group-hover:rotate-[15deg] transition-transform duration-500 text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold relative z-10 group-hover:text-btn transition-colors duration-300 mb-4 font-anton">
                  {service.name}
                </h3>
                <p className="text-gray-600 mt-4 relative z-10 font-opensans leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-white font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              Contact Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton">
              GET IN <span className="text-btn">TOUCH</span>
            </h2>
            <div className="w-24 h-1 bg-btn mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg font-opensans">
              Got any questions or comments? Don't hesitate to call us at +61 1300 008 782 or fill out the form below, and we'll get back to you promptly.
            </p>
          </div>
        </div>
      </section>
      <ContactForm />
    </main>
  );
};

export default SignageInstallation;
