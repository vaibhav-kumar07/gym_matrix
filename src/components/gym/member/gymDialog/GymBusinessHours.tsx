import { Label } from "@/components/common/Label";
import { Card } from "@/components/ui/card";
import { IGymBusinessHour } from "@/types/gym";
import { Clock, XCircle, Calendar, Clock3 } from "lucide-react";

interface BusinessHoursProps {
  hours: IGymBusinessHour;
}

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const BusinessHours = ({ hours }: BusinessHoursProps) => {
  return (
    <Card className="p-2 bg-white rounded-xl   transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Clock className="w-6 h-6 text-primary" />
          <Label size="lg" className=" font-bold text-gray-800">
            Business Hours
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm text-green-600 font-medium">Open Now</span>
        </div>
      </div>

      <div className="grid gap-0.5">
        {daysOfWeek.map((day) => {
          const isClosed = hours?.closedDays?.includes(day);
          const schedule = hours?.schedules?.find((s) => s.days.includes(day));
          const timeSlot = schedule
            ? hours.timings.find((t) => t.timeSlotId === schedule.timeSlotId)
            : null;
          const isToday =
            new Date().toLocaleDateString("en-US", { weekday: "long" }) === day;

          return (
            <div
              key={day}
              className={`flex justify-between items-center  rounded-lg transition-all duration-200 
                ${
                  isToday
                    ? "bg-primary/5 border border-primary/20 px-2"
                    : "hover:bg-gray-50 px-2 "
                }
              `}
            >
              <div className="flex items-center gap-3">
                <Clock3
                  className={`w-4 h-4 ${
                    isToday ? "text-primary" : "text-gray-400"
                  }`}
                />
                <Label
                  size="xs"
                  className={`font-medium ${
                    isToday ? "text-primary" : "text-gray-600"
                  }`}
                >
                  {day}
                  {isToday && (
                    <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      Today
                    </span>
                  )}
                </Label>
              </div>
              {isClosed ? (
                <Label
                  size="xs"
                  className="flex items-center px-4 py-1.5 bg-red-50 text-red-500 rounded-full"
                >
                  <XCircle className="w-4 h-4 mr-1" />
                  Closed
                </Label>
              ) : timeSlot ? (
                <Label
                  size="xs"
                  className={`px-4 py-2 rounded-full font-medium
                  
                  `}
                >
                  {timeSlot.openTime} - {timeSlot.closeTime}
                </Label>
              ) : (
                <Label size="xs" className="text-gray-500 my-1">
                  No schedule
                </Label>
              )}
            </div>
          );
        })}
      </div>

      {hours?.holidays?.length > 0 && (
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-full bg-red-50">
              <Calendar className="w-5 h-5 text-red-500" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800">
              Upcoming Holidays
            </h4>
          </div>
          <div className="grid gap-2">
            {hours.holidays.map((holiday, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-red-50/50 rounded-lg border border-red-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full" />
                  <span className="text-sm font-medium text-gray-700">
                    {new Date(holiday.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <span className="text-sm font-medium text-red-600">
                  {holiday.reason}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
};
