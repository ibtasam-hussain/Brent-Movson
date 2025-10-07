"use client";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";
import fbg from "../public/fbg.svg"

export default function Footer() {
  console.log("Sdasd",fbg)
  return (
   
<footer className="relative bg-[#0A0A0A] text-white py-20 px-8 overflow-hidden">
<div
  className="absolute inset-0 bg-cover opacity-70"
  style={{
    backgroundImage: `url("/fbg.svg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",        // full cover kare
    backgroundPosition: "bottom",   // bottom align, top se cut ho sakta hai
    zIndex: 0,
  }}
></div>





      {/* Greenish Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#003C31]/70 via-[#009e8a]/50 to-[#00E6BE]/40 mix-blend-overlay"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
        {/* --- Left Section --- */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold tracking-wide">BRENT MOVSON</h3>
          <p className="text-gray-400 text-sm">
            I help busy professionals get leaner
          </p>
          <div className="flex justify-center md:justify-start space-x-6 pt-3">
            <Link href="#" className="hover:text-[#00E6BE] transition-colors">
              <FaInstagram size={22} />
            </Link>
            <Link href="#" className="hover:text-[#00E6BE] transition-colors">
              <FaFacebookF size={20} />
            </Link>
            <Link href="#" className="hover:text-[#00E6BE] transition-colors">
              <FaPinterestP size={22} />
            </Link>
            <Link href="#" className="hover:text-[#00E6BE] transition-colors">
              <FaLinkedinIn size={22} />
            </Link>
          </div>
        </div>

        {/* --- Center Section (Newsletter) --- */}
        <div className="space-y-6">
          <h4 className="text-xl font-semibold">
            Signup for our Daily Newsletter
          </h4>
          <form className="flex justify-center items-center max-w-md mx-auto bg-white/10 rounded-full overflow-hidden border border-white/20">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 bg-transparent px-5 py-3 text-sm text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#00E6BE] text-black font-semibold px-8 py-3 rounded-r-full hover:bg-[#00CBA8] transition-colors"
            >
              Try Now
            </button>
          </form>
        </div>

        {/* --- Right Section (Programs) --- */}
        <div className="space-y-4 md:text-right">
          <h4 className="text-xl font-semibold mb-2">Programs</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#00E6BE] transition-colors"
              >
                Fitness-only Coaching
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#00E6BE] transition-colors"
              >
                Full Coaching
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#00E6BE] transition-colors"
              >
                Private Coaching
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* --- Copyright --- */}
      <div className="relative border-t border-white/10 mt-14 pt-6">
        <p className="text-center text-gray-500 text-sm">
          © Brentmovson {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
