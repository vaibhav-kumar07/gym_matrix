"use client";

import CommonButton from "@/components/common/Button";
import { errorToast, successToast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { FitnessClass } from "@/lib/types/classes";
// import { useToast } from "@/components/ui/use-toast";
import { format } from "date-fns";
import { useState } from "react";
import { toast } from "sonner";

interface BookingDialogProps {
  classItem: FitnessClass | null;
  isOpen: boolean;
  onClose: () => void;
}

export function BookingDialog({
  classItem,
  isOpen,
  onClose,
}: BookingDialogProps) {
  const [sessions, setSessions] = useState(1);
  const [date, setDate] = useState("");
  //   const { toast } = useToast();

  if (!classItem) return null;

  const handleBooking = async () => {
    if (!date) {
      errorToast("Please select a date");
      return;
    }

    try {
      // Here you would make the API call to book the class
      successToast("Class booked successfully!");
      onClose();
    } catch (error) {
      errorToast("Failed to book class");
    }
  };

  const calculateTotal = () => {
    const basePrice = classItem.price * sessions;
    const bookingFee = 2;
    return basePrice + bookingFee;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Book Class</DialogTitle>
        </DialogHeader>

        <div className="py-6">
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={classItem.coverImage}
              alt={classItem.title}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div>
              <h3 className="font-semibold text-lg">{classItem.title}</h3>
              <p className="text-gray-600">{classItem.schedule}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <Label>Select Date</Label>
              <Input
                type="date"
                className="mt-2"
                min={format(new Date(), "yyyy-MM-dd")}
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div>
              <Label>Number of Sessions</Label>
              <div className="flex items-center space-x-4 mt-2">
                {[1, 5, 10].map((num) => (
                  <CommonButton
                    key={num}
                    variant={sessions === num ? "secondary" : "outline"}
                    className="!rounded-full flex-1"
                    onClick={() => setSessions(num)}
                  >
                    {num} {num === 1 ? "Session" : "Sessions"}
                  </CommonButton>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Class Price</span>
                <span className="font-semibold">
                  ${classItem.price * sessions}
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Booking Fee</span>
                <span className="font-semibold">$2</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">${calculateTotal()}</span>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3 mt-8">
            <CommonButton
              variant="outline"
              className="!rounded-full"
              onClick={onClose}
            >
              Cancel
            </CommonButton>
            <Button
              className="!rounded-full bg-primary hover:bg-primary/90"
              onClick={handleBooking}
            >
              Confirm Booking
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
