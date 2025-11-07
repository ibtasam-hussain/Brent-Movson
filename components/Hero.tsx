"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroBg from "../public/hero.jpg";
import heroPerson from "@/public/hero.jpg";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-visible bg-transparent"
      style={{
        paddingTop:
          "calc((var(--nav-h, 80px)) + env(safe-area-inset-top, 0px) + 1rem)",
        scrollMarginTop:
          "calc((var(--nav-h, 80px)) + env(safe-area-inset-top, 0px) + 1rem)",
      }}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="Background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 backdrop-blur-md bg-black/40" />{" "}
        {/* 👈 adds blur overlay */}
      </div>

      <div className="absolute inset-x-0 top-1/4 bottom-1/4 bg-[#0a0a0a]/70 rounded-[40px] -z-[5]" />

      <div className="relative z-10 w-full max-w-[110rem] mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        <div
          className="
relative grid grid-cols-1 lg:grid-cols-12 items-center gap-8 md:gap-10
bg-black/60 backdrop-blur-md rounded-3xl
px-6 sm:px-10 md:px-14 lg:px-16 xl:px-24
w-full
min-h-[clamp(28rem,62vh,44rem)] py-10 md:py-12
"
        >
          {/* Left: Text */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 text-center lg:text-left"
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
            <Link href="#faq">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const section = document.getElementById("programs");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-6 bg-[#3EF4C8] text-black px-8 sm:px-10 py-3 sm:py-3.5 rounded-full text-base sm:text-lg font-semibold hover:bg-[#2fd7ae] transition-all inline-flex items-center gap-2"
              >
                Start your Transformation →
              </motion.button>
            </Link>
          </motion.div>

          {/* Right: Image */}
<motion.div
  initial={{ x: 100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
  className="lg:col-span-6 flex justify-center lg:justify-end"
>
  <div className="relative w-full rounded-2xl max-w-[520px] sm:max-w-[600px] md:max-w-[680px] lg:max-w-[720px] xl:max-w-[780px] overflow-hidden">
    <Image
      src={heroPerson}
      alt="Hero Athlete"
      priority
      className="w-full h-auto object-contain"
    />
  </div>
</motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </section>
  );
}
