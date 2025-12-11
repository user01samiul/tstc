"use client";
import Image from "next/image";
import Link from "next/link";
import { FaAmbulance, FaAward, FaClock, FaShieldAlt } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const WeAreSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const teamMembers = [
    {
      name: "Savanah Armstrong",
      role: "Client Relations Manager / HSEQ Officer",
      image: "/team/white-Photoroom (4).png",
    },
    {
      name: "Taj Rahman",
      role: "Managing Director",
      image: "/team/white-Photoroom (2).png",
    },
    {
      name: "Saadat Ahmed",
      role: "Managing Director",
      image: "/team/white-Photoroom (3).png",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-anton uppercase">
            We Are <span className="text-blue-600">T&S Traffic Management</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              T&S Traffic Control has served NSW roads for over 10 years, our passion for road safety drives everything we do. As a trusted NSW-based traffic management company, we take pride in creating safer environments for road users, workers, and the community. Our mission is simple, to deliver{" "}
              <span className="font-bold text-blue-600 italic">"A Safe Way Home"</span> for everyone, every day.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              We believe that excellence begins with education. Our team is committed to ongoing training and professional development, ensuring we stay at the forefront of industry standards, safety practices, and innovative solutions. This dedication to learning allows us to continuously improve our services and deliver the highest level of safety and efficiency to our clients.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              At the heart of T&S Traffic Control is our people. We value our team's expertise, integrity, and commitment to quality, knowing that their passion and professionalism are what set us apart. By fostering a culture of respect, collaboration, and growth, we're able to deliver tailored traffic management solutions that exceed client expectations and keep NSW moving safely.
            </p>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105"
              >
                Learn More About Us
              </Link>
            </div>
          </div>

          {/* Team Photo Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Large Image - Spanning 2 rows */}
              <div className="col-span-2 relative h-[280px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={teamMembers[0].image}
                  alt={teamMembers[0].name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-xl font-bold">{teamMembers[0].name}</h4>
                    <p className="text-sm">{teamMembers[0].role}</p>
                  </div>
                </div>
              </div>

              {/* Two smaller images */}
              {teamMembers.slice(1).map((member, index) => (
                <div
                  key={index}
                  className="relative h-[220px] rounded-lg overflow-hidden shadow-xl"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-lg font-bold">{member.name}</h4>
                      <p className="text-xs">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>

        {/* Emergency Response CTA - Modern Banner */}
        <div className="mt-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl shadow-2xl p-12 border border-gray-800">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-anton uppercase tracking-wide">
              24/7 Emergency Traffic Management Response, Ready Within Hours
            </h3>
            <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
              Call our 24/7 Control Room Now! , Need a Traffic Crew Call US, Have Questions for Road Safety Call Us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:0450819004"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/30"
              >
                <FaAmbulance className="mr-2 text-xl" />
                Call Emergency Response
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-transparent text-white px-8 py-3 rounded-lg font-semibold text-lg border-2 border-gray-700 hover:border-blue-600 hover:bg-blue-600/10 transition-all duration-300"
              >
                Learn About Our Response
              </Link>
            </div>
          </div>
        </div>

        {/* Stats or Values Section - Modern Animated */}
        <div ref={statsRef} className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard
              value={10}
              suffix="+"
              label="Years of Experience"
              icon={<FaAward className="text-5xl text-blue-600" />}
              isVisible={isVisible}
              delay={0}
            />
            <StatCard
              value={24}
              suffix="/7"
              label="Emergency Response"
              icon={<FaClock className="text-5xl text-blue-600" />}
              isVisible={isVisible}
              delay={200}
            />
            <StatCard
              value={100}
              suffix="%"
              label="Safety Focused"
              icon={<FaShieldAlt className="text-5xl text-blue-600" />}
              isVisible={isVisible}
              delay={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Animated Stat Card Component
const StatCard = ({ value, suffix, label, icon, isVisible, delay }: {
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  isVisible: boolean;
  delay: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      const duration = 2000; // Animation duration in ms
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, value, delay]);

  return (
    <div
      className={`flex flex-col items-center justify-center text-center p-10 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-700 aspect-square ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-6">
        {icon}
      </div>
      <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-3">
        {count}{suffix}
      </div>
      <p className="text-gray-700 font-semibold text-base">
        {label}
      </p>
    </div>
  );
};

export default WeAreSection;
