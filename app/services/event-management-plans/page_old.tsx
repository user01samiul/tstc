"use client";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

const EventManagementPlansPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center font-opensans">
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC00862.JPG"
            alt="Event Management Plans"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        </div>
        <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-anton uppercase">
              EVENT <span className="text-[#2B7FFF]">MANAGEMENT</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-opensans">
              Comprehensive traffic management solutions for major events across NSW
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

      {/* Main Content */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              COMPREHENSIVE EVENT <span className="text-[#2B7FFF]">TRAFFIC MANAGEMENT</span>
            </h2>
            <div className="w-24 h-1 bg-[#2B7FFF] mx-auto"></div>
          </div>
          <div className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed space-y-6 font-opensans">
            <p>
              <strong>T&S Traffic Control</strong> provides comprehensive traffic management solutions for major events across NSW, including community, charity, film, sporting, and large-scale public gatherings. Our experienced team works closely with stakeholders throughout the planning and execution phases, often staffing operations centres to support tactical changes and ensure events run smoothly.
            </p>
            <p>
              We are trusted to manage precinct and route-based events on a mission-critical basis, prioritising the safety of participants, the community, and the general public. Our teams maintain the highest standards of professionalism and courtesy when interfacing with the public, mindful of each event's profile.
            </p>
            <p>
              Leveraging skilled personnel, advanced equipment, and well-established supply chains — including security, hostile vehicle mitigation, and event branding — we deliver turnkey traffic management solutions tailored to every event.
            </p>
            <p className="font-semibold text-black">
              For a reliable partner who ensures your next event is a safe and outstanding success, contact <strong>T&S Traffic Control</strong> today.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              OUR EVENT <span className="text-[#2B7FFF]">MANAGEMENT WORK</span>
            </h2>
            <div className="w-24 h-1 bg-[#2B7FFF] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-[400px] border-4 border-[#2B7FFF] shadow-xl overflow-hidden group">
              <Image
                src="/DSC00844.JPG"
                alt="Event management in action"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#2B7FFF]/20 mix-blend-multiply"></div>
            </div>
            <div className="relative h-[400px] border-4 border-[#2B7FFF] shadow-xl overflow-hidden group">
              <Image
                src="/DSC00847.JPG"
                alt="Event traffic control"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#2B7FFF]/20 mix-blend-multiply"></div>
            </div>
            <div className="relative h-[400px] border-4 border-[#2B7FFF] shadow-xl overflow-hidden group">
              <Image
                src="/DSC00811.JPG"
                alt="Event safety management"
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
            READY TO PLAN YOUR <span className="text-[#2B7FFF]">SUCCESSFUL EVENT?</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10 font-opensans">
            Contact T&S Traffic Control today to discuss your event traffic management needs. Our professional team is ready to deliver safe, reliable, and compliant service for your event.
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

export default EventManagementPlansPage;
