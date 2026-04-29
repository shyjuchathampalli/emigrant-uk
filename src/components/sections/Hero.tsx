"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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

      <div
        className="absolute inset-0 z-0 opacity-100"
        style={{
          backgroundImage: "url('/grid-vector.png')",
          backgroundRepeat: "repeat-x",
          backgroundSize: "520px auto",
          backgroundPosition: "top center",
        }}
      />

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#0f2a5c]" />


      {/* GRADIENT */}
      <div className="absolute inset-0 z-5 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.08),transparent_40%)]" />

      {/* CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 
                pt-28 pb-16
                md:pt-36 md:pb-24
                grid md:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-2 items-start">

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
            className="font-sora bg-red-500 hover:bg-red-600 
                       px-6 py-3 rounded-xl shadow-lg 
                       text-sm md:text-base"
          >
            Book A Free Demo
          </motion.button>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="
            relative
            w-full
            flex
            justify-end
            mt-8 md:mt-0
          "
        >
          {/* MAIN DASHBOARD */}
          <div
            className="
              relative
              w-[130%]
              max-w-none
              flex
              justify-end
              md:translate-x-8
              lg:translate-x-12
              xl:translate-x-36
            "
          >
            <div className="relative w-full max-w-[980px]">
              <Image
                src="/hero-screen-stat.png"
                alt="dashboard"
                width={2316}
                height={1716}
                className="
                  w-full
                  h-auto
                  object-contain
                  drop-shadow-2xl
                "
                priority
              />

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}