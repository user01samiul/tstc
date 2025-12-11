"use client";
import Image from "next/image";
import Link from "next/link";

const WeAreSection = () => {
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

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
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

        {/* Stats or Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-gray-200">
          <div className="text-center p-6">
            <div className="text-5xl font-bold text-blue-600 mb-2 font-anton">10+</div>
            <p className="text-gray-700 font-semibold text-lg">Years of Experience</p>
          </div>
          <div className="text-center p-6">
            <div className="text-5xl font-bold text-blue-600 mb-2 font-anton">24/7</div>
            <p className="text-gray-700 font-semibold text-lg">Emergency Response</p>
          </div>
          <div className="text-center p-6">
            <div className="text-5xl font-bold text-blue-600 mb-2 font-anton">100%</div>
            <p className="text-gray-700 font-semibold text-lg">Safety Focused</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeAreSection;
