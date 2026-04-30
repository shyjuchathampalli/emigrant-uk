"use client";

import { createContext, useContext, useState } from "react";

const DemoContext = createContext<any>(null);

export function DemoProvider({ children }: any) {
    const [open, setOpen] = useState(false);

    const openDemo = () => setOpen(true);
    const closeDemo = () => setOpen(false);

    return (
        <DemoContext.Provider value={{ open, openDemo, closeDemo }}>
            {children}
        </DemoContext.Provider>
    );
}

export const useDemo = () => useContext(DemoContext);