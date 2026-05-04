// --- Next.js Metadata API for About Page SEO ---
export const metadata = {
  metadataBase: new URL("https://www.tstc.com.au/"),
  title: "About Us | T&S Traffic Control - Our Story & Team",
  description:
    "Learn about T&S Traffic Control, our mission, values, and the experienced team behind Sydney's trusted traffic management solutions. Discover our story, approach, and community involvement.",
  openGraph: {
    title: "About Us | T&S Traffic Control - Our Story & Team",
    description:
      "Learn about T&S Traffic Control, our mission, values, and the experienced team behind Sydney's trusted traffic management solutions.",
    url: "https://www.tstc.com.au/about",
    siteName: "T&S Traffic Control",
    images: [
      {
        url: "/logo.png",
        width: 240,
        height: 80,
        alt: "T&S Traffic Control Logo",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | T&S Traffic Control - Our Story & Team",
    description:
      "Learn about T&S Traffic Control, our mission, values, and the experienced team behind Sydney's trusted traffic management solutions.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://www.tstc.com.au/about",
  },
};

import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import AnimatedSection from "../components/AnimatedSection";

const About = () => {
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

  const teamMembers = [
    {
      name: "Taj Rahman",
      title: "Business Development Manager",
      education: "B. Construction Management",
      image: "/team/white-Photoroom (2).png",
      description:
        "With over 10 years of experience in the construction and traffic management sectors, Taj combines industry knowledge with a strong focus on client relationships and project success. Holding a Honours degree in Construction Management, he brings a deep understanding of on-site operations, planning, and stakeholder coordination. As Business Development Manager, Taj plays a key role in connecting clients with tailored traffic solutions - ensuring every project is delivered safely, efficiently, and to the highest standards.",
    },
    {
      name: "Saadat Ahmed",
      title: "General Manager",
      education: "B.Eng (Civil) | Cert IV in Work Health & Safety",
      image: "/team/white-Photoroom (3).png",
      description:
        "With a background in Civil Engineering, coupled with Cert IV in WHS and hands-on experience in the traffic management industry since 2017, Saadat brings both technical expertise and operational leadership to T&S Traffic Control. As General Manager, he oversees all aspects of the company's operations - from project delivery and compliance to business growth and client relationships. His goal is to lead T&S Traffic Control with a focus on safety, quality, and continuous improvement.",
    },
    {
      name: "Savanah Armstrong",
      title: "WHS Officer",
      education: "Cert IV in Work Health & Safety",
      image: "/team/white-Photoroom (4).png",
      description:
        "Savanah brings a strong commitment to safety, communication, and client service across her multifaceted role at T&S Traffic Control. Holding a Certificate IV in Work Health & Safety, she ensures all field operations meet the highest safety and compliance standards, fostering a proactive safety culture across the business. In addition to her WHS responsibilities, Savanah leads client relations and sales, maintaining open communication with partners and ensuring their needs are met from project initiation to completion. Her approachable nature and attention to detail make her a key link between the office, field crews, and clients.",
    },
  ];

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/3.webp"
            alt="About T&S Traffic Control"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl px-5 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center text-white space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-anton uppercase">
              FOUNDED BY SAADAT & TAJ <br />
              <span className="text-btn">A SAFE WAY HOME</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Built by lifelong friends on the belief that traffic management is
              about more than signs and setups - it's about people.
            </p>
            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-btn hover:bg-btn/90 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                <FaPhoneAlt className="text-xl" />
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <AnimatedSection direction="left">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              {/* Left: Content */}
              <div className="space-y-8 animate-element">
                <div>
                  <div className="w-16 h-1 bg-btn mb-6"></div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Founded by Family <br />
                    <span className="text-btn">Built on Trust</span>
                  </h2>
                </div>

                {/* Image - Mobile Only (shown after title) */}
                <div className="relative animate-element lg:hidden">
                  <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg">
                    <Image
                      src="/montage/2. About Us/Our Values/Taj Safety Check.JPG"
                      alt="T&S Traffic Control Operations"
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                </div>

                <div
                  className="space-y-6 text-lg leading-relaxed"
                  style={{ color: "#8E8E95" }}
                >
                  <p>
                    Founded by lifelong friends and high school mates{" "}
                    <strong className="text-gray-900">Saadat</strong> and{" "}
                    <strong className="text-gray-900">Taj</strong>, T&S Traffic
                    Control was built on the belief that traffic management
                    should be about more than signs and setups - it's about
                    people.
                  </p>
                  <p>
                    After years in the industry, we saw an opportunity to raise
                    the standard: to build a company that values safety,
                    communication, and integrity above all else. What began as a
                    small Sydney venture has grown into a{" "}
                    <strong className="text-gray-900">
                      family-run business
                    </strong>{" "}
                    trusted across NSW for delivering professional, compliant,
                    and dependable traffic management.
                  </p>
                  <p>
                    At T&S, we believe that strong relationships - with our
                    clients, our crews, and our community - are what drive
                    successful projects. We take pride in being reliable,
                    transparent, and adaptable, ensuring every site runs
                    smoothly from start to finish.
                  </p>
                  <p>
                    Every project we take on is guided by one clear promise -{" "}
                    <strong className="text-btn">"A Safe Way Home."</strong>
                  </p>
                  <p>
                    It's more than our motto; it's the reason we do what we do.
                  </p>
                </div>
              </div>

              {/* Right: Image - Desktop Only */}
              <div className="relative animate-element hidden lg:block">
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg">
                  <Image
                    src="/montage/2. About Us/Our Values/Taj Safety Check.JPG"
                    alt="T&S Traffic Control Operations"
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Meet The Team Section */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Meet The <span className="text-btn">Team</span>
              </h2>
            </div>

            <div className="space-y-20">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative animate-element ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="relative w-full max-w-lg mx-auto">
                      <div className="relative aspect-[5/4] overflow-hidden rounded-lg">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      {/* Dotted corner decorations */}
                      <div className="absolute -top-2 -left-2 w-12 h-12 border-l-2 border-t-2 border-dotted border-btn"></div>
                      <div className="absolute -bottom-2 -right-2 w-12 h-12 border-r-2 border-b-2 border-dotted border-btn"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`space-y-4 animate-element ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="w-12 h-px bg-btn"></div>
                    <h3 className="text-3xl font-bold font-anton uppercase text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-btn font-semibold text-xl">
                      {member.title}
                    </p>
                    <p className="text-gray-600 italic">{member.education}</p>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "#8E8E95" }}
                    >
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Our Values Section */}
      <AnimatedSection direction="left">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              {/* Left: Image */}
              <div className="relative animate-element order-2 lg:order-1">
                <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/montage/1. Home Page/Services We offer/Equipment Hire.png"
                    alt="T&S Values"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Right: Content */}
              <div className="space-y-8 animate-element order-1 lg:order-2">
                <div>
                  <div className="w-16 h-1 bg-btn mb-6"></div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Our Values & <span className="text-btn">Differences</span>
                  </h2>
                </div>

                <div
                  className="space-y-6 text-lg leading-relaxed"
                  style={{ color: "#8E8E95" }}
                >
                  <p>
                    At{" "}
                    <strong className="text-gray-900">
                      T&S Traffic Control
                    </strong>
                    , safety is at the heart of everything we do. Guided by our
                    commitment to delivering{" "}
                    <em className="text-btn font-semibold">A Safe Way Home</em>,
                    we strive to uphold the highest standards of
                    professionalism, reliability, and integrity across every
                    project.
                  </p>
                  <p>
                    Our team is dedicated to continuous improvement. Through
                    investing in training, innovation, and our team to enhance
                    the quality and efficiency of our services. What sets us
                    apart is our unwavering focus on safety excellence and our
                    proactive approach to managing traffic solutions that keep
                    people, communities, and worksites protected at all times.
                  </p>
                </div>

                <div className="pt-6 border-t-2 border-btn">
                  <p className="text-2xl md:text-3xl font-bold font-anton text-center">
                    <span className="text-btn">Safe.</span> Reliable.{" "}
                    <span className="text-btn">Responsive</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Our Approach Section */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
                Our <span className="text-btn">Approach</span>
              </h2>

              <div
                className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed"
                style={{ color: "#8E8E95" }}
              >
                <p>
                  At <strong className="text-gray-900">T&S Traffic</strong>, our
                  approach is built on{" "}
                  <strong className="text-btn">
                    precision, safety and communication
                  </strong>
                  . Every project follows a proven six-step process:{" "}
                  <em>Assess, Address, Design, Discuss, Deliver and Review</em>.
                  This ensures every job is carefully planned, expertly managed,
                  and continuously improved.
                </p>
                <p>
                  From the first site visit to final handover, we deliver{" "}
                  <strong className="text-gray-900">
                    compliant, efficient and reliable traffic solutions
                  </strong>{" "}
                  our clients can trust.
                </p>
              </div>
            </div>

            {/* 6 Step Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {approachSteps.map((step) => (
                <div
                  key={step.number}
                  className="relative bg-white rounded-lg overflow-hidden p-8 animate-element hover:shadow-xl transition-all duration-300"
                >
                  {/* Number Badge */}
                  <div className="w-12 h-12 bg-btn text-white rounded-full flex items-center justify-center text-2xl font-bold font-anton mb-6">
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold font-anton uppercase mb-6 text-gray-900">
                    {step.title}
                  </h3>

                  {/* Horizontal Line */}
                  <div className="w-12 h-px bg-btn mb-6"></div>

                  {/* Bullets */}
                  <ul className="space-y-3">
                    {step.bullets.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm leading-relaxed"
                        style={{ color: "#8E8E95" }}
                      >
                        <span className="text-btn mr-3 flex-shrink-0 font-bold text-lg">
                          •
                        </span>
                        <span className="pt-0.5">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Our Communities Section */}
      <AnimatedSection direction="left">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                We Support Our <span className="text-btn">Communities</span>
              </h2>
            </div>

            {/* Logos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-16 animate-element">
              {communitySponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="relative h-24 flex items-center justify-center"
                >
                  <Image
                    src={sponsor.src}
                    alt={sponsor.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            <div
              className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-center animate-element"
              style={{ color: "#8E8E95" }}
            >
              <p>
                We believe that supporting our community is just as important as
                the work we do on the road. As a proud Sydney-based company,
                we're committed to giving back to the people and neighbourhoods
                that support us.
              </p>
              <p>
                We're honoured to sponsor the{" "}
                <strong className="text-gray-900">
                  Regents Park Saints Soccer Club
                </strong>{" "}
                and the{" "}
                <strong className="text-gray-900">
                  Build Alpha Kids Youth Athletic Program
                </strong>
                , helping young athletes build confidence, teamwork, and a
                passion for healthy living. Beyond sport, we also contribute to
                a range of local charities and community causes, reinforcing our
                dedication to making a positive and lasting impact.
              </p>
              <p>
                For us, community support isn't just a commitment — it's part of
                who we are. Together, we're helping create{" "}
                <em className="text-btn font-semibold">A Safe Way Home</em> for
                everyone.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Accreditations Section */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
                We Are <span className="text-btn">ISO and LGA Certified</span>
              </h2>

              <p
                className="max-w-4xl mx-auto text-lg leading-relaxed"
                style={{ color: "#8E8E95" }}
              >
                T&S is proud to be ISO certified, a mark of our commitment to
                meeting the highest international standards for quality, safety,
                and operational excellence. ISO certification means our systems,
                processes, and services have been independently assessed and
                verified to comply with globally recognised benchmarks. For our
                clients, this provides confidence that every project we deliver
                is managed with precision, accountability, and consistency,
                ensuring safe, efficient, and reliable outcomes every time.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center animate-element">
              {[
                "/AshburtonV1(ISO-45001)Transparent-A.png",
                "/certified2.jpeg",
                "/certified3.jpeg",
                "/footer1.png",
                "/footer2.png",
              ].map((image, index) => (
                <div
                  key={index}
                  className="relative h-32 flex items-center justify-center"
                >
                  <Image
                    src={image}
                    alt="Certification"
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default About;
