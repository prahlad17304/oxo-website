import React from "react";
import {
  FaTwitch,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#090415] text-slate-200 pt-16">
      {/* Top */}
      <div className="max-w-6xl mx-auto px-6 lg:px-0 pb-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-start justify-between gap-12 scroll-reveal">
          {/* Left */}
          <div className="min-w-[220px]">
            <div className="flex items-center gap-3 mb-4">
              <FaTwitch className="text-white text-3xl" />
              <span className="text-white text-3xl font-extrabold tracking-wide">
                Oxo
              </span>
            </div>
            <p className="mb-3 text-sm font-medium">Follow us on</p>
            <div className="flex items-center gap-4 text-white text-lg">
              <a href="#" className="hover:text-[#EB4663]"><FaLinkedinIn /></a>
              <a href="#" className="hover:text-[#EB4663]"><FaFacebookF /></a>
              <a href="#" className="hover:text-[#EB4663]"><FaTwitter /></a>
              <a href="#" className="hover:text-[#EB4663]"><FaInstagram /></a>
            </div>
          </div>

          {/* Center */}
          <div className="flex-1 flex justify-center gap-24">

            <div>
              <h4 className="text-white font-bold mb-4 tracking-wide">Company</h4>
              <ul className="space-y-2 text-sm font-semibold">
                <li><a href="#" className="hover:text-[#EB4663]">About Us</a></li>
                <li><a href="#" className="hover:text-[#EB4663]">Features</a></li>
                <li><a href="#" className="hover:text-[#EB4663]">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 tracking-wide">Products</h4>
              <ul className="space-y-2 text-sm font-semibold">
                <li><a href="#" className="hover:text-[#EB4663]">Blog</a></li>
                <li><a href="#" className="hover:text-[#EB4663]">Help Center</a></li>
                <li><a href="#" className="hover:text-[#EB4663]">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 tracking-wide">Resources</h4>
              <ul className="space-y-2 text-sm font-semibold">
                <li><a href="#" className="hover:text-[#EB4663]">FAQ'S</a></li>
                <li><a href="#" className="hover:text-[#EB4663]">Testimonial</a></li>
                <li><a href="#" className="hover:text-[#EB4663]">Terms &amp; Conditions</a></li>
              </ul>
            </div>
          </div>

          {/* Right */}
          <div className="min-w-[210px] flex flex-col items-end gap-3">
            <a
              href="#"
              className="flex items-center gap-3 bg-black border border-slate-500 rounded-xl px-4 py-2 w-44 text-xs font-semibold text-white hover:border-white"
            >
              <FaApple className="text-2xl shrink-0" />
              <div className="text-left leading-tight">
                <div className="text-[10px] uppercase tracking-wide">
                  Download on the
                </div>
                <div className="text-sm font-bold">App Store</div>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 bg-black border border-slate-500 rounded-xl px-4 py-2 w-44 text-xs font-semibold text-white hover:border-white"
            >
              <FaGooglePlay className="text-2xl shrink-0" />
              <div className="text-left leading-tight">
                <div className="text-[10px] uppercase tracking-wide">
                  Get it on
                </div>
                <div className="text-sm font-bold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#241a3b]">
        <div className="max-w-6xl mx-auto px-6 lg:px-0 py-4 text-center text-xs text-slate-400 font-medium">
          © Copyrights 2020 Oxo All rights reserved.
        </div>
      </div>
    </footer>
  );
}
