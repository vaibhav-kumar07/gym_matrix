import GymGrid from "@/components/pages/gym/GymGridLayout";
import HeroSection from "@/components/pages/gym/HeroSection";
import React from "react";

// Inside your page component file, e.g., page.tsx
export const dynamic = "force-dynamic";

function page() {
  return (
    <div className="">
      <HeroSection />
      <GymGrid />
    </div>
  );
}

export default page;
