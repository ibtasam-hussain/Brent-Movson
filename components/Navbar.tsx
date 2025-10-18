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
      <div className="max-w-[92%] sm:max-w-[90%] md:max-w-[88%] lg:max-w-[85%] xl:max-w-[80%] mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between h-20">
          {/* ---------- Logo ---------- */}
          <div className="flex items-center mt-4 sm:mt-6 md:mt-8 lg:mt-10 -ml-4 sm:-ml-6 md:-ml-8 lg:-ml-10">
            <Image
              src={logo}
              alt="Brent Movson Logo"
              priority
              className="
                object-contain
                h-20
                sm:h-16
                md:h-20
                lg:h-24
                xl:h-28
                w-auto
                transition-all duration-300
              "
            />
          </div>

          {/* ---------- Center Menu ---------- */}
          <div className="hidden md:flex items-center flex-grow justify-end mr-8">
            <div className="bg-[#1a1a1a]/80 border border-gray-800 rounded-full px-10 py-2 flex space-x-8 text-sm font-medium text-gray-200">
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
          </div>

          {/* ---------- CTA Button ---------- */}
          <div className="flex-shrink-0 ml-4 sm:ml-6 md:ml-8 lg:ml-10">
            <Link
              href="#faq"
              className="hidden md:inline-flex items-center bg-[#3EF4C8] hover:bg-[#36cbb3] text-black font-semibold rounded-full px-5 py-3 transition-colors duration-300"
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
