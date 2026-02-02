import Link from "next/link";
import { FaBriefcase } from "react-icons/fa";

export default function CareerCTA() {
  return (
    <section className="py-20 md:py-16 px-5 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Title */}
          <div className="space-y-6 animate-element">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight text-black">
              Looking for a role at <span className="text-btn">T&S?</span>
            </h2>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8 animate-element">
            <p className="text-lg sm:text-xl md:text-2xl text-black leading-relaxed">
              Join our team of dedicated traffic management professionals. We're
              always looking for skilled traffic controllers, team leaders, and
              support staff who are passionate about road safety.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-black leading-relaxed">
              Whether you're an experienced traffic controller or looking to
              start your career in traffic management, T&S offers competitive
              pay, flexible hours, and ongoing training opportunities.
            </p>
            <Link
              href="/career"
              className="inline-flex items-center justify-center bg-btn hover:bg-btn/90 text-white px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <FaBriefcase className="mr-3 text-xl" />
              View Career Opportunities
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
