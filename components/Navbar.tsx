"use client";
import { useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <nav className="w-full flex justify-between items-center px-10 py-6 fixed top-0 z-40 bg-black/30 backdrop-blur-lg">
      
      <h1 className="text-xl font-bold text-purple-400">
        Siddharth
      </h1>

      <div className="flex gap-6 items-center">
        <a href="#about" className="hover:text-purple-400">About</a>
        <a href="#stats" className="hover:text-purple-400">Stats</a>
        <a href="#projects" className="hover:text-purple-400">Projects</a>
        <a href="#contact" className="hover:text-purple-400">Contact</a>
      </div>
    </nav>
  );
}