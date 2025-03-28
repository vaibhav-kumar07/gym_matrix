import { updateTrainerDetailsHandler,  } from "@/actions/trainer";
import Button from "@/components/common/Button";
import { Label } from "@/components/common/Label";
import { errorToast, successToast } from "@/components/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { IEducation } from "@/types/trainer";
import { Plus, X, Loader2, Save } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface EducationSectionProps {
  initialEducation: IEducation[];
  trainerId: string;
}

export function EducationSection({
  initialEducation = [],
  trainerId,
}: EducationSectionProps) {
  const [education, setEducation] = useState<IEducation[]>(initialEducation);
  const [isLoading, setIsLoading] = useState(false);
  const [isDirty, setIsDirty] = useState(false);

  const handleAdd = () => {
    const newEducation: IEducation = {
      degree: "",
      institution: "",
      yearCompleted: new Date().getFullYear(),
    };
    setEducation((prev) => [...prev, newEducation]);
    setIsDirty(true);
  };

  const handleUpdate = (index: number, field: keyof IEducation, value: any) => {
    setEducation((prev) =>
      prev.map((edu, i) => (i === index ? { ...edu, [field]: value } : edu))
    );
    setIsDirty(true);
  };

  const handleRemove = (index: number) => {
    setEducation((prev) => prev.filter((_, i) => i !== index));
    setIsDirty(true);
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);

      // Validate education entries
      const invalidEntries = education.filter(
        (edu) => !edu.degree || !edu.institution || !edu.yearCompleted
      );

      if (invalidEntries.length > 0) {
        toast.error("Please fill in all required fields for education entries");
        return;
      }

      // Call API to update education
      const response = await updateTrainerDetailsHandler({
        trainerId,
        education,
      });

      if (response.status) {
        successToast("Education information updated successfully");
        setIsDirty(false);
      } else {
        errorToast(response.error || "Failed to update education information");
      }
    } catch (error) {
      console.error("Error updating education:", error);
      errorToast("An error occurred while updating education information");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="p-6 border rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Education</h3>
        <div className="flex gap-2">
          <Button onClick={handleAdd} size="sm" disabled={isLoading}>
            <Plus className="h-4 w-4 mr-2" />
            Add
          </Button>
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
      </div>

      <div className="flex items-start gap-4 bg-gray-50 rounded-lg mb-1.5">
        <div className="w-full flex-1 grid grid-cols-3 gap-4">
          <div className="space-y-1">
            <Label>Degree</Label>
          </div>
          <div className="space-y-1">
            <Label>Institution</Label>
          </div>
          <div className="space-y-1">
            <Label>Year Completed</Label>
          </div>
        </div>
        <div 
              // variant="ghost" 
              // size="sm"
             
              // className="text-red-500 hover:text-red-700 mt-auto hover:bg-red-100"
              // disabled={isLoading}
            >
              {/* <X className="h-4 w-4" /> */}
            </div>
      </div>

      <div className="space-y-2">
        {education.map((edu, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-gray-50 rounded-lg"
          >
            <div className="w-full flex-1 grid grid-cols-3 gap-4">
              {/* <div className="space-y-1"> */}
                <Input
                  value={edu.degree}
                  onChange={(e) =>
                    handleUpdate(index, "degree", e.target.value)
                  }
                  placeholder="Bachelor's in..."
                  disabled={isLoading}
                />

                <Input
                  value={edu.institution}
                  onChange={(e) =>
                    handleUpdate(index, "institution", e.target.value)
                  }
                  placeholder="University name"
                  disabled={isLoading}
                />

                <Input
                  type="number"
                  value={edu.yearCompleted}
                  onChange={(e) =>
                    handleUpdate(index, "yearCompleted", Number(e.target.value))
                  }
                  min={1950}
                  max={new Date().getFullYear()}
                  disabled={isLoading}
                />
              {/* </div> */}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleRemove(index)}
              className="text-red-500 hover:text-red-700 mt-auto hover:bg-red-100"
              disabled={isLoading}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}

        {education.length === 0 && (
          <div className="text-center py-6 text-gray-500">
            No education entries yet. Click "Add" to add your educational
            background.
          </div>
        )}
      </div>
    </Card>
  );
}
