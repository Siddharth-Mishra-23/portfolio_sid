"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {

  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: any) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // MORE INTENSE ROTATION 🔥
    const rotateX = -(y / rect.height - 0.5) * 30;
    const rotateY = (x / rect.width - 0.5) * 30;

    cardRef.current!.style.transform =
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const reset = () => {
    if (cardRef.current) {
      cardRef.current.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    }
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-28 gap-12">

      {/* LEFT */}
      <motion.div 
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl"
      >

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I'm{" "}
          <span className="gradient-text">
            Siddharth Mishra
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-400 leading-8">
          <Typewriter
            words={[
              "Java Backend Developer 🚀",
              "Spring Boot Specialist ⚡",
              "Problem Solver 🧠",
              "Building Scalable Systems 🔥",
            ]}
            loop={true}
            cursor
          />
        </p>

        <div className="flex gap-4 mt-8 flex-wrap">
          <a href="#contact" className="btn-primary">
            Hire Me
          </a>

          <a href="/resume.pdf" target="_blank" className="btn-outline">
            Download Resume
          </a>
        </div>

      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >

        {/* GLOW */}
        <div className="absolute w-[450px] h-[450px] bg-purple-600/30 blur-[180px] rounded-full"></div>

        {/* 3D CARD */}
        <div
          ref={cardRef}
          onMouseMove={handleMove}
          onMouseLeave={reset}
          className="transition-transform duration-200 ease-out"
        >
          <div className="rounded-2xl p-[3px] bg-gradient-to-br from-purple-500 to-pink-500 shadow-[0_30px_80px_rgba(168,85,247,0.6)]">
            <Image
              src="/profile.jpg"
              alt="profile"
              width={320}
              height={380}
              className="rounded-2xl object-cover w-[300px] h-auto"
            />
          </div>
        </div>

      </motion.div>

    </section>
  );
}