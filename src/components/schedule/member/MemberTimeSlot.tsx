import { Button } from "@/components/ui/button";
import { ITimeSlot } from "@/types/schedule";
import { Clock } from "lucide-react";

interface TimeSlotsProps {
  timeSlots: ITimeSlot[];
  selectedTimeSlot: string | null;
  onTimeSlotSelect: (timeSlot: string) => void;
}

export default function TimeSlots({
  timeSlots,
  selectedTimeSlot,
  onTimeSlotSelect,
}: TimeSlotsProps) {
  return (
    <div className="mb-4 bg-white p-4 rounded-lg border">
      <h2 className="text-lg font-semibold mb-4">Available Time Slots</h2>
      <div className="grid grid-cols-2 gap-3">
        {timeSlots.map((slot, index) => (
          <Button
            key={index}
            variant={
              selectedTimeSlot === `${slot.time}${slot.period}`
                ? "default"
                : "outline"
            }
            className={`!rounded-button ${
              !slot.available ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!slot.available}
            onClick={() => onTimeSlotSelect(`${slot.time}${slot.period}`)}
          >
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>
                {slot.time} {slot.period}
              </span>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}
