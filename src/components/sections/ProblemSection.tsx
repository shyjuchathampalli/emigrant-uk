"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const problems = [
  {
    title: "Missing RTW documents",
    desc: "Manual filing leads to gaps in Right to Work evidence that Home Office inspectors target first.",
  },
  {
    title: "Scattered employee records",
    desc: "Keeping compliance data across spreadsheets, emails, and paper files leaves you exposed during an unannounced UKVI audit.",
  },
  {
    title: "Invisible COS expiries",
    desc: "Without automated alerts, a sponsored worker's visa expires unnoticed exposing you to fines of up to £60,000 per worker.",
  },
  {
    title: "Reporting delays",
    desc: "Failing to update the Sponsor Management System within mandatory windows is one of the most common triggers for licence revocation.",
  },
];

export default function ProblemSection() {
  return (
    <section id="emigrant" className="bg-[#E8ECFF] text-[#0f172a] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-start">

        {/* LEFT */}
        <div className="space-y-5 md:space-y-6 text-center md:text-left">

          <p className="text-[10px] md:text-xs tracking-widest text-[#3b82f6] font-medium uppercase">
            — The Reality
          </p>

          <h2 className="font-sora font-semibold leading-tight
                         text-[28px] sm:text-[34px] md:text-5xl">
            Sponsor licence <br className="hidden md:block" />
            compliance is <br className="hidden md:block" />
            harder than it looks.
          </h2>

          <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto md:mx-0">
            The Home Office doesn't send warnings. They send auditors. And by the time the letter arrives, the damage is already done.
          </p>

          {/* ALERT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 flex justify-center md:justify-start"
          >
            <Image
              src="/uergent-alert.png"
              alt="alerts"
              width={424}
              height={285}
              className="rounded-xl w-full max-w-[424px]"
            />
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="relative">

          {/* TIMELINE LINE (FIXED CENTER ALIGN) */}
          <div className="absolute left-[18px] md:left-5 top-2 bottom-2 w-[2px] bg-gray-300" />

          <div className="space-y-8 md:space-y-12">
            {problems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 md:gap-6"
              >
                {/* ICON (PERFECTLY ALIGNED) */}
                <div className="relative z-10 flex items-center justify-center 
                                w-9 h-9 md:w-10 md:h-10 
                                rounded-full bg-[#0f2a5c] text-white
                                shrink-0">
                  <span className="text-[14px] md:text-base">✦</span>
                </div>

                {/* TEXT */}
                <div>
                  <h4 className="font-sora font-semibold 
                                 text-base md:text-lg mb-1">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 
                                text-sm md:text-sm leading-relaxed max-w-md">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}