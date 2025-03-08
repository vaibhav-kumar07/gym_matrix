import CommonButton from "@/components/common/Button";
import { Label } from "@/components/common/Label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FitnessClass } from "@/lib/types/classes";
import { Clock, Users, Star, Calendar } from "lucide-react";

interface ClassCardProps {
  classItem: FitnessClass;
  // onViewDetails: (classItem: FitnessClass) => void;
  // onBook: (classItem: FitnessClass) => void;
}

export function MemberClassCard({
  classItem,
}: // onViewDetails,
// onBook,
ClassCardProps) {
  return (
    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white rounded-2xl">
      <div className="relative h-48">
        <img
          src={classItem.coverImage}
          alt={classItem.title}
          className="w-full h-full object-cover rounded-t-2xl"
        />
        <div className="absolute top-4 right-4 flex space-x-2">
          <Badge className="bg-white/95 text-gray-900 backdrop-blur-sm shadow-sm">
            <Clock className="w-4 h-4 mr-2" />
            {classItem.duration} min
          </Badge>
          <Badge className="bg-white/95 text-gray-900 backdrop-blur-sm shadow-sm">
            ${classItem.price}
          </Badge>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center space-x-4 mb-4">
          <Avatar className="h-10 w-10 ring-2 ring-offset-2 ring-primary/20 shadow-md ">
            <AvatarImage
              className="object-cover"
              src={classItem.instructor.image}
              alt={classItem.instructor.name}
            />
            <AvatarFallback>
              {classItem.instructor.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <Label
              size="sm"
              variant="semibold"
              className="font-medium text-gray-900"
            >
              {classItem.instructor.name}
            </Label>
            <div className="flex items-center text-sm text-gray-500">
              <Star className="w-4 h-4 text-yellow-400 mr-1" />
              <Label size="xs" variant="semibold">
                {classItem.instructor.rating}
              </Label>
              <Label size="xs" variant="semibold" className="mx-1">
                •
              </Label>
              <Label size="xs" variant="semibold">
                {classItem.instructor.reviews} reviews
              </Label>
            </div>
          </div>
        </div>

        <Label size="lg" variant="bold" className="text-gray-900 mb-1">
          {classItem.title}
        </Label>

        <div className="space-y-2 mb-4 mt-2">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <Label size="xs" variant="semibold">
              {classItem.schedule}
            </Label>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-2" />
            <Label size="xs" variant="semibold">
              {classItem.enrolled}/{classItem.capacity} spots
            </Label>
          </div>
          <Badge variant="secondary" className="font-medium">
            {classItem.level}
          </Badge>
        </div>

        <div className="w-full grid grid-cols-2 gap-2">
          <CommonButton
            variant="outline"
            className="rounded-lg hover:bg-gray-50 h-8"
            // onClick={() => onViewDetails(classItem)}
          >
            Details
          </CommonButton>
          <CommonButton
            className="rounded-lg bg-primary hover:bg-primary/90 h-8"
            // onClick={() => onBook(classItem)}
          >
            Book Now
          </CommonButton>
        </div>
      </div>
    </Card>
  );
}
