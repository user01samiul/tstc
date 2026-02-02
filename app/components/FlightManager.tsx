export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "The paramedic instructors were incredible. Their real-world experience made the training so much more valuable than just reading from a textbook.",
      name: "Sarah Mitchell",
      role: "School Teacher",
    },
    {
      quote:
        "We've used Hearts Ahead for our entire workplace first aid training. Professional service, flexible scheduling, and the team came directly to our office.",
      name: "James Chen",
      role: "HR Manager, TechCorp",
    },
    {
      quote:
        "As a support worker, the NDIS-specific training was exactly what I needed. Practical scenarios that I encounter every day in my role.",
      name: "Emma Rodriguez",
      role: "NDIS Support Worker",
    },
  ];

  return (
    <section
      className="py-20 md:py-32 px-5 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#151623" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-16 md:mb-20 animate-element">
          What Our Students Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="space-y-6 animate-element">
              {/* Large Quote Mark */}
              <svg
                className="w-12 h-12 text-white/20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Quote */}
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                {testimonial.quote}
              </p>

              {/* Horizontal Line */}
              <div className="w-12 h-px bg-white/30"></div>

              {/* Author */}
              <div className="space-y-1">
                <p className="text-white font-semibold text-lg">
                  {testimonial.name}
                </p>
                <p className="text-white/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
