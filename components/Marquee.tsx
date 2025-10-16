"use client"

import { motion } from "framer-motion"

export default function Marquee() {
  const text = " • MOVE BETTER • FEEL BETTER • LIVE BETTER • MOVE BETTER • FEEL BETTER • LIVE BETTER • MOVE BETTER • FEEL BETTER • LIVE BETTER • MOVE BETTER • FEEL BETTER • LIVE BETTER"

  return (
    <div className="bg-[#0b2f2a] py-6 overflow-hidden">
      <motion.div
        animate={{ x: ["0%", "-80.33%"] }} // moves one-third of total width
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 15, // adjust speed
          ease: "linear",
        }}
        className="flex whitespace-nowrap"
      >
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            className="text-white text-4xl md:text-5xl font-semibold tracking-[0.15em] mx-8 uppercase"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
