import { ITrainer, IAvailability, DayOfWeek, IAvailabilityStatus } from "@/types/trainer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, X, Clock, Languages } from "lucide-react";
import { Input } from "@/components/ui/input";

interface AvailabilitySectionProps {
  trainer: ITrainer;
  setTrainer: React.Dispatch<React.SetStateAction<ITrainer>>;
}

export function AvailabilitySection({ trainer, setTrainer }: AvailabilitySectionProps) {
  const timeSlots = Array.from({ length: 24 }, (_, i) => {
    const hour = i.toString().padStart(2, '0');
    return `${hour}:00`;
  });

  const addAvailability = () => {
    const newAvailability: IAvailability = {
      dayOfWeek: DayOfWeek.MONDAY,
      startTime: "09:00",
      endTime: "17:00",
      status: IAvailabilityStatus.AVAILABLE
    };
    setTrainer(prev => ({
      ...prev,
      availability: [...prev.availability, newAvailability]
    }));
  };

  const updateAvailability = (index: number, field: keyof IAvailability, value: any) => {
    setTrainer(prev => ({
      ...prev,
      availability: prev.availability.map((avail, i) => 
        i === index ? { ...avail, [field]: value } : avail
      )
    }));
  };

  const removeAvailability = (index: number) => {
    setTrainer(prev => ({
      ...prev,
      availability: prev.availability.filter((_, i) => i !== index)
    }));
  };
  return (
    <div className="grid grid-cols-1 gap-6 ">
    <Card className="p-6 border rounded-lg ">
      <div className="col-span-1 flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold">Weekly Availability</h3>
          <p className="text-sm text-gray-500">Set your regular working hours</p>
        </div>
        <Button onClick={addAvailability} size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Schedule
        </Button>
      </div>

      <div className="space-y-4 col">
        {trainer.availability.map((schedule, index) => (
          <div 
            key={index} 
            className="flex items-center gap-4  bg-gray-50 rounded-lg"
          >
            <div className="flex-1 grid grid-cols-4 gap-4">
              <Select
                value={schedule.dayOfWeek}
                onValueChange={(value: DayOfWeek) => 
                  updateAvailability(index, 'dayOfWeek', value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select day" />
                </SelectTrigger>
                <SelectContent>
                  {Object.values(DayOfWeek).map((day) => (
                    <SelectItem key={day} value={day}>
                      {day}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gray-500" />
                <Select
                  value={schedule.startTime}
                  onValueChange={(value) => 
                    updateAvailability(index, 'startTime', value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Start time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gray-500" />
                <Select
                  value={schedule.endTime}
                  onValueChange={(value) => 
                    updateAvailability(index, 'endTime', value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="End time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Select
                value={schedule.status}
                onValueChange={(value: IAvailabilityStatus) => 
                  updateAvailability(index, 'status', value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  {Object.values(IAvailabilityStatus).map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => removeAvailability(index)}
              className="text-red-500 hover:text-red-700"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </Card>
    
   </div>
  );
}