"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Pbg from "../public/pbg.png";

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans = [
    {
      name: "Fitness-Only Coaching",
      subtitle: "Ideal if you just want the workouts and structure.",
      price: "$165 / month",
      period: "12-week commitment",
      features: [
        "BM2 App access",
        "S.H.A.P.E. hybrid training",
        "Gym/home/travel plans",
        "Weekly adjustments",
      ],
      highlight: false,
    },
    {
      name: "Full Coaching (Nutrition + Training)",
      subtitle:
        "Perfect for professionals ready to transform both body & habits.",
      price: "$299 / month",
      period: "12-week commitment",
      features: [
        "Personalized macros + 1:1 Coaching with a nutritionist",
        "Concierge daily access",
        "S.H.A.P.E. training + tailored plans",
        "Supplement optimization",
        "Weekly recalibration",
        "Exclusive recipes",
      ],
      highlight: true,
    },
    {
      name: "Private Coaching",
      subtitle:
        "Ideal if you just want Private, 1-on-1 training sessions with Brent.",
      price: "Bay Area/ Marin", // ✅ Price removed
      period: "",
      features: [
        "Exclusive 1:1 training in a private setting with Brent",
        "1:1 coaching with nutritionist",
        "Custom workouts designed for you and no one else",
        "Accountability and results",
        "24/7 access to your coach via the app",
      ],
      highlight: false,
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-28 px-6 sm:px-10 text-white overflow-hidden"
    >
      {/* 🔹 Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url(${Pbg.src})`,
          filter: "brightness(25%)",
        }}
      ></div>

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-25 tracking-tight">
            COACHING <span className="text-[#00E6BE]">PROGRAMS</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              id={i === plans.length - 1 ? "in-person-card" : undefined} // ✅ Added here correctly
              initial={{ y: 40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className={`relative rounded-3xl border backdrop-blur-xl bg-white/10 ${
                plan.highlight
                  ? "shadow-2xl border-transparent scale-[1.05]"
                  : "border-white/10"
              } text-white p-10 flex flex-col items-start justify-between transition-all duration-300 hover:scale-[1.08] hover:bg-white/20`}
            >
              {/* Recommended Badge */}
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#00E6BE] text-black text-sm font-semibold px-4 py-1 rounded-full shadow-md">
                  Recommended
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
                <p className="text-sm text-gray-300 leading-snug mb-8">
                  {plan.subtitle}
                </p>

                {/* ✅ Price Section (only show if price exists) */}
                {plan.price && (
                  <div className="mb-8 text-center w-full">
                    <div className="bg-[#00E6BE] text-black font-semibold text-xl py-3 px-6 rounded-full inline-block">
                      {plan.price}
                    </div>
                    <p className="text-xs mt-3 text-[#00E6BE]">
                      {plan.period}
                    </p>
                  </div>
                )}

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-[15px]">
                      <span className="mr-3 text-lg text-[#00E6BE]">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ✅ Button text changes for 3rd plan */}
              <a
                href="https://calendly.com/brent-ykk/health-coaching-w-brent?month=2025-10"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 mt-auto rounded-full text-lg font-semibold border text-center transition-all duration-200 ${
                  plan.highlight
                    ? "bg-[#00c9a6] text-black hover:bg-[#00E6BE]"
                    : "border-[#00E6BE] text-[#00E6BE] hover:bg-[#00E6BE] hover:text-black"
                }`}
              >
                {i === 2 ? "Book a Call" : "Get Started Now"}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
