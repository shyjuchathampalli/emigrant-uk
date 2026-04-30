"use client";

import { useDemo } from "@/context/DemoContext";
import { motion } from "framer-motion";

interface PricingButtonProps {
  children: React.ReactNode;
  featured?: boolean;
}

export default function PricingButton({
  children,
  featured = false,
}: PricingButtonProps) {
  const { openDemo } = useDemo();

  return (
    <motion.button
      onClick={openDemo}
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.02 }}
      className={`mt-8 w-full py-3 rounded-xl font-medium transition
        ${
          featured
            ? "bg-[#13279E] text-white shadow-lg hover:bg-blue-800"
            : "border-2 border-[#00020E] text-[#00020E] hover:bg-gray-100"
        }
      `}
    >
      {children}
    </motion.button>
  );
}