import TrainerFilters from "@/components/trainer/TrainerFilter";
import TrainerList from "@/components/trainer/TrainerList";
import TrainerHeroSection from "@/components/trainer/TrainersHeroSection";
import { getTrainers } from "@/lib/trainer";
import { ITrainer, ITrainerParams } from "@/types/trainer";

interface PageProps {
  searchParams: Promise<{
    specialization?: string;
    experience?: string;
    availability?: string;
    price?: string;
    search?: string;
  }>
}

export default async function TrainersPage({ searchParams }: PageProps) {
  const { specialization, experience, availability,  search } = await searchParams;
  const params: ITrainerParams = {
    specialization,
    experience: experience ? parseInt(experience) : undefined,
    availability,
    isActive: true,
    search
   
  };
  const result = await getTrainers(params);

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <TrainerHeroSection />
      <div className="max-w-7xl mx-auto py-8 px-4">
        <TrainerFilters/>
        <TrainerList trainers={result.data}  />
      </div>
    </div>
  );
}