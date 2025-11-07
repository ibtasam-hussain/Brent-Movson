"use client";

import { motion, useAnimation } from "framer-motion";
import { Flame } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Marquee() {
  const controls = useAnimation();
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  const textItems = [
    "Fix Your Metabolism",
    "Hormonal Imbalance",
    "Insulin Resistance",
    "End Fatigue",
    "Body Composition",
    "Balance Cortisol",
    "Support Thyroid",
    "PCOS-Friendly",
    "Blood Sugar",
    "Lower Blood Pressure",
    "Lower Cholesterol",    "Fix Your Metabolism",
    "Hormonal Imbalance",
    "Insulin Resistance",
    "End Fatigue",
    "Body Composition",
    "Balance Cortisol",
    "Support Thyroid",
    "PCOS-Friendly",
    "Blood Sugar",
    "Lower Blood Pressure",
    "Lower Cholesterol",    "Fix Your Metabolism",
    "Hormonal Imbalance",
    "Insulin Resistance",
    "End Fatigue",
    "Body Composition",
    "Balance Cortisol",
    "Support Thyroid",
    "PCOS-Friendly",
    "Blood Sugar",
    "Lower Blood Pressure",
    "Lower Cholesterol",    "Fix Your Metabolism",
    "Hormonal Imbalance",
    "Insulin Resistance",
    "End Fatigue",
    "Body Composition",
    "Balance Cortisol",
    "Support Thyroid",
    "PCOS-Friendly",
    "Blood Sugar",
    "Lower Blood Pressure",
    "Lower Cholesterol",    "Fix Your Metabolism",
    "Hormonal Imbalance",
    "Insulin Resistance",
    "End Fatigue",
    "Body Composition",
    "Balance Cortisol",
    "Support Thyroid",
    "PCOS-Friendly",
    "Blood Sugar",
    "Lower Blood Pressure",
    "Lower Cholesterol",    "Fix Your Metabolism",
    "Hormonal Imbalance",
    "Insulin Resistance",
    "End Fatigue",
    "Body Composition",
    "Balance Cortisol",
    "Support Thyroid",
    "PCOS-Friendly",
    "Blood Sugar",
    "Lower Blood Pressure",
    "Lower Cholesterol",
  ];

  useEffect(() => {
    if (marqueeRef.current) {
      setWidth(marqueeRef.current.scrollWidth / 2); // half width since duplicated twice
    }
  }, []);

  useEffect(() => {
    if (!width) return;

    const startAnimation = () => {
      controls.start({
        x: [0, -width],
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 100, // Adjust speed here (lower = faster)
          ease: "linear",
        },
      });
    };

    startAnimation();
  }, [controls, width]);

  const handleMouseEnter = () => controls.stop();
  const handleMouseLeave = () => {
    controls.start({
      x: [0, -width],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 100,
        ease: "linear",
      },
    });
  };

  return (
    <div
      className="bg-[#0b2f2a] py-6 overflow-hidden cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={marqueeRef}
        animate={controls}
        className="flex whitespace-nowrap items-center"
      >
        {/* duplicate twice for continuous scrolling */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center space-x-8 mx-8">
            {textItems.map((text, index) => (
              <div key={`${i}-${index}`} className="flex items-center space-x-3">
                <span className="text-white text-3xl md:text-4xl font-semibold uppercase tracking-wide">
                  {text}
                </span>
                <Flame className="text-[#04CFAB] w-8 h-8 flex-shrink-0" />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
