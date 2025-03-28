import { useState } from "react";
import { Card } from "@/components/ui/card";
import Button from "@/components/common/Button";
import { Input } from "@/components/ui/input";
import { Plus, X, Loader2, Save, Languages } from "lucide-react";
import { toast } from "sonner";
import { errorToast, successToast } from "@/components/hooks/use-toast";
import { updateTrainerLanguagesHandler } from "@/actions/trainer";

interface LanguagesSectionProps {
  initialLanguages: string[];
  trainerId: string;
}

export function LanguagesSection({ initialLanguages = [], trainerId }: LanguagesSectionProps) {
  const [languages, setLanguages] = useState<string[]>(initialLanguages);
  const [isLoading, setIsLoading] = useState(false);
  const [isDirty, setIsDirty] = useState(false);

  const handleAdd = () => {
    setLanguages(prev => [...prev, ""]);
    setIsDirty(true);
  };

  const handleUpdate = (index: number, value: string) => {
    setLanguages(prev => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
    setIsDirty(true);
  };

  const handleRemove = (index: number) => {
    setLanguages(prev => prev.filter((_, i) => i !== index));
    setIsDirty(true);
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);
      
      // Validate languages
      const validLanguages = languages.filter(lang => lang.trim() !== "");
      if (validLanguages.length === 0) {
        toast.error("Please add at least one language");
        return;
      }

      // Call API to update languages
      const response = await updateTrainerLanguagesHandler({
        trainerId,
        languages: validLanguages,
      });
      
      if (response.status) {
        successToast("Languages updated successfully");
        setLanguages(validLanguages); // Remove any empty entries
        setIsDirty(false);
      } else {
        errorToast(response.error || "Failed to update languages");
      }
    } catch (error) {
      console.error("Error updating languages:", error);
      errorToast("An error occurred while updating languages");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="p-6 border rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-semibold">Languages Offered</h3>
          <p className="text-sm text-gray-500">Languages you can teach in</p>
        </div>
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
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
        {languages.map((language, index) => (
          <div key={index} className="flex gap-2 items-center">
            <Languages className="h-5 w-5 text-blue-500" />
            <Input
              value={language}
              onChange={(e) => handleUpdate(index, e.target.value)}
              placeholder="Enter language"
              className="flex-1"
              disabled={isLoading}
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleRemove(index)}
              className="text-red-500"
              disabled={isLoading}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
        
        {languages.length === 0 && (
          <div className="text-center py-6 text-gray-500 col-span-2">
            No languages added yet. Click "Add" to add languages you can teach in.
          </div>
        )}
      </div>
    </Card>
  );
}