"use client";

import ClassTypes from "./MemberClassTypes";
import TimeSlots from "./MemberTimeSlot";
import MobileTrainers from "./MemberTrainer";
import DateSelection from "./MobileDateSelection";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getScheduleData } from "@/lib/schedule";
import { IScheduleData } from "@/lib/types/schedule";
import { MoreVertical } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function MemberSchedule() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [scheduleData, setScheduleData] = useState<IScheduleData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchScheduleData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getScheduleData();
        setScheduleData(data);
      } catch (error) {
        setError("Failed to load schedule data");
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchScheduleData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!scheduleData) {
    return null;
  }
  return (
    <div className="flex flex-col  bg-gradient-to-b from-blue-50 to-purple-50">
      {/* Top Navigation */}
      <div className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="flex items-center justify-between px-4 h-16">
          <h1 className="text-lg font-semibold">Schedule Session</h1>
          <Button variant="ghost" size="icon" className="!rounded-button">
            <MoreVertical className="w-5 h-5 text-gray-600" />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 pt-14">
        <ScrollArea className="h-full">
          <div className="p-4 ">
            <DateSelection
              selectedDate={selectedDate}
              onDateSelect={setSelectedDate}
            />
            <TimeSlots
              timeSlots={scheduleData.timeSlots}
              selectedTimeSlot={selectedTimeSlot}
              onTimeSlotSelect={setSelectedTimeSlot}
            />
            <ClassTypes classTypes={scheduleData.classTypes} />
            <MobileTrainers trainers={scheduleData.trainers} />
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}
