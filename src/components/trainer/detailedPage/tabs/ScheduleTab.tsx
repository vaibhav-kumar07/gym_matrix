'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IAvailability, ITrainer } from "@/types/trainer";
import { Clock, Calendar as CalendarIcon, CheckCircle2 } from "lucide-react";

interface TimeSlot {
  start: string;
  end: string;
  formatted: string;
}

export default function ScheduleTab({ trainer }: { trainer: ITrainer }) {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const daysOfWeek = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  
  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const ampm = Number(hours) >= 12 ? 'PM' : 'AM';
    const formattedHours = Number(hours) % 12 || 12;
    return `${formattedHours}:${minutes} ${ampm}`;
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <CalendarIcon className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold">Weekly Availability</h2>
        </div>
        <div className="grid grid-cols-7 gap-4">
          {daysOfWeek.map((day) => {
            const daySchedule = trainer.availability.find(a => a.dayOfWeek === day);
            const isAvailable = !!daySchedule;
            
            return (
              <div
                key={day}
                className={`rounded-lg p-4 text-center transition-colors ${
                  selectedDay === day 
                    ? 'bg-primary text-white shadow-lg scale-105 transform' 
                    : isAvailable 
                      ? 'bg-primary/10 cursor-pointer hover:bg-primary/20 hover:shadow-md transition-all' 
                      : 'bg-gray-100'
                }`}
                onClick={() => isAvailable && setSelectedDay(day)}
              >
                <p className="font-medium mb-2">{day.slice(0, 3)}</p>
                {isAvailable ? (
                  <div className="space-y-1 text-sm">
                    <p className="flex items-center justify-center gap-1">
                      <Clock className="h-3 w-3" />
                      {formatTime(daySchedule.startTime)}
                    </p>
                    <p>to</p>
                    <p className="flex items-center justify-center gap-1">
                      <Clock className="h-3 w-3" />
                      {formatTime(daySchedule.endTime)}
                    </p>
                  </div>
                ) : (
                  <p className="text-sm text-gray-500 mt-4">Unavailable</p>
                )}
              </div>
            );
          })}
        </div>
      </Card>

      {selectedDay && (
        <BookingSection 
          availability={trainer.availability.find(a => a.dayOfWeek === selectedDay)!}
          selectedDay={selectedDay}
          onBookingConfirm={(slot) => {
            console.log('Booking confirmed for:', selectedDay, slot);
          }}
        />
      )}
    </div>
  );
}

function BookingSection({ 
  availability, 
  selectedDay,
  onBookingConfirm 
}: { 
  availability: IAvailability;
  selectedDay: string;
  onBookingConfirm: (slot: TimeSlot) => void;
}) {
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);

  const generateTimeSlots = (start: string, end: string): TimeSlot[] => {
    const slots: TimeSlot[] = [];
    let currentTime = new Date(`2024-01-01T${start}`);
    const endTime = new Date(`2024-01-01T${end}`);

    while (currentTime < endTime) {
      const slotStart = currentTime.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      });
      
      currentTime.setMinutes(currentTime.getMinutes() + 60);
      
      const slotEnd = currentTime.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      });

      slots.push({
        start: slotStart,
        end: slotEnd,
        formatted: `${slotStart} - ${slotEnd}`
      });
    }

    return slots;
  };

  const timeSlots = generateTimeSlots(availability.startTime, availability.endTime);

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold">Available Time Slots</h3>
          <p className="text-gray-500 text-sm mt-1">Select your preferred time slot for {selectedDay.toLowerCase()}</p>
        </div>
        {selectedSlot && (
          <div className="flex items-center gap-2 text-primary">
            <CheckCircle2 className="h-5 w-5" />
            <span className="font-medium">Slot Selected</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {timeSlots.map((slot) => (
          <Button
            key={slot.formatted}
            variant={selectedSlot?.formatted === slot.formatted ? "default" : "outline"}
            className={`w-full transition-all ${
              selectedSlot?.formatted === slot.formatted 
                ? 'shadow-md scale-105' 
                : 'hover:shadow-sm'
            }`}
            onClick={() => setSelectedSlot(slot)}
          >
            <Clock className="h-4 w-4 mr-2" />
            {slot.formatted}
          </Button>
        ))}
      </div>

      {selectedSlot && (
        <div className="mt-6 space-y-4">
          <Card className="p-4 bg-primary/5 border-primary/20">
            <p className="text-sm text-gray-600">You've selected:</p>
            <p className="font-medium text-primary">
              {selectedDay}, {selectedSlot.formatted}
            </p>
          </Card>
          <Button 
            className="w-full"
            size="lg"
            onClick={() => onBookingConfirm(selectedSlot)}
          >
            Confirm Booking
          </Button>
        </div>
      )}
    </Card>
  );
}