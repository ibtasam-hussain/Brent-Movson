"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { CiDumbbell } from "react-icons/ci";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* ---------- Logo ---------- */}
          <div className="flex items-center mt-4 sm:mt-6 md:mt-8 lg:mt-10">
            <Image
              src={logo}
              alt="Brent Movson Logo"
              priority
              className="
      object-contain
      h-20  // base mobile
      sm:h-16  // small screens
      md:h-20  // medium
      lg:h-24  // large
      xl:h-28  // extra large
      w-auto
      transition-all duration-300
    "
            />
          </div>

          {/* ---------- Center Menu ---------- */}
          <div className="hidden md:flex items-center bg-[#1a1a1a]/80 border border-gray-800 pl-10 ml-20 rounded-full px-5 py-2 space-x-6 text-sm font-medium text-gray-200">
            <Link
              href="#who-its-for"
              className="hover:text-white transition-colors"
            >
              Who It’s For
            </Link>
            <Link
              href="#programs"
              className="hover:text-white transition-colors"
            >
              Programs
            </Link>
            <Link href="#faq" className="hover:text-white transition-colors">
              Pricing
            </Link>
            <Link
              href="#in-person"
              className="hover:text-white transition-colors"
            >
              In-Person
            </Link>
          </div>

          {/* ---------- CTA Button ---------- */}
          <div>
            <Link
              href="#pricing"
              className="
      bg-[#29E3B0] hover:bg-[#20c49a] text-black
      font-semibold rounded-full inline-flex items-center justify-center gap-2
      px-4 py-2 text-xs        /* 📱 mobile */
      sm:px-5 sm:py-2.5 sm:text-sm  /* 🧩 small screens */
      md:px-6 md:py-3 md:text-base  /* 💻 medium screens */
      lg:px-8 lg:py-3.5 lg:text-lg  /* 🖥 large screens */
      transition-all duration-300
      shadow-md hover:shadow-lg
    "
            >
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl">
                <CiDumbbell />
              </span>
              Apply for Coaching
            </Link>
          </div>
        </div>
      </div>

      {/* ---------- Mobile Menu ---------- */}
      <div className="md:hidden flex justify-center py-3 bg-[#0a0a0a]/90 backdrop-blur-sm">
        <div className="flex space-x-6 text-sm text-gray-200">
          <Link href="#who-its-for" className="hover:text-white">
            Who It’s For
          </Link>
          <Link href="#programs" className="hover:text-white">
            Programs
          </Link>
          <Link href="#faq" className="hover:text-white">
            Pricing
          </Link>
          <Link href="#in-person" className="hover:text-white">
            In-Person
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
