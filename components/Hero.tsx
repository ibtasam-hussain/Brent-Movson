"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import heroBg from "@/public/hero.svg"      // gray full background image
import heroPerson from "@/public/Subtract.svg" // athlete cutout

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ---------- Background Image ---------- */}
<div className="absolute inset-0 -z-10 w-full h-full">

        <Image
          src={heroBg}
          alt="Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* ---------- Transparent Dark Band (only behind content) ---------- */}
      <div className="absolute inset-x-0 top-1/4 bottom-1/4 bg-[#0a0a0a]/75 rounded-[40px] -z-[5]" />

      {/* ---------- Content Wrapper ---------- */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          {/* ---------- Left Text Section ---------- */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-20 p-10 md:p-12 lg:p-14"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-tight tracking-tight">
              DROP FAT. BUILD MUSCLE. <br />
              WITHOUT{" "}
              <span className="text-[#3EF4C8]">SACRIFICING YOUR LIFESTYLE</span>
            </h1>

            <p className="text-gray-300 mt-6 text-lg leading-relaxed max-w-lg">
              This is coaching for people who want to look and feel their best —
              precise nutrition, smart training, and daily support designed to
              fit into real life.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-[#3EF4C8] text-black px-8 py-4 rounded-full text-base font-semibold hover:bg-[#2fd7ae] transition-all inline-flex items-center gap-2"
            >
              Start your Transformation →
            </motion.button>
          </motion.div>

          {/* ---------- Right Person Image ---------- */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-start z-30"
          >
            <div
              className="relative w-[190%] sm:w-[170%] lg:w-[160%] max-w-none 
              lg:-ml-28 -ml-16 -mt-12 drop-shadow-[0_35px_60px_rgba(0,0,0,0.5)]"
            >
              <Image
                src={heroPerson}
                alt="Hero Athlete"
                className="w-full h-auto object-contain lg:-translate-y-8"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ---------- Subtle Bottom Fade ---------- */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </section>
  )
}
