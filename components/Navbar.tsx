"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [currentHash, setCurrentHash] = useState("");

  // Track hash changes for same-page anchor links
  useEffect(() => {
    setCurrentHash(window.location.hash);
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const isActive = (path: string) => pathname === path || pathname?.startsWith(path + "#");

  // For anchor links on the same page (like permit-application)
  const isActiveWithHash = (path: string) => {
    const [pathPart, hashPart] = path.split("#");
    if (pathname !== pathPart) return false;
    if (!hashPart) return true; // No hash specified, just match path
    return currentHash === `#${hashPart}`;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) setOpenSubmenu(null);
  };

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md text-gray-800 border-b border-gray-200 sticky top-0 z-50 font-sans shadow-sm">
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
          <div className="hidden lg:flex items-center space-x-2">
            <Link
              href="/"
              className={`px-4 py-2.5 text-sm font-semibold transition-all duration-200 rounded-lg ${
                pathname === "/"
                  ? "text-btn bg-btn/10"
                  : "text-gray-700 hover:text-btn hover:bg-gray-50"
              }`}
            >
              Home
            </Link>

            {/* About Us Dropdown */}
            <div className="relative">
              <Link
                href="/about"
                className={`flex items-center px-4 py-2.5 text-sm font-semibold transition-all duration-200 rounded-lg ${
                  pathname?.startsWith("/about")
                    ? "text-btn bg-btn/10"
                    : "text-gray-700 hover:text-btn hover:bg-gray-50"
                }`}
                onMouseEnter={() => setOpenSubmenu("about")}
                onClick={() => setOpenSubmenu(null)}
              >
                About Us
                <ChevronDown
                  className={`ml-1.5 h-3.5 w-3.5 transition-transform duration-200 ${
                    openSubmenu === "about" ? "rotate-180" : ""
                  }`}
                />
              </Link>
              {openSubmenu === "about" && (
                <div
                  className="absolute left-0 mt-2 w-60 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 px-2"
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  <Link
                    href="/about#our-story"
                    className={`block px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                      isActive("/about#our-story")
                        ? "bg-btn/10 text-btn font-semibold"
                        : "text-gray-700 hover:bg-btn/10 hover:text-btn"
                    }`}
                  >
                    Our Story
                  </Link>
                  <Link
                    href="/about#our-team"
                    className={`block px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                      isActive("/about#our-team")
                        ? "bg-btn/10 text-btn font-semibold"
                        : "text-gray-700 hover:bg-btn/10 hover:text-btn"
                    }`}
                  >
                    Our Team
                  </Link>
                  <Link
                    href="/about#our-approach"
                    className={`block px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                      isActive("/about#our-approach")
                        ? "bg-btn/10 text-btn font-semibold"
                        : "text-gray-700 hover:bg-btn/10 hover:text-btn"
                    }`}
                  >
                    Our Approach
                  </Link>
                  <Link
                    href="/about#accreditations"
                    className={`block px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                      isActive("/about#accreditations")
                        ? "bg-btn/10 text-btn font-semibold"
                        : "text-gray-700 hover:bg-btn/10 hover:text-btn"
                    }`}
                  >
                    Accreditations
                  </Link>
                </div>
              )}
            </div>

            {/* Services Mega Menu */}
            <div className="relative">
              <button
                className={`flex items-center px-4 py-2.5 text-sm font-semibold transition-all duration-200 rounded-lg ${
                  pathname?.startsWith("/services") || pathname === "/gallery"
                    ? "text-btn bg-btn/10"
                    : "text-gray-700 hover:text-btn hover:bg-gray-50"
                }`}
                onMouseEnter={() => setOpenSubmenu("services")}
                onClick={() => toggleSubmenu("services")}
              >
                Services
                <ChevronDown
                  className={`ml-1.5 h-3.5 w-3.5 transition-transform duration-200 ${
                    openSubmenu === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openSubmenu === "services" && (
                <div
                  className="absolute right-0 mt-2 w-[1050px] bg-white rounded-xl shadow-2xl border border-gray-100 p-6 grid grid-cols-5 gap-4"
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  {/* Column 1 - Traffic Engineering */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-bold text-gray-900 mb-3 pb-2 border-b-2 border-btn/20">
                      Traffic Engineering & Planning
                    </h3>
                    <div className="space-y-1">
                      <Link
                        href="/services/traffic-plans"
                        className={`block px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                          isActive("/services/traffic-plans")
                            ? "bg-btn/10 text-btn font-semibold"
                            : "text-gray-700 hover:bg-btn/10 hover:text-btn"
                        }`}
                      >
                        Traffic Plans
                      </Link>
                      <Link
                        href="/services/traffic-management-plans"
                        className={`block px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                          isActive("/services/traffic-management-plans")
                            ? "bg-btn/10 text-btn font-semibold"
                            : "text-gray-700 hover:bg-btn/10 hover:text-btn"
                        }`}
                      >
                        Traffic Management Plans (TMP) (CTMP)
                      </Link>
                      <Link
                        href="/services/swept-path"
                        className={`block px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                          isActive("/services/swept-path")
                            ? "bg-btn/10 text-btn font-semibold"
                            : "text-gray-700 hover:bg-btn/10 hover:text-btn"
                        }`}
                      >
                        Swept Path Analysis (SPA)
                      </Link>
                      <Link
                        href="/services/event-management-plans"
                        className={`block px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                          isActive("/services/event-management-plans")
                            ? "bg-btn/10 text-btn font-semibold"
                            : "text-gray-700 hover:bg-btn/10 hover:text-btn"
                        }`}
                      >
                        Event Management Plans
                      </Link>
                    </div>
                  </div>

                  {/* Column 2 - Permits */}
                  <div className="space-y-3">
                    <h3 className={`text-sm font-bold mb-3 pb-2 border-b-2 transition-all duration-200 ${
                      pathname === "/services/permit-application"
                        ? "text-btn border-btn"
                        : "text-gray-900 border-btn/20"
                    }`}>
                      Permit Applications
                    </h3>
                    <div className="space-y-1">
                      <Link
                        href="/services/permit-application#tf-nsw"
                        className="block px-3 py-2 text-sm rounded-lg transition-all duration-200 text-gray-700 hover:bg-btn/10 hover:text-btn"
                      >
                        TfNSW TMC ROL
                      </Link>
                      <Link
                        href="/services/permit-application#council-permits"
                        className="block px-3 py-2 text-sm rounded-lg transition-all duration-200 text-gray-700 hover:bg-btn/10 hover:text-btn"
                      >
                        Council Permits
                      </Link>
                      <Link
                        href="/services/permit-application#sta-bus"
                        className="block px-3 py-2 text-sm rounded-lg transition-all duration-200 text-gray-700 hover:bg-btn/10 hover:text-btn"
                      >
                        STA Bus Approvals
                      </Link>
                      <Link
                        href="/services/permit-application#emergency-approvals"
                        className="block px-3 py-2 text-sm rounded-lg transition-all duration-200 text-gray-700 hover:bg-btn/10 hover:text-btn"
                      >
                        Emergency Approvals
                      </Link>
                    </div>
                  </div>

                  {/* Column 3 - Traffic Controllers */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-bold text-gray-900 mb-3 pb-2 border-b-2 border-btn/20">
                      Traffic Controllers
                    </h3>
                    <div className="space-y-1">
                      <Link
                        href="/services/accredited-tc"
                        className={`block px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                          isActive("/services/accredited-tc")
                            ? "bg-btn/10 text-btn font-semibold"
                            : "text-gray-700 hover:bg-btn/10 hover:text-btn"
                        }`}
                      >
                        Accredited TC
                      </Link>
                      <Link
                        href="/services/24-hour-response"
                        className={`block px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                          isActive("/services/24-hour-response")
                            ? "bg-btn/10 text-btn font-semibold"
                            : "text-gray-700 hover:bg-btn/10 hover:text-btn"
                        }`}
                      >
                        24 Hour Response
                      </Link>
                      <Link
                        href="/services/team-leaders"
                        className={`block px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                          isActive("/services/team-leaders")
                            ? "bg-btn/10 text-btn font-semibold"
                            : "text-gray-700 hover:bg-btn/10 hover:text-btn"
                        }`}
                      >
                        Team Leaders
                      </Link>
                      <Link
                        href="/services/tma-operators"
                        className={`block px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                          isActive("/services/tma-operators")
                            ? "bg-btn/10 text-btn font-semibold"
                            : "text-gray-700 hover:bg-btn/10 hover:text-btn"
                        }`}
                      >
                        TMA Operators
                      </Link>
                    </div>
                  </div>

                  {/* Column 4 - Gallery */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-bold text-gray-900 mb-3 pb-2 border-b-2 border-btn/20">
                      Gallery
                    </h3>
                    <div className="space-y-1">
                      <Link
                        href="/gallery"
                        className={`block px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                          isActive("/gallery")
                            ? "bg-btn/10 text-btn font-semibold"
                            : "text-gray-700 hover:bg-btn/10 hover:text-btn"
                        }`}
                      >
                        Photos
                      </Link>
                    </div>
                  </div>

                  {/* Column 5 - Signage Installation */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-bold text-gray-900 mb-3 pb-2 border-b-2 border-btn/20">
                      Signage Installation
                    </h3>
                    <div className="space-y-1">
                      <Link
                        href="/services/signage-installation"
                        className={`block px-3 py-2 text-sm rounded-lg transition-all duration-200 leading-tight ${
                          isActive("/services/signage-installation")
                            ? "bg-btn/10 text-btn font-semibold"
                            : "text-gray-700 hover:bg-btn/10 hover:text-btn"
                        }`}
                      >
                        Temporary & Permanent Street Signage
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/faqs"
              className="px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-btn transition-all duration-200 rounded-lg hover:bg-gray-50"
            >
              FAQ
            </Link>
            <Link
              href="/career"
              className="px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-btn transition-all duration-200 rounded-lg hover:bg-gray-50"
            >
              Career
            </Link>
            <Link
              href="/contact"
              className="ml-3 px-6 py-2.5 text-sm font-semibold bg-btn text-white rounded-lg hover:bg-btn/90 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
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
                          href="/services/accredited-tc"
                          onClick={toggleMobileMenu}
                          className="block px-4 py-2 text-base hover:bg-btn/5 hover:text-btn rounded-lg transition-colors"
                        >
                          Accredited TC
                        </Link>
                        <Link
                          href="/services/24-hour-response"
                          onClick={toggleMobileMenu}
                          className="block px-4 py-2 text-base hover:bg-btn/5 hover:text-btn rounded-lg transition-colors"
                        >
                          24 Hour Response
                        </Link>
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

                      <div className="space-y-1">
                        <h4 className="px-4 py-2 text-sm font-semibold text-btn">
                          Gallery
                        </h4>
                        <Link
                          href="/gallery"
                          onClick={toggleMobileMenu}
                          className="block px-4 py-2 text-base hover:bg-btn/5 hover:text-btn rounded-lg transition-colors"
                        >
                          Photos
                        </Link>
                      </div>

                      <div className="space-y-1">
                        <h4 className="px-4 py-2 text-sm font-semibold text-btn">
                          Signage Installation
                        </h4>
                        <Link
                          href="/services/signage-installation"
                          onClick={toggleMobileMenu}
                          className="block px-4 py-2 text-base hover:bg-btn/5 hover:text-btn rounded-lg transition-colors"
                        >
                          Temporary & Permanent Street Signage
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
