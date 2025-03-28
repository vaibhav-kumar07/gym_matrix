import { TrainerCard } from "./TrainerCard";
import { ITrainer } from "@/types/trainer";

interface TrainerListProps {
  trainers: ITrainer[];

}

export default function TrainerList ({ trainers }: TrainerListProps)  {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {trainers.map((trainer) => (
        <TrainerCard 
          key={trainer.userId} 
          trainer={trainer}
      
        />
      ))}
    </div>
  );
};