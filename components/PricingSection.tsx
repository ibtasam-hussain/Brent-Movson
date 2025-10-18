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
      price: "$165",
      period: "/ 4 weeks",
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
      price: "$299",
      period: "/ 4 weeks",
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
      name: "Private Coaching in Tiburon / Marin",
      subtitle:
        "Ideal if you just want Private, 1-on-1 training in Tiburon / Marin.",
      price: "$900",
      period: "/ 10 sessions",
      features: [
        "Exclusive 1:1 training in a private with Brent",
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
          filter: "brightness(25%)", // ✅ darken image but keep faintly visible
        }}
      ></div>

      {/* Optional subtle overlay for smooth darkness */}
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
            PRICING {"  "}
            <span className="text-[#00E6BE]">PLANS</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
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

                <div className="mb-8">
                  <span className="text-5xl font-bold text-[#00E6BE]">
                    {plan.price}
                  </span>
                  <p className="text-sm mt-2 text-gray-400">{plan.period}</p>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-[15px]">
                      <span className="mr-3 text-lg text-[#00E6BE]">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

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
                Apply Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
