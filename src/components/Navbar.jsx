import React from "react";
import { NavLink } from "react-router-dom";
import { FaTwitch } from "react-icons/fa";

export default function Navbar() {

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/pages", label: "Pages" },
    { to: "/feature", label: "Feature" },
    { to: "/overview", label: "Overview" },
    { to: "/pricing", label: "Pricing" },
    { to: "/faqs", label: "FAQ'S" },
  ];

  return (
    <nav className="w-full bg-[#191025] py-5 px-6 lg:px-[151px] flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <FaTwitch className="text-white text-3xl" />
        <span className="text-white font-bold text-2xl">Oxo</span>
      </div>

      {/* Center */}
      <div className="flex-1 hidden lg:flex justify-center">
        <div className="flex gap-8">
          {navLinks.map(link => (
            <NavLink
              key={link.label}
              to={link.to}
              className="text-white font-semibold hover:text-[#EB4663] transition"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="hidden lg:block">
        <NavLink
          to="/getstarted"
          className="bg-[#EB4663] text-white font-semibold rounded-full px-8 py-3 hover:bg-[#d23750] transition"
        >
          Get Started
        </NavLink>
      </div>

      
    </nav>
  );
}

