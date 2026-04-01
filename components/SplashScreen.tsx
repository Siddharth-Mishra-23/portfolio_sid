"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function SplashScreen({ onFinish }: any) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden">

      {/* GLOW BACKGROUND */}
      <div className="absolute w-[600px] h-[600px] bg-purple-600/30 blur-[200px] rounded-full animate-pulse"></div>

      {/* TEXT */}
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-4xl md:text-6xl font-bold text-center"
        style={{
          background: "linear-gradient(to right, #a855f7, #ec4899)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          textShadow: "0 0 40px rgba(168,85,247,0.6)",
        }}
      >
        WELCOME TO <br /> SIDDHARTH'S PORTFOLIO
      </motion.h1>

      {/* LOADING BAR */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "60%" }}
        transition={{ duration: 2.5 }}
        className="absolute bottom-20 h-[4px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
      />
    </div>
  );
}