"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ParticleBackground from "@/components/ui/Particles";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0f2a5c] text-white">

      {/* PARTICLES → ONLY DESKTOP */}
      {!isMobile && <ParticleBackground />}

      {/* GRADIENT */}
      <div className="absolute inset-0 z-5 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.08),transparent_40%)]" />

      {/* CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 
                      pt-20 pb-16 
                      md:py-24 
                      grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-5 text-center md:text-left"
        >
          {/* TAG */}
          <div className="inline-flex items-center justify-center md:justify-start 
                          gap-2 px-4 py-1 rounded-full bg-white/10 text-[10px] md:text-xs">
            ✦ AI-POWERED · UKVI COMPLIANT · BUILT FOR UK
          </div>

          {/* HEADING */}
          <h1 className="
            font-sora font-semibold leading-tight
            text-[32px] sm:text-[38px] md:text-5xl lg:text-6xl
          ">
            Sponsor licence <br className="hidden md:block" />
            compliance, <br className="hidden md:block" />
            made certain.
          </h1>

          {/* DESCRIPTION */}
          <p className="text-white/80 text-sm md:text-base max-w-md mx-auto md:mx-0">
            RTW checks, visa tracking, and UKVI reporting handled automatically.
            Built for UK businesses that sponsor overseas talent.
          </p>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-red-500 hover:bg-red-600 
                       px-6 py-3 rounded-xl shadow-lg 
                       text-sm md:text-base"
          >
            Book A Free Demo
          </motion.button>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center md:block"
        >
          {/* MAIN IMAGE */}
          <div className="rounded-2xl overflow-hidden shadow-2xl w-full max-w-md md:max-w-none">
            <Image
              src="/hero-screen.png"
              alt="dashboard"
              width={900}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* FLOATING CARD → ONLY DESKTOP */}
          {!isMobile && (
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-10 left-10 bg-white rounded-xl shadow-xl p-4 w-64"
            >
              <Image
                src="/hero-screen2.png"
                alt="score"
                width={250}
                height={200}
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}