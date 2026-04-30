"use client";

import { useDemo } from "@/context/DemoContext";

export default function LearnMoreLargeButton({ children }: any) {

    const { openDemo } = useDemo();

    return (

        <button
            onClick={openDemo}
            className="font-sora mt-6 px-5 py-2.5 rounded-md border border-[#001388] text-[#001388] hover:bg-[#001388] hover:text-white transition"
        >

            {children}

        </button>

    );

}