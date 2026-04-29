"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const plans = [
  {
    name: "Starter",
    subtitle: "Up to 10 Employees",
    price: "£49",
    features: [
      "Up to 10 sponsored employee profiles",
      "Document Vault (5GB)",
      "Expiry & Renewal Radar",
      "Compliance Health Score",
      "SMS Reporting Duty Tracker",
      "UKVI Policy Hub",
      "Email support",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Professional",
    subtitle: "11–50 Employees",
    price: "£129",
    features: [
      "Everything in Starter",
      "Up to 50 employee profiles",
      "Document Vault (25GB)",
      "SOC Salary Intelligence",
      "Multi-user access (up to 5)",
      "Monthly audit readiness report",
      "Priority support + onboarding",
    ],
    cta: "Get Started",
    featured: true,
  },
  {
    name: "Enterprise",
    subtitle: "50+ Employees",
    price: "Custom",
    features: [
      "Everything in Growth",
      "Unlimited employee profiles",
      "Unlimited document storage",
      "Dedicated account manager",
      "Custom API integrations",
      "Quarterly compliance review",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section className="bg-[#E8ECFF] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs tracking-widest text-gray-500 uppercase">
            — Simple, Transparent Pricing
          </p>

          <h2 className="font-sora text-[#191C1E] text-3xl md:text-5xl font-semibold mt-4 max-w-3xl mx-auto">
            One UKVI fine costs more than a year of eMigrant.
          </h2>

          <p className="text-gray-500 mt-4">
            Every plan includes the full compliance platform.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">

          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={i}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl p-8 text-left transition
                ${
                  plan.featured
                    ? "bg-white border-4 border-[#13279E] shadow-xl scale-[1.05]"
                    : "bg-white border border-gray-200 shadow-sm"
                }
              `}
            >

              {/* MOST POPULAR */}
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#13279E] text-white text-xs px-4 py-1 rounded-full font-medium shadow">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* TITLE */}
              <h3
                className={`font-sora text-[#00020E] text-lg font-semibold ${
                  plan.featured ? "text-[#13279E]" : ""
                }`}
              >
                {plan.name}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {plan.subtitle}
              </p>

              {/* PRICE */}
              <div className="mt-6">
                <span className="font-sora text-3xl font-bold text-[#00020E]">
                  {plan.price}
                </span>
                {plan.price !== "Custom" && (
                  <span className="text-sm text-gray-500 ml-1">
                    / per month
                  </span>
                )}
              </div>

              {/* FEATURES */}
              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-[2px]">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.button
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.02 }}
                className={`mt-8 w-full py-3 rounded-xl font-medium transition
                  ${
                    plan.featured
                      ? "bg-[#13279E] text-white shadow-lg hover:bg-blue-800"
                      : "border-2 border-[#00020E] text-[#00020E] hover:bg-gray-100"
                  }
                `}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* FOOT NOTE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-14 max-w-3xl mx-auto"
        >
          <div className="bg-yellow-50 border border-yellow-200 text-sm text-gray-700 px-6 py-4 rounded-xl">
            A single Home Office civil penalty starts at £1,000 per worker.
            A licence revocation costs £5,000–£15,000 to recover from.
            eMigrant’s annual cost is a fraction of a single compliance failure.
          </div>
        </motion.div>
      </div>
    </section>
  );
}