import CommonButton from "@/components/common/Button";
import { Label } from "@/components/common/Label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Workout } from "@/lib/types/workout";
import { Clock, Signal, Layers, Star, Flame } from "lucide-react";
import Link from "next/link";

interface WorkoutCardProps {
  workout: Workout;
}

export function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Card className="overflow-hidden border shadow- none rounded-lg hover:shadow-2xl transition-all duration-500">
      <div className="relative h-48">
        <img
          src={workout.coverImage}
          alt={workout.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-white/90 text-gray-900">
            <Flame className="w-4 h-4 text-orange-500 mr-2" />
            {workout.calories} cal
          </Badge>
        </div>
      </div>

      <div className="px-5 py-3 pb-4">
        {/* Trainer Info */}
        <div className="flex items-center space-x-4 mb-4">
          <Avatar className="h-8 w-8 ring-2 ring-offset-2 ring-primary/20">
            <AvatarImage
              src={workout.trainer.image}
              alt={workout.trainer.name}
            />
            <AvatarFallback>
              {workout.trainer.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <Label size="sm" className="font-medium text-gray-900">
              {workout.trainer.name}
            </Label>
            <div className="flex items-center text-sm text-gray-500">
              <Star className="w-4 h-4 text-yellow-400 mr-1" />
              <Label size="sm" className="mx-1">
                {workout.trainer.rating}
              </Label>
              <span className="mx-1">•</span>
              <Label size="sm">{workout.trainer.reviews} reviews</Label>
            </div>
          </div>
        </div>

        {/* Workout Info */}
        <Label size="lg" className=" font-bold text-gray-900 mb-2">
          {workout.title}
        </Label>
        <div className="w-full flex items-center gap-4 flex-wrap mb-2">
          <div className="w-fit flex items-center text-gray-600">
            <Clock className="w-4 h-4" />
            <Label size="sm" className="ml-2">
              {workout.duration} min
            </Label>
          </div>
          <div className="w-fit flex items-center text-gray-600">
            <Signal className="w-4 h-4" />
            <Label size="sm" className="ml-2">
              {workout.intensity} Intensity
            </Label>
          </div>
          <div className="w-fit flex items-center text-gray-600">
            <Layers className="w-4 h-4" />
            <Label size="sm" className="ml-2">
              {workout.level}
            </Label>
          </div>
        </div>

        {/* Actions */}
        <div className="w-full grid grid-cols-2 gap-4">
          <CommonButton variant="outline" className="!rounded-md">
            <Link href={`/workouts/${workout.id}`}>Details</Link>
          </CommonButton>
          <CommonButton className="!rounded-md bg-primary hover:bg-primary/90">
            <Link href={`/workouts/${workout.id}/start`}>Start Workout</Link>
          </CommonButton>
        </div>
      </div>
    </Card>
  );
}
