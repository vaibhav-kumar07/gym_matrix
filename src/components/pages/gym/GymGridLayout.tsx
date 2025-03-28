import GymCardNew from "./GymCard";
import { getAllGyms } from "@/lib/gym";

const GymGrid = async () => {
  const result = await getAllGyms();
  return (
    <div className="mx-auto max-w-7xl px-4 pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {result.data.map((gym, index) => (
          <GymCardNew key={index} gym={gym} />
        ))}
      </div>
    </div>
  );
};

export default GymGrid;
