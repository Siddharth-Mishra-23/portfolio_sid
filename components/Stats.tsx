"use client";
import Image from "next/image";

export default function Stats() {
  return (
    <section id="stats" className="py-24 px-10">

      {/* HEADING */}
      <h2 className="text-3xl font-bold gradient-text mb-12">
        Coding Journey
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="card p-10">

          <h3 className="text-lg text-gray-400">
            LeetCode Progress
          </h3>

          <p className="text-5xl font-bold text-green-400 mt-4">
            600+
          </p>

          <p className="text-gray-500 mt-2">
            Problems solved across multiple topics including DSA, graphs,
            dynamic programming and backend-related logic building.
          </p>

          {/* SMALL STATS */}
          <div className="flex gap-6 mt-8">

            <div>
              <p className="text-purple-400 font-bold text-xl">Java</p>
              <p className="text-xs text-gray-500">Primary Language</p>
            </div>

            <div>
              <p className="text-purple-400 font-bold text-xl">Spring Boot</p>
              <p className="text-xs text-gray-500">Backend Focus</p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE BADGES */}
        <div className="card p-10">

          <h3 className="text-lg text-gray-400 mb-6">
            Achievements
          </h3>

          <div className="flex items-center gap-8">

            {/* BADGE IMAGE */}
            <div className="relative group">
              <div className="absolute inset-0 blur-2xl bg-yellow-400/20 rounded-full"></div>

              <Image
                src="/badges/365.png"
                alt="365 badge"
                width={120}
                height={120}
                className="relative hover:scale-110 transition duration-300"
              />
            </div>

            {/* BADGE INFO */}
            <div>
              <p className="text-xl font-semibold text-yellow-400">
                365 Days Badge
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Consistency streak achieved by solving problems regularly.
              </p>

              <p className="mt-4 text-purple-400 font-bold">
                9+ Total Badges
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}