import Link from "next/link";

export default function Experience() {
  const features = [
    {
      title: "Extensive Experience",
      description:
        "With two decades in traffic control, we bring a wealth of experience to the table, having successfully managed diverse projects. This expertise means that we understand the intricacies of traffic control like no other.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
    },
    {
      title: "Client-Centric Focus",
      description:
        "Our unwavering commitment to client satisfaction is the cornerstone of our services. We put your needs and preferences first to ensure your project's success and your peace of mind.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Safety Above All",
      description:
        "Safety is paramount to us. Our dedicated team of highly trained accredited professionals prioritises the safety of every worker, contractor and road user on site.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Round-the-Clock Availability",
      description:
        "We operate 24/7, providing you with the assurance that we're here whenever you need us. This commitment to flexibility ensures your project is always on track.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Tailored Solutions",
      description:
        "We offer custom traffic solutions backed by a fleet of modern, fully-equipped vehicles fitted with the latest safety tech, ensuring efficiency and compliance with Australian Standards.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
          />
        </svg>
      ),
    },
    {
      title: "Cutting-Edge Fleet",
      description:
        "Modern vehicles equipped with the latest safety technology ensure your project meets all compliance requirements while maintaining the highest standards of efficiency.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 md:py-32 px-5 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Very Big Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight text-black mb-16 md:mb-20 animate-element">
          Why Choose <span className="text-btn">T&S</span>
          <br className="md:hidden" /> Traffic Control
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Description Text */}
          <div className="space-y-6 animate-element">
            <p className="text-lg sm:text-xl md:text-2xl text-black leading-relaxed">
              When it comes to selecting a dependable traffic control company in
              Australia, T&S is the trusted name in the industry. Here's what
              sets us apart compared to other Australian traffic management
              providers.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-black leading-relaxed">
              By choosing T&S, you're opting for a level of professionalism,
              safety and responsiveness that sets the benchmark in the traffic
              control industry. Trust us to keep your Australian project moving
              — safely and without delays.
            </p>

            {/* Contact Us Button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-btn text-white rounded-full hover:bg-btn/90 transition-all font-medium text-base mt-4"
            >
              Get a Personalised Quote
            </Link>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="space-y-4 animate-element">
                {/* Icon with Dotted Square Background */}
                <div className="relative w-16 h-16">
                  <div
                    className="absolute inset-0 border-2 border-dashed border-btn/30 rounded-lg"
                    style={{ width: "4rem", height: "4rem" }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center text-btn">
                    {feature.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-pink">
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#8E8E95" }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
