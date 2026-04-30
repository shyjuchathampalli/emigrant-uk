"use client";

import { motion, AnimatePresence  } from "framer-motion";
import { useDemo } from "@/context/DemoContext";


export default function DemoButton({ children }: any) {

    const { openDemo } = useDemo();

    return (

        <motion.button
             onClick={openDemo}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="font-sora hidden md:block bg-[#ff2d2d] hover:bg-[#e02626] text-white px-5 py-2 rounded-[8px] text-sm font-medium shadow-lg"
            >
              {children}
            </motion.button>

    );

}