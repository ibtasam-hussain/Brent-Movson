"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import logo from "@/public/logo.svg" // replace with your actual logo path

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
          <div className="flex items-center space-x-3">
            <Image
              src={logo}
              alt="Brent Movson Logo"
              className="h-10 w-auto object-contain"
              priority
            />
            <div className="flex flex-col leading-tight text-white">
              <span className="font-semibold tracking-wide text-sm">BRENT MOVSON</span>
              <span className="text-[11px] text-gray-300 uppercase tracking-widest">
                Coaching
              </span>
            </div>
          </div>

          {/* ---------- Center Menu ---------- */}
          <div className="hidden md:flex items-center bg-[#1a1a1a]/80 border border-gray-800 rounded-full px-5 py-2 space-x-6 text-sm font-medium text-gray-200">
            <Link href="#" className="hover:text-white transition-colors">
              Who It’s For
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Programs
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              FAQ
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              In-Person
            </Link>
          </div>

          {/* ---------- CTA Button ---------- */}
          <div>
            <Link
              href="#"
              className="bg-[#29E3B0] hover:bg-[#20c49a] text-black px-5 py-2 rounded-full font-semibold text-sm transition-colors inline-flex items-center gap-2"
            >
              <span>🪄</span> Apply for Coaching
            </Link>
          </div>
        </div>
      </div>

      {/* ---------- Mobile Menu ---------- */}
      <div className="md:hidden flex justify-center py-3 bg-[#0a0a0a]/90 backdrop-blur-sm">
        <div className="flex space-x-6 text-sm text-gray-200">
          <Link href="#" className="hover:text-white">
            Who It’s For
          </Link>
          <Link href="#" className="hover:text-white">
            Programs
          </Link>
          <Link href="#" className="hover:text-white">
            FAQ
          </Link>
          <Link href="#" className="hover:text-white">
            In-Person
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
