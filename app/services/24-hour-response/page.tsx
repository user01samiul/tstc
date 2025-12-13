"use client";

import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaClock, FaHeadset, FaShieldAlt } from "react-icons/fa";

const TwentyFourHourResponse = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center font-opensans">
        <div className="absolute inset-0 z-0">
          <Image
            src="/montage/2. About Us/Our Values/Taj Safety Check.JPG"
            alt="24 Hour Response"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-anton uppercase">
              24 HOUR <span className="text-[#2B7FFF]">RESPONSE</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-opensans">
              Around the clock support for your traffic management needs
            </p>
            <div className="flex justify-center">
              <a
                href="tel:+611300008782"
                className="flex items-center justify-center gap-3 bg-[#2B7FFF] hover:bg-[#2B7FFF]/90 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 font-opensans"
              >
                <FaPhoneAlt className="text-xl" />
                Call 24/7: 1300 008 782
              </a>
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
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              Always Available
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              CONTINUOUS SUPPORT <span className="text-[#2B7FFF]">DAY & NIGHT</span>
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
            </div>

            <div className="relative h-[500px] border-4 border-[#2B7FFF] shadow-xl">
              <Image
                src="/montage/3. Services We Offer/Acreditted TC/Standard TC.JPG"
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

      {/* Our Capabilities Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-white font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              What We Provide
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              EMERGENCY RESPONSE <span className="text-[#2B7FFF]">CAPABILITIES</span>
            </h2>
            <div className="w-24 h-1 bg-[#2B7FFF] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group bg-black p-8 text-center border border-gray-800 hover:border-[#2B7FFF] transition-all duration-500 hover:shadow-lg hover:shadow-[#2B7FFF]/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#2B7FFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex justify-center mb-6 relative z-10">
                <div className="p-5 bg-[#2B7FFF] rounded-full group-hover:rotate-[15deg] transition-transform duration-500">
                  <FaClock className="text-3xl text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 relative z-10 group-hover:text-[#2B7FFF] transition-colors duration-300 font-anton uppercase">
                Rapid Deployment
              </h3>
              <p className="text-gray-300 font-opensans leading-relaxed relative z-10">
                Quick response teams ready to deploy to any location across NSW at a moment's notice.
              </p>
            </div>

            <div className="group bg-black p-8 text-center border border-gray-800 hover:border-[#2B7FFF] transition-all duration-500 hover:shadow-lg hover:shadow-[#2B7FFF]/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#2B7FFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex justify-center mb-6 relative z-10">
                <div className="p-5 bg-[#2B7FFF] rounded-full group-hover:rotate-[15deg] transition-transform duration-500">
                  <FaHeadset className="text-3xl text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 relative z-10 group-hover:text-[#2B7FFF] transition-colors duration-300 font-anton uppercase">
                Central Control Centre
              </h3>
              <p className="text-gray-300 font-opensans leading-relaxed relative z-10">
                Dedicated operations centre coordinating all emergency and scheduled works efficiently.
              </p>
            </div>

            <div className="group bg-black p-8 text-center border border-gray-800 hover:border-[#2B7FFF] transition-all duration-500 hover:shadow-lg hover:shadow-[#2B7FFF]/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#2B7FFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex justify-center mb-6 relative z-10">
                <div className="p-5 bg-[#2B7FFF] rounded-full group-hover:rotate-[15deg] transition-transform duration-500">
                  <FaShieldAlt className="text-3xl text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 relative z-10 group-hover:text-[#2B7FFF] transition-colors duration-300 font-anton uppercase">
                Emergency Works
              </h3>
              <p className="text-gray-300 font-opensans leading-relaxed relative z-10">
                Immediate traffic management for urgent road repairs, incidents, and emergency situations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              Our Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              RESPONSE TEAM IN <span className="text-[#2B7FFF]">ACTION</span>
            </h2>
            <div className="w-24 h-1 bg-[#2B7FFF] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-[400px] border-4 border-[#2B7FFF] shadow-xl overflow-hidden group">
              <Image
                src="/montage/1. Home Page/Services We offer/Accredited TC.JPG"
                alt="24 hour response team"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#2B7FFF]/20 mix-blend-multiply"></div>
            </div>
            <div className="relative h-[400px] border-4 border-[#2B7FFF] shadow-xl overflow-hidden group">
              <Image
                src="/montage/2. About Us/Our Values/Taj Safety Check.JPG"
                alt="Emergency response operations"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#2B7FFF]/20 mix-blend-multiply"></div>
            </div>
            <div className="relative h-[400px] border-4 border-[#2B7FFF] shadow-xl overflow-hidden group">
              <Image
                src="/montage/3. Services We Offer/Site Risk Assesment/Team Photo.JPG"
                alt="Control centre operations"
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] border-4 border-[#2B7FFF] shadow-xl">
              <Image
                src="/montage/3. Services We Offer/Acreditted TC/Standard TC.JPG"
                alt="Contact 24/7"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#2B7FFF]/20 mix-blend-multiply"></div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#2B7FFF]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                NEED EMERGENCY <span className="text-[#2B7FFF]">TRAFFIC MANAGEMENT?</span>
              </h3>
              <div className="space-y-5 text-gray-300 mb-10 font-opensans">
                <p className="leading-relaxed">
                  Our 24-hour response team is standing by to assist with your emergency traffic management needs. Whether it's urgent road repairs, incident management, or after-hours works, we're here to help.
                </p>
                <p className="leading-relaxed">
                  Call us now to speak with our Control Centre and discuss your immediate requirements. We'll have a team on-site fast.
                </p>
              </div>
              <a
                href="tel:+611300008782"
                className="inline-block px-10 py-4 bg-[#2B7FFF] text-white font-bold hover:bg-white hover:text-[#2B7FFF] transition-all duration-300 border border-[#2B7FFF] group relative overflow-hidden font-opensans"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <FaPhoneAlt />
                  CALL 1300 008 782
                </span>
                <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  );
};

export default TwentyFourHourResponse;
