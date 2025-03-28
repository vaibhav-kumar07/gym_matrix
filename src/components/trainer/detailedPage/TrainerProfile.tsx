import TrainerContact from "./TrainerContact";
import { TrainerHeader } from "./TrainerHeader";
import TrainerHero from "./TrainerHero";
import TrainerNavbar from "./TrainerNavbar";
import TrainerTabs from "./TrainerTabs";
import { ITrainer } from "@/types/trainer";

export function DesktopTrainerProfile({ trainer,mode }: { trainer: ITrainer ,  mode: 'new' | 'edit';}) {
  console.log(trainer);
  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      {/* <TrainerNavbar name={trainer.name} /> */}
      <TrainerHero coverImage={trainer.media.gallery[0]} />
      <TrainerHeader trainer={trainer} mode={mode} />
      <TrainerTabs trainer={trainer} />
      <TrainerContact trainer={trainer} />
      {/* <FloatingBookButton /> */}
    </div>
  );
}
