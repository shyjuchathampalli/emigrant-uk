"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import EmigrantLogo from "./EmigrantLogo";

export default function Footer() {
  return (
    <footer className="bg-[#0E0F26] text-white relative">
      {/* CTA SECTION */}
      <section className="bg-[#E8ECFF] pt-2 pb-0 mb-10 md:mb-16">
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
            <Link href="/" className="flex items-center gap-2">
          <EmigrantLogo />
        </Link>

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
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.25 0H1.4375C1.05625 0 0.690617 0.15145 0.421034 0.421034C0.15145 0.690617 0 1.05625 0 1.4375V17.25C0 17.6312 0.15145 17.9969 0.421034 18.2665C0.690617 18.536 1.05625 18.6875 1.4375 18.6875H17.25C17.6312 18.6875 17.9969 18.536 18.2665 18.2665C18.536 17.9969 18.6875 17.6312 18.6875 17.25V1.4375C18.6875 1.05625 18.536 0.690617 18.2665 0.421034C17.9969 0.15145 17.6312 0 17.25 0ZM6.46875 13.6562C6.46875 13.8469 6.39302 14.0297 6.25823 14.1645C6.12344 14.2993 5.94062 14.375 5.75 14.375C5.55938 14.375 5.37656 14.2993 5.24177 14.1645C5.10698 14.0297 5.03125 13.8469 5.03125 13.6562V7.90625C5.03125 7.71563 5.10698 7.53281 5.24177 7.39802C5.37656 7.26323 5.55938 7.1875 5.75 7.1875C5.94062 7.1875 6.12344 7.26323 6.25823 7.39802C6.39302 7.53281 6.46875 7.71563 6.46875 7.90625V13.6562ZM5.75 6.46875C5.53677 6.46875 5.32832 6.40552 5.15103 6.28705C4.97373 6.16859 4.83554 6.00021 4.75394 5.80321C4.67234 5.6062 4.65099 5.38943 4.69259 5.18029C4.73419 4.97116 4.83687 4.77905 4.98765 4.62828C5.13843 4.4775 5.33053 4.37482 5.53967 4.33322C5.7488 4.29162 5.96558 4.31297 6.16258 4.39457C6.35958 4.47617 6.52796 4.61435 6.64643 4.79165C6.76489 4.96895 6.82812 5.17739 6.82812 5.39062C6.82812 5.67656 6.71454 5.95079 6.51235 6.15297C6.31016 6.35516 6.03594 6.46875 5.75 6.46875ZM14.375 13.6562C14.375 13.8469 14.2993 14.0297 14.1645 14.1645C14.0297 14.2993 13.8469 14.375 13.6562 14.375C13.4656 14.375 13.2828 14.2993 13.148 14.1645C13.0132 14.0297 12.9375 13.8469 12.9375 13.6562V10.4219C12.9375 9.94531 12.7482 9.48827 12.4112 9.15129C12.0742 8.81431 11.6172 8.625 11.1406 8.625C10.6641 8.625 10.207 8.81431 9.87004 9.15129C9.53306 9.48827 9.34375 9.94531 9.34375 10.4219V13.6562C9.34375 13.8469 9.26802 14.0297 9.13323 14.1645C8.99844 14.2993 8.81562 14.375 8.625 14.375C8.43438 14.375 8.25156 14.2993 8.11677 14.1645C7.98198 14.0297 7.90625 13.8469 7.90625 13.6562V7.90625C7.90714 7.7302 7.97262 7.56059 8.09026 7.42961C8.2079 7.29863 8.36953 7.21539 8.54448 7.19566C8.71942 7.17594 8.89553 7.22112 9.03938 7.32262C9.18323 7.42412 9.28482 7.57489 9.32488 7.74633C9.8111 7.41649 10.378 7.22532 10.9647 7.19336C11.5513 7.16139 12.1356 7.28984 12.6548 7.5649C13.174 7.83996 13.6084 8.25125 13.9115 8.75459C14.2146 9.25794 14.3748 9.83433 14.375 10.4219V13.6562Z" fill="white"/>
              </svg>
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