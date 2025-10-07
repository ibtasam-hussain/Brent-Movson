"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Dumbbell, ArrowRight } from "lucide-react"

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 md:px-12 lg:px-24 bg-[#f7f7f7] flex justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full max-w-5xl rounded-3xl overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/cta-placeholder.jpg" // 🖼 Replace with your image
            alt="Fitness background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" /> {/* dark overlay */}
        </div>

        {/* CTA Content */}
        <div className="relative z-10 text-center px-6 sm:px-10 py-16 md:py-20 text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug max-w-3xl mx-auto">
            READY TO LOOK, FEEL, AND PERFORM AT YOUR BEST{" "}
            <span className="text-[#00ffd1]">WITHOUT GIVING UP YOUR LIFE?</span>
          </h2>
          <p className="mt-4 text-gray-200 text-sm sm:text-base">
            Explore our programs and start your journey to a healthier you today.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Left Button */}
            <button className="flex items-center gap-2 bg-white text-black px-6 sm:px-8 py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-100 transition">
              Join Fitness Only <Dumbbell className="w-5 h-5" />
            </button>

            {/* Right Button */}
            <button className="flex items-center gap-2 bg-[#00ffd1] text-black px-6 sm:px-8 py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-[#00e6bc] transition">
              Join Full Coaching <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
