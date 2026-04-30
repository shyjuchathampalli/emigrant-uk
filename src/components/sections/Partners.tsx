"use client";

import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const logoList = [
  { name: "Booking.com", src: "/logos/booking_com.png" },
  { name: "IBM", src: "/logos/ibm.png" },
  { name: "Logitech", src: "/logos/logitech.png" },
  { name: "Fortinet", src: "/logos/fortinet.png" },
  { name: "TIBCO", src: "/logos/tibco.png" },
  { name: "Spotify", src: "/logos/spotify_logo.png" },
  { name: "T-Mobile", src: "/logos/t-mobile_logo.png" },
  { name: "Netflix", src: "/logos/netflix.png" },
];

const duplicatedLogos = [...logoList, ...logoList];

export default function Partners() {
  const x = useMotionValue(0);

  // Smaller logo spacing like your reference
  const LOGO_WIDTH = 150;
  const GAP = 42;
  const STEP = LOGO_WIDTH + GAP;

  useEffect(() => {
    let controls: any;

    const startCarousel = async () => {
      while (true) {
        for (let i = 0; i < logoList.length; i++) {
          // Smooth slide
          controls = animate(x, -(i * STEP), {
            duration: 2.4,
            ease: "easeInOut",
          });

          await controls.finished;

          // Pause when centered
          await new Promise((resolve) => setTimeout(resolve, 1400));
        }

        // Seamless reset
        x.set(0);
      }
    };

    startCarousel();

    return () => controls?.stop();
  }, [x]);

  return (
    <section className="relative py-14 overflow-hidden bg-[#0f2a5c]">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0f2a5c] via-[#0f2a5c] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0f2a5c] via-[#0f2a5c] to-transparent z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Logo Track */}
        <div className="overflow-hidden">
          <motion.div
            className="flex items-center gap-[42px] w-max"
            style={{ x }}
          >
            {duplicatedLogos.map((logo, index) => (
              <LogoItem
                key={`${logo.name}-${index}`}
                logo={logo}
                index={index}
                x={x}
                step={STEP}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LogoItem({
  logo,
  index,
  x,
  step,
}: {
  logo: { name: string; src: string };
  index: number;
  x: any;
  step: number;
}) {
  // Screen center for opacity highlight
  const centerPoint = 680;

  const distance = useTransform(x, (latest) => {
    const itemCenter = index * step + step / 2 + latest;
    return Math.abs(centerPoint - itemCenter);
  });

  // Only opacity + subtle scale
  const opacity = useTransform(distance, [0, 160, 380], [1, 0.55, 0.18]);
  const scale = useTransform(distance, [0, 160, 380], [1.08, 1, 0.92]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="w-[150px] flex-shrink-0 flex justify-center items-center"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.04,
        duration: 0.5,
      }}
    >
      <img
        src={logo.src}
        alt={logo.name}
        draggable={false}
        className="
          h-7 md:h-8
          w-auto
          max-w-[140px]
          object-contain
          select-none
          pointer-events-none
        "
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
    </motion.div>
  );
}