"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { FitnessClass } from "@/types/classes";
import { Star, Clock, DollarSign } from "lucide-react";

interface ClassDetailsDialogProps {
  classItem: FitnessClass | null;
  isOpen: boolean;
  onClose: () => void;
  onBook: (classItem: FitnessClass) => void;
}

export function MemberClassDetailsDialog({
  classItem,
  isOpen,
  onClose,
  onBook,
}: ClassDetailsDialogProps) {
  if (!classItem) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {classItem.title}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6">
          <img
            src={classItem.coverImage}
            alt={classItem.title}
            className="w-full h-48 object-cover rounded-lg mb-6"
          />

          <div className="flex items-center space-x-4 mb-6">
            <Avatar className="h-16 w-16">
              <AvatarImage
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
              <h3 className="font-semibold text-lg">
                {classItem.instructor.name}
              </h3>
              <div className="flex items-center text-sm text-gray-600">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span>{classItem.instructor.rating}</span>
                <span className="mx-1">•</span>
                <span>{classItem.instructor.reviews} reviews</span>
              </div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            {classItem.description}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="flex items-center text-gray-600 mb-1">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm">Duration</span>
              </div>
              <div className="font-semibold">{classItem.duration} minutes</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="flex items-center text-gray-600 mb-1">
                <DollarSign className="w-4 h-4 mr-2" />
                <span className="text-sm">Price</span>
              </div>
              <div className="font-semibold">${classItem.price}</div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl mb-6">
            <h4 className="font-semibold mb-4">Amenities</h4>
            <div className="flex flex-wrap gap-2">
              {classItem.amenities.map((item) => (
                <Badge key={item} variant="secondary" className="px-3 py-1">
                  {item}
                </Badge>
              ))}
            </div>
          </div>

          <Separator className="my-6" />

          <div className="flex justify-end space-x-3">
            <Button
              variant="outline"
              className="!rounded-full"
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              className="!rounded-full bg-primary hover:bg-primary/90"
              onClick={() => {
                onClose();
                onBook(classItem);
              }}
            >
              Book Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
