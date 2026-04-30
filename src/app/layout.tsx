import "./globals.css";
import { inter, sora } from "@/styles/fonts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

import { DemoProvider } from "@/context/DemoContext";
import CalendlyDrawer from "@/components/CalendlyDrawer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="bg-[#0f2a5c] text-white relative">

        <DemoProvider>

        {/* GLOBAL GRID BACKGROUND */}
        <div
        className="fixed inset-0 -z-20 opacity-25"
        style={{
          backgroundImage: "url('/grid-vector.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "80px 80px", // 🔥 KEY CONTROL
        }}
      />

{/* GRADIENT */}
<div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#0f2a5c] via-[#0f2a5c] to-[#0a1f45]" />

        <Navbar />
        {children}
        <Footer />

        {/* Calendly */}

          <CalendlyDrawer />
          
        </DemoProvider>
      </body>
    </html>
  );
}