"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0E0F26] text-white relative">

      <section className="bg-white pt-8 pb-0 mb-8 md:mb-16">
        <div className="max-w-7xl mx-auto px-6 relative">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              bg-[#13285D]
              rounded-2xl
              px-8 py-8 md:px-12
              flex flex-col md:flex-row
              items-center justify-between
              gap-6
              shadow-[0_20px_50px_rgba(19,40,93,0.5)]
              translate-y-1/2   /* 👈 pushes into footer */
              relative z-10
            "
          >
            <h3 className="font-sora text-xl md:text-2xl font-semibold text-white max-w-lg">
              Protect your sponsor licence. <br /> Start today.
            </h3>

            <button className="bg-white text-[#13285D] px-5 py-2.5 rounded-lg font-medium">
              Book Your Demo
            </button>
          </motion.div>

        </div>
      </section>


      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-8 grid md:grid-cols-4 gap-8">

        {/* BRAND */}
        <div className="space-y-3 sm:mt-10">
          <Image
            src="/emigrant-logo.png"
            alt="eMigrant"
            width={130}
            height={36}
          />

          <div className="w-5 h-5 border border-white/40 flex items-center justify-center text-[10px] rounded-sm hover:bg-white hover:text-[#0E0F26] transition cursor-pointer">
            in
          </div>
        </div>

        {/* PRODUCT */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Product</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="#" className="hover:text-white">Features</Link></li>
            <li><Link href="#" className="hover:text-white">Pricing</Link></li>
            <li><Link href="#" className="hover:text-white">Security</Link></li>
          </ul>
        </div>

        {/* SOLUTIONS */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Solutions</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="#" className="hover:text-white">Healthcare</Link></li>
            <li><Link href="#" className="hover:text-white">Hospitality</Link></li>
            <li><Link href="#" className="hover:text-white">Education</Link></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="#" className="hover:text-white">About Us</Link></li>
            <li><Link href="#" className="hover:text-white">Contact</Link></li>
            <li><Link href="#" className="hover:text-white">Careers</Link></li>
            <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/10" />

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/50">
        <span>© 2026 OMFYS Technologies UK Ltd. All rights reserved.</span>

        <div className="flex flex-wrap gap-3">
          <Link href="#" className="hover:text-white">Privacy Policy</Link>
          <Link href="#" className="hover:text-white">ESG Policy</Link>
          <Link href="#" className="hover:text-white">Diversity & Inclusion Policy</Link>
          <Link href="#" className="hover:text-white">Health & Safety Policy</Link>
        </div>
      </div>
    </footer>
  );
}