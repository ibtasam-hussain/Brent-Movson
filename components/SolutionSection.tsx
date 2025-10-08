"use client";
import React from "react";
import Image from "next/image";
import {
  Clock,
  Utensils,
  LineChart,
  Users,
  FlaskConical,
  HeartPulse,
  Gem,
  Trophy,
} from "lucide-react";
import Jog from "../public/running.jpg"; // replace with your real images

export default function ShapeSection() {
  const features = [
    { icon: <Utensils />, text: "Eat carbs guilt-free (timed & portioned right)." },
    { icon: <Clock />, text: "3–4 efficient, high-return workouts per week." },
    { icon: <LineChart />, text: "Precision-calibrated calorie and protein targets." },
    { icon: <Users />, text: "Flexible structure for work, travel, & family life." },
    { icon: <HeartPulse />, text: "Daily accountability from a coach who tracks every detail." },
  ];

  const investPoints = [
    { icon: <FlaskConical />, text: "Science-backed methods" },
    { icon: <Users />, text: "Personalized 1:1 support" },
    { icon: <Gem />, text: "Luxury-level accountability" },
    { icon: <Trophy />, text: "Real lasting results" },
  ];

  return (
    <section className="bg-[#f7f7f7] py-28 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col gap-40">
        {/* ----------- S.H.A.P.E. SYSTEM ----------- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-20">
          {/* Left Text */}
          <div className="flex-1 max-w-lg">
            <h2 className="text-4xl md:text-[44px] font-extrabold leading-snug tracking-tight text-[#0f0f0f]">
              THE <span className="text-[#00bfa5]">S.H.A.P.E.</span> SYSTEM
            </h2>
            <p className="text-base md:text-lg font-semibold tracking-wider text-gray-700 mt-2">
              STRENGTH • HYBRID • ATHLETE • PHYSIQUE • ELITE
            </p>
            <p className="text-lg text-gray-700 mt-6 leading-relaxed">
              A flagship method combining strength training, functional fitness, and physique science.
            </p>

            <ul className="mt-8 space-y-4">
              {features.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-lg">
                  <div className="bg-[#00bfa5] p-3 rounded-full flex items-center justify-center shrink-0">
                    {React.cloneElement(item.icon, { className: "text-white w-6 h-6" })}
                  </div>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <button className="mt-10 bg-[#00bfa5] hover:bg-[#00a98e] text-white font-semibold py-3.5 px-10 rounded-full transition text-lg shadow-sm">
              Start Now
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <div className="w-[500px] h-[420px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={Jog}
                alt="Athlete training"
                className="w-full h-full object-cover"
                width={500}
                height={420}
              />
            </div>
          </div>
        </div>

        {/* ----------- WHY CLIENTS INVEST ----------- */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-32 md:gap-40">
          {/* Right Text */}
          <div className="flex-1 max-w-lg">
            <h2 className="text-4xl md:text-[44px] font-extrabold leading-snug tracking-tight text-[#0f0f0f]">
              WHY CLIENTS <span className="text-[#00bfa5]">INVEST</span>
            </h2>
            <p className="text-lg text-gray-700 mt-4 leading-relaxed">
              Choose the program that fits your life — let’s see how that looks.
            </p>

            <ul className="mt-8 space-y-4">
              {investPoints.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-lg">
                  <div className="bg-[#00bfa5] p-3 rounded-full flex items-center justify-center shrink-0">
                    {React.cloneElement(item.icon, { className: "text-white w-6 h-6" })}
                  </div>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <button className="mt-10 bg-[#00bfa5] hover:bg-[#00a98e] text-white font-semibold py-3.5 px-10 rounded-full transition text-lg shadow-sm">
              Start Now
            </button>
          </div>

          {/* Left Image */}
          <div className="flex-1 flex justify-center">
            <div className="w-[500px] h-[420px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={Jog}
                alt="Trainers posing"
                className="w-full h-full object-cover"
                width={500}
                height={620}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
