import { useState } from "react";
import { ICertification } from "@/types/trainer";
import { Card } from "@/components/ui/card";
import Button from "@/components/common/Button";
import { Label } from "@/components/common/Label";
import { Input } from "@/components/ui/input";
import { Plus, X, Loader2, Save } from "lucide-react";
import { updateTrainerCertificationsHandler } from "@/actions/trainer";
import { errorToast, successToast } from "@/components/hooks/use-toast";

interface CertificationsSectionProps {
  initialCertifications: ICertification[];
  trainerId: string;
}

export function CertificationsSection({ initialCertifications, trainerId }: CertificationsSectionProps) {
  const [certifications, setCertifications] = useState<ICertification[]>(initialCertifications);
  const [isLoading, setIsLoading] = useState(false);
  const [isDirty, setIsDirty] = useState(false);

  const handleAdd = () => {
    const newCertification: ICertification = {
      name: "",
      yearObtained: new Date().getFullYear(),
    };
    setCertifications(prev => [...prev, newCertification]);
    setIsDirty(true);
  };

  const handleUpdate = (index: number, field: keyof ICertification, value: any) => {
    setCertifications(prev => prev.map((cert, i) => 
      i === index ? { ...cert, [field]: value } : cert
    ));
    setIsDirty(true);
  };

  const handleRemove = (index: number) => {
    setCertifications(prev => prev.filter((_, i) => i !== index));
    setIsDirty(true);
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);
      
      // Validate certifications
      const invalidCerts = certifications.filter(cert => !cert.name || !cert.yearObtained);
      if (invalidCerts.length > 0) {
        errorToast("Please fill in all required fields for certifications");
        return;
      }
      const response = await updateTrainerCertificationsHandler({
        certifications,
        trainerId
      });
      if (response.status) {
        successToast("Certifications updated successfully");
        setIsDirty(false);
      } else {
        errorToast(response.error || "Failed to update certifications");
      }
    } catch (error) {
      console.error("Error updating certifications:", error);
      errorToast("An error occurred while updating certifications");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="p-6 border rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Certifications</h3>
        <div className="flex gap-2">
          <Button onClick={handleAdd} size="sm" disabled={isLoading}>
            <Plus className="h-4 w-4" />
          </Button>
          <Button 
            onClick={handleSave} 
            size="sm"
            disabled={!isDirty || isLoading}
            // variant={isDirty ? "default" : "outline"}
          >
              <Save className="h-4 w-4 " />
              Save Info
          </Button>
        </div>
      </div>
      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <div key={index} className="flex items-start gap-4 bg-gray-50 rounded-lg p-4">
            <div className="flex-1 grid grid-cols-3 gap-4">
              <div className="space-y-1 col-span-2">
                <Label>Certification Name</Label>
                <Input
                  value={cert.name}
                  onChange={(e) => handleUpdate(index, 'name', e.target.value)}
                  placeholder="Certification title"
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-1">
                <Label>Year Obtained</Label>
                <Input
                  type="number"
                  value={cert.yearObtained}
                  onChange={(e) => handleUpdate(index, 'yearObtained', Number(e.target.value))}
                  min={1950}
                  max={new Date().getFullYear()}
                  disabled={isLoading}
                />
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => handleRemove(index)}
              className="text-red-500 hover:text-red-700 mt-auto"
              disabled={isLoading}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}