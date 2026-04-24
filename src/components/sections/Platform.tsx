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
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-xs tracking-widest text-blue-500 uppercase">
            — The Platform
          </p>

          <h2 className="font-sora text-3xl md:text-5xl font-semibold mt-3 leading-tight">
            Everything your compliance <br />
            needs. In one place
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
            className="mt-16 rounded-3xl bg-[#E8ECFF] px-8 md:px-12 pt-10 pb-0 grid lg:grid-cols-2 gap-10 items-center relative overflow-hidden min-h-[420px]"
            >
            {/* LEFT CONTENT */}
            <div className="z-10 pb-10">
                <h3 className="font-sora text-2xl md:text-3xl font-semibold">
                Compliance Command Centre
                </h3>

                <p className="text-gray-600 mt-3 max-w-md">
                Real-time health score and daily action list across your sponsored workforce
                </p>

                <button className="font-sora mt-5 px-4 py-2 rounded-md border border-[#001388] text-[#001388] hover:bg-[#001388] hover:text-white transition">
                Learn More
                </button>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative h-full flex items-end justify-end">

                {/* MAIN IMAGE — PERFECT ALIGN */}
                <div className="absolute bottom-0 right-[-2rem] md:right-[-3rem] w-[90%] md:w-[75%] h-[320px] md:h-[380px]">
                    <Image
                    src="/platform-screen1.png"
                    alt="platform"
                    fill
                    className="object-cover object-bottom rounded-2xl shadow-xl"
                    />
                </div>

                {/* TOP RIGHT CARD */}
                <div className="absolute top-0 right-6 bg-white rounded-xl shadow-md px-4 py-3 w-44">
                <p className="text-xs text-gray-500">COS EXPIRY RISK</p>
                <p className="font-sora font-semibold text-lg">Medium</p>

                <div className="flex gap-1 mt-2">
                    <div className="h-1 w-6 bg-orange-400 rounded" />
                    <div className="h-1 w-6 bg-orange-400 rounded" />
                    <div className="h-1 w-6 bg-orange-400 rounded" />
                    <div className="h-1 w-6 bg-gray-200 rounded" />
                </div>

                <p className="text-xs text-orange-500 mt-1">
                    2 expiring within 60 days
                </p>
                </div>

                {/* HEALTH SCORE CARD (CENTER LEFT OF IMAGE) */}
                <div className="absolute left-0 bottom-[140px] bg-white rounded-xl shadow-lg px-5 py-4 w-52">
                <p className="text-xs text-gray-500">COMPLIANCE HEALTH SCORE</p>

                <div className="flex items-center justify-between mt-2">
                    <p className="font-sora text-2xl font-semibold text-green-600">94%</p>
                    <p className="text-xs text-green-500">+2.4%</p>
                </div>

                <p className="text-xs text-gray-400 mt-1">
                    Across all active jurisdictions
                </p>
                </div>

                {/* COST CARD (BOTTOM CENTER) */}
                <div className="absolute left-8 bottom-4 bg-white rounded-xl shadow-md px-5 py-3 w-52">
                <p className="text-xs text-gray-500">RENEWAL COST PROJECTION</p>
                <p className="font-sora font-semibold text-lg mt-1">£14,200</p>
                <p className="text-xs text-gray-400">Est. for Q3</p>
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
            img="/platform-screen2.png"
          />

          <FeatureCard
            title="SOC Salary Intelligence"
            desc="Rule engine validates every salary against SOC code minimums before UKVI does"
            img="/platform-screen3.png"
          />

          <FeatureCard
            title="SMS Reporting"
            desc="Automated reporting obligations change of circumstances, absences, salary changes"
            img="/platform-screen4.png"
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