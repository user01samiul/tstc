// import CareerCTASection from "@/components/CareerCTASection";

// --- Next.js Metadata API for Home Page SEO ---
export const metadata = {
  title: "Home | T&S Traffic Control - Sydney Traffic Management Experts",
  description:
    "Welcome to T&S Traffic Control. We provide expert traffic management, planning, and safety solutions for construction, events, and roadworks across Sydney and NSW. Accredited, experienced, and community-focused.",
  openGraph: {
    title: "Home | T&S Traffic Control - Sydney Traffic Management Experts",
    description:
      "Welcome to T&S Traffic Control. We provide expert traffic management, planning, and safety solutions for construction, events, and roadworks across Sydney and NSW.",
    url: "https://www.tstc.com.au/",
    siteName: "T&S Traffic Control",
    images: [
      {
        url: "/montage/2. About Us/Our Communities/Regents park logo.webp",
        width: 1200,
        height: 630,
        alt: "T&S Traffic Control - Sydney Traffic Management",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home | T&S Traffic Control - Sydney Traffic Management Experts",
    description:
      "Welcome to T&S Traffic Control. We provide expert traffic management, planning, and safety solutions for construction, events, and roadworks across Sydney and NSW.",
    images: ["/montage/2. About Us/Our Communities/Regents park logo.webp"],
  },
  alternates: {
    canonical: "https://www.tstc.com.au/",
  },
};
// import ClientsSection from "@/components/ClientsSection";
// import ConnectWithUsSection from "@/components/ConnectWithUsSection";
// import FAQsSection from "@/components/FAQSection";
// import FleetSection from "@/components/FleetSection";
// import HeroSection from "@/components/HeroSection";
// import ServicesSection from "@/components/ServicesSection";
// import StatsSection from "@/components/StatsSection";
// import TestimonialsSection from "@/components/TestimonialsSection";
// import WeAreSection from "@/components/WeAreSection";
// import WhyChooseSection from "@/components/WhyChooseSection";

// export default function Home() {
//   return (
//     <main>
//       <HeroSection />
//       <ClientsSection />
//       <ServicesSection />
// <WeAreSection />
// <CareerCTASection />
//       <FAQsSection />
//       {/* <StatsSection />
//       <FleetSection />
//       <TestimonialsSection />
//       <WhyChooseSection /> */}
//       <ConnectWithUsSection />
//     </main>
//   );
// }

import ClientsSection from "@/components/ClientsSection";
import FleetSection from "@/components/FleetSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WeAreSection from "@/components/WeAreSection";
import AnimatedSection from "./components/AnimatedSection";
import CareerCTA from "./components/CareerCTA";
import CTA from "./components/CTA";
import Experience from "./components/Experience";
import FAQs from "./components/FAQs";
import Features from "./components/Features";
import Hero from "./components/Hero";
import HomeTracker from "./components/HomeTracker";

export default function Home() {
  return (
    <div className="font-sans overflow-x-hidden">
      <HomeTracker />
      {/* <HeroSection /> */}
      <Hero />
      <ClientsSection />
      <AnimatedSection direction="left">
        <Features />
      </AnimatedSection>
      <AnimatedSection direction="right">
        <StatsSection />
      </AnimatedSection>
      <AnimatedSection direction="left">
        <WeAreSection />
      </AnimatedSection>

      <AnimatedSection direction="right">
        <FleetSection />
      </AnimatedSection>

      <AnimatedSection direction="left">
        <TestimonialsSection />
      </AnimatedSection>

      {/* <AnimatedSection direction="right">
        <Solutions />
      </AnimatedSection> */}
      <AnimatedSection direction="left">
        <Experience />
      </AnimatedSection>
      {/* <AnimatedSection direction="left">
        <Testimonials />
      </AnimatedSection> */}

      <AnimatedSection direction="left">
        <FAQs />
      </AnimatedSection>

      <AnimatedSection direction="right">
        <CareerCTA />
      </AnimatedSection>

      <AnimatedSection direction="left">
        <CTA />
      </AnimatedSection>
    </div>
  );
}
