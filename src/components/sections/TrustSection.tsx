"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ratings = [
  {
    logo: "/gprd.png",
    score: "4.7/5",
  },
  {
    logo: "/verified.png",
    score: "4.7/5",
  },
  {
    logo: "/trustpilot.png",
    score: "4.9/5",
  },
];

const awards = [
  "/momentumLeader.png",
  "/regionalLeader.png",
  "/fastImplementation.png",
  "/fastCompany.png",
  "/highPerformer.png",
  "/LeaderEnterprise.png",
];

export default function TrustSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* RATINGS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center">
          {ratings.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="
                bg-[#E8ECFF]
                rounded-2xl
                border border-gray-200
                py-8 px-6
                flex flex-col items-center justify-center
                text-center
                shadow-sm
                hover:shadow-md
                transition
              "
            >
              {/* LOGO */}
              <div className="mb-4 flex items-center justify-center h-[40px]">
                <Image
                    src={item.logo}
                    alt="rating"
                    width={
                    item.logo.includes("gprd") ? 28 : 80
                    }
                    height={
                    item.logo.includes("gprd") ? 28 : 24
                    }
                    className="object-contain"
                />
                </div>

              {/* SCORE */}
              <p className="font-sora text-4xl md:text-5xl font-semibold text-[#0f172a]">
                {item.score}
              </p>
            </motion.div>
          ))}
        </div>

        {/* AWARDS */}
        <div className="mt-14">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
            w-full
            flex
            flex-wrap
            justify-between
            items-end
            gap-y-8
            px-0
          "
        >
          {awards.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{
                scale: 1.08,
                transition: { duration: 0.2 },
              }}
              className="
                flex items-end justify-center
                flex-shrink-0
              "
            >
              <Image
                src={img}
                alt="award"
                width={120}
                height={138}
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      </div>
    </section>
  );
}