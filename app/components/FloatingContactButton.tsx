"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaComments,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTimes,
} from "react-icons/fa";

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 p-4 bg-btn hover:bg-btn/90 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group cursor-pointer"
        aria-label="Contact Us"
      >
        {isOpen ? (
          <FaTimes className="text-2xl" />
        ) : (
          <FaComments className="text-2xl animate-pulse" />
        )}
      </button>

      {/* Contact Details Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Contact Panel */}
          <div className="fixed bottom-20 right-4 md:bottom-24 md:right-6 z-50 w-[90vw] max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
            <div className="bg-btn p-6 text-white">
              <h3 className="text-2xl font-bold font-anton uppercase">
                Contact Us
              </h3>
              <p className="text-white/90 text-sm mt-2">
                Get in touch with T&S Traffic Control
              </p>
            </div>

            <div className="p-6 space-y-6">
              {/* Phone */}
              <a
                href="tel:+611300008782"
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <div className="flex-shrink-0 p-3 bg-btn/10 text-btn rounded-full group-hover:bg-btn group-hover:text-white transition-colors">
                  <FaPhoneAlt className="text-xl" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">
                    Call Us
                  </h4>
                  <p className="text-base font-semibold text-btn">
                    1300 008 782
                  </p>
                  <p className="text-xs text-gray-500 mt-1">24/7 Available</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:Operations@tstc.com.au"
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <div className="flex-shrink-0 p-3 bg-btn/10 text-btn rounded-full group-hover:bg-btn group-hover:text-white transition-colors">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">
                    Email Us
                  </h4>
                  <p className="text-sm text-btn break-all">
                    Operations@tstc.com.au
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
                <div className="flex-shrink-0 p-3 bg-btn text-white rounded-full">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">
                    Office Location
                  </h4>
                  <p className="text-sm" style={{ color: "#8E8E95" }}>
                    9 Epic PI,
                    <br />
                    Villawood NSW 2163
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="block w-full bg-btn hover:bg-btn/90 text-white text-center px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                Submit Request
              </Link>
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default FloatingContactButton;
