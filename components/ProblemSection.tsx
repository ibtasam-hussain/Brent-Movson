"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Bubble type
interface Bubble {
  id: string;
  text: string;
  left: number;
  duration: number;
  size: string;
}

export default function ProblemSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const texts = [
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
      // limit to 2 bubbles at a time for cleaner look
      setBubbles((prev) => {
        if (prev.length >= 2) return prev;

        const text = texts[Math.floor(Math.random() * texts.length)];
        const left = Math.random() * 85 + 5; // avoid touching edges
        const duration = 12 + Math.random() * 6;
        const sizeOptions = [
          "text-sm px-3 py-1",
          "text-base px-4 py-1.5",
          "text-lg px-5 py-2",
        ];
        const size =
          sizeOptions[Math.floor(Math.random() * sizeOptions.length)];

        const newBubble: Bubble = {
          id: crypto.randomUUID(), // ✅ unique key each time
          text,
          left,
          duration,
          size,
        };

        return [...prev, newBubble];
      });
    };

    const interval = setInterval(createBubble, 2000 + Math.random() * 1000); // spawn slower
    return () => clearInterval(interval);
  }, [texts]);

  // Auto-remove bubbles after their lifetime
  useEffect(() => {
    const timers = bubbles.map((b) =>
      setTimeout(() => {
        setBubbles((prev) => prev.filter((x) => x.id !== b.id));
      }, b.duration * 1000)
    );

    return () => timers.forEach(clearTimeout);
  }, [bubbles]);

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
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: -900,
              x: [0, Math.random() * 40 - 20], // slight horizontal drift
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: b.duration,
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
