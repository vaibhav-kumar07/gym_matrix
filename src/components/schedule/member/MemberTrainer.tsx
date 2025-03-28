import { Label } from "@/components/common/Label";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ITrainer } from "@/types/schedule";
import { Star } from "lucide-react";

interface TrainersProps {
  trainers: ITrainer[];
}

export default function MobileTrainers({ trainers }: TrainersProps) {
  return (
    <div className="mb-6 bg-white p-4 rounded-lg border">
      <h2 className="text-lg font-semibold mb-4">Available Trainers</h2>
      <div className="space-y-4">
        {trainers.map((trainer) => (
          <Card key={trainer.id} className="p-2 bg-white border rounded-lg">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <img src={trainer.image} alt={trainer.name} />
              </Avatar>
              <div className="flex-1">
                <div className="flex flex-col gap-1">
                  <Label size={"sm"} className="font-semibold">
                    {trainer.name}
                  </Label>
                  <Label size={"xs"} className=" text-gray-600">
                    {trainer.specialty}
                  </Label>
                </div>
                <div className="flex items-center gap-2 mt-1 text-sm">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  <Label size={"xs"} className=" text-gray-600">
                    {trainer.rating}
                    {` (${trainer.reviews})`}
                  </Label>
                </div>
              </div>
              <Button size="sm" className="!rounded-button px-6">
                Select
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
