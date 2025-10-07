"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function ShapeSection() {
  const features = [
    "Eat carbs guilt-free (timed & portioned right).",
    "3-4 efficient, high-return workouts per week.",
    "Precision-calibrated calorie and protein targets.",
    "Flexible structure for work, travel, & family life.",
    "Daily accountability from a coach who tracks every detail.",
  ]

  const investPoints = [
    "Science-backed methods",
    "Personalized 1:1 support",
    "Luxury-level accountability",
    "Real lasting results",
  ]

  return (
    <section className="bg-[#f7f7f7] py-20 px-6 md:px-12 lg:px-24">
      {/* ------------- S.H.A.P.E. SYSTEM ------------- */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-24">
        {/* Left Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            THE{" "}
            <span className="text-[#00bfa5]">S.H.A.P.E.</span>{" "}
            SYSTEM
          </h2>
          <p className="text-sm font-semibold tracking-wide text-gray-700 mt-2">
            STRENGTH • HYBRID • ATHLETE • PHYSIQUE • ELITE
          </p>
          <p className="text-gray-700 mt-5 leading-relaxed">
            A flagship method combining strength training, functional fitness,
            and physique science.
          </p>

          <ul className="mt-6 space-y-3">
            {features.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-800">
                <CheckCircle className="text-[#00bfa5] w-5 h-5 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button className="mt-8 bg-[#00bfa5] hover:bg-[#00a98e] text-white font-semibold py-3 px-8 rounded-full transition">
            Start Now
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/images/shape-system.jpg" // 🔁 replace with your actual image path
            alt="Athlete training"
            width={480}
            height={480}
            className="rounded-2xl object-cover w-full h-auto shadow-md"
          />
        </div>
      </div>

      {/* ------------- WHY CLIENTS INVEST ------------- */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="flex justify-center order-2 md:order-1">
          <Image
            src="/images/clients-invest.jpg" // 🔁 replace with your actual image path
            alt="Trainers posing"
            width={480}
            height={480}
            className="rounded-2xl object-cover w-full h-auto shadow-md"
          />
        </div>

        {/* Right Text */}
        <div className="order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            WHY CLIENTS{" "}
            <span className="text-[#00bfa5]">INVEST</span>
          </h2>
          <p className="text-gray-700 mt-3 leading-relaxed">
            Choose the program that fits your life —
            let’s see how that looks.
          </p>

          <ul className="mt-6 space-y-3">
            {investPoints.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-800">
                <CheckCircle className="text-[#00bfa5] w-5 h-5 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button className="mt-8 bg-[#00bfa5] hover:bg-[#00a98e] text-white font-semibold py-3 px-8 rounded-full transition">
            Start Now
          </button>
        </div>
      </div>
    </section>
  )
}
