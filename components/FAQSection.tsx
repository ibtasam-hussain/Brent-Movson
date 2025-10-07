"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

export default function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Do I need to cut carbs?",
      answer: "No, carbs fuel your training — we just structure them the right way.",
      bg: "bg-[#00ffd1]",
      text: "text-black",
    },
    {
      question: "Do I need to train every day?",
      answer: "",
      bg: "bg-black",
      text: "text-white",
    },
    {
      question: "Can I still enjoy weekends?",
      answer: "",
      bg: "bg-black",
      text: "text-white",
    },
    {
      question: "What if I've failed before?",
      answer: "",
      bg: "bg-black",
      text: "text-white",
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-2">FREQUENTLY ANSWERED</h2>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="text-[#00ffd1]">QUESTIONS</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${faq.bg} ${faq.text} rounded-3xl overflow-hidden`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <span className="text-2xl">{openIndex === index && faq.answer ? "−" : "+"}</span>
              </button>
              {openIndex === index && faq.answer && (
                <div className="px-8 pb-6">
                  <p className="opacity-90">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
