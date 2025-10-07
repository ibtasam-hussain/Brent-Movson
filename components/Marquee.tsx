"use client"

import { motion } from "framer-motion"

export default function Marquee() {
  const text = "MUSCLE • GAIN STRENGTH • GET HEALTHY • STAY ACTIVE • FEEL GREAT • "

  return (
    <div className="bg-[#0b2f2a] py-6 overflow-hidden"> {/* darker tone, more height */}
      <motion.div
        animate={{ x: [0, -1200] }} // increased distance for smooth loop
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 25, // slower movement
            ease: "linear",
          },
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
