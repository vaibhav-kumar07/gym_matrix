"use client";

import CommonButton from "../common/Button";
import PageHeaderWithButton from "../common/PageHeaderWithButton";
// Import UUID for unique IDs
import { errorToast, successToast } from "../hooks/use-toast";
import { AddgymBusinessHoursHandler } from "@/actions/gym";
import { Label } from "@/components/common/Label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { IGym, IGymBusinessHour } from "@/types/gym";
import { zodResolver } from "@hookform/resolvers/zod";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

// Validation Schema
const businessHoursSchema = z.object({
  selectedSlot: z.object({
    openTime: z.string(),
    closeTime: z.string(),
  }),
  customSlots: z.array(
    z.object({
      openTime: z.string().min(1, "Required"),
      closeTime: z.string().min(1, "Required"),
    })
  ),
  closedDays: z.array(z.string()),
  holidays: z.array(
    z.object({
      date: z.string().min(1, "Required"),
      reason: z.string().min(1, "Required"),
    })
  ),
});

// Default time slots
const defaultTimeSlots = [
  { openTime: "09:00 AM", closeTime: "10:00 PM" },
  { openTime: "10:00 AM", closeTime: "08:00 PM" },
  { openTime: "06:00 AM", closeTime: "11:00 AM" },
];

// Default closed days (Sunday pre-selected)
const defaultClosedDays = ["Sunday"];

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const GymBusinessHoursForm = ({ gym }: { gym: IGym }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(businessHoursSchema),
    defaultValues: {
      selectedSlot: defaultTimeSlots[0], // Default slot pre-selected
      customSlots: [],
      closedDays: defaultClosedDays,
      holidays: [],
    },
  });
  // Populate form if gym has business hours
  useEffect(() => {
    if (gym?.businessHours) {
      setValue(
        "selectedSlot",
        gym.businessHours.timings[0] || defaultTimeSlots[0]
      );
      setValue("customSlots", gym.businessHours.timings.slice(1) || []);
      setValue("closedDays", gym.businessHours.closedDays || defaultClosedDays);
      //   setValue("holidays", gym.businessHours.holidays || []);
    }
  }, [gym]); // Run when `gym` changes

  const selectedSlot = watch("selectedSlot");
  const customSlots = watch("customSlots");
  const closedDays = watch("closedDays");
  const holidays = watch("holidays");

  // Select a default slot
  const selectDefaultSlot = (slot: { openTime: string; closeTime: string }) => {
    setValue("selectedSlot", slot);
  };

  // Add a custom time slot
  const addTimeSlot = () => {
    setValue("customSlots", [...customSlots, { openTime: "", closeTime: "" }]);
  };

  // Remove a custom time slot
  const removeTimeSlot = (index: number) => {
    setValue(
      "customSlots",
      customSlots.filter((_, i) => i !== index)
    );
  };
  const [loading, setLoading] = useState(false);
  const onSubmit = async () => {
    setLoading(true);
    const timeSlotId = uuidv4(); // Keeping the same slot ID for consistency

    const formattedData: IGymBusinessHour = {
      gymId: gym._id,
      timings: [
        {
          timeSlotId,
          openTime: selectedSlot.openTime,
          closeTime: selectedSlot.closeTime,
        },
        ...customSlots.map((slot) => ({
          timeSlotId, // Ensure all slots use the same ID
          openTime: slot.openTime,
          closeTime: slot.closeTime,
        })),
      ],
      schedules: [
        {
          days: weekDays.filter((day) => !closedDays.includes(day)), // Open days
          timeSlotId, // Same ID as in timings
        },
      ],
      closedDays,
      holidays: [],
    };

    console.log("Formatted Data:", formattedData);
    try {
      const result = await AddgymBusinessHoursHandler(formattedData);
      if (result.status) {
        setLoading(false);
        successToast("Business Hour added Successfully");
      } else {
        setLoading(false);
        errorToast(result.error || "Authentication failed!");
      }
    } catch (error) {
      errorToast("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full p-6 border rounded-lg">
      <PageHeaderWithButton
        title="Business Hours"
        description=""
        action={
          <CommonButton loading={loading} onClick={handleSubmit(onSubmit)}>
            Save Business Hours
          </CommonButton>
        }
      />

      {/* Default Time Slot Selection */}
      <div className="flex flex-wrap gap-3 my-3 items-center">
        {defaultTimeSlots.map((slot, index) => (
          <Button
            key={index}
            variant={
              selectedSlot.openTime === slot.openTime ? "default" : "outline"
            }
            onClick={() => selectDefaultSlot(slot)}
            className="px-4"
          >
            {slot.openTime} - {slot.closeTime}
          </Button>
        ))}

        {/* Custom Time Slots */}
        {customSlots.length > 0 && (
          <div className="flex items-center gap-3">
            {customSlots.map((slot, index) => (
              <div key={index} className="flex items-center border rounded-md">
                <Input
                  type="time"
                  {...register(`customSlots.${index}.openTime`)}
                  step="3600"
                  className="rounded-md p-2 border-none"
                />
                <Input
                  type="time"
                  {...register(`customSlots.${index}.closeTime`)}
                  step="3600"
                  className="rounded-md p-2 border-none"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeTimeSlot(index)}
                >
                  <Trash2 className="text-red-600" />
                </Button>
              </div>
            ))}
          </div>
        )}

        {/* Add Custom Time Slot Button */}
        <Button type="button" onClick={addTimeSlot} variant="outline">
          + Add Custom Time Slot
        </Button>
      </div>

      {/* Closed Days Selection */}
      <div className="mt-4 flex flex-col gap-3">
        <Label size="sm" variant="bold">
          Mark Gym Off Days
        </Label>
        <div className="flex flex-wrap gap-2">
          {weekDays.map((day) => (
            <Button
              key={day}
              variant={closedDays.includes(day) ? "destructive" : "outline"}
              onClick={() =>
                setValue(
                  "closedDays",
                  closedDays.includes(day)
                    ? closedDays.filter((d) => d !== day)
                    : [...closedDays, day]
                )
              }
              className="px-4"
            >
              {day}
            </Button>
          ))}
        </div>
      </div>

      {/* Holidays Section */}
      {/* <div>
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <CalendarPlus className="mr-2 text-green-600" /> Holidays
        </h3>
        {holidays.map((holiday, index) => (
          <div key={index} className="flex items-center gap-4 mb-3">
            <Input
              type="date"
              value={holiday.date}
              onChange={(e) =>
                setValue(
                  "holidays",
                  holidays.map((h, i) =>
                    i === index ? { ...h, date: e.target.value } : h
                  )
                )
              }
              className="w-44"
            />
            <Input
              type="text"
              placeholder="Reason"
              value={holiday.reason}
              onChange={(e) =>
                setValue(
                  "holidays",
                  holidays.map((h, i) =>
                    i === index ? { ...h, reason: e.target.value } : h
                  )
                )
              }
              className="w-56"
            />
            <Button
              variant="ghost"
              onClick={() =>
                setValue(
                  "holidays",
                  holidays.filter((_, i) => i !== index)
                )
              }
            >
              <XCircle className="text-red-500" size={18} />
            </Button>
          </div>
        ))}
        <Button
          onClick={() =>
            setValue("holidays", [...holidays, { date: "", reason: "" }])
          }
          variant="outline"
        >
          + Add Holiday
        </Button>
      </div>
    </Card> */}
    </Card>
  );
};

export default GymBusinessHoursForm;
