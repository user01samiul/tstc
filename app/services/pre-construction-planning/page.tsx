"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  FaBolt,
  FaCarSide,
  FaCheckCircle,
  FaClipboardCheck,
  FaClipboardList,
  FaDraftingCompass,
  FaFileSignature,
  FaLayerGroup,
  FaPhoneAlt,
  FaRoad,
  FaRoute,
  FaRulerCombined,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection";
import { PRE_CON_SECTIONS } from "@/lib/preConstructionSections";

const tgsFeatures = [
  {
    icon: <FaDraftingCompass />,
    title: "Professional Design",
    description:
      "Detailed traffic control plans using professional CAD software, compliant with TfNSW (RMS) and AS1742.3 standards.",
  },
  {
    icon: <FaRulerCombined />,
    title: "Custom Solutions",
    description:
      "Tailored designs for roadworks, lane closures, shoulder works, and intersections based on your specific site conditions.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Multi-Stage Layouts",
    description:
      "Complex, long-term layouts for civil and infrastructure projects requiring multiple traffic staging phases.",
  },
  {
    icon: <FaBolt />,
    title: "Specialist Works",
    description:
      "Night works, event management, and emergency traffic management designs with fast turnaround times.",
  },
];

const tmpProcess = [
  {
    step: "01",
    title: "Consultation",
    icon: <FaUsers className="text-2xl" />,
    detail:
      "We meet with your team to understand the full scope — project duration, site access, stakeholder requirements, and any authority-specific conditions. This ensures the TMP we produce is right first time.",
  },
  {
    step: "02",
    title: "Custom Design",
    icon: <FaClipboardList className="text-2xl" />,
    detail:
      "Our planners develop a comprehensive document covering methodology, risk controls, communication procedures, traffic staging, detour management, and pedestrian/cyclist provisions — tailored to your project.",
  },
  {
    step: "03",
    title: "Implementation",
    icon: <FaRoad className="text-2xl" />,
    detail:
      "We support your team through implementation, providing on-site guidance, coordinating with road authorities, and making real-time plan adjustments as site conditions evolve.",
  },
  {
    step: "04",
    title: "Compliance",
    icon: <FaShieldAlt className="text-2xl" />,
    detail:
      "Every TMP is reviewed against TfNSW's TCAWS manual and relevant Australian Standards, ensuring your project meets all regulatory requirements and can proceed without costly delays.",
  },
];

const tmpBenefits = [
  "Minimise risk and enhance safety for all site users",
  "Ensure compliance with all regulatory requirements",
  "Reduce project delays and costly disruptions",
  "Clear communication and coordination for stakeholders",
  "Support for permit applications and council approvals",
  "Full risk assessment and hazard identification",
  "Pedestrian and cyclist management strategies",
  "24/7 support for ongoing project requirements",
];

const spaFeatures = [
  {
    title: "Access Verification",
    description:
      "Comprehensive checks for construction sites and temporary traffic setups to ensure safe vehicle access.",
    icon: <FaRoute className="text-xl" />,
  },
  {
    title: "Manoeuvre Analysis",
    description:
      "Verification of vehicle movements in restricted areas, tight corners, and complex intersections.",
    icon: <FaCarSide className="text-xl" />,
  },
  {
    title: "Design Support",
    description:
      "Expert support for detours, entry/exit points, and turning areas to optimise site layout.",
    icon: <FaDraftingCompass className="text-xl" />,
  },
  {
    title: "Compliance Documentation",
    description:
      "Professional reports and documentation for approvals and engineering submissions.",
    icon: <FaFileSignature className="text-xl" />,
  },
];

const spaIncludes = [
  "Detailed vehicle movement simulation",
  "Compliance with Australian Standards",
  "Professional CAD drawings and diagrams",
  "Multiple vehicle type analysis",
  "Turning radius calculations",
  "Clearance and conflict identification",
  "Site access optimisation recommendations",
  "Supporting documentation for approvals",
];

const riskAssessmentSteps = [
  {
    icon: <FaClipboardCheck />,
    title: "Pre-Project Assessment",
    description:
      "Detailed site location risk assessments gather critical information and identify potential hazards before any work begins.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Tailored Safety Methodologies",
    description:
      "Custom safety plans designed to eliminate or control risks across all physical, environmental, and human aspects of the project.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Compliance Documentation",
    description:
      "All findings documented within our safety management system ensuring full compliance with industry standards and legislative requirements.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Ongoing Auditing",
    description:
      "Rigorous auditing process and proactive safety culture maintaining the highest standards of safety and professionalism on every site.",
  },
];

const applicationManagementItems = [
  "Complete application preparation and submission",
  "Traffic Management Plan coordination",
  "Liaison with TfNSW and council representatives",
  "Approval tracking and follow-up communications",
  "Compliance documentation and record keeping",
  "Footpath and parking bay suspensions",
  "Hoarding and scaffolding permits",
  "Utility and third-party authority clearances",
];

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  dark?: boolean;
};

const SectionHeading = ({ eyebrow, title, dark = false }: SectionHeadingProps) => (
  <div className="mb-10">
    {eyebrow && (
      <span
        className={`text-xs font-bold tracking-[0.2em] uppercase mb-3 block ${
          dark ? "text-btn" : "text-btn"
        }`}
      >
        {eyebrow}
      </span>
    )}
    <div className="w-16 h-1 bg-btn mb-6" />
    <h2
      className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
        dark ? "text-white" : "text-gray-900"
      }`}
    >
      {title}
    </h2>
  </div>
);

const SeeAlso = ({
  links,
  dark = false,
}: {
  links: { id: string; label: string }[];
  dark?: boolean;
}) => (
  <div
    className={`mt-10 pt-6 border-t text-sm ${
      dark ? "border-white/10 text-gray-400" : "border-gray-200 text-gray-500"
    }`}
  >
    <span className="font-semibold mr-2">See also:</span>
    {links.map((l, i) => (
      <span key={l.id}>
        <Link
          href={`#${l.id}`}
          className="text-btn hover:underline inline-block"
        >
          {l.label} →
        </Link>
        {i < links.length - 1 && <span className="mx-2 opacity-50">·</span>}
      </span>
    ))}
  </div>
);

const EmptySection = ({ id, label, dark = false }: { id: string; label: string; dark?: boolean }) => (
  <section
    id={id}
    className={`scroll-mt-24 py-16 md:py-20 ${dark ? "bg-[#0f1120]" : "bg-white"}`}
  >
    <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
      <SectionHeading title={label} dark={dark} />
    </div>
  </section>
);

const PreConstructionPlanningPage = () => {
  const [activeId, setActiveId] = useState<string>(PRE_CON_SECTIONS[0].id);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = PRE_CON_SECTIONS.map(({ id }) =>
      document.getElementById(id),
    ).filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Auto-scroll active item into view inside the drawer when it opens or active changes
  useEffect(() => {
    if (!drawerOpen) return;
    const item = pillsRef.current?.querySelector<HTMLElement>(
      `[data-pill-id="${activeId}"]`,
    );
    item?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [activeId, drawerOpen]);

  // Lock body scroll while drawer is open
  useEffect(() => {
    if (drawerOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [drawerOpen]);

  // Close drawer on Escape key
  useEffect(() => {
    if (!drawerOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawerOpen]);

  const activeIndex = Math.max(
    0,
    PRE_CON_SECTIONS.findIndex((s) => s.id === activeId),
  );
  const progress =
    ((activeIndex + 1) / PRE_CON_SECTIONS.length) * 100;
  const ringCircumference = 2 * Math.PI * 22; // r=22

  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="relative min-h-screen w-full flex items-center justify-center py-24 md:py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC02286.webp"
            alt="Pre Construction Planning"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/70" />
        </div>
        <div className="relative z-10 w-full max-w-7xl px-5 sm:px-6 lg:px-8 text-center">
          <div className="text-white space-y-6 md:space-y-7">
            <span className="text-btn text-xs sm:text-sm font-bold tracking-[0.25em] uppercase">
              End-to-End Planning
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight font-anton uppercase">
              PRE CONSTRUCTION <span className="text-btn">PLANNING</span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-200">
              Engineering, modelling, permits, and approvals — every traffic and
              pedestrian planning artifact your project needs, delivered under
              one workstream.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-btn hover:bg-btn/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                <FaPhoneAlt /> Request a Plan
              </Link>
              <a
                href="tel:1300008782"
                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Call 1300 008 782
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile floating section button + slide-from-left drawer */}
      <div className="lg:hidden">
        {/* Floating trigger button — circular with progress ring */}
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open section navigation"
          aria-expanded={drawerOpen}
          className={`fixed bottom-5 left-5 z-40 w-14 h-14 rounded-full bg-btn text-white shadow-2xl shadow-btn/40 active:scale-95 transition-all duration-300 ${
            drawerOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          {/* Progress ring */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 50 50"
          >
            <circle
              cx="25"
              cy="25"
              r="22"
              fill="none"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="2"
            />
            <circle
              cx="25"
              cy="25"
              r="22"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={ringCircumference}
              strokeDashoffset={
                ringCircumference - (progress / 100) * ringCircumference
              }
              className="transition-[stroke-dashoffset] duration-500 ease-out"
            />
          </svg>
          {/* Active section number */}
          <span className="relative font-mono text-base font-bold tabular-nums leading-none">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
        </button>

        {/* Backdrop */}
        <div
          onClick={() => setDrawerOpen(false)}
          className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            drawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-hidden="true"
        />

        {/* Slide-in drawer */}
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-[86%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
            drawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Page sections"
        >
          {/* Header */}
          <div className="flex-shrink-0 px-6 pt-6 pb-4 border-b border-gray-100">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-btn">
                  On This Page
                </span>
                <h3 className="mt-1 text-xl font-bold text-gray-900 leading-tight">
                  Pre Construction Planning
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close section navigation"
                className="flex-shrink-0 w-9 h-9 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 active:scale-95 transition-all flex items-center justify-center text-lg leading-none"
              >
                ×
              </button>
            </div>

            {/* Progress bar + counter */}
            <div className="mt-4 flex items-center gap-3">
              <span className="font-mono text-xs text-gray-500 tabular-nums flex-shrink-0">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(PRE_CON_SECTIONS.length).padStart(2, "0")}
              </span>
              <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-btn to-btn/70 transition-all duration-500 ease-out rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Section list */}
          <nav
            ref={pillsRef}
            className="flex-1 overflow-y-auto py-2 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full"
          >
            {PRE_CON_SECTIONS.map((s, i) => {
              const isActive = activeId === s.id;
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  data-pill-id={s.id}
                  onClick={() => setDrawerOpen(false)}
                  className={`flex items-start gap-4 px-6 py-3.5 transition-all border-l-[3px] ${
                    isActive
                      ? "bg-btn/5 border-btn"
                      : "border-transparent hover:bg-gray-50 active:bg-gray-100"
                  }`}
                >
                  <span
                    className={`font-mono text-sm font-bold tabular-nums leading-tight pt-0.5 ${
                      isActive ? "text-btn" : "text-gray-400"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-sm leading-snug ${
                      isActive
                        ? "text-btn font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    {s.label}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Footer hint */}
          <div className="flex-shrink-0 px-6 py-4 border-t border-gray-100 bg-gray-50">
            <p className="text-xs text-gray-500 leading-relaxed">
              Tap a section to jump there. The button updates as you scroll.
            </p>
          </div>
        </aside>
      </div>

      {/* Body: sticky TOC + sections */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
          {/* Sticky TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-btn mb-4">
                On This Page
              </p>
              <nav className="space-y-1 border-l border-gray-200">
                {PRE_CON_SECTIONS.map((s, i) => {
                  const isActive = activeId === s.id;
                  return (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className={`block pl-4 py-1.5 text-sm leading-snug -ml-px border-l-2 transition-colors ${
                        isActive
                          ? "text-btn font-semibold border-btn"
                          : "text-gray-600 border-transparent hover:text-btn hover:border-btn/40"
                      }`}
                    >
                      <span className="text-xs opacity-60 mr-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {s.label}
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Sections */}
          <div>
            {/* §1 TGS */}
            <section id="tgs" className="scroll-mt-24 py-12 lg:pt-0">
              <AnimatedSection direction="left">
                <SectionHeading
                  eyebrow="Section 01"
                  title={
                    <>
                      Traffic & Pedestrian{" "}
                      <span className="text-btn">Guidance Scheme (TGS)</span>
                    </>
                  }
                />
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                  <div className="space-y-5 text-gray-600 text-base leading-relaxed">
                    <p>
                      Compliant TGS designs for every site, drawn against TfNSW
                      (RMS) and AS1742.3 standards. Each layout starts with a
                      site assessment — traffic volumes, road geometry,
                      sightlines, and environmental factors — before our
                      planners produce CAD-precise plans for any work scenario.
                    </p>
                    <p>
                      From single lane closures to long-term staged layouts, our
                      designs cover roadworks, shoulder works, intersections,
                      night works, events, and emergency response — all built
                      to keep workers and the travelling public safe.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {tgsFeatures.map((f) => (
                      <div
                        key={f.title}
                        className="p-5 rounded-xl border border-gray-200 hover:border-btn/40 hover:shadow-md transition-all"
                      >
                        <div className="text-btn text-2xl mb-3">{f.icon}</div>
                        <h3 className="font-bold text-gray-900 mb-2">
                          {f.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {f.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <SeeAlso
                  links={[
                    { id: "tmp", label: "Traffic Management Plans" },
                    { id: "traffic-staging-cad", label: "CAD staging plans" },
                  ]}
                />
              </AnimatedSection>
            </section>

            {/* §2 ROL Applications */}
            <section id="rol-applications" className="scroll-mt-24 py-12 border-t border-gray-100">
              <AnimatedSection direction="right">
                <SectionHeading
                  eyebrow="Section 02"
                  title={
                    <>
                      <span className="text-btn">ROL</span> Applications
                    </>
                  }
                />
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-2 space-y-5 text-gray-600 leading-relaxed">
                    <p>
                      A Road Occupancy Licence (ROL) is a permit issued by
                      Transport for NSW (TfNSW) authorising occupation of part
                      of a classified road for construction, maintenance, or
                      events. Required before works can commence on state roads
                      and major highways.
                    </p>
                    <p>
                      We prepare and submit the complete ROL package — Traffic
                      Management Plan, supporting documentation, and compliance
                      evidence — through TfNSW. Standard applications typically
                      take 10–15 business days; we keep you informed end to
                      end.
                    </p>
                  </div>
                  <div className="bg-btn/5 border border-btn/20 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-3">We handle</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex gap-2">
                        <FaCheckCircle className="text-btn flex-shrink-0 mt-1" />
                        <span>TfNSW ROL preparation & submission</span>
                      </li>
                      <li className="flex gap-2">
                        <FaCheckCircle className="text-btn flex-shrink-0 mt-1" />
                        <span>TMP coordination</span>
                      </li>
                      <li className="flex gap-2">
                        <FaCheckCircle className="text-btn flex-shrink-0 mt-1" />
                        <span>Compliance documentation</span>
                      </li>
                      <li className="flex gap-2">
                        <FaCheckCircle className="text-btn flex-shrink-0 mt-1" />
                        <span>24/7 emergency applications</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <SeeAlso
                  links={[
                    { id: "council-applications", label: "Council Applications" },
                    { id: "application-management", label: "TfNSW & Council application management" },
                  ]}
                />
              </AnimatedSection>
            </section>

            {/* §3 Council Applications */}
            <section id="council-applications" className="scroll-mt-24 py-12 border-t border-gray-100">
              <AnimatedSection direction="left">
                <SectionHeading
                  eyebrow="Section 03"
                  title={
                    <>
                      <span className="text-btn">Council</span> Applications
                    </>
                  }
                />
                <div className="space-y-5 text-gray-600 leading-relaxed max-w-4xl">
                  <p>
                    Council road occupancy permits, local road access
                    approvals, footpath closures, works zones, parking bay
                    suspensions, and hoarding/scaffolding permits — all
                    coordinated across NSW councils, metropolitan and regional.
                  </p>
                  <p>
                    Our team has established relationships across every Sydney
                    metropolitan council and major regional councils. We
                    understand each council&apos;s unique submission process and
                    documentation requirements, so applications move quickly
                    and predictably. Standard council permits typically range
                    5–10 business days.
                  </p>
                </div>
                <SeeAlso
                  links={[
                    { id: "rol-applications", label: "ROL Applications" },
                    { id: "application-management", label: "TfNSW & Council application management" },
                  ]}
                />
              </AnimatedSection>
            </section>

            {/* §4 Pre Construction Planning and Staging */}
            <section
              id="staging"
              className="scroll-mt-24 py-12 border-t border-gray-100"
            >
              <AnimatedSection direction="right">
                <SectionHeading
                  eyebrow="Section 04"
                  title={
                    <>
                      Pre Construction <span className="text-btn">Planning and Staging</span>
                    </>
                  }
                />
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div className="space-y-5 text-gray-600 leading-relaxed">
                    <p>
                      Each construction site is unique, requiring customised
                      traffic management plans designed around the project&apos;s
                      specific needs and environment. We design plans
                      considering vehicle volumes and types, the layout of your
                      site, and the staging required for a seamless
                      integration of traffic flow with minimal disruption.
                    </p>
                    <p>
                      Our certified planners stage the works phase-by-phase,
                      coordinating signs, barriers, detours, and pedestrian
                      management across each stage transition. The result is a
                      planning artifact your project team, road authorities,
                      and council can sign off on with confidence.
                    </p>
                  </div>
                  <div className="relative h-[360px] rounded-xl overflow-hidden">
                    <Image
                      src="/DSC00943.JPG"
                      alt="Pre construction staging"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </section>

            {/* §5 TMP */}
            <section
              id="tmp"
              className="scroll-mt-24 py-12 border-t border-gray-100"
            >
              <AnimatedSection direction="left">
                <SectionHeading
                  eyebrow="Section 05"
                  title={
                    <>
                      Traffic Management <span className="text-btn">Plans (TMPs)</span>
                    </>
                  }
                />
                <p className="text-gray-600 leading-relaxed mb-10 max-w-4xl">
                  Comprehensive TMPs covering methodology, risk controls,
                  communication procedures, traffic staging, detour management,
                  and pedestrian/cyclist provisions — every plan reviewed
                  against TfNSW&apos;s TCAWS Manual and Australian Standards.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                  {tmpProcess.map((p) => (
                    <div
                      key={p.step}
                      className="p-5 rounded-xl bg-gray-50 border border-gray-100"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-btn font-bold text-lg">
                          {p.step}
                        </span>
                        <span className="text-btn">{p.icon}</span>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        {p.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {p.detail}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                  {tmpBenefits.map((b) => (
                    <div key={b} className="flex gap-3 items-start">
                      <FaCheckCircle className="text-btn flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-sm">{b}</span>
                    </div>
                  ))}
                </div>
                <SeeAlso
                  links={[
                    { id: "tgs", label: "TGS designs" },
                    { id: "risk-assessment", label: "Risk Assessment" },
                  ]}
                />
              </AnimatedSection>
            </section>

            {/* §6 Traffic Staging Plans CAD */}
            <section
              id="traffic-staging-cad"
              className="scroll-mt-24 py-12 border-t border-gray-100"
            >
              <AnimatedSection direction="right">
                <SectionHeading
                  eyebrow="Section 06"
                  title={
                    <>
                      Traffic Staging Plans —{" "}
                      <span className="text-btn">Design (CAD)</span>
                    </>
                  }
                />
                <div className="space-y-5 text-gray-600 leading-relaxed max-w-4xl">
                  <p>
                    For civil and infrastructure projects requiring multiple
                    staging phases, we produce CAD-precise staging plans that
                    walk a reviewer through every transition — entry/exit,
                    lane shifts, shoulder use, detours, and pedestrian
                    diversions.
                  </p>
                  <p>
                    Each stage is drawn as its own TGS, fully compliant with
                    TfNSW and AS1742.3, and packaged with a stage matrix that
                    maps timing, dependencies, and authority sign-off
                    requirements.
                  </p>
                </div>
                <SeeAlso
                  links={[
                    { id: "tgs", label: "TGS designs" },
                    { id: "tmp", label: "Traffic Management Plans" },
                  ]}
                />
              </AnimatedSection>
            </section>

            {/* §7 Traffic Modelling CAD - blank */}
            <section
              id="traffic-modelling-cad"
              className="scroll-mt-24 py-12 border-t border-gray-100"
            >
              <SectionHeading
                eyebrow="Section 07"
                title={
                  <>
                    Traffic <span className="text-btn">Modelling (CAD)</span>
                  </>
                }
              />
            </section>

            {/* §8 SIDRA - blank */}
            <section
              id="sidra"
              className="scroll-mt-24 py-12 border-t border-gray-100"
            >
              <SectionHeading
                eyebrow="Section 08"
                title={
                  <>
                    SIDRA Traffic{" "}
                    <span className="text-btn">Modelling / Analysis</span>
                  </>
                }
              />
            </section>

            {/* §9 Risk Assessment */}
            <section
              id="risk-assessment"
              className="scroll-mt-24 py-12 border-t border-gray-100"
            >
              <AnimatedSection direction="left">
                <SectionHeading
                  eyebrow="Section 09"
                  title={
                    <>
                      Risk <span className="text-btn">Assessment</span>
                    </>
                  }
                />
                <p className="text-gray-600 leading-relaxed mb-10 max-w-4xl">
                  Live road environments present significant risks. Before any
                  project begins, our auditors and safety managers conduct a
                  detailed site location risk assessment — physical,
                  environmental, and human — and document findings in our
                  safety management system.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {riskAssessmentSteps.map((s) => (
                    <div
                      key={s.title}
                      className="p-5 rounded-xl border border-gray-200"
                    >
                      <div className="text-btn text-2xl mb-3">{s.icon}</div>
                      <h4 className="font-bold text-gray-900 mb-2 text-sm">
                        {s.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  ))}
                </div>
                <SeeAlso
                  links={[
                    { id: "tmp", label: "Traffic Management Plans" },
                    { id: "temporary-barriers", label: "Temporary Barrier Design Statements" },
                  ]}
                />
              </AnimatedSection>
            </section>

            {/* §10 Dilapidation - blank */}
            <section
              id="dilapidation"
              className="scroll-mt-24 py-12 border-t border-gray-100"
            >
              <SectionHeading
                eyebrow="Section 10"
                title={
                  <>
                    Dilapidation <span className="text-btn">Report</span>
                  </>
                }
              />
            </section>

            {/* §11 Temporary Barriers - blank */}
            <section
              id="temporary-barriers"
              className="scroll-mt-24 py-12 border-t border-gray-100"
            >
              <SectionHeading
                eyebrow="Section 11"
                title={
                  <>
                    Temporary Barrier{" "}
                    <span className="text-btn">Design Statements</span>
                  </>
                }
              />
            </section>

            {/* §12 Swept Path */}
            <section
              id="swept-path"
              className="scroll-mt-24 py-12 border-t border-gray-100"
            >
              <AnimatedSection direction="right">
                <SectionHeading
                  eyebrow="Section 12"
                  title={
                    <>
                      Swept Path <span className="text-btn">Analysis</span>
                    </>
                  }
                />
                <p className="text-gray-600 leading-relaxed mb-10 max-w-4xl">
                  Precise vehicle movement analysis to ensure safe access and
                  manoeuvrability. CAD-modelled simulations of real vehicle
                  paths against your site geometry, identifying conflicts,
                  clearance issues, and safe turning radii — packaged as a
                  professional report ready for approvals and engineering
                  submissions.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {spaFeatures.map((f) => (
                    <div
                      key={f.title}
                      className="p-5 rounded-xl bg-gray-50 border border-gray-100"
                    >
                      <div className="text-btn mb-3">{f.icon}</div>
                      <h4 className="font-bold text-gray-900 mb-2 text-sm">
                        {f.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {f.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                  {spaIncludes.map((i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <FaCheckCircle className="text-btn flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-sm">{i}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </section>

            {/* §13 Application Management */}
            <section
              id="application-management"
              className="scroll-mt-24 py-12 border-t border-gray-100"
            >
              <AnimatedSection direction="left">
                <SectionHeading
                  eyebrow="Section 13"
                  title={
                    <>
                      TfNSW & Council{" "}
                      <span className="text-btn">Application Management</span>
                    </>
                  }
                />
                <p className="text-gray-600 leading-relaxed mb-10 max-w-4xl">
                  We run the entire approvals workstream end-to-end — from
                  preparation through tracking, follow-up, and final compliance
                  records — so your project team can focus on construction.
                </p>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                  {applicationManagementItems.map((item) => (
                    <div key={item} className="flex gap-3 items-start">
                      <FaCheckCircle className="text-btn flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <SeeAlso
                  links={[
                    { id: "rol-applications", label: "ROL Applications" },
                    { id: "council-applications", label: "Council Applications" },
                    { id: "bus-police-approvals", label: "Bus & Police Approvals" },
                  ]}
                />
              </AnimatedSection>
            </section>

            {/* §14 Bus and Police Approvals */}
            <section
              id="bus-police-approvals"
              className="scroll-mt-24 py-12 border-t border-gray-100"
            >
              <AnimatedSection direction="right">
                <SectionHeading
                  eyebrow="Section 14"
                  title={
                    <>
                      Bus and <span className="text-btn">Police Approvals</span>
                    </>
                  }
                />
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">
                      Bus Approvals
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Coordination with bus operators and transport authorities
                      for works affecting bus routes, temporary bus stop
                      relocations, and bus lane closures.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">
                      Police & Event Permits
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Police notifications for emergency and planned works,
                      event traffic permits, and coordination with emergency
                      services for critical projects.
                    </p>
                  </div>
                </div>
                <SeeAlso
                  links={[
                    { id: "application-management", label: "TfNSW & Council application management" },
                  ]}
                />
              </AnimatedSection>
            </section>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <AnimatedSection direction="left">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              <div className="relative animate-element order-2 lg:order-1">
                <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/DSC00949.JPG"
                    alt="Plan your project"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="space-y-8 animate-element order-1 lg:order-2">
                <div>
                  <div className="w-16 h-1 bg-btn mb-6" />
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Ready to plan your project&apos;s{" "}
                    <span className="text-btn">traffic strategy?</span>
                  </h2>
                </div>
                <div className="space-y-6 text-lg leading-relaxed text-gray-600">
                  <p>
                    Talk to our planning team about your project. We&apos;ll
                    scope the engineering, modelling, and approvals you need —
                    and run them end-to-end so your build stays on schedule.
                  </p>
                </div>
                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 bg-btn hover:bg-btn/90 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
                  >
                    Get Started
                  </Link>
                  <a
                    href="tel:1300008782"
                    className="inline-flex items-center justify-center gap-3 border border-gray-300 hover:border-btn hover:text-btn text-gray-700 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                  >
                    <FaPhoneAlt /> 1300 008 782
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default PreConstructionPlanningPage;
