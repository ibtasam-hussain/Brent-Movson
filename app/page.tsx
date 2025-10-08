import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Marquee from "@/components/Marquee"
import ProblemSection from "@/components/ProblemSection"
import SolutionSection from "@/components/SolutionSection"
import BenefitsGrid from "@/components/BenefitsGrid"
import PricingSection from "@/components/PricingSection"
import FAQSection from "@/components/FAQSection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white scroll-smooth">
      {/* ---------- Navbar ---------- */}
      <Navbar />

      {/* ---------- Hero Section ---------- */}
      <section id="who-its-for">
        <Hero />
      </section>

      {/* ---------- Marquee ---------- */}
      <Marquee />

      {/* ---------- Programs ---------- */}
      <section id="in-person">
        <ProblemSection />
      </section>

      <Marquee />

      {/* ---------- In-Person ---------- */}
      <section id="programs">
        <SolutionSection />
      </section>

      {/* ---------- Pricing ---------- */}
      <section id="faq">
        <PricingSection />
      </section>


      {/* ---------- CTA ---------- */}
      <CTASection />

      {/* ---------- Footer ---------- */}
      <Footer />
    </main>
  )
}
