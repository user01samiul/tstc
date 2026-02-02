"use client";
import { useEffect, useState } from "react";

const StatsSection = () => {
  const [projects, setProjects] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const startTime = Date.now();

    const animateCount = () => {
      const progress = Math.min(1, (Date.now() - startTime) / duration);
      setProjects(Math.floor(progress * 12600));
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    animateCount();
  }, []);

  const stats = [
    {
      value: "10+",
      label: "Years Experience",
      description:
        "Over a decade delivering safe traffic management solutions across NSW",
    },
    {
      value: "60",
      label: "Team Members",
      description: "Certified traffic controllers and management professionals",
    },
    {
      value: `+${projects.toLocaleString()}`,
      label: "Projects Completed",
      description:
        "Successfully managed traffic control for thousands of projects",
    },
  ];

  return (
    <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-4 animate-element">
              {/* Horizontal Line */}
              <div className="w-12 h-px bg-btn"></div>

              {/* Value */}
              <h3 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-btn leading-none">
                {stat.value}
              </h3>

              {/* Label */}
              <p className="text-xl sm:text-2xl font-semibold text-gray-900">
                {stat.label}
              </p>

              {/* Description */}
              <p
                className="text-base leading-relaxed"
                style={{ color: "#8E8E95" }}
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
