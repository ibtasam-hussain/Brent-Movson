"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroBg from "../public/hero.svg";
import heroPerson from "@/public/Subtract.svg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-visible bg-transparent">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-x-0 top-1/4 bottom-1/4 bg-[#0a0a0a]/70 rounded-[40px] -z-[5]" />

      <div className="relative z-10 w-full max-w-[110rem] mx-auto px-2 sm:px-6 lg:px-8 overflow-visible">
        <div
          className="relative flex flex-col lg:flex-row items-center justify-between 
          bg-black/60 backdrop-blur-md rounded-3xl 
          px-8 sm:px-12 md:px-16 lg:px-24 
          overflow-visible w-full
          h-[65vh] lg:h-[60vh]"  
        >
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-20 w-full lg:w-[50%] text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-extrabold text-white leading-tight tracking-tight">
              DROP FAT. BUILD MUSCLE.
              <br />
              WITHOUT{" "}
              <span className="text-[#3EF4C8]">SACRIFICING YOUR LIFESTYLE</span>
            </h1>

            <p className="text-gray-300 mt-4 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              This is coaching for people who want to look and feel their best —
              precise nutrition, smart training, and daily support designed to
              fit into real life.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-[#3EF4C8] text-black px-8 sm:px-10 py-3 sm:py-3.5 rounded-full text-base sm:text-lg font-semibold hover:bg-[#2fd7ae] transition-all inline-flex items-center gap-2"
            >
              Start your Transformation →
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end items-center z-30 overflow-visible lg:-ml-[8rem]"
          >
            <div
              className="relative w-[180%] sm:w-[200%] md:w-[220%] lg:w-[240%]
              max-w-none -mr-[25%] lg:-mr-[30%]
              overflow-visible drop-shadow-[0_35px_60px_rgba(0,0,0,0.6)]"
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

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </section>
  );
}
