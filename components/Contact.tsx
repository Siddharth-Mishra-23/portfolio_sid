"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 md:px-20">

      {/* HEADING */}
      <motion.h2 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold gradient-text mb-12"
      >
        Let's Connect 🚀
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >

          <p className="text-gray-400 leading-7 text-lg">
            I'm actively looking for backend / software roles.  
            If you have an opportunity or just want to connect —  
            feel free to reach out 👇
          </p>

          {/* CONTACT CARDS */}
          <div className="mt-10 space-y-5">

            {/* EMAIL */}
            <div className="card p-5 flex justify-between items-center hover:scale-[1.02] transition">

              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white font-medium">
                  talk2sid76@gmail.com
                </p>
              </div>

              <a
                href="mailto:talk2sid76@gmail.com"
                className="btn-outline text-sm px-4 py-2"
              >
                Send Mail ✉️
              </a>

            </div>

            {/* PHONE */}
            <div className="card p-5 flex justify-between items-center hover:scale-[1.02] transition">

              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-white font-medium">
                  +91 7668124457
                </p>
              </div>

              <a
                href="tel:+917668124457"
                className="btn-outline text-sm px-4 py-2"
              >
                Call Now 📞
              </a>

            </div>

            {/* LOCATION */}
            <div className="card p-5">

              <p className="text-gray-400 text-sm">Location</p>
              <p className="text-white font-medium">
                Noida, Uttar Pradesh, India
              </p>

            </div>

          </div>

          {/* SOCIAL LINKS */}
          <div className="mt-10 flex gap-6 text-gray-400">

            <a href="https://github.com/Siddharth-Mishra-23" target="_blank" className="hover:text-purple-400 transition">
              GitHub
            </a>

            <a href="https://leetcode.com/u/Siddharth09_23/" target="_blank" className="hover:text-purple-400 transition">
              LeetCode
            </a>

            <a href="https://www.linkedin.com" target="_blank" className="hover:text-purple-400 transition">
              LinkedIn
            </a>

          </div>

        </motion.div>

        {/* RIGHT SIDE - COOL CTA */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >

          {/* GLOW */}
          <div className="absolute w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full"></div>

          <div className="card p-10 text-center relative z-10">

            <h3 className="text-2xl font-semibold text-white">
              Want to build something great together?
            </h3>

            <p className="text-gray-400 mt-4">
              Let's collaborate, discuss ideas, or just have a tech chat.
            </p>

            {/* WHATSAPP BUTTON */}
            <a
              href="https://wa.me/917668124457"
              target="_blank"
              className="btn-primary mt-6 inline-block"
            >
              Chat on WhatsApp 💬
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}