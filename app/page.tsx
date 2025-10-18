import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ProblemSection from "@/components/ProblemSection";
import BenefitsGrid from "@/components/BenefitsGrid";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ShapeSection from "@/components/ShapeSystem";
import WhyClientsInvest from "@/components/WhyClientsInvest";

export default function Home() {
  return (
    <main className="min-h-screen bg-white scroll-smooth">
      {/* ---------- Navbar ---------- */}
      <Navbar />

      {/* ---------- Hero Section ---------- */}
      <section id="who-its-for">
        <Hero />
      </section>

      {/* ---------- In-Person ---------- */}
      <section id="programs">
        {/* <SolutionSection /> */}
        <ShapeSection />
      </section>

      <section id="in-person">
        <Marquee />

        {/* ---------- Programs ---------- */}

        <ProblemSection />
      </section>

      <Marquee />
      {/* ---------- Pricing ---------- */}
      <section id="faq">
        <PricingSection />
      </section>

      <WhyClientsInvest />

      {/* ---------- CTA ---------- */}
      <CTASection />

      {/* ---------- Footer ---------- */}
      <Footer />
    </main>
  );
}
