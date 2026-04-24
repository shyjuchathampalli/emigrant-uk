"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* COUNT UP HOOK */
function useCountUp(end: number, duration = 1.5) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [end, duration]);

  return count;
}

/* DATA */
const stats = [
  {
    value: 45000,
    prefix: "£",
    suffix: "+",
    label: "Maximum civil penalty per illegal worker discovered",
  },
  {
    value: 12,
    label: "Typical timeline to reapply after a revoked licence",
    display: "6–12 mo",
  },
  {
    value: 15,
    prefix: "£",
    suffix: "k",
    label: "Average legal and reapplication cost per licence failure",
    display: "£5k–15k",
  },
  {
    value: 3,
    label: "Sponsor licence holders who face a compliance failure annually",
    display: "1 in 3",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#0f2a5c] text-white py-16 md:py-20 relative overflow-hidden">
      
      {/* TOP LABEL */}
      <div className="text-center mb-2 md:mb-6 px-6">
        <p className="text-[10px] md:text-xs tracking-widest text-blue-300 uppercase">
          The real cost of getting it wrong
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        
        {stats.map((item, i) => (
          <StatCard key={i} item={item} index={i} />
        ))}

      </div>
    </section>
  );
}

/* CARD */
function StatCard({ item, index }: any) {
  const count = useCountUp(item.value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.12,
        duration: 0.5,
      }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="
        text-center px-4 py-6 md:py-8 rounded-xl
        transition-all duration-300
        hover:bg-white/5
      "
    >
      {/* VALUE */}
      <h3 className="
        font-sora font-semibold
        text-[26px] sm:text-[30px] md:text-[36px] lg:text-[40px]
        leading-tight
      ">
        {item.display ? (
          item.display
        ) : (
          <>
            {item.prefix}
            {count.toLocaleString()}
            {item.suffix}
          </>
        )}
      </h3>

      {/* LABEL */}
      <p className="
        mt-3
        text-[13px] sm:text-sm
        text-white/70
        leading-relaxed
        max-w-[260px]
        mx-auto
      ">
        {item.label}
      </p>
    </motion.div>
  );
}