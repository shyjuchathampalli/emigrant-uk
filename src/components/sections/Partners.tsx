"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";

const logoList = [
  { name: "CareFirst Group", src: "/logos/carefirst.png" },
  { name: "EduGlobal", src: "/logos/eduglobal.png" },
  { name: "LegalBridge Ltd", src: "/logos/legalbridge.png" },
  { name: "HospitalityHub", src: "/logos/hospitalityhub.png" },
  { name: "Nexus Health", src: "/logos/nexushealth.png" },
];

export default function Partners() {
  const controls = useAnimationControls();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const startAnimation = () => {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          duration: 34,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    };

    startAnimation();

    return () => controls.stop();
  }, [controls]);

  const handleLogoInCenter = () => {
    if (isPausedRef.current) return;

    isPausedRef.current = true;
    controls.stop();

    timeoutRef.current = setTimeout(() => {
      isPausedRef.current = false;
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          duration: 34,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    }, 1000);
  };

  return (
    <section className="relative py-16 overflow-hidden bg-[#0f2a5c]">
      {/* Fade Edges */}
      <div className="absolute left-0 top-0 h-full w-12 md:w-20 bg-gradient-to-r from-[#0f2a5c] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-12 md:w-20 bg-gradient-to-l from-[#0f2a5c] to-transparent z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          animate={controls}
          className="flex gap-12 md:gap-16 w-max items-center py-4"
        >
          {[...logoList, ...logoList].map((logo, i) => {
            const normalizedIndex = i % logoList.length;
            const isCenter = normalizedIndex === 2;

            return (
              <motion.div
                key={i}
                onViewportEnter={() => {
                  if (isCenter) handleLogoInCenter();
                }}
                viewport={{
                  margin: "-45% 0px -45% 0px",
                  once: false,
                }}
                className={`
                  flex-shrink-0 flex items-center justify-center 
                  transition-all duration-700
                  ${isCenter ? "scale-110 z-10" : "scale-95 opacity-70"}
                `}
              >
                <div className={`
                  px-5 py-4 rounded-2xl transition-all duration-700
                  ${isCenter 
                    ? "bg-white/10 border border-white/30 shadow-lg" 
                    : ""
                  }
                `}>
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-6 md:h-8 w-auto object-contain"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}