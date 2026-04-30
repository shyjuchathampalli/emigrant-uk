"use client";

import { useDemo } from "@/context/DemoContext";

export default function LearnMoreButton({ children }: any) {

    const { openDemo } = useDemo();

    return (

        <button
            onClick={openDemo}
            className="   font-sora font-semibold mt-4 px-3 py-1.5 text-sm border border-[#001388] text-[#001388] rounded-md group-hover:bg-[#001388] group-hover:text-white transition"
        >

            {children}

        </button>

    );

}