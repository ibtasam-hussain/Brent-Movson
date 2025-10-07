"use client";

import Link from "next/link";
import { FaInstagram, FaFacebookF, FaPinterestP, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0A0A] text-white py-16 px-6 overflow-hidden">
      {/* Optional overlay background (blurred text like image) */}
      <div className="absolute inset-0 opacity-[0.07] bg-[url('/footer-bg.png')] bg-cover bg-center pointer-events-none" />
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
        {/* --- Left Section --- */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold tracking-wide">BRENT MOVSON</h3>
          <p className="text-gray-400 text-sm">I help busy professionals get leaner</p>
          <div className="flex justify-center md:justify-start space-x-5 pt-2">
            <Link href="#" className="hover:text-[#00E6BE] transition-colors">
              <FaInstagram size={20} />
            </Link>
            <Link href="#" className="hover:text-[#00E6BE] transition-colors">
              <FaFacebookF size={18} />
            </Link>
            <Link href="#" className="hover:text-[#00E6BE] transition-colors">
              <FaPinterestP size={20} />
            </Link>
            <Link href="#" className="hover:text-[#00E6BE] transition-colors">
              <FaLinkedinIn size={20} />
            </Link>
          </div>
        </div>

        {/* --- Center Section (Newsletter) --- */}
        <div className="space-y-5">
          <h4 className="text-lg font-semibold">Signup for our Daily Newsletter</h4>
          <form className="flex justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 bg-white/10 border border-white/20 rounded-l-full px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00E6BE]"
            />
            <button
              type="submit"
              className="bg-[#00E6BE] text-black font-semibold px-6 py-3 rounded-r-full hover:bg-[#00CBA8] transition-colors"
            >
              Try Now
            </button>
          </form>
        </div>

        {/* --- Right Section (Programs) --- */}
        <div className="space-y-3 md:text-right">
          <h4 className="text-lg font-semibold mb-2">Programs</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="text-gray-400 hover:text-[#00E6BE] transition-colors">
                Fitness-only Coaching
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-[#00E6BE] transition-colors">
                Full Coaching
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-[#00E6BE] transition-colors">
                Private Coaching
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* --- Copyright --- */}
      <div className="relative border-t border-white/10 mt-12 pt-6">
        <p className="text-center text-gray-500 text-sm">
          © Brentmovson {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
