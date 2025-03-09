import { TrainerCard } from "./TrainerCard";
import { Trainer } from "@/lib/types/trainer";

interface TrainersListProps {
  initialTrainers: Trainer[];
}

export function TrainersList({ initialTrainers }: TrainersListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {initialTrainers.map((trainer) => (
        <TrainerCard key={trainer.id} trainer={trainer} />
      ))}
    </div>
  );
}
