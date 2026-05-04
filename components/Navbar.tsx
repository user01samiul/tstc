"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PRE_CON_SECTIONS } from "@/lib/preConstructionSections";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [openNestedSubmenu, setOpenNestedSubmenu] = useState<string | null>(
    null,
  );
  const [currentHash, setCurrentHash] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track hash changes for same-page anchor links
  useEffect(() => {
    setCurrentHash(window.location.hash);
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const isActive = (path: string) =>
    pathname === path || pathname?.startsWith(path + "#");

  // For anchor links on the same page (like permit-application)
  const isActiveWithHash = (path: string) => {
    const [pathPart, hashPart] = path.split("#");
    if (pathname !== pathPart) return false;
    if (!hashPart) return true; // No hash specified, just match path
    return currentHash === `#${hashPart}`;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setOpenSubmenu(null);
      setOpenNestedSubmenu(null);
    }
  };

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  const toggleNestedSubmenu = (menu: string) => {
    setOpenNestedSubmenu(openNestedSubmenu === menu ? null : menu);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 font-sans transition-all duration-300 ${
          isScrolled
            ? "bg-white border-b border-black/5"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src={isScrolled ? "/removed-logo.png" : "/ts-logo-white.png"}
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
                    : isScrolled
                      ? "text-gray-700 hover:text-btn hover:bg-gray-50"
                      : "text-white hover:text-btn hover:bg-white/10"
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
                      : isScrolled
                        ? "text-gray-700 hover:text-btn hover:bg-gray-50"
                        : "text-white hover:text-btn hover:bg-white/10"
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
                    <Link
                      href="/about/experience"
                      className={`block px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                        isActive("/about/experience")
                          ? "bg-btn/10 text-btn font-semibold"
                          : "text-gray-700 hover:bg-btn/10 hover:text-btn"
                      }`}
                    >
                      Our Experience
                    </Link>
                  </div>
                )}
              </div>

              {/* Services Mega Menu */}
              <div className="relative">
                <Link
                  href="/services"
                  className={`flex items-center px-4 py-2.5 text-sm font-semibold transition-all duration-200 rounded-lg ${
                    pathname?.startsWith("/services") || pathname === "/gallery"
                      ? "text-btn bg-btn/10"
                      : isScrolled
                        ? "text-gray-700 hover:text-btn hover:bg-gray-50"
                        : "text-white hover:text-btn hover:bg-white/10"
                  }`}
                  onMouseEnter={() => setOpenSubmenu("services")}
                  onClick={() => setOpenSubmenu(null)}
                >
                  Services
                  <ChevronDown
                    className={`ml-1.5 h-3.5 w-3.5 transition-transform duration-200 ${
                      openSubmenu === "services" ? "rotate-180" : ""
                    }`}
                  />
                </Link>
                {openSubmenu === "services" && (
                  <div
                    className="fixed left-1/2 -translate-x-1/2 top-20 w-[1180px] bg-white rounded-xl shadow-2xl border border-gray-100 p-6 grid grid-cols-6 gap-4"
                    onMouseLeave={() => setOpenSubmenu(null)}
                  >
                    {/* Column 1 - Pre Construction Planning (spans 2) */}
                    <div className="space-y-3 col-span-2">
                      <Link
                        href="/services/pre-construction-planning"
                        className={`block text-sm font-bold mb-3 pb-2 border-b-2 transition-all duration-200 ${
                          pathname === "/services/pre-construction-planning"
                            ? "text-btn border-btn"
                            : "text-gray-900 border-btn/20 hover:text-btn"
                        }`}
                      >
                        Pre Construction Planning
                      </Link>
                      <Link
                        href="/services/all-services"
                        className={`block px-3 py-2 text-sm rounded-lg transition-all duration-200 font-semibold ${
                          pathname === "/services/all-services"
                            ? "bg-btn text-white"
                            : "bg-btn/10 text-btn hover:bg-btn hover:text-white"
                        }`}
                      >
                        View All Services
                      </Link>
                      <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                        {PRE_CON_SECTIONS.map((s) => {
                          const href = `/services/pre-construction-planning#${s.id}`;
                          const isLong = (s.navLabel ?? s.label).length > 28;
                          return (
                            <Link
                              key={s.id}
                              href={href}
                              className={`block px-2.5 py-1.5 rounded-lg leading-tight transition-all duration-200 ${
                                isLong ? "text-xs" : "text-sm"
                              } ${
                                isActiveWithHash(href)
                                  ? "bg-btn/10 text-btn font-semibold"
                                  : "text-gray-700 hover:bg-btn/10 hover:text-btn"
                              }`}
                            >
                              {s.navLabel ?? s.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>

                    {/* Column 3 - Temporary Traffic Management Services */}
                    <div className="space-y-3">
                      <h3 className="text-sm font-bold text-gray-900 mb-3 pb-2 border-b-2 border-btn/20 leading-tight">
                        Temporary Traffic Management Services
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

                    {/* Column 6 - Event & Crowd Management */}
                    <div className="space-y-3">
                      <h3 className="text-sm font-bold text-gray-900 mb-3 pb-2 border-b-2 border-btn/20 leading-tight">
                        Event & Crowd Management
                      </h3>
                      <div className="space-y-1">
                        <Link
                          href="/services/event-crowd-management"
                          className={`block px-3 py-2 text-sm rounded-lg transition-all duration-200 leading-tight ${
                            isActive("/services/event-crowd-management")
                              ? "bg-btn/10 text-btn font-semibold"
                              : "text-gray-700 hover:bg-btn/10 hover:text-btn"
                          }`}
                        >
                          Event & Crowd Management
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/faqs"
                className={`px-4 py-2.5 text-sm font-semibold transition-all duration-200 rounded-lg ${
                  isScrolled
                    ? "text-gray-700 hover:text-btn hover:bg-gray-50"
                    : "text-white hover:text-btn hover:bg-white/10"
                }`}
              >
                FAQ
              </Link>
              <Link
                href="/career"
                className={`px-4 py-2.5 text-sm font-semibold transition-all duration-200 rounded-lg ${
                  isScrolled
                    ? "text-gray-700 hover:text-btn hover:bg-gray-50"
                    : "text-white hover:text-btn hover:bg-white/10"
                }`}
              >
                Career
              </Link>
              <Link
                href="/contact"
                className="ml-3 px-6 py-2.5 text-sm font-semibold bg-btn text-white rounded-full hover:bg-btn/90 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-full bg-white hover:bg-gray-100 transition-colors duration-200"
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
      </nav>

      {/* Mobile Menu - Outside nav for proper z-index stacking */}
      <div
        className={`lg:hidden fixed inset-0 z-[9999] transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
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
          className={`absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl overflow-hidden flex flex-col z-[9999] transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
            <Link href="/" onClick={toggleMobileMenu}>
              <Image
                src="/removed-logo.png"
                alt="T&S Traffic Solutions Logo"
                width={120}
                height={40}
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

          {/* Menu Items - Scrollable */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden">
            <nav className="p-4 space-y-2">
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
                      href="/fleet"
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
                    <Link
                      href="/about/experience"
                      onClick={toggleMobileMenu}
                      className="block px-4 py-2 text-base hover:bg-btn/5 hover:text-btn rounded-lg transition-colors"
                    >
                      Our Experience
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
                  <div className="pl-4 space-y-1 mt-1">
                    <Link
                      href="/services"
                      onClick={toggleMobileMenu}
                      className="block px-4 py-3 text-base font-semibold bg-btn/10 text-btn hover:bg-btn hover:text-white rounded-lg transition-colors"
                    >
                      📋 View All Services
                    </Link>

                    {/* Pre Construction Planning Sub-menu */}
                    <div className="space-y-1">
                      <button
                        onClick={() => toggleNestedSubmenu("pre-construction")}
                        className="w-full flex justify-between items-center px-4 py-2 text-sm font-semibold text-btn hover:bg-btn/5 rounded-lg transition-colors"
                      >
                        <span>Pre Construction Planning</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            openNestedSubmenu === "pre-construction"
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>
                      {openNestedSubmenu === "pre-construction" && (
                        <div className="pl-4 space-y-1">
                          <Link
                            href="/services/pre-construction-planning"
                            onClick={toggleMobileMenu}
                            className="block px-4 py-2 text-sm font-semibold text-btn hover:bg-btn/5 rounded-lg transition-colors"
                          >
                            Overview
                          </Link>
                          {PRE_CON_SECTIONS.map((s) => (
                            <Link
                              key={s.id}
                              href={`/services/pre-construction-planning#${s.id}`}
                              onClick={toggleMobileMenu}
                              className="block px-4 py-2 text-sm hover:bg-btn/5 hover:text-btn rounded-lg transition-colors"
                            >
                              {s.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Temporary Traffic Management Services Sub-menu */}
                    <div className="space-y-1">
                      <button
                        onClick={() => toggleNestedSubmenu("controllers")}
                        className="w-full flex justify-between items-center px-4 py-2 text-sm font-semibold text-btn hover:bg-btn/5 rounded-lg transition-colors"
                      >
                        <span>Temporary Traffic Management Services</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            openNestedSubmenu === "controllers"
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>
                      {openNestedSubmenu === "controllers" && (
                        <div className="pl-4 space-y-1">
                          <Link
                            href="/services/accredited-tc"
                            onClick={toggleMobileMenu}
                            className="block px-4 py-2 text-sm hover:bg-btn/5 hover:text-btn rounded-lg transition-colors"
                          >
                            Accredited TC
                          </Link>
                          <Link
                            href="/services/24-hour-response"
                            onClick={toggleMobileMenu}
                            className="block px-4 py-2 text-sm hover:bg-btn/5 hover:text-btn rounded-lg transition-colors"
                          >
                            24 Hour Response
                          </Link>
                          <Link
                            href="/services/team-leaders"
                            onClick={toggleMobileMenu}
                            className="block px-4 py-2 text-sm hover:bg-btn/5 hover:text-btn rounded-lg transition-colors"
                          >
                            Team Leaders
                          </Link>
                          <Link
                            href="/services/tma-operators"
                            onClick={toggleMobileMenu}
                            className="block px-4 py-2 text-sm hover:bg-btn/5 hover:text-btn rounded-lg transition-colors"
                          >
                            TMA Operators
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Gallery Link */}
                    <Link
                      href="/gallery"
                      onClick={toggleMobileMenu}
                      className="block px-4 py-2 text-sm font-semibold text-btn hover:bg-btn/5 rounded-lg transition-colors"
                    >
                      Gallery
                    </Link>

                    {/* Signage Installation Link */}
                    <Link
                      href="/services/signage-installation"
                      onClick={toggleMobileMenu}
                      className="block px-4 py-2 text-sm font-semibold text-btn hover:bg-btn/5 rounded-lg transition-colors"
                    >
                      Signage Installation
                    </Link>

                    {/* Event & Crowd Management Link */}
                    <Link
                      href="/services/event-crowd-management"
                      onClick={toggleMobileMenu}
                      className="block px-4 py-2 text-sm font-semibold text-btn hover:bg-btn/5 rounded-lg transition-colors"
                    >
                      Event & Crowd Management
                    </Link>
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

          {/* Contact Button - Fixed at Bottom */}
          <div className="p-4 border-t border-gray-200 flex-shrink-0">
            <Link
              href="/contact"
              onClick={toggleMobileMenu}
              className="block w-full px-6 py-3 text-base font-semibold text-center bg-btn text-white rounded-full hover:bg-btn/90 transition-colors shadow-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
