"use client";

import ContactForm from '@/components/ContactForm';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhoneAlt, FaClock, FaHeadset } from 'react-icons/fa';

const TrafficControlPersonnel = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] w-full overflow-hidden flex items-center justify-center font-opensans">
        <div className="absolute inset-0 z-0">
          <Image
            src="/montage/3. Services We Offer/Acreditted TC/Standard TC.JPG"
            alt="Traffic Control Personnel"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        </div>
        <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-anton uppercase">
              TRAFFIC CONTROL <span className="text-[#2B7FFF]">PERSONNEL</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-opensans">
              Our people are the backbone of our operation
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 bg-[#2B7FFF] hover:bg-[#2B7FFF]/90 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 font-opensans"
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

      {/* Main Content Section */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              HIGHLY TRAINED & <span className="text-[#2B7FFF]">ACCREDITED PERSONNEL</span>
            </h2>
            <div className="w-24 h-1 bg-[#2B7FFF] mx-auto"></div>
          </div>
          <div className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed space-y-6 font-opensans">
            <p>
              Our people are the backbone of our operation. We supply highly trained and accredited traffic management personnel to suit any scale of work.
            </p>
            <p>
              Each team member is equipped, uniformed, and committed to upholding the highest standards of safety and professionalism. With a strong focus on reliability, communication, and site awareness, our crews represent T&S with pride on every project.
            </p>
          </div>
        </div>
      </section>

      {/* Available Roles Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              AVAILABLE ROLES & <span className="text-[#2B7FFF]">SERVICES</span>
            </h2>
            <div className="w-24 h-1 bg-[#2B7FFF] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-[#2B7FFF] font-anton uppercase">
                Traffic Controllers (TCs)
              </h3>
              <p className="text-gray-300 text-lg font-opensans leading-relaxed">
                Highly trained professionals ensuring safe and efficient traffic management for all project scales.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-[#2B7FFF] font-anton uppercase">
                Team Leaders & Project Supervisors
              </h3>
              <p className="text-gray-300 text-lg font-opensans leading-relaxed">
                Experienced leaders coordinating operations and ensuring compliance with industry standards.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-[#2B7FFF] font-anton uppercase">
                Truck-Mounted Attenuator (TMA) Operators
              </h3>
              <p className="text-gray-300 text-lg font-opensans leading-relaxed">
                Skilled operators with Heavy Rigid licenses and TfNSW accreditation for complex traffic scenarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 24 Hour Response Section */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              24 HOUR <span className="text-[#2B7FFF]">RESPONSE</span>
            </h2>
            <div className="w-24 h-1 bg-[#2B7FFF] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-[#2B7FFF] rounded-full">
                  <FaClock className="text-white text-4xl" />
                </div>
                <div className="p-4 bg-[#2B7FFF] rounded-full">
                  <FaHeadset className="text-white text-4xl" />
                </div>
              </div>
              <div className="text-gray-600 text-lg leading-relaxed space-y-4 font-opensans">
                <p>
                  <strong>T&S Traffic Control</strong> operates around the clock to ensure continuous support for our clients and the community. Our dedicated <strong>24-hour response team</strong> and central <strong>Control Centre</strong> manage all day and night shift operations with precision and efficiency.
                </p>
                <p>
                  Through our well-maintained communication systems and coordinated response procedures, we're able to deploy resources rapidly and effectively, ensuring your traffic management needs are met any time, day or night.
                </p>
              </div>
              <div className="pt-6">
                <a
                  href="tel:+611300008782"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-[#2B7FFF] text-white font-bold text-lg hover:bg-[#2B7FFF]/90 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 font-opensans"
                >
                  <FaPhoneAlt />
                  Call 24/7: 1300 008 782
                </a>
              </div>
            </div>

            <div className="relative h-[500px] border-4 border-[#2B7FFF] shadow-xl">
              <Image
                src="/montage/2. About Us/Our Values/Taj Safety Check.JPG"
                alt="24 Hour Response Team"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#2B7FFF]/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              OUR TEAM IN <span className="text-[#2B7FFF]">ACTION</span>
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

      {/* CTA Section */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
            READY TO WORK WITH <span className="text-[#2B7FFF]">PROFESSIONAL TRAFFIC CONTROL PERSONNEL?</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10 font-opensans">
            Contact T&S Traffic Solutions today to discuss your traffic management needs. Our accredited team is ready to deliver safe, reliable, and professional service for your project.
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

export default TrafficControlPersonnel;
