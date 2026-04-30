"use client";

import { InlineWidget } from "react-calendly";
import { useDemo } from "@/context/DemoContext";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function CalendlyDrawer() {
    const { open, closeDemo } = useDemo();

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Overlay */}

                    <motion.div
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeDemo}
                    />

                    {/* Drawer */}

                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 80 }}
                        className="fixed right-0 top-0 h-full w-[520px] bg-white shadow-2xl z-50 flex flex-col"
                    >

                        {/* Header */}

                        <div className="flex justify-between items-center p-6 border-b">

                            <h3 className="text-xl font-semibold text-[#0B1215]">
                                Book a Demo
                            </h3>

                            <button onClick={closeDemo}>
                                <X size={20} />
                            </button>

                        </div>

                        {/* Calendly */}

                        <div className="flex-1">

                            <InlineWidget
                                url="https://calendly.com/e-migrant-sales/30min"
                                styles={{ height: "100%" }}
                            />

                        </div>

                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}