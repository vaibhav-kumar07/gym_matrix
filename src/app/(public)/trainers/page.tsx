import { TrainersFilter } from "@/components/trainer/TrainerFilter";
import { TrainersList } from "@/components/trainer/TrainerList";
import TrainersHero from "@/components/trainer/TrainersHeroSection";
import { fetchTrainers } from "@/lib/trainer";
import { Trainer } from "@/lib/types/trainer";

interface PageProps {
  searchParams: Promise<{
    level?: string;
    availability?: string;
    price?: string;
    popularity?: string;
    search?: string;
  }>;
}

export default async function TrainersPage({ searchParams }: PageProps) {
  const { level, availability, price, popularity } = await searchParams;
  const trainers = await fetchTrainers({
    level,
    availability,
    price,
    popularity,
  });

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <div className="max-w-[1440px] mx-auto px-8 py-16">
        <TrainersHero />
        <TrainersFilter
          filters={{
            level: level || "",
            availability: availability || "",
            price: price || "",
            popularity: popularity || "",
          }}
        />
        <TrainersList initialTrainers={trainers as Trainer[]} />
      </div>
    </div>
  );
}
