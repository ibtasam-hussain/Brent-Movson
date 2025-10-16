"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Salad, Dumbbell, Flame } from "lucide-react";
import { TbPizza } from "react-icons/tb";

interface Bubble {
  id: number;
  text: string;
  left: number;
  duration: number;
  size: string;
}

interface Card {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

// 👇 global counter for unique keys
let globalId = 0;

export default function ProblemSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const texts: string[] = [
    "Cut carbs →",
    "binged later.",
    "Trained hard →",
    "no results.",
    "Weekdays strong →",
    "weekends weak.",
    "Tried fasting...",
    "Still stuck!",
    "Nothing sticks?",
    "Maybe I’m missing something?",
  ];

  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const createBubble = () => {
      const text = texts[Math.floor(Math.random() * texts.length)];
      const left = Math.random() * 90; // random horizontal position
      const duration = 10 + Math.random() * 4; // slower & smoother
      const sizeOptions = [
        "text-sm px-3 py-1",
        "text-base px-4 py-1.5",
        "text-lg px-5 py-2",
      ];
      const size = sizeOptions[Math.floor(Math.random() * sizeOptions.length)];

      const newBubble: Bubble = {
        id: globalId++,
        text,
        left,
        duration,
        size,
      };

      setBubbles((prev) => [...prev, newBubble]);

      // remove after animation ends
      setTimeout(() => {
        setBubbles((prev) => prev.filter((b) => b.id !== newBubble.id));
      }, duration * 2000);
    };

    const interval = setInterval(createBubble, 900);
    return () => clearInterval(interval);
  }, [texts]);

  return (
    <section
      ref={ref}
      className="relative py-28 px-6 bg-gradient-to-br from-[#04CFAB] to-[#028B73] text-gray-900 overflow-hidden"
    >
      {/* Floating Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles.map((b) => (
          <motion.div
            key={b.id}
            initial={{ opacity: 0, y: 100 }} // 👈 start just below bottom
            animate={{
              opacity: [0.2, 1, 1, 0], // fade in, stay, fade out
              y: -900, // 👈 go all the way to the top
              scale: [b.size.includes("text-lg") ? 1 : 0.95, 1.05],
            }}
            transition={{
              duration: b.duration * 1.8, // slower upward movement
              ease: "easeInOut",
            }}
            style={{
              left: `${b.left}%`,
              bottom: 0,
            }}
            className={`absolute bg-white/90 text-[#0f3b2f] font-medium rounded-2xl shadow-md border border-white/40 ${b.size}`}
          >
            {b.text}
          </motion.div>
        ))}
      </div>

      {/* Headings */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-5 relative z-10"
      >
        <h2 className="text-4xl sm:text-6xl font-extrabold mb-3 tracking-tight text-[#102920]">
          TRIED EVERYTHING...
        </h2>
        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#102920]">
          BUT <span className="text-[#FFFFFFD9]">NOTHING STICKS?</span>
        </h2>
      </motion.div>
    </section>
  );
}
