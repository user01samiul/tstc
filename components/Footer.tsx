"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-800 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Acknowledgment */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <Image
                src="/logo.JPG"
                alt="T&S Traffic Control Logo"
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              We acknowledge Aboriginal Traditional Owners of Country throughout
              the Darug of the Eora Nation. We honour and respect all Elders
              past, present, and emerging and respectfully acknowledge all
              Aboriginal and Torres Strait Islander people. We are committed to
              safe and inclusive workplaces, policies, and services for people
              of all communities and their families.
            </p>
            <div className="flex gap-4 mt-4">
              <img
                src="/footer1.png"
                alt="Footer 1"
                className="max-w-[150px] w-full h-auto"
              />
              <img
                src="/footer2.png"
                alt="Footer 2"
                className="max-w-[150px] w-full h-auto"
              />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-btn mb-4 uppercase tracking-wide">
              Services
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <h4 className="text-xs font-semibold text-btn uppercase tracking-wider mb-2">
                Traffic Engineering - Planning & Design
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services/traffic-plans"
                    className="hover:text-btn transition-colors duration-300"
                  >
                    Traffic Plans
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/traffic-management-plans"
                    className="hover:text-btn transition-colors duration-300"
                  >
                    Traffic Management Plans (TMP) (CTMP)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/swept-path"
                    className="hover:text-btn transition-colors duration-300"
                  >
                    Swept Path Analysis (SPA)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/event-management-plans"
                    className="hover:text-btn transition-colors duration-300"
                  >
                    Event Management Plans
                  </Link>
                </li>
              </ul>
              <h4 className="text-xs font-semibold text-btn uppercase tracking-wider mt-4 mb-2">
                Permit Application
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services/permit-application#tf-nsw"
                    className="hover:text-btn transition-colors duration-300"
                  >
                    TfNSW TMC ROL Approval
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/permit-application#council-permits"
                    className="hover:text-btn transition-colors duration-300"
                  >
                    Council Permits
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/permit-application#sta-bus"
                    className="hover:text-btn transition-colors duration-300"
                  >
                    STA Bus Approvals
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/permit-application#emergency-approvals"
                    className="hover:text-btn transition-colors duration-300"
                  >
                    Emergency Approvals
                  </Link>
                </li>
              </ul>
              <h4 className="text-xs font-semibold text-btn uppercase tracking-wider mt-4 mb-2">
                Traffic Controllers
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services/team-leaders"
                    className="hover:text-btn transition-colors duration-300"
                  >
                    Team Leaders
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/tma-operators"
                    className="hover:text-btn transition-colors duration-300"
                  >
                    TMA Operators
                  </Link>
                </li>
              </ul>
              <h4 className="text-xs font-semibold text-btn uppercase tracking-wider mt-4 mb-2">
                Gallery
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/gallery"
                    className="hover:text-btn transition-colors duration-300"
                  >
                    Photos
                  </Link>
                </li>
              </ul>
              <h4 className="text-xs font-semibold text-btn uppercase tracking-wider mt-4 mb-2">
                Signage Installation
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services/signage-installation"
                    className="hover:text-btn transition-colors duration-300"
                  >
                    Temporary & Permanent Street Signage
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-btn mb-4 uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link
                  href="/"
                  className="hover:text-btn transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about#our-story"
                  className="hover:text-btn transition-colors duration-300"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/about#our-team"
                  className="hover:text-btn transition-colors duration-300"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/about#our-fleet"
                  className="hover:text-btn transition-colors duration-300"
                >
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link
                  href="/about#accreditations"
                  className="hover:text-btn transition-colors duration-300"
                >
                  Accreditations
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="hover:text-btn transition-colors duration-300"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className="hover:text-btn transition-colors duration-300"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-btn transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/terms"
                  className="hover:text-blue-700 transition-colors duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-blue-700 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li> */} 
            </ul>
          </div>
        </div>

        {/* ISO Certification */}
        <div className="mt-12 pt-8 border-t border-gray-300">
          <h3 className="text-2xl font-bold text-center mb-6 font-anton uppercase text-black">
            ISO Certified
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img
              src="/AshburtonV1(ISO-45001)Transparent-A.png"
              alt="ISO 45001 Certified"
              className="max-w-[200px] w-full h-auto"
            />
            <img
              src="/certified2.jpeg"
              alt="Certified 2"
              className="max-w-[200px] w-full h-auto"
            />
            <img
              src="/certified3.jpeg"
              alt="Certified 3"
              className="max-w-[200px] w-full h-auto"
            />
          </div>
        </div>

        {/* Contact and Social Media */}
        <div className="mt-12 pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <div className="flex items-center gap-3 mb-2">
              <FaPhoneAlt className="text-btn" />
              <a
                href="tel:+611300008782"
                className="text-sm text-gray-600 hover:text-btn transition-colors duration-300"
              >
                +61 1300 008 782
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-btn" />
              <a
                href="mailto:Operations@tstc.com.au"
                className="text-sm text-gray-600 hover:text-btn transition-colors duration-300"
              >
                Operations@tstc.com.au
              </a>
            </div>
          </div>
          <div className="flex gap-6">
            <a
              href="https://au.linkedin.com/company/t-s-traffic-control"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-btn transition-colors duration-300"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://www.facebook.com/people/TS-Traffic/100090085386224/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-btn transition-colors duration-300"
            >
              <FaFacebookF className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/ts.traffic/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-btn transition-colors duration-300"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-500">
          T&S Traffic Control © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;