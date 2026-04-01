"use client";
import { useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <nav className="w-full flex justify-between items-center px-6 md:px-10 py-5 fixed top-0 z-40 bg-black/30 backdrop-blur-lg">

      {/* LOGO */}
      <h1 className="text-xl font-bold text-purple-400">
        Siddharth
      </h1>

      {/* DESKTOP LINKS */}
      <div className="hidden md:flex gap-6 items-center">
        <a href="#about" className="hover:text-purple-400">About</a>
        <a href="#stats" className="hover:text-purple-400">Stats</a>
        <a href="#projects" className="hover:text-purple-400">Projects</a>
        <a href="#contact" className="hover:text-purple-400">Contact</a>
      </div>

      {/* MOBILE BUTTON */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)} className="text-xl">
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-black/90 backdrop-blur-lg flex flex-col items-center gap-5 py-6 md:hidden">
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#stats" onClick={() => setOpen(false)}>Stats</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}

    </nav>
  );
}
