import { TrainerActions } from "./TrainerAction";
import TrainerAvatarImage from "./TrainerAvatarImage";
import { TrainerInfo } from "./TrainerInfo";
import { ITrainer } from "@/types/trainer";

interface TrainerHeaderProps {
  trainer: ITrainer;
  mode: "new" | "edit";
}

export function TrainerHeader({ trainer,mode }: TrainerHeaderProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 -mt-32 relative z-10">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex flex-wrap items-start gap-8">
          <TrainerAvatarImage
            image={trainer.media.profilePicture}
            name={trainer.name}
            trainerId={trainer._id}
            mode={mode}
            
          />
          <div className="flex-1">
            <TrainerTitle
              name={trainer.name}
              title={trainer.professionalTitle}
            />
            <TrainerInfo trainer={trainer} />
            <TrainerActions />
          </div>
        </div>
      </div>
    </div>
  );
}

function TrainerTitle({ name, title }: { name: string; title: string }) {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
      <h2 className="text-xl text-gray-600 mb-4">{title}</h2>
    </>
  );
}
