"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Salad, Dumbbell, Flame } from "lucide-react";
import { TbPizza } from "react-icons/tb";


export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      icon: <TbPizza className="w-16 h-14 text-white" />, // icon slightly bigger
      title: "Cut carbs →",
      subtitle: "binged later.",
    },
    {
      icon: <Flame className="w-16 h-14 text-[#FFFFFF]" />,
      title: "Trained hard →",
      subtitle: "no results.",
    },
    {
      icon: <Dumbbell className="w-16 h-14 text-[#FFFFFF]" />,
      title: "Weekdays strong →",
      subtitle: "weekends weak.",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-28 px-6 bg-gradient-to-br from-[#04CFAB] to-[#028B73] text-gray-900 overflow-hidden"
    >
      {/* Headings */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl sm:text-6xl font-extrabold mb-3 tracking-tight text-[#102920]">
          TRIED EVERYTHING...
        </h2>
        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#102920]">
          BUT{" "}
          <span className="text-[#FFFFFFD9]">NOTHING STICKS?</span>
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
            className="bg-[#FFFFFFD9]/85 rounded-3xl shadow-md px-10 py-20 flex flex-col items-center text-center border border-[#DCEFE7]/60 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-24 h-24 rounded-2xl bg-[#00E0B8] flex items-center justify-center mb-10 shadow-inner">
              {card.icon}
            </div>
            <p className="text-[1.5rem] font-semibold text-[#123D30] mb-2">
              {card.title}
            </p>
            <p className="text-[#5C6B64] text-xl font-medium">
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
        className="text-center text-[#FFFFFFD9] max-w-3xl mx-auto text-xl leading-relaxed"
      >
        It’s not about willpower. It’s about the right plan. My coaching fixes
        the root issues:{" "}
        <span className="font-semibold text-[#FFFFFFD9]">training</span>,{" "}
        <span className="font-semibold text-[#FFFFFFD9]">nutrition</span>,{" "}
        <span className="font-semibold text-[#FFFFFFD9]">recovery</span>, and{" "}
        <span className="font-semibold text-[#FFFFFFD9]">accountability</span>.
      </motion.p>
    </section>
  );
}
