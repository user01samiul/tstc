"use client";
import Image from 'next/image';
import Link from 'next/link';
import { FaHardHat, FaTrafficLight, FaRoad, FaPhoneAlt } from 'react-icons/fa';

const TfNSWAccreditedStaff = () => {
  return (
    <main>
      {/* Hero Section (Black Background) */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/montage/3. Services We Offer/Acreditted TC/Standard TC.JPG"
            alt="TfNSW Accredited Staff"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Traffic Control <span className="text-[#2B7FFF]">Personnel</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
              Our people are the backbone of our operation. We supply highly trained and accredited traffic management personnel to suit any scale of work.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 bg-[#2B7FFF] hover:bg-[#2B7FFF]/90 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <FaPhoneAlt className="text-xl" />
                Contact Us Today
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

      {/* Available Roles and Services (White Background) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Available Roles and <span className="text-[#2B7FFF]">Services</span>
            </h2>
            <div className="w-24 h-1 bg-[#2B7FFF] mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            <ul className="space-y-6 text-lg">
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-3 h-3 bg-[#2B7FFF] rounded-full mt-2"></div>
                <div>
                  <h3 className="font-bold text-xl text-black mb-2">Traffic Controllers (TCs)</h3>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-3 h-3 bg-[#2B7FFF] rounded-full mt-2"></div>
                <div>
                  <h3 className="font-bold text-xl text-black mb-2">Team Leaders and Project Supervisors</h3>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-3 h-3 bg-[#2B7FFF] rounded-full mt-2"></div>
                <div>
                  <h3 className="font-bold text-xl text-black mb-2">Truck-Mounted Attenuator (TMA) Operators</h3>
                </div>
              </li>
            </ul>
            <p className="text-gray-600 text-lg leading-relaxed mt-12">
              Each team member is equipped, uniformed, and committed to upholding the highest standards of safety and professionalism. With a strong focus on reliability, communication, and site awareness, our crews represent T&S with pride on every project.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section (Black Background) */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Our Team in <span className="text-[#2B7FFF]">Action</span>
            </h2>
            <div className="w-24 h-1 bg-[#2B7FFF] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-[400px] border-4 border-[#2B7FFF] shadow-xl overflow-hidden group">
              <Image
                src="/montage/1. Home Page/Services We offer/Accredited TC.JPG"
                alt="Traffic Controllers in action"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#2B7FFF]/20 mix-blend-multiply"></div>
            </div>
            <div className="relative h-[400px] border-4 border-[#2B7FFF] shadow-xl overflow-hidden group">
              <Image
                src="/montage/2. About Us/Our Values/Taj Safety Check.JPG"
                alt="Team Leaders managing projects"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#2B7FFF]/20 mix-blend-multiply"></div>
            </div>
            <div className="relative h-[400px] border-4 border-[#2B7FFF] shadow-xl overflow-hidden group">
              <Image
                src="/montage/3. Services We Offer/Site Risk Assesment/Team Photo.JPG"
                alt="Professional traffic control team"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#2B7FFF]/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section (White Background) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Work with <span className="text-[#2B7FFF]">Professional Traffic Control Personnel?</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Contact T&S Traffic Solutions today to discuss your traffic management needs. Our accredited team is ready to deliver safe, reliable, and professional service for your project.
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-5 bg-[#2B7FFF] text-white font-bold text-lg hover:bg-[#2B7FFF]/90 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl hover:scale-105"
          >
            GET A QUOTE
          </Link>
        </div>
      </section>
    </main>
  );
};

export default TfNSWAccreditedStaff;