import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export default function TrainerHeroSection () {
  return (
    <div className="relative h-[400px] w-full">
      <img
        src="https://public.readdy.ai/ai/img_res/3087fba53c9493989f76fce900720728.jpg"
        alt="Gym Interior"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white max-w-3xl px-4">
          <h1 className="text-5xl font-bold mb-6">Find Your Perfect Fitness Trainer</h1>
          <p className="text-xl mb-8">Connect with certified professionals who will help you achieve your fitness goals</p>
          <div className="flex gap-4 justify-center">
            <Input
              className="max-w-md bg-white/90 text-black border-none"
              placeholder="Search by name, specialization, or location"
              // value={searchQuery}
              // onChange={(e) => onSearchChange(e.target.value)}
            />
            <Button className="!rounded-button whitespace-nowrap bg-blue-600 hover:bg-blue-700">
              Search Trainers
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};