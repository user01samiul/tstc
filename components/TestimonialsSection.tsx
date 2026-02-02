"use client";
import Image from "next/image";

const TestimonialsSection = () => {
  const testimonials = [
    {
      logo: "/client logos/D&M Logo.png",
      quote: `T&S Traffic Control provided excellent service to our project. Their planning, punctuality, and professionalism were impressive. The team was well-prepared, courteous, and ensured clear communication throughout.`,
      author: "Bob M",
      company: "D&M",
    },
    {
      logo: "/client logos/EMO Civil Logo.avif",
      quote: `T&S Traffic Control have provided great service to us at EMO Civil over the years. We have always found them to be willing to help with advice and solutions. We have no hesitation in recommending them.`,
      author: "Michael K",
      company: "EMO Civil",
    },
    {
      logo: "/client logos/QMC Logo.jpeg",
      quote: `T&S have been our go to Traffic Management team for years, and we'll never look further. Highly recommend them`,
      author: "Gerard W",
      company: "QMC",
    },
  ];

  return (
    <section
      className="py-20 md:py-32 px-5 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#151623" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Very Big Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight text-white mb-8 md:mb-12 animate-element">
          Providing Services to
          <br />
          Industrial Sectors and
          <br className="hidden sm:block" /> Government Divisions
        </h2>

        {/* Description */}
        <div className="mb-16 md:mb-20 max-w-4xl">
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed animate-element">
            As a leading Australian traffic control company, we've had the
            privilege of partnering with clients across various industries, many
            of which are a household name. Check out some of the reviews from
            businesses we've worked with since we first opened our doors.
          </p>
        </div>

        {/* Subheading */}
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-12 md:mb-16 animate-element">
          Client Testimonials
        </h3>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="space-y-6 animate-element p-8 rounded-2xl border-2 border-dashed border-white/30 hover:border-white/50 transition-all duration-300"
            >
              {/* Logo */}
              <div className="relative w-32 h-20">
                <Image
                  src={testimonial.logo}
                  alt={`${testimonial.company} logo`}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Quote */}
              <p className="text-base sm:text-lg leading-relaxed text-white/90">
                "{testimonial.quote}"
              </p>

              {/* Company */}
              <p className="text-xl font-semibold text-white">
                {testimonial.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
