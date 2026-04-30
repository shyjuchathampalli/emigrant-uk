"use client";

import { useDemo } from "@/context/DemoContext";

export default function DemoButtonWhite({ children }: any) {

    const { openDemo } = useDemo();

    return (

        <button
            onClick={openDemo}
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

            {children}

        </button>

    );

}