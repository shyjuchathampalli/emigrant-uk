"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.7, 
      ease: [0.22, 1, 0.36, 1] as const 
    },
  },
};

export default function Platform() {
  return (
    <section className="bg-[#ffffff] py-24 text-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xs tracking-widest text-blue-500 uppercase">
            — The Platform
          </p>

          <h2 className="font-sora text-3xl md:text-5xl font-semibold mt-3">
            Everything your compliance needs. In one place
          </h2>

          <p className="text-gray-600 mt-4 text-sm md:text-base">
            Five capabilities built specifically for UK sponsor licence
            holders proactive, automated, and audit-ready.
          </p>
        </motion.div>

        {/* HERO CARD */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            mt-16 rounded-3xl bg-[#E8ECFF]
            pt-8 md:pt-10
            pl-5 sm:pl-6 md:pl-12
            pb-0
            grid grid-cols-1 lg:grid-cols-2
            gap-6 lg:gap-0
            items-center
            relative overflow-hidden
            min-h-auto lg:min-h-[460px]
          "
        >
          {/* LEFT CONTENT */}
          <div className="z-10 self-start pt-1 md:pt-4 lg:pt-6 pb-0 sm:pb-2 lg:pb-12 pr-5 sm:pr-6 lg:pr-16">
            <h3 className="font-sora text-3xl sm:text-4xl md:text-2xl lg:text-3xl font-semibold leading-tight text-[#0F172A]">
              Compliance Command Centre
            </h3>

            <p className="text-gray-600 mt-4 max-w-md leading-relaxed text-base sm:text-lg">
              Real-time health score and daily action list across your sponsored workforce
            </p>

            <button className="font-sora mt-6 px-5 py-2.5 rounded-md border border-[#001388] text-[#001388] hover:bg-[#001388] hover:text-white transition">
              Learn More
            </button>
          </div>

          {/* RIGHT VISUAL */}
          <div
          className="
            relative
            w-full
            flex justify-center lg:justify-end
            items-end
            min-h-[180px] sm:min-h-[260px] md:min-h-[420px] lg:min-h-[460px]
            -mt-4 sm:-mt-2 lg:mt-0
          "
        >
            {/* MOBILE / TABLET — FULL IMAGE VISIBLE */}
            <div className="relative w-full flex justify-center lg:hidden px-2 sm:px-4">
              <Image
                src="/Hero-Compliance.png"
                alt="Compliance dashboard"
                width={1238}
                height={778}
                priority
                className="
                  w-full
                  h-auto
                  max-w-[640px]
                  object-contain
                  object-center
                  select-none
                "
              />
            </div>

            {/* DESKTOP — KEEP CURRENT FIGMA STYLE */}
            <div className="hidden lg:flex absolute right-0 bottom-0 h-full w-auto items-end justify-end">
              <Image
                src="/Hero-Compliance.png"
                alt="Compliance dashboard"
                width={1238}
                height={778}
                priority
                className="
                  h-full
                  w-auto
                  max-w-none
                  object-contain
                  object-right-bottom
                  select-none
                "
              />
            </div>
          </div>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mt-10"
        >
          <FeatureCard
            title="CoS Expiry Management"
            desc="Automated alerts at 90, 60, 30 days before every visa and CoS end date"
            img="/platform-screen-2.png"
          />

          <FeatureCard
            title="SOC Salary Intelligence"
            desc="Rule engine validates every salary against SOC code minimums before UKVI does"
            img="/platform-screen-3.png"
          />

          <FeatureCard
            title="SMS Reporting"
            desc="Automated reporting obligations change of circumstances, absences, salary changes"
            img="/platform-screen-4.png"
          />

          <FeatureCard
            title="Document Vault"
            desc="Encrypted storage for all worker documents with expiry tracking built in"
            img="/platform-screen5.png"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* REUSABLE CARD */
function FeatureCard({ title, desc, img }: any) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="bg-[#E8ECFF] rounded-2xl p-6 relative overflow-hidden group min-h-[320px]"
    >
      <div className="relative z-10 max-w-[65%]">
        <h4 className="font-sora text-xl font-semibold">{title}</h4>

        <p className="text-gray-600 text-sm mt-2 leading-relaxed">
            {desc}
        </p>

        <button className="font-sora font-semibold mt-4 px-3 py-1.5 text-sm border border-[#001388] text-[#001388] rounded-md group-hover:bg-[#001388] group-hover:text-white transition">
            Learn More
        </button>
        </div>

      {/* IMAGE */}
      <motion.div
        className="absolute bottom-0 right-0 w-[65%] md:w-[60%] rounded-xl overflow-hidden"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        >
        <Image
            src={img}
            alt={title}
            width={500}
            height={300}
            className="w-full h-auto object-cover"
        />

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#E8ECFF] via-[#E8ECFF]/40 to-transparent" />
        </motion.div>
    </motion.div>
  );
}