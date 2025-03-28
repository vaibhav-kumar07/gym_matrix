import MobileCommunity from "@/components/community/MobileCommunity";
import React from "react";

// Inside your page component file, e.g., page.tsx
export const dynamic = "force-dynamic";

export default function page() {
  return (
    <div className="md:hidden">
      <MobileCommunity />
    </div>
  );
}
