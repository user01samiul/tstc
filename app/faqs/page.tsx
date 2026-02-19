"use client";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight, FaChevronDown, FaPhoneAlt } from "react-icons/fa";
import AnimatedSection from "../components/AnimatedSection";

type CategoryId = "all" | "traffic-management" | "permits" | "controllers" | "general";

const categories: { id: CategoryId; label: string; short: string }[] = [
  { id: "all", label: "All Questions", short: "All" },
  { id: "traffic-management", label: "Traffic Management", short: "Traffic Mgmt" },
  { id: "permits", label: "Permit Applications", short: "Permits" },
  { id: "controllers", label: "Traffic Controllers", short: "Controllers" },
  { id: "general", label: "General", short: "General" },
];

const faqs: { id: number; category: CategoryId; question: string; answer: string; tag: string }[] = [
  {
    id: 1,
    category: "traffic-management",
    question: "What is a TGS or TCP?",
    answer:
      "A TGS (Traffic Guidance Scheme) is a detailed plan outlining how traffic will be managed around a worksite or event. A TCP (Traffic Control Plan) serves a similar purpose — providing specific instructions for managing traffic flow during roadworks, construction, or events that impact normal traffic conditions.",
    tag: "TGS / TCP",
  },
  {
    id: 2,
    category: "traffic-management",
    question: "What is a TMP or CTMP?",
    answer:
      "A TMP (Traffic Management Plan) is a comprehensive document outlining how traffic will be safely managed during construction or events. A CTMP (Construction Traffic Management Plan) is a specialised TMP required when construction activities impact public roads, footpaths, or traffic flow. Both plans ensure safety and compliance with road authority requirements.",
    tag: "TMP / CTMP",
  },
  {
    id: 3,
    category: "traffic-management",
    question: "Can you provide traffic management plans and guidance schemes?",
    answer:
      "Absolutely. We provide comprehensive traffic management plans (TMP), traffic guidance schemes (TGS), and traffic control plans (TCP) tailored to your specific project requirements. All plans are compliant with the RMS TCAWS Manual and AS1742.3 standards.",
    tag: "Plans",
  },
  {
    id: 4,
    category: "traffic-management",
    question: "What is swept path analysis?",
    answer:
      "Swept path analysis (SPA) uses industry-standard CAD software to simulate how vehicles move through a site — confirming safe access, turning space, and clearances before works begin. Our SPAs are accepted by TfNSW, local councils, and DA authorities across NSW.",
    tag: "SPA",
  },
  {
    id: 5,
    category: "permits",
    question: "What is a ROL?",
    answer:
      "A ROL (Road Occupancy Licence) is a permit issued by the relevant road authority that allows you to occupy part of a road or lane for construction, maintenance, or events. You need a ROL whenever your activities require the use of public road space.",
    tag: "ROL",
  },
  {
    id: 6,
    category: "permits",
    question: "Do I need a permit for roadworks?",
    answer:
      "Yes, most roadworks affecting public roads require a permit from the relevant authority (council, TfNSW, etc.). This ensures your work is compliant with local regulations and safety standards. Our team can assist with permit applications and all necessary documentation.",
    tag: "Permits",
  },
  {
    id: 7,
    category: "permits",
    question: "What permit types do you handle?",
    answer:
      "We handle TfNSW Road Occupancy Licences (ROLs), council road occupancy permits, STA bus approvals for works affecting bus routes, and emergency approvals for urgent works. Our team manages the full submission process — from documentation preparation to direct liaison with road authorities.",
    tag: "Approvals",
  },
  {
    id: 8,
    category: "controllers",
    question: "Are your traffic controllers certified?",
    answer:
      "Yes, all our traffic controllers are fully certified by TfNSW and hold current licences (Blue Card or Yellow Card). They undergo regular training and professional development to maintain the highest standards of safety and compliance on every site.",
    tag: "Certification",
  },
  {
    id: 9,
    category: "controllers",
    question: "How quickly can you mobilise traffic controllers?",
    answer:
      "We offer 24/7 emergency response and can typically mobilise traffic controllers within hours of your call. For planned projects, we recommend booking in advance to ensure availability and proper planning. Call 1300 008 782 for urgent requests.",
    tag: "Response",
  },
  {
    id: 10,
    category: "controllers",
    question: "What areas do you service?",
    answer:
      "We service all of NSW, with a primary focus on Greater Sydney and surrounding regions. Our experienced team is equipped to handle projects across metropolitan and regional areas.",
    tag: "Coverage",
  },
  {
    id: 11,
    category: "general",
    question: "How do I get a quote?",
    answer:
      "Getting a quote is simple — contact us via our online form, call us on 1300 008 782, or email plans@tstc.com.au. Provide brief details about your project and our team will respond promptly with a competitive quote.",
    tag: "Pricing",
  },
  {
    id: 12,
    category: "general",
    question: "How long does it take to produce a traffic plan?",
    answer:
      "Standard traffic guidance schemes (TGS/TCP) can be delivered within 2–3 business days. Traffic management plans (TMPs) typically take 5–7 business days. Urgent turnarounds are available — contact us to discuss your timeline.",
    tag: "Turnaround",
  },
];

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [openId, setOpenId] = useState<number | null>(null);

  const filtered =
    activeCategory === "all" ? faqs : faqs.filter((f) => f.category === activeCategory);

  const getCategoryCount = (id: CategoryId) =>
    id === "all" ? faqs.length : faqs.filter((f) => f.category === id).length;

  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  return (
    <div className="font-sans overflow-x-hidden">

      {/* ─── HERO: Dark with blueprint grid ─── */}
      <section
        className="relative overflow-hidden flex flex-col"
        style={{ backgroundColor: "#0f1120" }}
      >
        {/* Blueprint grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#4a9eff 1px, transparent 1px), linear-gradient(90deg, #4a9eff 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* Ghost watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span
            className="font-black font-anton text-white uppercase leading-none"
            style={{
              fontSize: "clamp(6rem, 22vw, 22rem)",
              opacity: 0.028,
              letterSpacing: "-0.05em",
            }}
          >
            FAQ
          </span>
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-5 sm:px-6 lg:px-8 pt-40 pb-16">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-10 h-px bg-btn" />
            <span className="text-btn text-sm font-semibold tracking-widest uppercase">
              T&amp;S Traffic Control
            </span>
            <div className="w-10 h-px bg-btn" />
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold font-anton uppercase leading-none text-white mb-6">
            GOT
            <br />
            <span className="text-btn">QUESTIONS?</span>
          </h1>

          <p className="text-gray-400 text-xl max-w-2xl leading-relaxed mb-12">
            Find answers to common questions about traffic management, permits,
            and our services. Can&apos;t find what you need? Our team is ready
            to help.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-btn hover:bg-btn/90 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
          >
            <FaPhoneAlt />
            Ask Us Directly
          </Link>
        </div>

        {/* Category jump strips */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 border-t border-white/10 mt-8">
          {categories.slice(1).map((cat, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenId(null);
              }}
              className="group flex items-center gap-4 p-6 border-b sm:border-b-0 sm:border-r border-white/10 last:border-r-0 hover:bg-white/5 transition-all duration-300 text-left"
            >
              <span className="text-4xl font-black font-anton text-white/10 group-hover:text-btn/40 transition-colors leading-none flex-shrink-0">
                {String(getCategoryCount(cat.id)).padStart(2, "0")}
              </span>
              <div>
                <p className="text-white font-bold font-anton uppercase tracking-wide text-sm">
                  {cat.label}
                </p>
                <span className="text-btn text-xs font-semibold flex items-center gap-1 mt-1 group-hover:gap-2 transition-all">
                  View <FaArrowRight className="text-[10px]" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ─── FAQ BODY ─── */}
      <AnimatedSection direction="left">
        <section className="py-16 md:py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">

            {/* Sticky filter bar */}
            <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 -mx-5 sm:-mx-6 lg:-mx-8 px-5 sm:px-6 lg:px-8 mb-14 py-4">
              <div
                className="flex gap-2 overflow-x-auto max-w-5xl mx-auto"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setOpenId(null);
                    }}
                    className={`flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                      activeCategory === cat.id
                        ? "bg-btn text-white shadow-sm"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {cat.short}
                    <span
                      className={`text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 ${
                        activeCategory === cat.id
                          ? "bg-white/20 text-white"
                          : "bg-white text-gray-500"
                      }`}
                    >
                      {getCategoryCount(cat.id)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Section header */}
            <div className="flex items-end justify-between mb-10 animate-element">
              <div>
                <div className="w-16 h-1 bg-btn mb-5" />
                <h2 className="text-3xl sm:text-4xl font-bold font-anton uppercase text-gray-900">
                  {activeCategory === "all"
                    ? "All Questions"
                    : categories.find((c) => c.id === activeCategory)?.label}
                </h2>
              </div>
              <span className="hidden sm:block text-[6rem] font-black font-anton text-gray-100 leading-none select-none">
                {String(filtered.length).padStart(2, "0")}
              </span>
            </div>

            {/* FAQ items */}
            <div className="animate-element divide-y divide-gray-100">
              {filtered.map((faq, i) => {
                const isOpen = openId === faq.id;
                return (
                  <div key={faq.id} className="group">
                    <button
                      onClick={() => toggle(faq.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                      className="w-full grid items-start py-7 text-left transition-all duration-200"
                      style={{ gridTemplateColumns: "3rem 1fr auto", gap: "1rem" }}
                    >
                      {/* Large step number */}
                      <span
                        className={`text-3xl sm:text-4xl font-black font-anton leading-none transition-colors duration-300 pt-1 ${
                          isOpen
                            ? "text-btn"
                            : "text-gray-200 group-hover:text-gray-300"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      {/* Tag + Question */}
                      <div>
                        <span
                          className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 transition-all duration-300 ${
                            isOpen
                              ? "bg-btn text-white"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {faq.tag}
                        </span>
                        <h3
                          className={`text-xl sm:text-2xl font-bold font-anton uppercase leading-snug transition-colors duration-300 ${
                            isOpen
                              ? "text-gray-900"
                              : "text-gray-700 group-hover:text-gray-900"
                          }`}
                        >
                          {faq.question}
                        </h3>
                      </div>

                      {/* Chevron circle */}
                      <div
                        className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center mt-1 transition-all duration-300 ${
                          isOpen
                            ? "bg-btn text-white"
                            : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                        }`}
                      >
                        <FaChevronDown
                          className={`text-sm transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </button>

                    {/* Answer — grid expand animation */}
                    <div
                      id={`faq-answer-${faq.id}`}
                      className="grid transition-all duration-300 ease-in-out"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <div
                          className="pb-8"
                          style={{ paddingLeft: "calc(3rem + 1rem)" }}
                        >
                          <div className="border-l-4 border-btn pl-6">
                            <p
                              className="text-base sm:text-lg leading-relaxed"
                              style={{ color: "#8E8E95" }}
                            >
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>
      </AnimatedSection>

      {/* ─── STILL HAVE QUESTIONS? Dark CTA ─── */}
      <AnimatedSection direction="right">
        <section
          className="relative py-28 px-5 sm:px-6 lg:px-8 overflow-hidden"
          style={{ backgroundColor: "#0f1120" }}
        >
          {/* Blueprint grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#4a9eff 1px, transparent 1px), linear-gradient(90deg, #4a9eff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Ghost text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <span
              className="text-[14vw] font-black font-anton text-white uppercase leading-none"
              style={{ opacity: 0.025, letterSpacing: "-0.05em" }}
            >
              ASK US
            </span>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center animate-element">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-btn" />
              <span className="text-btn text-sm font-semibold tracking-widest uppercase">
                Still Need Help?
              </span>
              <div className="w-8 h-px bg-btn" />
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-anton uppercase leading-tight mb-6">
              Couldn&apos;t Find
              <br />
              <span className="text-btn">Your Answer?</span>
            </h2>

            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              Our experienced team is ready to help. Contact us today for
              personalised advice and solutions tailored to your project needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-btn hover:bg-btn/90 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                <FaPhoneAlt />
                Contact Us Today
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-3 border border-white/30 hover:border-btn text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                View Our Services →
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

    </div>
  );
}
