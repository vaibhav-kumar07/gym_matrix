import GymList from "@/components/gym/member/gymList";
import React from "react";

// Inside your page component file, e.g., page.tsx
export const dynamic = "force-dynamic";

export default function page() {
  return (
    <div className="p-6">
      <GymList />
    </div>
  );
}
