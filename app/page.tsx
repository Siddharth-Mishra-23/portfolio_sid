"use client";

import SplashScreen from "@/components/SplashScreen";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import ParticlesBg from "@/components/ParticlesBg";
import ChatBot from "@/components/ChatBot";

import { useState } from "react";

export default function Home() {
  const [showMain, setShowMain] = useState(false);

  return (
    <div className="bg-black text-white overflow-x-hidden">

      {/* SPLASH */}
      {!showMain && (
        <SplashScreen onFinish={() => setShowMain(true)} />
      )}

      {/* MAIN CONTENT */}
      <div
        className={`transition-all duration-1000 ${
          showMain
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ParticlesBg />
        <Navbar />
        <Hero />
        <About />
        <Stats />
        <Projects />
        <Contact />
      </div>

      {/* ✅ FIXED: OUTSIDE */}
      <ChatBot />

    </div>
  );
}