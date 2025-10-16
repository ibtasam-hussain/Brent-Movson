"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Dumbbell, ArrowRight } from "lucide-react";
import CtaBg from "../public/ctaBg.svg"; // 🖼 Replace with your image

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 md:px-12 lg:px-24 bg-[#f7f7f7] flex justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-[95%] max-w-[1800px] rounded-3xl overflow-hidden shadow-2xl"
      >
        {/* 🔹 Background Image */}
        <div className="absolute inset-0">
          <Image
            src={CtaBg}
            alt="Motivational fitness background"
            fill
            className="object-cover scale-105 brightness-[40%]"
            priority
          />
        </div>

        {/* 🔹 Greenish Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#003C31]/70 via-[#003C31]/60 to-[#009e8a]/50 mix-blend-overlay" />

        {/* 🔹 CTA Content */}
        <div className="relative z-10 text-center px-6 sm:px-10 py-20 md:py-24 text-white">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-snug max-w-5xl mx-auto">
            READY TO LOOK, FEEL, AND PERFORM AT YOUR BEST{" "}
            <span className="text-[#00ffd1]">WITHOUT GIVING UP YOUR LIFE?</span>
          </h2>
          <p className="mt-5 text-gray-200 text-sm sm:text-base md:text-lg">
            Explore our programs and start your journey to a healthier you today.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center">
            {/* Left Button */}
{/* Left Button — Fitness Only */}
<a
  href="https://www.trainerize.me/profile/bm21/?planGUID=f17967e40f334dc2a4e8d9b104346b3e&mode=checkout"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 bg-white text-black px-8 sm:px-10 py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all duration-200"
>
  Join Fitness Only <Dumbbell className="w-5 h-5" />
</a>

{/* Right Button — Full Coaching */}
<a
  href="https://www.trainerize.me/profile/bm21/?planGUID=9178eecceba5456e8e2b7bcd4f9d7f25&mode=checkout"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 bg-[#00ffd1] text-black px-8 sm:px-10 py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-[#00e6bc] transition-all duration-200"
>
  Join Full Coaching <ArrowRight className="w-5 h-5" />
</a>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
