import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    {
      title: "Accredited Traffic Controllers",
      image: "/montage/1. Home Page/Services We offer/Accredited TC.JPG",
      link: "/accredited-tfnsw-traffic-controllers"
    },
    {
      title: "Equipment Hire",
      image: "/montage/1. Home Page/Services We offer/Equipment Hire.png",
      link: "/contact"
    },
    {
      title: "TMP/ TGS/ TCP",
      image: "/montage/1. Home Page/Services We offer/TMP & TGS.jpeg",
      link: "/services/traffic-management-plans"
    },
    {
      title: "Council Permit Applications",
      image: "/montage/1. Home Page/Services We offer/Council applications.png",
      link: "/services/permit-application"
    },
    {
      title: "Event Management",
      image: "/montage/1. Home Page/Services We offer/Event-management.png",
      link: "/services/event-management-plans"
    },
    {
      title: "Signage Installation",
      image: "/montage/1. Home Page/Services We offer/Signage Installation.png",
      link: "/contact"
    }
  ];

  return (
    <section className="py-24 bg-white font-opensans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-24">
          <span className="text-btn font-semibold tracking-wider uppercase text-sm mb-4 block">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight font-anton uppercase">
            Traffic Management Solutions
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600">
              With over 10 years of experience in the industry, we deliver fully compliant traffic management plans, permits and on-site control for projects of all sizes across Australia.
            </p>
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative h-[380px] overflow-hidden border border-gray-200 hover:border-btn transition-all duration-300 rounded-lg"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority={index < 3}
                  quality={75}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
              </div>

              {/* Card Content - Centered */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 font-opensans">{service.title}</h3>

                <Link
                  href={service.link}
                  className="flex items-center gap-2 text-white hover:text-btn font-semibold transition-colors duration-300 group/link"
                >
                  <span className="border-white group-hover/link:border-btn transition-colors">
                    Learn More
                  </span>
                  <FaChevronRight className="text-sm transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;