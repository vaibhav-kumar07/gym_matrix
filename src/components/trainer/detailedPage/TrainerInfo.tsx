import { Badge } from "@/components/ui/badge";
import { ITrainer } from "@/types/trainer";
import { MapPin, Clock, DollarSign } from "lucide-react";

export function TrainerInfo({ trainer }: { trainer: ITrainer }) {
  console.log("trainer langurages", trainer.languages)
  return (
    <>
      <div className="flex items-center gap-6 text-gray-600 mb-6">
        <InfoItem icon={<MapPin className="h-4 w-4" />} text={trainer.location} />
        <InfoItem icon={<Clock className="h-4 w-4" />} text={`${trainer.yearsOfExperience} years experience`} />
        <InfoItem icon={<DollarSign className="h-4 w-4" />} text={`${trainer.hourlyRate}/hour`} />
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {trainer.languages.map((lang) => (
          <Badge key={lang} variant="outline" className="text-sm">
            {lang}
          </Badge>
        ))}
      </div>
    </>
  );
}

function InfoItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <span>{text}</span>
    </div>
  );
}