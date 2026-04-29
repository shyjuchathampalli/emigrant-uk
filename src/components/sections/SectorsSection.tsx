"use client";

import { motion } from "framer-motion";
import { Building2, Code2, Utensils, Briefcase, Hammer } from "lucide-react";

const sectors = [
  { icon: Building2, label: "Care Homes" },
  { icon: Code2, label: "IT & Consulting Firms" },
  { icon: Utensils, label: "Hospitality & Restaurants" },
  { icon: Briefcase, label: "Recruitment Agencies" },
  { icon: Hammer, label: "Construction & Engineering" },
];

const beforeList = [
  "Documents scattered across email, shared drives, and folders",
  "Expiry dates missed because nobody was tracking them",
  "Salary and SOC mismatches discovered during an audit",
  "Reporting duties logged late or forgotten entirely",
  "Compliance depends on one person remembering everything",
];

const afterList = [
  "Every document centralised, assigned, and expiry-tracked",
  "Automated alerts at 90, 60, and 30 days before any deadline",
  "SOC salary intelligence flags mismatches the day they happen",
  "The whole team has visibility, nobody carries it alone",
  "A Home Office visit is just another working day",
];

export default function SectorsSection() {
  return (
    <section className="bg-[#E8ECFF] py-16 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            font-sora font-semibold text-center text-[#0f172a]
            text-[26px] sm:text-[30px] md:text-4xl
            leading-tight max-w-3xl mx-auto
          "
        >
          Built for the sectors that depend on sponsored workers most.
        </motion.h2>

        {/* SECTOR CARDS */}
        <div className="mt-8 md:mt-10 relative overflow-hidden">
          {/* FADE EDGES */}
          <div className="absolute left-0 top-0 h-full w-10 md:w-16 bg-gradient-to-r from-[#eef1f6] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-10 md:w-16 bg-gradient-to-l from-[#eef1f6] to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 22,
              ease: "linear",
            }}
            className="flex gap-3 md:gap-4 w-max"
          >
            {[...sectors, ...sectors].map((sector, i) => {
              const Icon = sector.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: (i % sectors.length) * 0.05 }}
                  whileHover={{
                    y: -4,
                    transition: { duration: 0.2 },
                  }}
                  className="
                    min-w-[180px]
                    sm:min-w-[220px]
                    md:min-w-[230px]
                    lg:min-w-[240px]
                    bg-white rounded-xl
                    px-4 py-5 md:px-3 md:py-8
                    flex flex-col items-center justify-center
                    gap-2 text-center
                    shadow-sm hover:shadow-md
                    transition
                    flex-shrink-0
                  "
                >
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#001388]" />

                  <p
                    className="
                      text-[12px] md:text-sm
                      font-medium text-gray-700
                      leading-tight
                    "
                  >
                    {sector.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* BEFORE / AFTER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mt-10 md:mt-14
            grid md:grid-cols-2
            rounded-2xl md:rounded-3xl
            overflow-hidden shadow-md md:shadow-lg
          "
        >
          
          {/* BEFORE */}
          <div className="
            bg-[#1f3566] text-white
            px-5 py-6 md:px-10 md:py-10
          ">
            <span className="
              inline-block text-[10px] md:text-xs
              bg-red-500/20 text-red-300
              px-3 py-1 rounded-full mb-4 md:mb-6
            ">
              BEFORE eMigrant
            </span>

            <ul className="space-y-4 md:space-y-5">
              {beforeList.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="
                    flex items-start gap-3
                    text-[13px] md:text-sm
                    text-white/90 leading-relaxed
                  "
                >
                  <span className="text-red-400 text-base md:text-lg mt-[2px]">
                    ✕
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* AFTER */}
          <div className="
            bg-white
            px-5 py-6 md:px-10 md:py-10
          ">
            <span className="
              inline-block text-[10px] md:text-xs
              bg-green-100 text-green-600
              px-3 py-1 rounded-full mb-4 md:mb-6
            ">
              AFTER eMigrant
            </span>

            <ul className="space-y-4 md:space-y-5">
              {afterList.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="
                    flex items-start gap-3
                    text-[13px] md:text-sm
                    text-gray-700 leading-relaxed
                  "
                >
                  <span className="text-blue-600 text-base md:text-lg mt-[2px]">
                    ✔
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

        </motion.div>
      </div>
    </section>
  );
}