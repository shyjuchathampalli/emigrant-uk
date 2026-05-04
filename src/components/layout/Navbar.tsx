"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence  } from "framer-motion";
import EmigrantLogo from "./EmigrantLogo";
import DemoButton from "@/components/DemoButton";

const navItems = [
  { label: "Why eMigrant", href: "#emigrant" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {

   const [scrolled, setScrolled] = useState(false);
   const [open, setOpen] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-300
          ${scrolled
            ? "bg-[#0f2a5c]/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
          }
        `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <EmigrantLogo />
        </Link>

        {/* CENTER NAV (GLASS PILL) */}
        <div className="hidden md:flex items-center gap-8 px-6 py-2 rounded-full 
                        bg-white/5 backdrop-blur-md border border-white/10">

          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-white/80 hover:text-white transition duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          
          <Link
            href="#"
            className="font-sora hidden md:block text-sm text-white/70 hover:text-white transition"
          >
            Login
          </Link>

            <DemoButton>
              Book Demo
            </DemoButton>

          {/* HAMBURGER BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex flex-col gap-1"
            >
              <span className="w-6 h-[2px] bg-white"></span>
              <span className="w-6 h-[2px] bg-white"></span>
              <span className="w-6 h-[2px] bg-white"></span>
            </button>
        </div>
      </div>
      {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-[#0f2a5c] px-6 pb-6 pt-4"
            >
              <div className="flex flex-col gap-5">

                {/* NAV ITEMS */}
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-white text-sm font-medium"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* LOGIN */}
                <Link
                  href="#"
                  className="text-white/80 text-sm pt-2"
                  onClick={() => setOpen(false)}
                >
                  Login
                </Link>

                {/* CTA */}
                <DemoButton>
              Book Demo
            </DemoButton>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </motion.header>
  );
}