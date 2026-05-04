import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import ProblemSection from "@/components/sections/ProblemSection";
import Stats from "@/components/sections/Stats";
import Platform from "@/components/sections/Platform";
import SectorsSection from "@/components/sections/SectorsSection";
import Testimonials from "@/components/sections/Testimonials";
import TrustSection from "@/components/sections/TrustSection";
import PricingSection from "@/components/sections/PricingSection";

export default function Home() {
  return (
    <>
      <Hero />
         {/* <Partners /> */}
      <ProblemSection />
      <Stats />
      <Platform />
      <SectorsSection />
        {/* <Testimonials /> */}
      {/* <TrustSection /> */}
      <PricingSection />
    </>
  );
}