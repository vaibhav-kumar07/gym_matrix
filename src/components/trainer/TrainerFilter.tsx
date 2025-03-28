'use client';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useGetSearchParamValue, useURLParams } from "../hooks/request";
import { DayOfWeek } from "@/types/trainer";
import { useEffect, useState } from "react";

export default function TrainerFilters() {
  const { appendSearchParams, removeSearchParams } = useURLParams();
  const [selectedDay, setSelectedDay] = useState<string>('');

  const specialization = useGetSearchParamValue("specialization");
  const experience = useGetSearchParamValue("experience");
  const availability = useGetSearchParamValue("availability");

  // Convert DayOfWeek to relative day
  const getRelativeDay = (dayOfWeek: string): string => {
    const today = new Date();
    const todayDayOfWeek = today.toLocaleString('en-US', { weekday: 'long' }).toUpperCase();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const tomorrowDayOfWeek = tomorrow.toLocaleString('en-US', { weekday: 'long' }).toUpperCase();

    if (dayOfWeek === todayDayOfWeek) return 'today';
    if (dayOfWeek === tomorrowDayOfWeek) return 'tomorrow';
    return 'week';
  };

  // Sync URL availability with select value
  useEffect(() => {
    if (availability) {
      const relativeDay = getRelativeDay(availability);
      setSelectedDay(relativeDay);
    }
  }, [availability]);

  const handleAvailabilityChange = (value: string) => {
    if (value) {
      const dayOfWeek = getDayOfWeek(value);
      setSelectedDay(value);
      appendSearchParams("availability", dayOfWeek);
    } else {
      setSelectedDay('');
      removeSearchParams("availability");
    }
  };

  // Convert relative day to DayOfWeek
  const getDayOfWeek = (relativeDay: string): DayOfWeek => {
    const today = new Date();
    
    switch(relativeDay) {
      case 'today':
        return DayOfWeek[today.toLocaleString('en-US', { weekday: 'long' }).toUpperCase() as keyof typeof DayOfWeek];
      case 'tomorrow':
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        return DayOfWeek[tomorrow.toLocaleString('en-US', { weekday: 'long' }).toUpperCase() as keyof typeof DayOfWeek];
      default:
        return DayOfWeek[today.toLocaleString('en-US', { weekday: 'long' }).toUpperCase() as keyof typeof DayOfWeek];
    }
  };

  const handleSpecializationChange = (value: string) => {
    if (value) {
      appendSearchParams("specialization", value);
    } else {
      removeSearchParams("specialization");
    }
  };

  const handleExperienceChange = (value: string) => {
    if (value) {
      appendSearchParams("experience", value);
    } else {
      removeSearchParams("experience");
    }
  };

  return (
    <div className="grid grid-cols-4 gap-6 mb-8">
      <Select value={specialization} onValueChange={handleSpecializationChange}>
        <SelectTrigger>
          <SelectValue placeholder="Specialization" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="weight-training">Weight Training</SelectItem>
          <SelectItem value="yoga">Yoga</SelectItem>
          <SelectItem value="hiit">HIIT</SelectItem>
          <SelectItem value="pilates">Pilates</SelectItem>
        </SelectContent>
      </Select>

      <Select value={experience} onValueChange={handleExperienceChange}>
        <SelectTrigger>
          <SelectValue placeholder="Experience Level" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="beginner">Beginner Friendly</SelectItem>
          <SelectItem value="intermediate">Intermediate</SelectItem>
          <SelectItem value="advanced">Advanced</SelectItem>
        </SelectContent>
      </Select>

      <Select value={selectedDay} onValueChange={handleAvailabilityChange}>
        <SelectTrigger>
          <SelectValue placeholder="Availability" />
        </SelectTrigger> 
        <SelectContent>
          <SelectItem value="today">Available Today</SelectItem>
          <SelectItem value="tomorrow">Available Tomorrow</SelectItem>
          <SelectItem value="week">This Week</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}