"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) setOpenSubmenu(null);
  };

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <nav className="bg-white text-gray-800 border-b border-gray-100 sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.JPG"
                alt="T&S Traffic Solutions Logo"
                width={100}
                height={46}
                className="object-contain transition-transform duration-300 hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-3 text-base font-medium hover:text-btn transition-colors duration-200 rounded-lg hover:bg-gray-50"
            >
              Home
            </Link>

            {/* About Us Dropdown */}
            <div className="relative">
              <Link
                href="/about"
                className="flex items-center px-4 py-3 text-base font-medium hover:text-btn transition-colors duration-200 rounded-lg hover:bg-gray-50"
                onMouseEnter={() => setOpenSubmenu("about")}
                onClick={() => setOpenSubmenu(null)}
              >
                About Us
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    openSubmenu === "about" ? "rotate-180" : ""
                  }`}
                />
              </Link>
              {openSubmenu === "about" && (
                <div
                  className="absolute left-0 mt-1 w-56 bg-white rounded-lg shadow-lg ring-1 ring-gray-200 py-2"
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  <Link
                    href="/about#our-story"
                    className="block px-4 py-2 text-sm hover:bg-btn/5 hover:text-btn rounded"
                  >
                    Our Story
                  </Link>
                  <Link
                    href="/about#our-team"
                    className="block px-4 py-2 text-sm hover:bg-btn/5 hover:text-btn"
                  >
                    Our Team
                  </Link>
                  <Link
                    href="/about#our-fleet"
                    className="block px-4 py-2 text-sm hover:bg-btn/5 hover:text-btn"
                  >
                    Our Fleet
                  </Link>
                  <Link
                    href="/about#accreditations"
                    className="block px-4 py-2 text-sm hover:bg-btn/5 hover:text-btn"
                  >
                    Accreditations
                  </Link>
                </div>
              )}
            </div>

            {/* Services Mega Menu */}
            <div className="relative">
              <button
                className="flex items-center px-4 py-3 text-base font-medium hover:text-btn transition-colors duration-200 rounded-lg hover:bg-gray-50"
                onMouseEnter={() => setOpenSubmenu("services")}
                onClick={() => toggleSubmenu("services")}
              >
                Services
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    openSubmenu === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openSubmenu === "services" && (
                <div
                  className="absolute right-0 mt-1 w-[800px] bg-white rounded-lg shadow-lg ring-1 ring-gray-200 p-4 grid grid-cols-3 gap-4"
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  {/* Column 1 */}
                  <div>
                    <h3 className="text-xs font-semibold text-btn uppercase tracking-wider mb-2 px-4">
                      Traffic Engineering - Planning & Design
                    </h3>
                    <div className="space-y-1">
                      {/* <Link
                        href="/services#traffic-guidance"
                        className="block px-4 py-2 text-sm hover:bg-btn/5 hover:text-btn rounded"
                      >
                        Traffic Guidance Schemes
                      </Link> */}
                      <Link
                        href="/services/traffic-plans"
                        className="block px-4 py-2 text-sm hover:bg-btn/5 hover:text-btn rounded"
                      >
                        Traffic Plans
                      </Link>
                      {/* <Link
                        href="/services#construction-plans"
                        className="block px-4 py-2 text-sm hover:bg-btn/5 hover:text-btn rounded"
                      >
                        Construction Plans
                      </Link> */}
                      <Link
                        href="/services/traffic-management-plans"
                        className="block px-4 py-2 text-sm hover:bg-btn/5 hover:text-btn rounded"
                      >
                        Traffic Management Plans (TMP) (CTMP)
                      </Link>
                      <Link
                        href="/services/swept-path"
                        className="block px-4 py-2 text-sm hover:bg-btn/5 hover:text-btn rounded"
                      >
                        Swept Path Analysis (SPA)
                      </Link>
                      <Link
                        href="/services/event-management-plans"
                        className="block px-4 py-2 text-sm hover:bg-btn/5 hover:text-btn rounded"
                      >
                        Event Management Plans
                      </Link>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div>
                    <h3 className="text-xs font-semibold text-btn uppercase tracking-wider mb-2 px-4">
                      Permit Application
                    </h3>
                    <div className="space-y-1">
                      <Link
                        href="/services/permit-application#tf-nsw"
                        className="block px-4 py-2 text-sm hover:bg-btn/5 hover:text-btn rounded"
                      >
                        TfNSW TMC ROL Approval
                      </Link>
                      <Link
                        href="/services/permit-application#council-permits"
                        className="block px-4 py-2 text-sm hover:bg-btn/5 hover:text-btn rounded"
                      >
                        Council Permits
                      </Link>
                      <Link
                        href="/services/permit-application#sta-bus"
                        className="block px-4 py-2 text-sm hover:bg-btn/5 hover:text-btn rounded"
                      >
                        STA Bus Approvals
                      </Link>
                      <Link
                        href="/services/permit-application#emergency-approvals"
                        className="block px-4 py-2 text-sm hover:bg-btn/5 hover:text-btn rounded"
                      >
                        Emergency Approvals
                      </Link>
                    </div>
                  </div>

                  {/* Column 3 */}
                  <div>
                    <h3 className="text-xs font-semibold text-btn uppercase tracking-wider mb-2 px-4">
                      Traffic Controllers
                    </h3>
                    <div className="space-y-1">
                      <Link
                        href="/services/team-leaders"
                        className="block px-4 py-2 text-sm hover:bg-btn/5 hover:text-btn rounded"
                      >
                        Team Leaders
                      </Link>
                      <Link
                        href="/services/tma-operators"
                        className="block px-4 py-2 text-sm hover:bg-btn/5 hover:text-btn rounded"
                      >
                        TMA Operators
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* <Link
              href="/news"
              className="px-4 py-3 text-base font-medium hover:text-btn transition-colors duration-200 rounded-lg hover:bg-gray-50"
            >
              News
            </Link> */}
            <Link
              href="/faqs"
              className="px-4 py-3 text-base font-medium hover:text-btn transition-colors duration-200 rounded-lg hover:bg-gray-50"
            >
              FAQ
            </Link>
            <Link
              href="/career"
              className="px-4 py-3 text-base font-medium hover:text-btn transition-colors duration-200 rounded-lg hover:bg-gray-50"
            >
              Career
            </Link>
            <Link
              href="/contact"
              className="ml-2 px-6 py-3 text-base font-medium bg-btn text-white rounded-lg hover:bg-btn/90 transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={toggleMobileMenu}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 left-0 h-full w-80 bg-white shadow-xl transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" onClick={toggleMobileMenu}>
                <Image
                  src="/logo.JPG"
                  alt="T&S Traffic Solutions Logo"
                  width={140}
                  height={48}
                  className="object-contain"
                />
              </Link>
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <X className="h-6 w-6 text-gray-700" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <nav className="space-y-2">
                <Link
                  href="/"
                  onClick={toggleMobileMenu}
                  className="block px-4 py-3 text-lg font-medium text-gray-800 hover:bg-btn/5 hover:text-btn rounded-lg transition-colors"
                >
                  Home
                </Link>
                <div className="space-y-1">
                 
                  <button
                    onClick={() => toggleSubmenu("about")}
                    className="w-full flex justify-between items-center px-4 py-3 text-lg font-medium text-gray-800 hover:bg-btn/5 hover:text-btn rounded-lg transition-colors"
                  >
                    <span>About Us</span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${
                        openSubmenu === "about" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openSubmenu === "about" && (
                    <div className="pl-6 space-y-1 mt-1">
                      <Link
                        href="/about#our-story"
                        onClick={toggleMobileMenu}
                        className="block px-4 py-2 text-base hover:bg-btn/5 hover:text-btn rounded-lg transition-colors"
                      >
                        Our Story
                      </Link>
                      <Link
                        href="/about#our-team"
                        onClick={toggleMobileMenu}
                        className="block px-4 py-2 text-base hover:bg-btn/5 hover:text-btn rounded-lg transition-colors"
                      >
                        Our Team
                      </Link>
                      <Link
                        href="/about#our-fleet"
                        onClick={toggleMobileMenu}
                        className="block px-4 py-2 text-base hover:bg-btn/5 hover:text-btn rounded-lg transition-colors"
                      >
                        Our Fleet
                      </Link>
                      <Link
                        href="/about#accreditations"
                        onClick={toggleMobileMenu}
                        className="block px-4 py-2 text-base hover:bg-btn/5 hover:text-btn rounded-lg transition-colors"
                      >
                        Accreditations
                      </Link>
                    </div>
                  )}
                </div>
                <div className="space-y-1">
                  <button
                    onClick={() => toggleSubmenu("services")}
                    className="w-full flex justify-between items-center px-4 py-3 text-lg font-medium text-gray-800 hover:bg-btn/5 hover:text-btn rounded-lg transition-colors"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${
                        openSubmenu === "services" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openSubmenu === "services" && (
                    <div className="pl-6 space-y-2 mt-1">
                      <div className="space-y-1">
                        <h4 className="px-4 py-2 text-sm font-semibold text-btn">
                          Traffic Engineering - Planning & Design
                        </h4>
                        {/* <Link
                          href="/services#traffic-guidance"
                          onClick={toggleMobileMenu}
                          className="block px-4 py-2 text-base hover:bg-btn/5 hover:text-btn rounded-lg transition-colors"
                        >
                          Traffic Guidance Schemes
                        </Link> */}
                        <Link
                          href="/services/traffic-plans"
                          onClick={toggleMobileMenu}
                          className="block px-4 py-2 text-base hover:bg-btn/5 hover:text-btn rounded-lg transition-colors"
                        >
                          Traffic Plans
                        </Link>
                        {/* <Link
                          href="/services#construction-plans"
                          onClick={toggleMobileMenu}
                          className="block px-4 py-2 text-base hover:bg-btn/5 hover:text-btn rounded-lg transition-colors"
                        >
                          Construction Plans
                        </Link> */}
                        <Link
                          href="/services/traffic-management-plans"
                          className="block px-4 py-2 text-sm hover:bg-btn/5 hover:text-btn rounded"
                        >
                          Traffic Management Plans (TMP) (CTMP)
                        </Link>
                        <Link
                          href="/services/swept-path"
                          onClick={toggleMobileMenu}
                          className="block px-4 py-2 text-base hover:bg-btn/5 hover:text-btn rounded-lg transition-colors"
                        >
                          Swept Path Analysis (SPA)
                        </Link>
                        <Link
                          href="/services/event-management-plans"
                          onClick={toggleMobileMenu}
                          className="block px-4 py-2 text-base hover:bg-btn/5 hover:text-btn rounded-lg transition-colors"
                        >
                          Event Management Plans
                        </Link>
                      </div>
                      <div className="space-y-1">
                        <h4 className="px-4 py-2 text-sm font-semibold text-btn">
                          Permit Application
                        </h4>
                        <Link
                          href="/services/permit-application#tf-nsw"
                          onClick={toggleMobileMenu}
                          className="block px-4 py-2 text-base hover:bg-btn/5 hover:text-btn rounded-lg transition-colors"
                        >
                          TfNSW TMC ROL Approval
                        </Link>
                        <Link
                          href="/services/permit-application#council-permits"
                          onClick={toggleMobileMenu}
                          className="block px-4 py-2 text-base hover:bg-btn/5 hover:text-btn rounded-lg transition-colors"
                        >
                          Council Permits
                        </Link>
                        <Link
                          href="/services/permit-application#sta-bus"
                          onClick={toggleMobileMenu}
                          className="block px-4 py-2 text-base hover:bg-btn/5 hover:text-btn rounded-lg transition-colors"
                        >
                          STA Bus Approvals
                        </Link>
                        <Link
                          href="/services/permit-application#emergency-approvals"
                          onClick={toggleMobileMenu}
                          className="block px-4 py-2 text-base hover:bg-btn/5 hover:text-btn rounded-lg transition-colors"
                        >
                          Emergency Approvals
                        </Link>
                      </div>
                      <div className="space-y-1">
                        <h4 className="px-4 py-2 text-sm font-semibold text-btn">
                          Traffic Controllers
                        </h4>

                        <Link
                          href="/services/team-leaders"
                          onClick={toggleMobileMenu}
                          className="block px-4 py-2 text-base hover:bg-btn/5 hover:text-btn rounded-lg transition-colors"
                        >
                          Team Leaders
                        </Link>
                        <Link
                          href="/services/tma-operators"
                          onClick={toggleMobileMenu}
                          className="block px-4 py-2 text-base hover:bg-btn/5 hover:text-btn rounded-lg transition-colors"
                        >
                          TMA Operators
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                {/* <Link
                  href="/news"
                  onClick={toggleMobileMenu}
                  className="block px-4 py-3 text-lg font-medium text-gray-800 hover:bg-btn/5 hover:text-btn rounded-lg transition-colors"
                >
                  News
                </Link> */}
                <Link
                  href="/faqs"
                  onClick={toggleMobileMenu}
                  className="block px-4 py-3 text-lg font-medium text-gray-800 hover:bg-btn/5 hover:text-btn rounded-lg transition-colors"
                >
                  FAQ
                </Link>
                <Link
                  href="/career"
                  onClick={toggleMobileMenu}
                  className="block px-4 py-3 text-lg font-medium text-gray-800 hover:bg-btn/5 hover:text-btn rounded-lg transition-colors"
                >
                  Career
                </Link>
              </nav>
            </div>
            <div className="pt-4">
              <Link
                href="/contact"
                onClick={toggleMobileMenu}
                className="block w-full px-6 py-3 text-lg font-medium text-center bg-btn text-white rounded-lg hover:bg-btn/90 transition-colors shadow-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
