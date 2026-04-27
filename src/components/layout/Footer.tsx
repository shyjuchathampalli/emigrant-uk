"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0E0F26] text-white relative">
      {/* CTA SECTION */}
      <section className="bg-white pt-8 pb-0 mb-10 md:mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              bg-[#13285D]
              rounded-2xl md:rounded-3xl
              px-6 py-10
              sm:px-8
              md:px-12 md:py-12
              lg:px-16 lg:py-14
              flex flex-col md:flex-row
              items-center
              justify-center md:justify-between
              text-center md:text-left
              gap-8 md:gap-10
              min-h-[220px]
              sm:min-h-[240px]
              md:min-h-[170px]
              shadow-[0_20px_50px_rgba(19,40,93,0.5)]
              translate-y-10 md:translate-y-1/2
              relative z-10
            "
          >
            {/* LEFT CONTENT */}
            <h3
              className="
                font-sora
                text-3xl sm:text-4xl
                md:text-3xl
                lg:text-4xl
                font-semibold
                text-white
                leading-tight
                max-w-2xl
              "
            >
              Protect your sponsor licence. <br /> Start today.
            </h3>

            {/* CTA BUTTON */}
            <button
              className="
                bg-white text-[#13285D]
                px-6 py-3
                md:px-7 md:py-3.5
                rounded-lg md:rounded-xl
                font-medium
                text-base md:text-lg
                whitespace-nowrap
                hover:scale-105
                transition
              "
            >
              Book Your Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 pt-20 md:pt-28 pb-8">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-10 sm:gap-10 lg:gap-12
            items-start
          "
        >
          {/* BRAND */}
          <div className="flex flex-col items-start self-start">
            <Image
              src="/emigrant-logo.png"
              alt="eMigrant"
              width={220}
              height={60}
              priority
              className="
                w-[150px]
                sm:w-[170px]
                md:w-[185px]
                h-auto
                object-contain
              "
            />

            {/* SOCIAL */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="
                mt-4
                inline-flex items-center justify-center
                w-5 h-5
                hover:opacity-80
                hover:scale-105
                transition-all duration-300
              "
            >
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={20}
                height={20}
                className="w-5 h-5 object-contain"
              />
            </a>
  
          </div>

          {/* PRODUCT */}
          <div className="self-start">
            <h4 className="font-sora text-base md:text-lg font-semibold mb-4">
              Product
            </h4>
            <ul className="space-y-3 text-white/80 text-base">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* SOLUTIONS */}
          <div className="self-start">
            <h4 className="font-sora text-base md:text-lg font-semibold mb-4">
              Solutions
            </h4>
            <ul className="space-y-3 text-white/80 text-base">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Hospitality
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Education
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="self-start">
            <h4 className="font-sora text-base md:text-lg font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-white/80 text-base">
              <li>
                <Link href="#" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 mt-12 pt-5" />

        {/* BOTTOM BAR */}
        <div
          className="
            flex flex-col md:flex-row
            justify-between
            items-start md:items-center
            gap-3
            pb-4
          "
        >
          <span className="text-white/55 text-xs sm:text-sm">
            © 2026 OMFYS Technologies UK Ltd. All rights reserved.
          </span>

          <div className="flex flex-wrap gap-3 md:gap-4 text-white/55 text-xs sm:text-sm">
            <Link href="#" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition">
              ESG Policy
            </Link>
            <Link href="#" className="hover:text-white transition">
              Diversity & Inclusion Policy
            </Link>
            <Link href="#" className="hover:text-white transition">
              Health & Safety Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}