"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    title: "Zero findings on a surprise audit",
    text: "We passed a surprise Home Office audit with zero findings. Every document was in the system, every report was filed on time. I genuinely do not know how we managed before eMigrant.",
    name: "Sarah Mitchell",
    role: "HR Manager",
    company: "CareFirst Healthcare Group · London",
    logo: "/client-logo-1.png",
    avatar: "/client-user-1.png",
  },
  {
    title: "Compliance became effortless",
    text: "Everything is now automated and visible. We no longer worry about missing deadlines or audit risks.",
    name: "James Carter",
    role: "Operations Lead",
    company: "UK Talent Solutions · Manchester",
    logo: "/client-logo-1.png",
    avatar: "/client-user-1.png",
  },
  {
    title: "Full visibility across teams",
    text: "Our HR team finally has clarity across all sponsored workers. Alerts and tracking changed everything.",
    name: "Priya Nair",
    role: "People Manager",
    company: "Global Care Services · Birmingham",
    logo: "/client-logo-1.png",
    avatar: "/client-user-1.png",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#ffffff] py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sora text-3xl md:text-4xl font-semibold text-[#0f172a]"
        >
          Trusted by UK sponsor licence holders.
        </motion.h2>

        {/* RIGHT - CARD */}
        <div className="relative">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 py-16 shadow-lg"
            >
              
              {/* LOGO FLOATING CARD */}
            <div className="absolute -top-6 left-6">
            <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center border border-gray-100">
                <Image
                src={testimonials[index].logo}
                alt="client"
                width={80}
                height={80}
                className="object-contain"
                />
            </div>
            </div>

              {/* TITLE */}
              <h3 className="font-sora text-lg font-semibold text-[#0f172a]">
                {testimonials[index].title}
              </h3>

              {/* TEXT */}
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                “{testimonials[index].text}”
              </p>

              {/* DIVIDER */}
              <div className="h-px bg-gray-200 my-5" />

              {/* USER */}
              <div className="flex items-center gap-3">
                <Image
                  src={testimonials[index].avatar}
                  alt="user"
                  width={40}
                  height={40}
                  className="rounded-full"
                />

                <div>
                  <p className="text-sm font-medium text-[#0f172a]">
                    {testimonials[index].name} · {testimonials[index].role}
                  </p>
                  <p className="text-xs text-gray-500">
                    {testimonials[index].company}
                  </p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  i === index ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}