import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Plus, X, Award, Save,  Users } from "lucide-react";
import { toast } from "sonner";
import { updateTrainerDetailsHandler } from "@/actions/trainer";
import { errorToast, successToast } from "@/components/hooks/use-toast";
import Button from "@/components/common/Button";

interface ExperienceSectionProps {
  initialAchievements: string[];
  initialDemographics: {
    seniors: boolean;
    kids: boolean;
    disabilities: boolean;
  };
  trainerId: string;
}

export function ExperienceSection({ 
  initialAchievements = [], 
  initialDemographics = { seniors: false, kids: false, disabilities: false },
  trainerId 
}: ExperienceSectionProps) {
  const [achievements, setAchievements] = useState<string[]>(initialAchievements);
  const [demographics, setDemographics] = useState(initialDemographics);
  const [isLoading, setIsLoading] = useState(false);
  const [isDirty, setIsDirty] = useState(false);

  const addAchievement = () => {
    setAchievements(prev => [...prev, ""]);
    setIsDirty(true);
  };

  const updateAchievement = (index: number, value: string) => {
    setAchievements(prev => prev.map((ach, i) => 
      i === index ? value : ach
    ));
    setIsDirty(true);
  };

  const removeAchievement = (index: number) => {
    setAchievements(prev => prev.filter((_, i) => i !== index));
    setIsDirty(true);
  };

  const updateDemographics = (field: keyof typeof demographics) => {
    setDemographics(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
    setIsDirty(true);
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);
      
      // Validate achievements
      const validAchievements = achievements.filter(ach => ach.trim().length >= 3);
      if (achievements.length > 0 && validAchievements.length === 0) {
        toast.error("Achievements must be at least 3 characters long");
        return;
      }

      // Prepare payload
      const payload = {
        achievements: validAchievements,
        experienceWithDemographics: demographics
      };

      // Call API to update trainer details
      const response = await updateTrainerDetailsHandler({
        trainerId,
        ...payload
      });
      
      if (response.status) {
        successToast("Experience information updated successfully");
        setAchievements(validAchievements); // Remove any invalid entries
        setIsDirty(false);
      } else {
        errorToast(response.error || "Failed to update experience information");
      }
    } catch (error) {
      console.error("Error updating experience:", error);
      errorToast("An error occurred while updating experience information");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="">
      <div className="flex justify-between items-center mb-2 px-1">
        <h2 className="text-2xl font-bold">Experience & Achievements</h2>
        <Button 
          onClick={handleSave} 
          size="sm"
          disabled={!isDirty || isLoading}
          className="h-9 px-2"
          loading={isLoading}
        >
          
              <Save className="h-4 w-4 mr-2" />
              Save All Changes
           
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6 border rounded-lg shadow-lg bg-white">
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-6 w-6 text-blue-500" />
            <h3 className="text-xl font-semibold">Demographics Experience</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-1 rounded-md bg-gray-100">
              <Label className="flex-1">Experience with Seniors</Label>
              <Switch
                checked={demographics.seniors}
                onCheckedChange={() => updateDemographics('seniors')}
                disabled={isLoading}
              />
            </div>
            <div className="flex items-center justify-between p-1 rounded-md bg-gray-100">
              <Label className="flex-1">Experience with Kids</Label>
              <Switch
                checked={demographics.kids}
                onCheckedChange={() => updateDemographics('kids')}
                disabled={isLoading}
              />
            </div>
            <div className="flex items-center justify-between p-1 rounded-md bg-gray-100">
              <Label className="flex-1">Experience with Special Needs</Label>
              <Switch
                checked={demographics.disabilities}
                onCheckedChange={() => updateDemographics('disabilities')}
                disabled={isLoading}
              />
            </div>
          </div>
        </Card>

        <Card className="p-6 border rounded-lg shadow-lg bg-white">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Award className="h-6 w-6 text-yellow-500" />
              <h3 className="text-xl font-semibold">Achievements</h3>
            </div>
            <Button 
              onClick={addAchievement} 
              size="sm" 
              variant="outline"
              className="border-blue-500 text-blue-500 hover:bg-blue-50"
              disabled={isLoading}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex gap-2 p-4 bg-gray-100 rounded-md">
                <Input
                  value={achievement}
                  onChange={(e) => updateAchievement(index, e.target.value)}
                  placeholder="Enter achievement"
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeAchievement(index)}
                  className="text-red-500 hover:bg-red-50"
                  disabled={isLoading}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
            
            {achievements.length === 0 && (
              <div className="text-center py-8 px-4 bg-gray-100 rounded-md text-gray-500 flex items-center justify-center w-full h-full">
                No achievements added yet. Click "Add" to add your professional achievements.
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}