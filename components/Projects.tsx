"use client";
import Image from "next/image";
import AnimatedWrapper from "./AnimatedWrapper";
import { useRef } from "react";

export default function Projects() {

  const projects = [
    {
      title: "Smart Notification Orchestrator",
      desc: "Distributed notification orchestration system supporting Email, SMS, WhatsApp, and Push notifications with async processing, retries, provider fallback, and rate limiting.",
      tech: ["Spring Boot", "Kafka/RabbitMQ", "Redis", "PostgreSQL"],
      link: "https://github.com/Siddharth-Mishra-23/smart-notification-orchestrator.git",
      img: "/projects/p1.jpg",
    },
    {
      title: "Real-Time Order Processing System",
      desc: "Event-driven microservices architecture handling order → payment → notification workflow with API Gateway and asynchronous communication.",
      tech: ["Spring Boot", "Kafka", "Microservices", "API Gateway"],
      link: "https://github.com/Siddharth-Mishra-23/real-time-order-processing-system.git",
      img: "/projects/p2.jpg",
    },
    {
      title: "Resume Analyzer",
      desc: "Full-stack platform for resume parsing, skill extraction, and job-role matching with OTP-based email verification and backend scoring logic.",
      tech: ["Spring Boot", "REST APIs", "Backend Logic"],
      link: "https://github.com/Siddharth-Mishra-23/resume-analyzer.git",
      img: "/projects/p3.jpg",
    },
    {
      title: "Chatting Application",
      desc: "Real-time messaging system supporting one-to-one and group chat with scalable backend and secure communication.",
      tech: ["Java", "WebSockets", "Backend"],
      link: "https://github.com/Siddharth-Mishra-23/SVMCHAT.git",
      img: "/projects/p4.jpg",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-20">

      <AnimatedWrapper>
        <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-12">
          Projects
        </h2>
      </AnimatedWrapper>

      <div className="grid md:grid-cols-2 gap-10">

        {projects.map((p, i) => {

          const ref = useRef<HTMLDivElement>(null);

          const handleMove = (e: any) => {
            const rect = ref.current?.getBoundingClientRect();
            if (!rect) return;

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateX = -(y / rect.height - 0.5) * 15;
            const rotateY = (x / rect.width - 0.5) * 15;

            ref.current!.style.transform =
              `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          };

          const reset = () => {
            if (ref.current) {
              ref.current.style.transform = "rotateX(0deg) rotateY(0deg)";
            }
          };

          return (
            <AnimatedWrapper key={i}>
              <div
                ref={ref}
                onMouseMove={handleMove}
                onMouseLeave={reset}
                className="card overflow-hidden transition duration-300 will-change-transform cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >

                {/* IMAGE */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>

                <div className="p-6">

                  <h3 className="text-xl font-semibold text-purple-400">
                    {p.title}
                  </h3>

                  <p className="text-gray-400 text-sm mt-3 leading-6">
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4 text-xs text-gray-400">
                    {p.tech.map((t, index) => (
                      <span key={index} className="border border-purple-500/40 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5">
                    <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-purple-400 hover:text-pink-400 transition font-medium relative z-10"
                    >
                    View Code →
                    </a>
                  </div>

                </div>

              </div>
            </AnimatedWrapper>
          );
        })}

      </div>

    </section>
  );
}