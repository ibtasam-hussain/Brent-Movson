"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function BenefitsGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    {
      title: "Fat carbs guilt-free",
      subtitle: "(timed & portioned right)",
      bg: "bg-black",
      text: "text-white",
      icon: "🏋️",
    },
    {
      title: "Just 3-4 efficient",
      subtitle: "workouts/week",
      bg: "bg-[#00ffd1]",
      text: "text-black",
      icon: "📋",
    },
    {
      title: "Customized calorie",
      subtitle: "& protein targets",
      bg: "bg-black",
      text: "text-white",
      icon: "📊",
    },
    {
      title: "Flexible structure that",
      subtitle: "fits travel & social life",
      bg: "bg-[#00ffd1]",
      text: "text-black",
      icon: "🎒",
    },
    {
      title: "",
      subtitle: "",
      bg: "bg-gray-700",
      text: "text-white",
      icon: "",
      isImage: true,
    },
    {
      title: "Direct daily support",
      subtitle: "(I'm in your corner)",
      bg: "bg-[#00ffd1]",
      text: "text-black",
      icon: "💪",
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-2">HOW MY COACHING</h2>
          <h2 className="text-4xl sm:text-5xl font-bold">
            GETS <span className="text-[#00ffd1]">LASTING RESULTS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${benefit.bg} ${benefit.text} rounded-3xl p-8 h-64 flex flex-col items-center justify-center text-center`}
            >
              {benefit.isImage ? (
                <div className="w-full h-full flex items-center justify-center">
                  {/* Placeholder for center image */}
                </div>
              ) : (
                <>
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-1">{benefit.title}</h3>
                  <p className="text-sm opacity-90">{benefit.subtitle}</p>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
