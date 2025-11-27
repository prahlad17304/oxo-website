import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Pages from "./pages/Pages";
import Feature from "./pages/Feature";
import Overview from "./pages/Overview";
import Pricing from "./pages/Pricing";
import Faqs from "./pages/Faqs";
import GetStarted from "./pages/GetStarted";

export default function App() {
  useEffect(() => {
  const elements = Array.from(
    document.querySelectorAll(".scroll-reveal")
  );

  if (elements.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    },
    { threshold: 0.3 }
  );

  elements.forEach((el) => observer.observe(el));

  return () => {
    elements.forEach((el) => observer.unobserve(el));
  };
}, []);


  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-slate-50">
        <Navbar />
        <main className="pt-16 sm:pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feature" element={<Feature />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/get-started" element={<GetStarted />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

