"use client";

import { gsap } from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Open animation
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.05,
          delay: 0.2,
          ease: "power2.out",
        }
      );
    } else {
      // Close animation
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
      gsap.to(sidebarRef.current, {
        x: "100%",
        duration: 0.4,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/50 z-40 opacity-0"
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className="fixed top-0 right-0 h-full w-full sm:w-[500px] md:w-[600px] bg-white z-50 overflow-y-auto shadow-2xl"
        style={{ transform: "translateX(100%)" }}
      >
        <div ref={contentRef} className="p-8 md:p-10 space-y-8">
          {/* Close Button */}
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="w-12 h-12 rounded-full bg-pink text-white flex items-center justify-center hover:bg-pink-fade transition-all cursor-pointer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Two Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Training Section */}
              <div>
                <h2 className="text-3xl font-bold text-black mb-6">Training</h2>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/courses"
                      className="text-xl text-black/70 hover:text-black transition-colors"
                      onClick={onClose}
                    >
                      All Courses
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/group-training"
                      className="text-xl text-black/70 hover:text-black transition-colors"
                      onClick={onClose}
                    >
                      Group Training
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/courses?tab=first-aid"
                      className="text-xl text-black/70 hover:text-black transition-colors"
                      onClick={onClose}
                    >
                      First Aid & CPR
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/courses?tab=ndis"
                      className="text-xl text-black/70 hover:text-black transition-colors"
                      onClick={onClose}
                    >
                      NDIS & Community
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Popular Courses Section */}
              <div>
                <h2 className="text-3xl font-bold text-black mb-6">
                  Popular Courses
                </h2>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/courses/cpr-hltaid009"
                      className="text-xl text-black/70 hover:text-black transition-colors"
                      onClick={onClose}
                    >
                      CPR Training
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/courses/first-aid-cpr-hltaid011"
                      className="text-xl text-black/70 hover:text-black transition-colors"
                      onClick={onClose}
                    >
                      First Aid & CPR
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/courses/childcare-first-aid-hltaid012"
                      className="text-xl text-black/70 hover:text-black transition-colors"
                      onClick={onClose}
                    >
                      Childcare First Aid
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/courses/mental-health-first-aid"
                      className="text-xl text-black/70 hover:text-black transition-colors"
                      onClick={onClose}
                    >
                      Mental Health First Aid
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Company Section */}
              <div>
                <h2 className="text-3xl font-bold text-black mb-6">Company</h2>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/"
                      className="text-xl text-black/70 hover:text-black transition-colors"
                      onClick={onClose}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-xl text-black/70 hover:text-black transition-colors"
                      onClick={onClose}
                    >
                      About Hearts Ahead
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about#team"
                      className="text-xl text-black/70 hover:text-black transition-colors"
                      onClick={onClose}
                    >
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-xl text-black/70 hover:text-black transition-colors"
                      onClick={onClose}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="text-xl text-black/70 hover:text-black transition-colors"
                      onClick={onClose}
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resources"
                      className="text-xl text-black/70 hover:text-black transition-colors"
                      onClick={onClose}
                    >
                      Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/shop"
                      className="text-xl text-black/70 hover:text-black transition-colors"
                      onClick={onClose}
                    >
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-xl text-black/70 hover:text-black transition-colors"
                      onClick={onClose}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Link
              href="/courses"
              onClick={onClose}
              className="block w-full px-8 py-4 bg-pink text-white text-center rounded-full hover:bg-pink-fade transition-all font-bold text-lg"
            >
              Book a Course
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
