"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ClientsSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const logos = [
    {
      src: "/montage/1. Home Page/Our Clients/1. Client Daracon.png",
      alt: "Daracon",
    },
    {
      src: "/montage/1. Home Page/Our Clients/2. Client - AOR Cranes.png",
      alt: "AOR Cranes",
    },
    {
      src: "/montage/1. Home Page/Our Clients/3. Client -AM2PM.webp",
      alt: "AM2PM",
    },
    {
      src: "/montage/1. Home Page/Our Clients/4. Client - CIP Projects.png",
      alt: "CIP Projects",
    },
    {
      src: "/montage/1. Home Page/Our Clients/5. Client - Quickflo Plumbing group.png",
      alt: "Quickflo Plumbing Group",
    },
    {
      src: "/montage/1. Home Page/Our Clients/6. Client - Metway Developemnts.webp",
      alt: "Metway Developments",
    },
    {
      src: "/montage/1. Home Page/Our Clients/7. Client - STC.webp",
      alt: "STC",
    },
    { src: "/montage/1. Home Page/Our Clients/8. Client - GV.png", alt: "GV" },
    {
      src: "/client logos/QMC Logo.jpeg",
      alt: "QMC Group",
    },
    {
      src: "/client logos/EMO Civil Logo.avif",
      alt: "EMO Civil",
    },
    {
      src: "/client logos 2/Abergilde.png",
      alt: "Abergilde",
    },
    {
      src: "/client logos 2/FDC.gif",
      alt: "FDC",
    },
    {
      src: "/client logos 2/hacer_group_logo.jpeg",
      alt: "Hacer Group",
    },
    {
      src: "/client logos 2/Impact Cranes Logo.png",
      alt: "Impact Cranes",
    },
  ];

  // Duplicate the logos to create a seamless loop
  const duplicatedLogos = [...logos, ...logos];
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId;
    let position = 0;
    const speed = 1; // Adjust speed

    const animate = () => {
      position -= speed;
      if (position <= -container.scrollWidth / 2) {
        position = 0;
      }
      container.style.transform = `translateX(${position}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 font-anton">
          OUR <span className="text-btn">CLIENTS</span>
        </h2>

        <div className="relative overflow-hidden">
          <div ref={containerRef} className="flex items-center py-2 md:py-4">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="flex-shrink-0 mx-0 lg:mx-4 hover:grayscale-0 transition-all duration-300"
                style={{
                  width: isMobile ? "100px" : "140px",
                  height: isMobile ? "60px" : "80px",
                  position: "relative",
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
            ))}
          </div>

          {/* Gradient overlays for smooth edges */}
          {/* <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-100 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-100 to-transparent z-10"></div> */}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
