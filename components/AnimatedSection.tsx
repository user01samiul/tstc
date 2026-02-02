"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: ReactNode;
  direction?: "left" | "right";
}

export default function AnimatedSection({
  children,
  direction = "left"
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const elements = section.querySelectorAll(".animate-element");

    // Animate the section container
    gsap.fromTo(
      section,
      {
        opacity: 0,
        x: direction === "left" ? -100 : 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate child elements with stagger
    if (elements.length > 0) {
      gsap.fromTo(
        elements,
        {
          opacity: 0,
          x: direction === "left" ? -60 : 60,
          y: 20,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [direction]);

  return (
    <div ref={sectionRef} className="will-change-transform">
      {children}
    </div>
  );
}
