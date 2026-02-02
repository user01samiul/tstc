import Image from "next/image";

export default function Features() {
  const features = [
    {
      title: "Accredited Traffic Controllers",
      description:
        "Professional traffic controllers certified by TfNSW, ensuring compliance and safety on every project.",
    },
    {
      title: "Equipment Hire",
      description:
        "Comprehensive range of traffic management equipment available for hire, including signs, barriers, and VMS boards.",
    },
    {
      title: "TMP/ TGS/ TCP",
      description:
        "Fully compliant Traffic Management Plans, Traffic Guidance Schemes, and Traffic Control Plans tailored to your project.",
    },
    {
      title: "Council Permit Applications",
      description:
        "Expert assistance with council permit applications, ensuring all documentation meets local authority requirements.",
    },
    {
      title: "Event Management",
      description:
        "Comprehensive traffic management solutions for events of all sizes, ensuring smooth flow and participant safety.",
    },
    {
      title: "Signage Installation",
      description:
        "Professional installation and maintenance of traffic signs, ensuring visibility and compliance with Australian standards.",
    },
  ];

  return (
    <section className="py-6 md:py-16 px-5 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Side - Image with Square Shape */}
          <div className="relative order-2 lg:order-1 animate-element">
            <div
              className="relative w-full aspect-square overflow-hidden rounded-lg"
              style={{
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Image
                src="/montage/1. Home Page/Services We offer/Accredited TC.JPG"
                alt="Traffic Management Solutions"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Side - Title and Features */}
          <div className="order-1 lg:order-2 space-y-12">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-black leading-[1.15] animate-element">
              With over 10 years of experience in the industry, we deliver fully
              compliant traffic management plans, permits and on-site control
              for projects of all sizes across Australia.
            </h2>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {features.map((feature, index) => (
                <div key={index} className="space-y-3 animate-element">
                  {/* Horizontal Line */}
                  <div className="w-12 h-px bg-black"></div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-btn">
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
      </div>
    </section>
  );
}
