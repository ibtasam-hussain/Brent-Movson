"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Salad, Dumbbell, Flame } from "lucide-react";

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      icon: <Salad className="w-9 h-9 text-[#1B5B44]" />,
      title: "Cut carbs →",
      subtitle: "binged later.",
    },
    {
      icon: <Flame className="w-9 h-9 text-[#1B5B44]" />,
      title: "Trained hard →",
      subtitle: "no results.",
    },
    {
      icon: <Dumbbell className="w-9 h-9 text-[#1B5B44]" />,
      title: "Weekdays strong →",
      subtitle: "weekends weak.",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-28 px-6 bg-gradient-to-br from-[#C2F4D0] to-[#A6E5DA] text-gray-900 overflow-hidden"
    >
      {/* Headings */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-3xl sm:text-5xl font-bold mb-2 tracking-tight text-[#102920]">
          TRIED EVERYTHING...
        </h2>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#102920]">
          BUT{" "}
          <span className="text-[#006F62]">NOTHING STICKS?</span>
        </h2>
      </motion.div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 mb-16">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-[#F3F8F6] rounded-3xl shadow-md px-10 py-16 flex flex-col items-center text-center border border-[#DCEFE7]/60 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-20 h-20 rounded-2xl bg-[#D8F3E1] flex items-center justify-center mb-8 shadow-inner">
              {card.icon}
            </div>
            <p className="text-[1.25rem] font-semibold text-[#123D30] mb-1">
              {card.title}
            </p>
            <p className="text-[#5C6B64] text-lg font-medium">
              {card.subtitle}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Footer text */}
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-center text-[#38584E] max-w-3xl mx-auto text-lg leading-relaxed"
      >
        It’s not about willpower. It’s about the right plan. My coaching fixes
        the root issues:{" "}
        <span className="font-semibold text-[#123D30]">training</span>,{" "}
        <span className="font-semibold text-[#123D30]">nutrition</span>,{" "}
        <span className="font-semibold text-[#123D30]">recovery</span>, and{" "}
        <span className="font-semibold text-[#123D30]">accountability</span>.
      </motion.p>
    </section>
  );
}
