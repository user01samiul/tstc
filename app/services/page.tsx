import Link from "next/link";

const serviceGroups = [
  {
    title: "Traffic Engineering & Planning",
    services: [
      {
        name: "Traffic Plans",
        link: "/services/traffic-plans",
        description:
          "Detailed traffic plans and guidance schemes (TGS/TCP) for safe, compliant site operations, tailored to your project needs.",
      },
      {
        name: "Traffic Management Plans (TMP) (CTMP)",
        link: "/services/traffic-management-plans",
        description:
          "Comprehensive TMPs and CTMPs outlining methodology, risk controls, and communication for construction and events.",
      },
      {
        name: "Swept Path Analysis (SPA)",
        link: "/services/swept-path",
        description:
          "Accurate swept path analysis using industry-standard software to ensure safe vehicle movements through work zones.",
      },
      {
        name: "Event Management Plans",
        link: "/services/event-management-plans",
        description:
          "Traffic and crowd management plans for events, including road closures, detours, and stakeholder coordination.",
      },
    ],
  },
  {
    title: "Permit Applications",
    services: [
      {
        name: "TfNSW TMC ROL",
        link: "/services/permit-application#tf-nsw",
        description:
          "Preparation and submission of Road Occupancy Licences (ROLs) through Transport for NSW, including compliance documentation.",
      },
      {
        name: "Council Permits",
        link: "/services/permit-application#council-permits",
        description:
          "Council road occupancy permits, local road access, footpath closures, and parking bay suspensions across NSW.",
      },
      {
        name: "STA Bus Approvals",
        link: "/services/permit-application#sta-bus",
        description:
          "Coordination with bus operators and authorities for works affecting bus routes, stops, and bus lane closures.",
      },
      {
        name: "Emergency Approvals",
        link: "/services/permit-application#emergency-approvals",
        description:
          "Fast-tracked permit applications and approvals for urgent and emergency works requiring immediate response.",
      },
    ],
  },
  {
    title: "Traffic Controllers",
    services: [
      {
        name: "Accredited TC",
        link: "/services/accredited-tc",
        description:
          "Qualified and accredited traffic controllers for all project scales, ensuring safe and efficient site operations.",
      },
      {
        name: "24 Hour Response",
        link: "/services/24-hour-response",
        description:
          "Rapid deployment teams available 24/7 for emergency and after-hours traffic management needs.",
      },
      {
        name: "Team Leaders",
        link: "/services/team-leaders",
        description:
          "Experienced team leaders coordinating traffic controllers, managing compliance, and ensuring site safety.",
      },
      {
        name: "TMA Operators",
        link: "/services/tma-operators",
        description:
          "Skilled Truck-Mounted Attenuator operators for high-speed and complex traffic environments.",
      },
    ],
  },
  {
    title: "Signage Installation",
    services: [
      {
        name: "Temporary & Permanent Street Signage",
        link: "/services/signage-installation",
        description:
          "Supply and installation of regulatory, advisory, temporary, and permanent street signage for all project types.",
      },
    ],
  },
];

import Image from "next/image";

export default function Services() {
  return (
    <div className="font-sans overflow-x-hidden">
      {/* Hero Section - matches /faqs style */}
      <section className="relative min-h-[350px] md:min-h-[400px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/montage/3. Services We Offer/Acreditted TC/1.png"
            alt="Services Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 w-full max-w-7xl px-5 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-anton uppercase mb-4">
            Our <span className="text-btn">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Explore our full range of traffic management, planning, and
            implementation services. Click any service to learn more.
          </p>
        </div>
      </section>

      {/* Services List Section */}
      <main className="bg-white min-h-screen py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12 md:gap-16">
            {serviceGroups.map((group) => (
              <section key={group.title}>
                <h2 className="text-2xl md:text-3xl font-bold text-btn mb-6 font-anton uppercase">
                  {group.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {group.services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.link}
                      className="relative block bg-[#FAFAFA] transition-all duration-300 p-6 h-full group overflow-hidden"
                    >
                      {/* Decorative SVG in top-right corner */}
                      <svg
                        className="absolute top-0 right-0 w-16 h-16 text-btn opacity-10 pointer-events-none"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="48" cy="16" r="16" fill="currentColor" />
                        <rect
                          x="0"
                          y="48"
                          width="32"
                          height="8"
                          rx="4"
                          fill="currentColor"
                        />
                      </svg>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-btn transition-colors relative z-10">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 text-base relative z-10">
                        {service.description}
                      </p>
                      <div className="relative z-10 mt-4">
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-btn text-white rounded-full hover:bg-btn/90 transition-colors duration-200 shadow-none focus:outline-none focus:ring-2 focus:ring-btn/40 cursor-pointer">
                          View Details
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="py-16 px-5 sm:px-6 lg:px-8 bg-btn mt-16">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-anton uppercase">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8">
            Contact us today for expert traffic management, planning, and permit
            solutions. Our team is ready to help you deliver your project safely
            and efficiently.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 bg-white text-btn px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/90 hover:scale-105"
          >
            Get A Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
