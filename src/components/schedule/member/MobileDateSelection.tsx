import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";

interface DateSelectionProps {
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
}

export default function DateSelection({
  selectedDate,
  onDateSelect,
}: DateSelectionProps) {
  return (
    <Card className=" mb-4 mx-auto flex items-center w-full bg-white border overflow-hidden rounded-lg">
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={(date) => date && onDateSelect(date)}
        className=" w-full flex items-center justify-center "
      />
    </Card>
  );
}
