"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatBot() {

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<any[]>([
    { sender: "bot", text: "WELCOME 👋\nI'm Siddharth's AI Assistant.\nAsk me anything 🚀" }
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const boxRef = useRef<HTMLDivElement>(null);

  // CLOSE ON OUTSIDE CLICK
  useEffect(() => {
    const handler = (e: any) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // SMART BOT RESPONSES
  const reply = (msg: string) => {
    msg = msg.toLowerCase();

    if (msg.includes("mail"))
      return "Click below 👇 to mail Siddharth 📧";

    if (msg.includes("call"))
      return "You can directly call him 📞👇";

    if (msg.includes("skill"))
      return "Java • Spring Boot • REST APIs • Kafka • Microservices 💀🔥";

    if (msg.includes("project"))
      return "Projects include:\n⚡ Notification System\n⚡ Order Processing System\n⚡ Resume Analyzer\n⚡ Chat App";

    if (msg.includes("leetcode"))
      return "500+ problems solved 🧠🔥 Strong DSA skills.";

    if (msg.includes("who") || msg.includes("about"))
      return "Backend-focused Java Developer who builds scalable systems and solves real-world problems 🚀";

    return "Try asking about skills, projects, resume, or contact 👀";
  };

  // SEND MESSAGE
  const send = () => {
    if (!input.trim()) return;

    const user = { sender: "user", text: input };
    setMessages((prev) => [...prev, user]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const bot = { sender: "bot", text: reply(input) };
      setMessages((prev) => [...prev, bot]);
      setTyping(false);
    }, 800);
  };

  return (
    <>
      {/* FLOAT BUTTON */}
      <div className="fixed bottom-6 right-6 z-[9999]">

        <motion.button
          onClick={() => setOpen(!open)}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 
          shadow-[0_0_25px_rgba(168,85,247,0.7)] 
          flex items-center justify-center text-xl text-white"
        >
          💬
        </motion.button>

      </div>

      {/* CHATBOX */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={boxRef}
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-[340px] h-[460px] 
            bg-black/95 backdrop-blur-xl 
            border border-purple-500/30 
            rounded-2xl shadow-[0_0_40px_rgba(168,85,247,0.4)] 
            z-[9999] flex flex-col overflow-hidden"
          >

            {/* HEADER */}
            <div className="p-4 border-b border-purple-500/20 gradient-text font-semibold">
              Siddharth AI 🤖
            </div>

            {/* MESSAGES */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-2">

              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`px-3 py-2 text-sm rounded-xl max-w-[75%] whitespace-pre-line ${
                    m.sender === "user"
                      ? "ml-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                      : "bg-gray-800 text-gray-200"
                  }`}
                >
                  {m.text}
                </div>
              ))}

              {typing && (
                <div className="text-gray-400 text-sm animate-pulse">
                  Typing...
                </div>
              )}

            </div>

            {/* QUICK ACTIONS */}
            <div className="px-4 py-2 flex gap-2 flex-wrap">

              <button
                onClick={() => window.open("mailto:talk2sid76@gmail.com")}
                className="text-xs border px-2 py-1 rounded border-purple-500/40 hover:bg-purple-500/20 transition"
              >
                📧 Mail
              </button>

              <button
                onClick={() => window.open("tel:+91766812457")}
                className="text-xs border px-2 py-1 rounded border-purple-500/40 hover:bg-purple-500/20 transition"
              >
                📞 Call
              </button>

              <button
                onClick={() => window.open("https://leetcode.com/u/Siddharth09_23/")}
                className="text-xs border px-2 py-1 rounded border-purple-500/40 hover:bg-purple-500/20 transition"
              >
                💻 LeetCode
              </button>

            </div>

            {/* INPUT */}
            <div className="p-3 flex gap-2 border-t border-purple-500/20">

              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 px-3 py-2 bg-black border border-purple-500/30 rounded focus:outline-none focus:border-pink-500"
                placeholder="Ask anything..."
              />

              <button
                onClick={send}
                className="btn-primary px-4"
              >
                ➤
              </button>

            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}