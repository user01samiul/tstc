"use client";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaCheckCircle } from "react-icons/fa";

const SignageInstallation = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] w-full overflow-hidden flex items-center justify-center font-opensans">
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC00723.JPG"
            alt="Street Signage Installation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-anton uppercase">
              STREET SIGNAGE <span className="text-[#2B7FFF]">INSTALLATION</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-opensans">
              Complete street signage installation services for temporary and permanent applications
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 bg-[#2B7FFF] hover:bg-[#2B7FFF]/90 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 font-opensans"
              >
                <FaPhoneAlt className="text-xl" />
                Get a Quote
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              PROFESSIONAL <span className="text-[#2B7FFF]">SIGNAGE SERVICES</span>
            </h2>
            <div className="w-24 h-1 bg-[#2B7FFF] mx-auto"></div>
          </div>
          <div className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed space-y-6 font-opensans">
            <p>
              <strong>T&S Traffic Control</strong> provides complete street signage installation services for both temporary and permanent applications. Our experienced team handles everything from council-approved signage projects to construction-related and regulatory signage installations.
            </p>
            <p>
              We ensure every sign is supplied, installed, and maintained to meet <strong>TfNSW and AS1742 standards</strong>, guaranteeing compliance and clarity for road users.
            </p>
          </div>
        </div>
      </section>

      {/* Our Capabilities Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              OUR <span className="text-[#2B7FFF]">CAPABILITIES</span>
            </h2>
            <div className="w-24 h-1 bg-[#2B7FFF] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              "Supply and installation of regulatory and advisory signs (e.g., No Stopping, Bus Zone, Work Zone, Parking Restrictions)",
              "Installation of custom project or site-specific signage",
              "Temporary signage for construction, events, and road closures",
              "Permanent street sign installation for councils and developers",
              "Site assessments, post installation, and reinstatement works",
              "Maintenance, replacement, and removal of outdated or damaged signs"
            ].map((capability, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                <FaCheckCircle className="text-[#2B7FFF] text-2xl flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-lg font-opensans leading-relaxed">{capability}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-300 text-lg max-w-4xl mx-auto font-opensans leading-relaxed">
              All installations are completed by trained personnel using approved materials and mounting methods to ensure durability, visibility, and compliance with Australian Standards.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              OUR <span className="text-[#2B7FFF]">SIGNAGE WORK</span>
            </h2>
            <div className="w-24 h-1 bg-[#2B7FFF] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-[400px] border-4 border-[#2B7FFF] shadow-xl overflow-hidden group">
              <Image
                src="/DSC00726.JPG"
                alt="Signage installation in progress"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#2B7FFF]/20 mix-blend-multiply"></div>
            </div>
            <div className="relative h-[400px] border-4 border-[#2B7FFF] shadow-xl overflow-hidden group">
              <Image
                src="/DSC00850.JPG"
                alt="Professional signage installation"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#2B7FFF]/20 mix-blend-multiply"></div>
            </div>
            <div className="relative h-[400px] border-4 border-[#2B7FFF] shadow-xl overflow-hidden group">
              <Image
                src="/montage/1. Home Page/Services We offer/Signage Installation.png"
                alt="Street signage installation"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#2B7FFF]/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
            NEED PROFESSIONAL <span className="text-[#2B7FFF]">SIGNAGE INSTALLATION?</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-10 font-opensans">
            Contact T&S Traffic Control today for compliant, durable, and professional signage solutions. Our team is ready to handle all your temporary and permanent signage needs.
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-5 bg-[#2B7FFF] text-white font-bold text-lg hover:bg-[#2B7FFF]/90 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 font-opensans"
          >
            GET A QUOTE
          </Link>
        </div>
      </section>

      <ContactForm />
    </main>
  );
};

export default SignageInstallation;
