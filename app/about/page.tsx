"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaRoad, FaChevronDown } from "react-icons/fa";

const About = () => {
  // State for Our Approach accordion
  const [openSteps, setOpenSteps] = useState<number[]>([0]);

  // Ref for Community slideshow animation
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Toggle function for accordion
  const toggleStep = (stepIndex: number) => {
    setOpenSteps((prev) =>
      prev.includes(stepIndex)
        ? prev.filter((i) => i !== stepIndex)
        : [...prev, stepIndex]
    );
  };

  // Community slideshow animation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let position = 0;
    const speed = 1;

    const animate = () => {
      position -= speed;
      if (position <= -container.scrollWidth / 2) {
        position = 0;
      }
      container.style.transform = `translateX(${position}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Our Approach steps data
  const approachSteps = [
    {
      number: 1,
      title: "Assess",
      bullets: [
        "Conduct a site inspection",
        "Complete location risk assessment",
        "Review complete project program",
        "Identify any possible risks and potential issues",
        "Record all outcomes",
      ],
    },
    {
      number: 2,
      title: "Address",
      bullets: [
        "Select appropriate traffic staging and methodologies",
        "Define traffic resourcing required",
        "Provide complete costs for project",
      ],
    },
    {
      number: 3,
      title: "Design",
      bullets: [
        "Correspond to RMS TCAWS Manual & AS1742.3 requirements",
        "Draft all required plans and documents",
        "Produce a SWMS addressing identified hazards",
        "Internal Review of all documents for works",
      ],
    },
    {
      number: 4,
      title: "Discuss",
      bullets: [
        "Communicate with stakeholders and relevant authorities",
        "Feedback to client",
        "Obtain all permits and approvals",
        "Finalise contractor mobilisation schedule",
      ],
    },
    {
      number: 5,
      title: "Deliver",
      bullets: [
        "Handover all documents with Traffic Project Supervisor",
        "Hold a formal induction and pre-start toolbox talk with all crew",
        "Operate continuous communications - Submit all Audits to client daily",
        "Maintain site audits",
      ],
    },
    {
      number: 6,
      title: "Review",
      bullets: [
        "Review all operations",
        "Client Feedback and further implementations",
        "Measure performance against KPIs",
        "Assess all document control",
        "Archive documentation for statutory retention and future tenders",
      ],
    },
  ];

  // Community sponsors data
  const communitySponsors = [
    {
      src: "/montage/2. About Us/Our Communities/Regents park logo.webp",
      alt: "Regents Park Saints Soccer Club",
    },
    {
      src: "/montage/2. About Us/Our Communities/Build Alpha Kids.png",
      alt: "Build Alpha Kids Youth Athletic Program",
    },
    {
      src: "/montage/2. About Us/Our Communities/Jalalabad-NSW Foundation.webp",
      alt: "Jalalabad NSW Foundation",
    },
    {
      src: "/montage/2. About Us/Our Communities/5b5 soloutions.png",
      alt: "5b5 Solutions",
    },
    {
      src: "/montage/2. About Us/Our Communities/Brothers in need.png",
      alt: "Brothers in Need",
    },
    {
      src: "/montage/2. About Us/Our Communities/Sadaqa.png",
      alt: "Sadaqa",
    },
    {
      src: "/montage/2. About Us/Our Communities/Al Hafiz Quran Centre.avif",
      alt: "Al Hafiz Quran Centre",
    },
  ];

  // Duplicate logos for seamless loop
  const duplicatedSponsors = [...communitySponsors, ...communitySponsors];

  return (
    <main>
      {/* Hero Section (Black Background) */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center font-opensans">
        <div className="absolute inset-0 z-0">
          <Image
            src="/3.webp"
            alt="About T&S Traffic Control"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-anton uppercase">
              FOUNDED BY SAADAT & TAJ <br />
              <span className="text-btn">A SAFE WAY HOME</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
              Built by lifelong friends on the belief that traffic management is about more than signs and setups - it's about people.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 bg-btn hover:bg-btn/90 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <FaPhoneAlt className="text-xl" />
                Get In Touch
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

      {/* Our Story Section (White Background) */}
      <section id="our-story" className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Company
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              FOUNDED BY FAMILY <br />
              <span className="text-btn">BUILT ON TRUST</span>
            </h2>
            <div className="w-24 h-1 bg-btn mx-auto"></div>
          </div>
          <div className="text-gray-700 max-w-4xl mx-auto text-lg leading-relaxed space-y-6">
            <p>
              Founded by lifelong friends and high school mates <strong>Saadat</strong> and <strong>Taj</strong>, T&S Traffic Control was built on the belief that traffic management should be about more than signs and setups - it's about people.
            </p>
            <p>
              After years in the industry, we saw an opportunity to raise the standard: to build a company that values safety, communication, and integrity above all else. What began as a small Sydney venture has grown into a <strong>family-run business</strong> trusted across NSW for delivering professional, compliant, and dependable traffic management.
            </p>
            <p>
              At T&S, we believe that strong relationships - with our clients, our crews, and our community - are what drive successful projects. We take pride in being reliable, transparent, and adaptable, ensuring every site runs smoothly from start to finish.
            </p>
            <p>
              Every project we take on is guided by one clear promise - <strong>"A Safe Way Home."</strong>
            </p>
            <p>
              It's more than our motto; it's the reason we do what we do.
            </p>
          </div>
        </div>
      </section>

      {/* Meet The Team Section */}
      <section id="our-team" className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block">
              Leadership
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              MEET THE <span className="text-btn">TEAM</span>
            </h2>
            <div className="w-24 h-1 bg-btn mx-auto"></div>
          </div>

          {/* Team Members - Horizontal Cards */}
          <div className="space-y-16">
            {/* Taj Rahman */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] border-4 border-btn shadow-xl">
                <Image
                  src="/team/white-Photoroom (2).png"
                  alt="Taj Rahman"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-btn/10 mix-blend-multiply"></div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-3xl font-bold font-anton uppercase">Taj Rahman</h3>
                <p className="text-btn font-semibold text-lg">Business Development Manager</p>
                <p className="text-gray-600 italic">B. Construction Management</p>
                <p className="text-gray-700 leading-relaxed">
                  With over 10 years of experience in the construction and traffic management sectors, Taj combines industry knowledge with a strong focus on client relationships and project success. Holding a Honours degree in Construction Management, he brings a deep understanding of on-site operations, planning, and stakeholder coordination. As Business Development Manager, Taj plays a key role in connecting clients with tailored traffic solutions - ensuring every project is delivered safely, efficiently, and to the highest standards.
                </p>
              </div>
            </div>

            {/* Saadat Ahmed */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] border-4 border-btn shadow-xl md:order-2">
                <Image
                  src="/team/white-Photoroom (3).png"
                  alt="Saadat Ahmed"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-btn/10 mix-blend-multiply"></div>
              </div>
              <div className="flex flex-col justify-center space-y-4 md:order-1">
                <h3 className="text-3xl font-bold font-anton uppercase">Saadat Ahmed</h3>
                <p className="text-btn font-semibold text-lg">General Manager</p>
                <p className="text-gray-600 italic">B.Eng (Civil) | Cert IV in Work Health & Safety</p>
                <p className="text-gray-700 leading-relaxed">
                  With a background in Civil Engineering, coupled with Cert IV in WHS and hands-on experience in the traffic management industry since 2017, Saadat brings both technical expertise and operational leadership to T&S Traffic Control. As General Manager, he oversees all aspects of the company's operations - from project delivery and compliance to business growth and client relationships. His goal is to lead T&S Traffic Control with a focus on safety, quality, and continuous improvement.
                </p>
              </div>
            </div>

            {/* Savanah Armstrong */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] border-4 border-btn shadow-xl">
                <Image
                  src="/team/white-Photoroom (4).png"
                  alt="Savanah Armstrong"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-btn/10 mix-blend-multiply"></div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-3xl font-bold font-anton uppercase">Savanah Armstrong</h3>
                <p className="text-btn font-semibold text-lg">WHS Officer</p>
                <p className="text-gray-600 italic">Cert IV in Work Health & Safety</p>
                <p className="text-gray-700 leading-relaxed">
                  Savanah brings a strong commitment to safety, communication, and client service across her multifaceted role at T&S Traffic Control. Holding a Certificate IV in Work Health & Safety, she ensures all field operations meet the highest safety and compliance standards, fostering a proactive safety culture across the business. In addition to her WHS responsibilities, Savanah leads client relations and sales, maintaining open communication with partners and ensuring their needs are met from project initiation to completion. Her approachable nature and attention to detail make her a key link between the office, field crews, and clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values and Differences Section */}
      <section id="our-values" className="py-24 bg-gray-50 text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block">
              What Sets Us Apart
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              OUR VALUES & <span className="text-btn">DIFFERENCES</span>
            </h2>
            <div className="w-24 h-1 bg-btn mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                At <strong>T&S Traffic Control</strong>, safety is at the heart of everything we do. Guided by our commitment to delivering <em>A Safe Way Home</em>, we strive to uphold the highest standards of professionalism, reliability, and integrity across every project.
              </p>
              <p>
                Our team is dedicated to continuous improvement. Through investing in training, innovation, and our team to enhance the quality and efficiency of our services. What sets us apart is our unwavering focus on safety excellence and our proactive approach to managing traffic solutions that keep people, communities, and worksites protected at all times.
              </p>
              <div className="pt-6 border-t-2 border-btn">
                <p className="text-2xl font-bold font-anton text-center">
                  <span className="text-btn">Safe.</span> Reliable. <span className="text-btn">Responsive</span>
                </p>
              </div>
            </div>

            <div className="relative h-[500px] border-4 border-btn shadow-xl">
              <Image
                src="/montage/2. About Us/Our Values/Taj Safety Check.JPG"
                alt="Safety Check"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-btn/10 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach - 6 Step Process */}
      <section id="our-approach" className="py-24 bg-gradient-to-b from-gray-50 to-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block">
              How We Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              OUR <span className="text-btn">APPROACH</span>
            </h2>
            <div className="w-24 h-1 bg-btn mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Our proven 6-step process ensures comprehensive traffic management solutions
            </p>
          </div>

          {/* 6 Step Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approachSteps.map((step) => {
              const isOpen = openSteps.includes(step.number - 1);
              return (
                <div
                  key={step.number}
                  className="group relative bg-white border border-gray-200 hover:border-btn transition-all duration-300 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1"
                >
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-btn/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Number Badge */}
                  <div className="absolute -top-3 -left-3 w-16 h-16 bg-gradient-to-br from-btn to-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold font-anton z-10 shadow-xl border-4 border-white">
                    {step.number}
                  </div>

                  {/* Card Content */}
                  <div className="relative pt-12 px-8 pb-8">
                    <h3 className="text-2xl font-bold font-anton uppercase mb-6 text-gray-900 group-hover:text-btn transition-colors duration-300">
                      {step.title}
                    </h3>

                    {/* Expandable Details (accordion pattern) */}
                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <ul className="space-y-3 text-gray-700 mb-6 pt-2">
                          {step.bullets.map((point, idx) => (
                            <li key={idx} className="flex items-start text-sm leading-relaxed">
                              <span className="text-btn mr-3 flex-shrink-0 font-bold text-lg">
                                •
                              </span>
                              <span className="pt-0.5">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleStep(step.number - 1)}
                      className="w-full mt-4 py-3 px-4 bg-gray-50 hover:bg-btn text-gray-700 hover:text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all duration-300 group/btn border border-gray-200 hover:border-btn"
                    >
                      <span>{isOpen ? "Hide" : "View"} Details</span>
                      <FaChevronDown
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Communities Section - Slideshow */}
      <section id="our-community" className="py-24 bg-gray-50 text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block">
              Community Support
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              WE SUPPORT OUR <span className="text-btn">COMMUNITIES</span>
            </h2>
            <div className="w-24 h-1 bg-btn mx-auto"></div>
          </div>

          {/* Auto-scrolling carousel */}
          <div className="relative overflow-hidden mb-12">
            <div ref={containerRef} className="flex items-center py-4">
              {duplicatedSponsors.map((sponsor, index) => (
                <div
                  key={`${sponsor.alt}-${index}`}
                  className="flex-shrink-0 mx-4 transition-all duration-300"
                  style={{
                    width: isMobile ? "120px" : "180px",
                    height: isMobile ? "70px" : "100px",
                    position: "relative",
                  }}
                >
                  <Image
                    src={sponsor.src}
                    alt={sponsor.alt}
                    fill
                    className="object-contain"
                    quality={100}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed space-y-6 text-center">
            <p>
              We believe that supporting our community is just as important as
              the work we do on the road. As a proud Sydney-based company, we're
              committed to giving back to the people and neighbourhoods that
              support us.
            </p>
            <p>
              We're honoured to sponsor the <strong>Regents Park Saints Soccer Club</strong> and the <strong>Build Alpha Kids Youth Athletic Program</strong>, helping young
              athletes build confidence, teamwork, and a passion for healthy
              living. Beyond sport, we also contribute to a range of local
              charities and community causes, reinforcing our dedication to
              making a positive and lasting impact.
            </p>
            <p>
              For us, community support isn't just a commitment — it's part of
              who we are. Together, we're helping create <em>A Safe Way Home</em> for
              everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Accreditations Section (White Background) */}
      <section id="accreditations" className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Credentials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton">
              WE ARE <span className="text-btn">ISO AND LGA CERTIFIED</span>
            </h2>
            <div className="w-24 h-1 bg-btn mx-auto"></div>
          </div>

          <div className="mt-16 flex flex-wrap justify-center items-center gap-8">
            {[
              "/AshburtonV1(ISO-45001)Transparent-A.png",
              "/certified2.jpeg",
              "/certified3.jpeg",
              "/footer1.png",
              "/footer2.png",
            ].map((image, index) => (
              <div key={index} className="relative w-[200px] h-[150px]">
                <Image
                  src={image}
                  alt="Certification"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            ))}
          </div>

          <div className="mt-12 text-gray-700 max-w-4xl mx-auto text-lg leading-relaxed text-center">
            <p>
              T&S is proud to be ISO certified, a mark of our commitment to meeting the highest
              international standards for quality, safety, and operational excellence. ISO certification means our systems, processes,
              and services have been independently assessed and verified to comply with globally recognised benchmarks. For our
              clients, this provides confidence that every project we deliver is managed with precision, accountability, and
              consistency, ensuring safe, efficient, and reliable outcomes every time.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;