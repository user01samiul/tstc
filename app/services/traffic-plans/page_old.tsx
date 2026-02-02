"use client";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";
import { FaHardHat, FaPhoneAlt, FaRoad, FaTrafficLight, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const TrafficManagementPlan = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a TGS or TCP",
      answer:
        "A TGS (Traffic Guidance Scheme) is a detailed plan that outlines how traffic will be managed around a worksite or event. A TCP (Traffic Control Plan) serves a similar purpose, providing specific instructions for managing traffic flow during roadworks, construction, or events that impact normal traffic conditions.",
    },
    {
      question: "What is a TMP or CTMP",
      answer:
        "A TMP (Traffic Management Plan) is a comprehensive document that outlines how traffic will be safely managed during construction or events. A CTMP (Construction Traffic Management Plan) is a specialized TMP required when construction activities impact public roads, footpaths, or traffic flow. Both plans ensure safety and compliance with road authority requirements.",
    },
    {
      question: "What is a ROL",
      answer:
        "A ROL (Road Occupancy Licence) is a permit issued by the relevant road authority that allows you to occupy part of a road or lane for construction, maintenance, or events. You need a ROL whenever your activities require the use of public road space.",
    },
  ];

  return (
    <main>
      {/* Hero Section (Black Background) */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center font-opensans">
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC00810.JPG"
            alt="Traffic Management Plan"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-anton">
              T&S SERVICES <br />
              <span className="text-btn">TRAFFIC MANAGEMENT PLAN</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-opensans">
              Detailed, customized traffic management plans designed to
              prioritize safety and efficiency for your project.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 bg-btn hover:bg-btn/90 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 font-opensans"
              >
                <FaPhoneAlt className="text-xl" />
                Reach Out Today
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce flex flex-col items-center">
            <div className="w-8 h-12 border-2 border-btn rounded-full flex justify-center">
              <div className="w-1 h-3 bg-btn rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Traffic Planning Section (White Background) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              Traffic Planning
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              TRAFFIC GUIDANCE <span className="text-btn">SCHEMES (TGS)</span>
            </h2>
            <div className="w-24 h-1 bg-btn mx-auto"></div>
          </div>
          <div className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed space-y-6 font-opensans">
            <p>
              Our in-house design team develops <strong>Traffic Guidance Schemes</strong> that comply with <strong>TfNSW (RMS) and AS1742.3 standards</strong>, ensuring safety and practicality for every site.
            </p>
            <p>
              Each TGS is designed with real-world application in mind- balancing the needs of workers, motorists, and pedestrians. We assess traffic volumes, road geometry, and environmental factors to create layouts that are both compliant and efficient.
            </p>
            <p className="font-semibold text-gray-800">Our TGS services include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Detailed traffic control plans using professional software</li>
              <li>Custom designs for roadworks, lane closures, shoulder works, and intersections</li>
              <li>Multi-stage and long-term layouts for civil and infrastructure projects</li>
              <li>Night works, event management, and complex staging designs</li>
              <li>Fast turnarounds for emergency and short-notice works</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Customised Plans Section (Black Background, Right Side Image) */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-btn"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                Tailored to Your{" "}
                <span className="text-btn">Project's Needs</span>
              </h3>
              <div className="space-y-5 text-gray-300 mb-10 font-opensans">
                <p className="leading-relaxed">
                  T&S Traffic Control designs traffic management plans that
                  align precisely with your project’s specific conditions,
                  whether it’s a large-scale construction site, a public event,
                  or routine road maintenance. Our plans integrate advanced
                  strategies and full regulatory compliance.
                </p>
                <p className="leading-relaxed">
                  Our customized approach minimizes disruptions, enhances
                  safety, and ensures smooth operations throughout your project,
                  consistently surpassing industry standards.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] border-4 border-btn shadow-xl">
              <Image
                src="/DSC00717.JPG"
                alt="Customised Traffic Management Plans"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-btn/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Tools Section (White Background, Left Side Image) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] border-4 border-btn shadow-xl">
              <Image
                src="/DSC00844.JPG"
                alt="Advanced Tools and Execution"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-btn/20 mix-blend-multiply"></div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-btn"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                Cutting-Edge Tools and{" "}
                <span className="text-btn">Skilled Execution</span>
              </h3>
              <div className="space-y-5 text-gray-600 mb-10 font-opensans">
                <p className="leading-relaxed">
                  T&S Traffic Control employs advanced technology and proven
                  traffic management strategies to create and implement your
                  TMP. Our experienced team uses state-of-the-art software to
                  anticipate and address potential traffic challenges
                  effectively.
                </p>
                <p className="leading-relaxed">
                  This forward-thinking approach ensures smooth traffic flow and
                  significantly reduces incident risks, protecting both workers
                  and the public throughout your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Section (Black Background) */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-white font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton">
              COMPREHENSIVE{" "}
              <span className="text-btn">COVERAGE AND SERVICES</span>
            </h2>
            <div className="w-24 h-1 bg-btn mx-auto"></div>
          </div>
          <div className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed space-y-6 font-opensans">
            <p>
              Beyond crafting detailed traffic management plans, T&S Traffic
              Control offers a full suite of traffic management services,
              including precise traffic guidance schemes and rapid-response
              emergency traffic management to address unforeseen challenges.
            </p>
            <p>
              Our goal is to deliver integrated, seamless services that ensure
              project success and safety across diverse scenarios.
            </p>
          </div>
        </div>
      </section>

      {/* Get in Touch Section (White Background, Left Side Image) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] border-4 border-btn shadow-xl">
              <Image
                src="/DSC00850.JPG"
                alt="Get in Touch"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-btn/20 mix-blend-multiply"></div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-btn"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                Contact Us for{" "}
                <span className="text-btn">Custom Traffic Solutions</span>
              </h3>
              <div className="space-y-5 text-gray-600 mb-10 font-opensans">
                <p className="leading-relaxed">
                  Ready to optimize your project’s safety and efficiency? Reach
                  out to T&S Traffic Control to explore how our tailored traffic
                  management plans can meet your unique requirements.
                </p>
                <p className="leading-relaxed">
                  We also offer support for traffic guidance schemes and
                  emergency response services to ensure your project’s needs are
                  fully met.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-block px-10 py-4 bg-btn text-white font-bold hover:bg-white hover:text-btn transition-all duration-300 border border-btn group relative overflow-hidden font-opensans"
              >
                <span className="relative z-10">GET A QUOTE</span>
                <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Section (Black Background) */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-white font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton">
              EXPLORE OUR <span className="text-btn">OTHER SERVICES</span>
            </h2>
            <div className="w-24 h-1 bg-btn mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Permit Applications",
                icon: <FaHardHat className="text-3xl" />,
                description:
                  "We manage the intricate process of obtaining traffic management permits from relevant authorities, ensuring your project complies with all regulations.",
              },
              {
                name: "Accredited Traffic Controllers",
                icon: <FaTrafficLight className="text-3xl" />,
                description:
                  "Our certified traffic controllers expertly manage vehicle and pedestrian flow around your site, maintaining stringent safety standards in all conditions.",
              },
              {
                name: "Equipment Hire",
                icon: <FaRoad className="text-3xl" />,
                description:
                  "We provide a diverse range of high-quality traffic management equipment for rent, including signs, barriers, and advanced tools to meet your project’s needs.",
              },
              {
                name: "Emergency Response Traffic Management",
                icon: <FaPhoneAlt className="text-3xl" />,
                description:
                  "Our 24/7 emergency response service quickly addresses unexpected traffic issues, deploying resources and expertise to manage disruptions effectively.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-black p-8 text-center border border-gray-800 hover:border-btn transition-all duration-500 hover:shadow-lg hover:shadow-btn/20 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-btn/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex justify-center mb-6 relative z-10">
                  <div className="p-5 bg-btn rounded-full group-hover:rotate-[15deg] transition-transform duration-500">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold relative z-10 group-hover:text-btn transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-gray-300 mt-4 relative z-10 font-opensans">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section (White Background) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              Have Questions?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              FREQUENTLY ASKED <span className="text-btn">QUESTIONS</span>
            </h2>
            <div className="w-24 h-1 bg-btn mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4 mb-10">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200"
                >
                  <button
                    className="w-full flex justify-between items-center p-5 text-left text-gray-900 font-semibold text-base md:text-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openFaqIndex === index}
                    aria-controls={`faq-content-${index}`}
                  >
                    <span>{faq.question}</span>
                    <FaChevronDown
                      className={`text-btn flex-shrink-0 ml-4 transition-transform duration-300 ${
                        openFaqIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    id={`faq-content-${index}`}
                    className="grid transition-all duration-300 ease-in-out"
                    style={{
                      gridTemplateRows: openFaqIndex === index ? '1fr' : '0fr',
                    }}
                  >
                    <div className="overflow-hidden">
                      <div className="p-5 pt-3 text-gray-700 leading-relaxed font-opensans">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ContactForm/>
    </main>
  );
};

export default TrafficManagementPlan;
