"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const { data: session } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Hearts Ahead Logo"
                width={240}
                height={80}
                className="h-12 sm:h-16 md:h-16 lg:h-20 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-4 sm:gap-8 md:gap-12">
            <Link
              href="/courses"
              className={`hidden lg:inline hover:opacity-70 transition-opacity text-lg lg:text-2xl font-medium whitespace-nowrap ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Courses
            </Link>
            <Link
              href="/about"
              className={`hidden lg:inline hover:opacity-70 transition-opacity text-lg lg:text-2xl font-medium whitespace-nowrap ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              About us
            </Link>
            <Link
              href="/resources"
              className={`hidden lg:inline hover:opacity-70 transition-opacity text-lg lg:text-2xl font-medium whitespace-nowrap ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Resources
            </Link>
            <Link
              href="/shop"
              className={`hidden lg:inline hover:opacity-70 transition-opacity text-lg lg:text-2xl font-medium whitespace-nowrap ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Shop
            </Link>
            <Link
              href="/contact"
              className={`hidden lg:inline hover:opacity-70 transition-opacity text-lg lg:text-2xl font-medium whitespace-nowrap ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Contact
            </Link>

            {/* User Actions */}
            {session?.user ? (
              <div className="flex items-center gap-3">
                {/* Profile Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex items-center justify-center transition-all ${
                      isScrolled
                        ? "bg-black hover:opacity-90"
                        : "bg-white hover:opacity-90"
                    }`}
                  >
                    {session.user.image ? (
                      <div className="w-full h-full rounded-full overflow-hidden bg-gray-200">
                        <Image
                          src={session.user.image}
                          alt={session.user.name || "User"}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <span
                        className={`text-lg font-semibold ${
                          isScrolled ? "text-white" : "text-black"
                        }`}
                      >
                        {session.user.name?.charAt(0).toUpperCase() ||
                          session.user.email?.charAt(0).toUpperCase() ||
                          "U"}
                      </span>
                    )}
                  </button>

                  {/* Profile Dropdown Menu */}
                  {isProfileOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsProfileOpen(false)}
                      ></div>
                      <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-lg border border-black/10 py-2 z-50">
                        <div className="px-4 py-3 border-b border-black/10">
                          <p className="text-sm font-semibold text-black truncate">
                            {session.user.name || session.user.email}
                          </p>
                          <p className="text-xs text-black/60 truncate">
                            {session.user.email}
                          </p>
                        </div>
                        <div className="py-2">
                          {session.user.role === "admin" ? (
                            <>
                              <Link
                                href="/admin/dashboard"
                                className="flex items-center gap-3 px-4 py-2 hover:bg-black/5 transition-colors"
                                onClick={() => setIsProfileOpen(false)}
                              >
                                <svg
                                  className="w-5 h-5 text-black/70"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                  />
                                </svg>
                                <span className="text-sm font-medium text-black">
                                  Admin Dashboard
                                </span>
                              </Link>
                            </>
                          ) : (
                            <>
                              <Link
                                href="/dashboard"
                                className="flex items-center gap-3 px-4 py-2 hover:bg-black/5 transition-colors"
                                onClick={() => setIsProfileOpen(false)}
                              >
                                <svg
                                  className="w-5 h-5 text-black/70"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                  />
                                </svg>
                                <span className="text-sm font-medium text-black">
                                  My Courses
                                </span>
                              </Link>
                              <Link
                                href="/dashboard/profile"
                                className="flex items-center gap-3 px-4 py-2 hover:bg-black/5 transition-colors"
                                onClick={() => setIsProfileOpen(false)}
                              >
                                <svg
                                  className="w-5 h-5 text-black/70"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                  />
                                </svg>
                                <span className="text-sm font-medium text-black">
                                  Profile Settings
                                </span>
                              </Link>
                            </>
                          )}
                        </div>
                        <div className="border-t border-black/10 pt-2">
                          <button
                            onClick={async () => {
                              setIsProfileOpen(false);
                              await signOut({ redirect: false });
                              window.location.href = "/";
                            }}
                            className="w-full flex items-center gap-3 px-4 py-2 hover:bg-red-50 transition-colors text-red-600 cursor-pointer"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                              />
                            </svg>
                            <span className="text-sm font-medium">
                              Sign Out
                            </span>
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Hamburger Menu (for logged-in users) */}
                <button
                  onClick={() => setIsSidebarOpen(true)}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex flex-col items-center justify-center gap-1.5 hover:opacity-90 transition-all cursor-pointer ${
                    isScrolled ? "bg-pink" : "bg-white"
                  }`}
                >
                  <span
                    className={`w-4 sm:w-5 h-0.5 transition-colors ${
                      isScrolled ? "bg-white" : "bg-black"
                    }`}
                  ></span>
                  <span
                    className={`w-3 sm:w-4 h-0.5 transition-colors ${
                      isScrolled ? "bg-white" : "bg-black"
                    }`}
                  ></span>
                  <span
                    className={`w-5 sm:w-6 h-0.5 transition-colors ${
                      isScrolled ? "bg-white" : "bg-black"
                    }`}
                  ></span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                {/* Sign In Button */}
                <Link
                  href="/auth/signin"
                  className={`hidden lg:inline-block px-4 py-2 rounded-lg font-semibold text-sm transition-all whitespace-nowrap ${
                    isScrolled
                      ? "text-black hover:bg-black/5"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  Sign In
                </Link>

                {/* Sign Up Button */}
                <Link
                  href="/auth/signup"
                  className={`hidden lg:inline-block px-4 py-2 rounded-lg font-semibold text-sm transition-all whitespace-nowrap ${
                    isScrolled
                      ? "bg-pink text-white hover:bg-pink-fade"
                      : "bg-white text-black hover:bg-white/90"
                  }`}
                >
                  Sign Up
                </Link>

                {/* Hamburger Menu (for non-logged-in users) */}
                <button
                  onClick={() => setIsSidebarOpen(true)}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex flex-col items-center justify-center gap-1.5 hover:opacity-90 transition-all cursor-pointer ${
                    isScrolled ? "bg-pink" : "bg-white"
                  }`}
                >
                  <span
                    className={`w-4 sm:w-5 h-0.5 transition-colors ${
                      isScrolled ? "bg-white" : "bg-black"
                    }`}
                  ></span>
                  <span
                    className={`w-3 sm:w-4 h-0.5 transition-colors ${
                      isScrolled ? "bg-white" : "bg-black"
                    }`}
                  ></span>
                  <span
                    className={`w-5 sm:w-6 h-0.5 transition-colors ${
                      isScrolled ? "bg-white" : "bg-black"
                    }`}
                  ></span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </nav>
  );
}
