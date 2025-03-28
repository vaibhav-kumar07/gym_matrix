import CreateGymForm from "@/components/gym/Creategymform";
import GymBusinessHoursForm from "@/components/gym/GymBusinessHoursForm";
import GymMediaUploadForm from "@/components/gym/GymMediaUploadForm";
import { getGymMyId } from "@/lib/gym";
import React from "react";

type Params = Promise<{ slug: string; id: string }>;

export default async function page({ params }: { params: Params }) {
  const { id } = await params;

  // If creating a new gym, set gym as null
  let gymData = null;
  if (id !== "new") {
    const result = await getGymMyId(id);
    gymData = result?.data || null; // Handle API failures gracefully
  }

  return (
    <section className="w-full h-full p-6 space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <CreateGymForm gym={gymData} />
        <GymMediaUploadForm />
      </div>
      <GymBusinessHoursForm gym={gymData} />
    </section>
  );
}
