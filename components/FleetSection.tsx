"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const FleetSection = () => {
  return (
    <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div>
              <div className="w-16 h-1 bg-btn mb-6"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                An Array of Traffic Management{" "}
                <span className="text-btn">Equipment</span>
              </h2>
            </div>

            <p
              className="text-lg sm:text-xl leading-relaxed"
              style={{ color: "#8E8E95" }}
            >
              T&S enhances site and road safety with a fully equipped fleet of
              certified traffic control vehicles, signage, and equipment. Our
              tools are tailored to meet the unique demands of every project,
              from roadwork and civil construction to emergency events.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-600">
              Our fleet includes traffic control utes, message boards, lights,
              signage and more — all maintained to the highest industry
              standard. From setup to pack-down, T&S ensures your site runs
              safely, smoothly and on schedule.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-btn hover:bg-btn/90 text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:shadow-xl hover:gap-4 group"
            >
              Request a Quote
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Side Image with organic shape */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full aspect-square overflow-hidden shadow-2xl rounded-2xl">
              <Image
                src="/DSC00726.JPG"
                alt="T&S Traffic Control Equipment Fleet"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative blob */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-btn/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
