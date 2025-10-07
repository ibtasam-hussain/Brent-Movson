"use client";
import React from "react";
import Image from "next/image";
import {
  Dumbbell,
  Clock,
  Utensils,
  LineChart,
  Users,
  FlaskConical,
  HeartPulse,
  Gem,
  Trophy,
} from "lucide-react";
import Jog from "../public/running.jpg";

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
    <section className="bg-[#f7f7f7] py-16 md:py-24 px-6 md:px-12 lg:px-24 text-gray-900">
      {/* ------------- S.H.A.P.E. SYSTEM ------------- */}
<div className="grid md:grid-cols-2 gap-6 items-center mb-56"> {/* ⬅ gap slightly reduced, mb adjusted */}
  {/* Left Text */}
  <div>
    <h2 className="text-4xl md:text-5xl font-extrabold">
      THE <span className="text-[#00bfa5]">S.H.A.P.E.</span> SYSTEM
    </h2>
    <p className="text-base md:text-lg font-semibold tracking-wide text-gray-700 mt-3">
      STRENGTH • HYBRID • ATHLETE • PHYSIQUE • ELITE
    </p>
    <p className="text-lg text-gray-700 mt-6 leading-relaxed">
      A flagship method combining strength training, functional fitness,
      and physique science.
    </p>

    <ul className="mt-8 space-y-4">
      {features.map((item, i) => (
        <li key={i} className="flex items-start gap-4 text-lg">
          <div className="bg-[#00bfa5] p-3 rounded-full flex items-center justify-center">
            {React.cloneElement(item.icon, { className: "text-white w-6 h-6" })}
          </div>
          <span>{item.text}</span>
        </li>
      ))}
    </ul>

    <button className="mt-10 bg-[#00bfa5] hover:bg-[#00a98e] text-white font-semibold py-3.5 px-10 rounded-full transition text-lg">
      Start Now
    </button>
  </div>

  {/* Right Image */}
  <div className="flex justify-center">
    <Image
      src={Jog}
      alt="Athlete training"
      width={450}
      height={500}
      className="rounded-2xl object-cover w-[75%] h-auto shadow-lg"
    />
  </div>
</div>


{/* ------------- WHY CLIENTS INVEST ------------- */}
<div className="grid md:grid-cols-2 gap-10 items-center"> {/* ⬅ horizontal gap increased */}
  {/* Left Image */}
  <div className="flex justify-center order-2 md:order-1">
    <Image
      src={Jog}
      alt="Trainers posing"
      width={450}
      height={500}
      className="rounded-2xl object-cover w-[75%] h-auto shadow-lg"
    />
  </div>

  {/* Right Text */}
  <div className="order-1 md:order-2">
    <h2 className="text-4xl md:text-5xl font-extrabold">
      WHY CLIENTS <span className="text-[#00bfa5]">INVEST</span>
    </h2>
    <p className="text-lg text-gray-700 mt-4 leading-relaxed">
      Choose the program that fits your life — let’s see how that looks.
    </p>

    <ul className="mt-8 space-y-4">
      {investPoints.map((item, i) => (
        <li key={i} className="flex items-start gap-4 text-lg">
          <div className="bg-[#00bfa5] p-3 rounded-full flex items-center justify-center">
            {React.cloneElement(item.icon, { className: "text-white w-6 h-6" })}
          </div>
          <span>{item.text}</span>
        </li>
      ))}
    </ul>

    <button className="mt-10 bg-[#00bfa5] hover:bg-[#00a98e] text-white font-semibold py-3.5 px-10 rounded-full transition text-lg">
      Start Now
    </button>
  </div>
</div>

    </section>
  );
}
