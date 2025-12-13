"use client";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaTruck, FaCheckCircle } from "react-icons/fa";

const FleetEquipmentHire = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] w-full overflow-hidden flex items-center justify-center font-opensans">
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC00732.JPG"
            alt="Fleet and Equipment Hire"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-anton uppercase">
              FLEET & EQUIPMENT <span className="text-[#2B7FFF]">HIRE</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-opensans">
              Modern fleet equipped with the latest traffic management technology and safety equipment
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
              MODERN <span className="text-[#2B7FFF]">FLEET & EQUIPMENT</span>
            </h2>
            <div className="w-24 h-1 bg-[#2B7FFF] mx-auto"></div>
          </div>
          <div className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed space-y-6 font-opensans">
            <p>
              At <strong>T&S Traffic Control</strong>, we take pride in maintaining a modern fleet of vehicles equipped with the latest traffic management technology and safety equipment. Through ongoing reinvestment in new vehicles, regular servicing, and meticulous maintenance, we ensure our fleet remains reliable, efficient, and compliant with all industry standards.
            </p>
            <p>
              Our traffic control equipment is sourced exclusively from trusted local suppliers who meet stringent Australian standards and specifications. Each vehicle is fully equipped with high-quality signage and devices to accommodate a wide range of traffic control arrangements. We tailor our fleet and equipment to suit the specific needs of every client and project, ensuring all unique requirements are effectively met.
            </p>
            <p>
              We are committed to staying at the forefront of industry innovation, continually exploring new technologies and systems that enhance safety for both our employees and the public. By upholding these standards, <strong>T&S Traffic Control</strong> ensures our team and clients are always represented with the highest level of professionalism in the public environment.
            </p>
          </div>
        </div>
      </section>

      {/* Our Fleet Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              OUR FLEET <span className="text-[#2B7FFF]">INCLUDES</span>
            </h2>
            <div className="w-24 h-1 bg-[#2B7FFF] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Signage Vehicles",
              "VMS Board vehicles",
              "Drop Deck Vehicles/ Cone Truck",
              "TMA Trucks",
              "Portabooms",
              "Light towers",
              "Trailer Arrowboard"
            ].map((vehicle, index) => (
              <div key={index} className="flex items-center gap-4 p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group">
                <FaTruck className="text-[#2B7FFF] text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-white text-lg font-opensans font-semibold">{vehicle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              OUR <span className="text-[#2B7FFF]">FLEET & EQUIPMENT</span>
            </h2>
            <div className="w-24 h-1 bg-[#2B7FFF] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-[400px] border-4 border-[#2B7FFF] shadow-xl overflow-hidden group">
              <Image
                src="/DSC00721.JPG"
                alt="Traffic control vehicles"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#2B7FFF]/20 mix-blend-multiply"></div>
            </div>
            <div className="relative h-[400px] border-4 border-[#2B7FFF] shadow-xl overflow-hidden group">
              <Image
                src="/DSC00717.JPG"
                alt="Fleet equipment"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#2B7FFF]/20 mix-blend-multiply"></div>
            </div>
            <div className="relative h-[400px] border-4 border-[#2B7FFF] shadow-xl overflow-hidden group">
              <Image
                src="/DSC00723.JPG"
                alt="Modern traffic management fleet"
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
            NEED RELIABLE <span className="text-[#2B7FFF]">FLEET & EQUIPMENT?</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-10 font-opensans">
            Contact T&S Traffic Control today for modern, well-maintained fleet and equipment hire. Our professional team ensures all your traffic management needs are met with the highest standards.
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

export default FleetEquipmentHire;
