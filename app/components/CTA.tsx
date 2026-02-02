import Image from "next/image";
import Link from "next/link";
import { FaFileDownload, FaPhoneAlt } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="relative py-20 md:py-32 px-5 sm:px-6 lg:px-8">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/DSC00810.JPG"
          alt="Traffic control background"
          fill
          className="object-cover opacity-50"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Card: Connect With Us Today */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-10 text-white flex flex-col justify-between h-full animate-element hover:bg-white/15 transition-all duration-300">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Connect With Us Today
              </h2>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8">
                Get in touch to discuss your traffic control needs with our
                experienced team. We're ready to help you find fast, compliant,
                and cost-effective solutions to keep your site safe and your
                project running on time.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-3 bg-btn hover:bg-btn/90 text-white px-8 py-4 rounded-full font-semibold text-base uppercase tracking-wide transition-all duration-300 hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-btn/30"
            >
              <FaPhoneAlt className="text-lg" />
              Request a Call Back
            </Link>
          </div>

          {/* Right Card: Let T&S Manage Your Next Project */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-10 text-white flex flex-col justify-between h-full animate-element hover:bg-white/15 transition-all duration-300">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Let T&S Manage Your Next Project
              </h2>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8">
                Need reliable traffic management for your next project? T&S
                offers end-to-end traffic control services. Our experienced team
                handles custom Traffic Control Plans, council permits, and
                certified on-site controllers. Download our capability statement
                to learn more about how we can manage your project.
              </p>
            </div>
            <Link
              href="/T&S Capability Statement  2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-base uppercase tracking-wide transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300"
            >
              <FaFileDownload className="text-lg" />
              See the Attached Capability Statement
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
