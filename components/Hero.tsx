"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import heroBg from "../public/hero.svg"
import heroPerson from "@/public/Subtract.svg"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-visible bg-transparent">

      {/* ---------- Background Image ---------- */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src={heroBg}
          alt="Background"
          fill
          sizes="100vw"
          priority
          className="object-cover object-center"
        />
      </div>

      {/* ---------- Transparent Dark Band ---------- */}
      <div className="absolute inset-x-0 top-1/4 bottom-1/4 bg-[#0a0a0a]/75 rounded-[40px] -z-[5]" />

      {/* ---------- Content Wrapper ---------- */}
      <div className="relative max-w-[100rem] mx-auto w-full px-0 sm:px-0 lg:px-0 z-10 overflow-visible">
        {/* 👇 Height reduced here */}
<div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-0 
bg-black/60 backdrop-blur-md rounded-3xl overflow-visible 
h-[70vh] lg:h-[60vh]">



          {/* ---------- Left Text Section ---------- */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
           className="relative z-20 p-4 sm:p-6 md:p-8 lg:p-10"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-tight tracking-tight">
              DROP FAT. BUILD MUSCLE.
              <br />
              WITHOUT{" "}
              <span className="text-[#3EF4C8]">SACRIFICING YOUR LIFESTYLE</span>
            </h1>

            <p className="text-gray-300 mt-6 text-lg leading-relaxed max-w-xl">
              This is coaching for people who want to look and feel their best —
              precise nutrition, smart training, and daily support designed to
              fit into real life.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-[#3EF4C8] text-black px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#2fd7ae] transition-all inline-flex items-center gap-2"
            >
              Start your Transformation →
            </motion.button>
          </motion.div>

          {/* ---------- Right Person Image ---------- */}
<motion.div
  initial={{ x: 100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
  className="relative flex justify-center lg:justify-end items-center z-30"
>
  <div
    className="relative w-[300%] sm:w-[320%] lg:w-[340%] max-w-none 
    drop-shadow-[0_35px_60px_rgba(0,0,0,0.6)]"
  >
    <Image
      src={heroPerson}
      alt="Hero Athlete"
      className="w-full h-auto object-contain"
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
