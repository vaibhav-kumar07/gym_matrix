import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Button from "@/components/common/Button";
import { Loader2, Save } from "lucide-react";
import { toast } from "sonner";
import { updateTrainerSpecializationHandler } from "@/actions/trainer";
import { errorToast, successToast } from "@/components/hooks/use-toast";

interface SpecializationsSectionProps {
  initialSpecializations: string[];
  trainerId: string;
}

export function SpecializationsSection({ initialSpecializations, trainerId }: SpecializationsSectionProps) {
  const [specializations, setSpecializations] = useState<string[]>(initialSpecializations);
  const [isLoading, setIsLoading] = useState(false);
  const [isDirty, setIsDirty] = useState(false);

  const commonSpecializations = [
    "Weight Training", "Cardio", "HIIT", "Yoga", "Pilates",
    "Nutrition", "Sports Performance", "Rehabilitation",
    "Senior Fitness", "Pre/Post Natal", "Functional Training"
  ];

  const handleToggle = (spec: string) => {
    setSpecializations(prev => {
      if (prev.includes(spec)) {
        return prev.filter(s => s !== spec);
      } else {
        return [...prev, spec];
      }
    });
    setIsDirty(true);
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);
      
      // Validate - ensure at least one specialization is selected
      if (specializations.length === 0) {
        toast.error("Please select at least one specialization");
        return;
      }

      const response =await updateTrainerSpecializationHandler({trainerId,specializations})
      if (!response) {
        errorToast(  'Failed to update specializations');
      }

      successToast("Specializations updated successfully");
      setIsDirty(false);
    } catch (error) {
      console.error("Error updating specializations:", error);
      errorToast(error instanceof Error ? error.message : "An error occurred while updating specializations");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="p-6 border rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Specializations</h3>
        <Button 
          onClick={handleSave} 
          size="sm"
          disabled={!isDirty || isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save className="h-4 w-4 mr-2" />
              Save
            </>
          )}
        </Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {commonSpecializations.map((spec) => (
          <Badge
            key={spec}
            variant={specializations.includes(spec) ? "default" : "outline"}
            className={`cursor-pointer px-3 py-1 ${specializations.includes(spec) ? 'bg-black hover:bg-black' : 'hover:bg-gray-100'}`}
            onClick={() => handleToggle(spec)}
          >
            {spec}
          </Badge>
        ))}
      </div>
    </Card>
  );
}