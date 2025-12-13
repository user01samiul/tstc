"use client";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaClipboardCheck, FaShieldAlt } from "react-icons/fa";

const SiteRiskAssessments = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] w-full overflow-hidden flex items-center justify-center font-opensans">
        <div className="absolute inset-0 z-0">
          <Image
            src="/montage/3. Services We Offer/Site Risk Assesment/Team Photo.JPG"
            alt="Site Risk Assessments"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-anton uppercase">
              SITE RISK <span className="text-[#2B7FFF]">ASSESSMENTS</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-opensans">
              Comprehensive safety assessments for live road environments
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
              SAFETY COMPLIANCE AT THE <span className="text-[#2B7FFF]">CORE</span>
            </h2>
            <div className="w-24 h-1 bg-[#2B7FFF] mx-auto"></div>
          </div>
          <div className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed space-y-6 font-opensans">
            <p>
              At <strong>T&S Traffic Control</strong>, we recognise that live road environments present significant risks, which is why safety compliance is at the core of everything we do. Our <strong>auditors, safety managers, and traffic control coordinators</strong> conduct comprehensive <strong>site risk assessments</strong> and <strong>road safety audits</strong> to ensure all temporary traffic management arrangements are planned, designed, and implemented in accordance with a safe system of work.
            </p>
            <p>
              Before any project begins, a detailed <strong>site location risk assessment</strong> is undertaken to gather critical information and identify potential hazards. This data informs tailored safety methodologies designed to eliminate or control risks across all aspects of the project; physical, environmental, and human. All findings are documented within our safety management system to ensure full compliance with industry standards and legislative requirements.
            </p>
            <p>
              Through our rigorous auditing process and proactive safety culture, <strong>T&S Traffic Control</strong> consistently upholds the highest standards of safety, professionalism, and reliability on every site.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              OUR <span className="text-[#2B7FFF]">ASSESSMENT PROCESS</span>
            </h2>
            <div className="w-24 h-1 bg-[#2B7FFF] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center p-8 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
              <div className="p-6 bg-[#2B7FFF] rounded-full mb-6">
                <FaClipboardCheck className="text-white text-4xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-anton uppercase text-[#2B7FFF]">
                Pre-Project Assessment
              </h3>
              <p className="text-gray-300 text-lg font-opensans leading-relaxed">
                Detailed site location risk assessments gather critical information and identify potential hazards before any work begins.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
              <div className="p-6 bg-[#2B7FFF] rounded-full mb-6">
                <FaShieldAlt className="text-white text-4xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-anton uppercase text-[#2B7FFF]">
                Tailored Safety Methodologies
              </h3>
              <p className="text-gray-300 text-lg font-opensans leading-relaxed">
                Custom safety plans designed to eliminate or control risks across all physical, environmental, and human aspects of the project.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
              <div className="p-6 bg-[#2B7FFF] rounded-full mb-6">
                <FaClipboardCheck className="text-white text-4xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-anton uppercase text-[#2B7FFF]">
                Compliance Documentation
              </h3>
              <p className="text-gray-300 text-lg font-opensans leading-relaxed">
                All findings documented within our safety management system ensuring full compliance with industry standards and legislative requirements.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
              <div className="p-6 bg-[#2B7FFF] rounded-full mb-6">
                <FaShieldAlt className="text-white text-4xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-anton uppercase text-[#2B7FFF]">
                Ongoing Auditing
              </h3>
              <p className="text-gray-300 text-lg font-opensans leading-relaxed">
                Rigorous auditing process and proactive safety culture maintaining the highest standards of safety and professionalism on every site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
            ENSURE YOUR PROJECT'S <span className="text-[#2B7FFF]">SAFETY COMPLIANCE</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10 font-opensans">
            Contact T&S Traffic Control today for comprehensive site risk assessments. Our expert team ensures all safety requirements are met with thorough planning and documentation.
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-5 bg-[#2B7FFF] text-white font-bold text-lg hover:bg-[#2B7FFF]/90 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 font-opensans"
          >
            GET STARTED
          </Link>
        </div>
      </section>

      <ContactForm />
    </main>
  );
};

export default SiteRiskAssessments;
