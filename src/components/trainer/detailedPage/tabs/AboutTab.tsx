import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";
import { ITrainer } from "@/types/trainer";

export default function AboutTab({ trainer }: { trainer: ITrainer }) {
  return (
    <div className="grid grid-cols-3 gap-6">
      <Card className="col-span-2 p-6 border rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Specializations</h3>
        <div className="flex flex-wrap gap-2 mb-8">
          {trainer.specializations.map((spec) => (
            <Badge key={spec} className="text-sm">
              {spec}
            </Badge>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-4">About Me</h3>
        <p className="text-gray-600 leading-relaxed mb-8">
          {trainer.bio}
        </p>

        <h3 className="text-xl font-semibold mb-4">Education</h3>
        <ul className="space-y-2 text-gray-600">
          {trainer.education.map((edu, index) => (
            <li key={index} className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-gray-400" />
              {edu.degree} - {edu.institution}
            </li>
          ))}
        </ul>
      </Card>

      <Card className="p-6 rounded-lg border">
        <h3 className="text-xl font-semibold mb-4">Certifications</h3>
        <div className="space-y-4">
          {trainer.certifications.map((cert) => (
            <div key={cert.name} className="flex items-center gap-4">
              <img 
                src={cert.image} 
                alt={cert.name} 
                className="w-16 h-16 rounded-lg object-cover" 
              />
              <div>
                <h4 className="font-medium">{cert.name}</h4>
                <p className="text-sm text-gray-500">Since {cert.yearObtained}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}