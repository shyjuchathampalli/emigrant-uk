"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const logos = [
  "CareFirst Group",
  "EduGlobal",
  "LegalBridge Ltd",
  "HospitalityHub",
  "Nexus Health",
];

export default function Partners() {
  const [activeIndex, setActiveIndex] = useState(2);

  // Auto move highlight through center
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % logos.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 overflow-hidden bg-[#0f2a5c]">
      {/* FADE EDGES */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#0f2a5c] to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#0f2a5c] to-transparent z-10" />

      <div className="max-w-6xl mx-auto px-6 overflow-hidden">
        <motion.div
          animate={{
            x: `calc(50% - ${(activeIndex * 220) + 110}px)`,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center gap-10 md:gap-16 w-max"
        >
          {logos.map((logo, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={logo}
                animate={{
                  scale: isActive ? 1.1 : 0.95,
                  opacity: isActive ? 1 : 0.4,
                }}
                transition={{ duration: 0.4 }}
                className={`px-5 py-3 rounded-xl whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? "bg-white/10 border border-white/20 shadow-lg"
                    : ""
                }`}
              >
                <span className="text-white text-lg font-medium tracking-wide">
                  {logo}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}