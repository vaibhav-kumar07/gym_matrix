import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { IClassType } from "@/types/schedule";
import { ChevronRight } from "lucide-react";

interface ClassTypesProps {
  classTypes: IClassType[];
}

export default function ClassTypes({ classTypes }: ClassTypesProps) {
  return (
    <div className="mb-4 bg-white p-4 rounded-lg border">
      <h2 className="text-lg font-semibold mb-2">Select Class Type</h2>
      <div className="space-y-3">
        {classTypes.map((classType) => (
          <Card
            key={classType.id}
            className="p-1.5 cursor-pointer hover:bg-gray-50 border rounded-lg"
          >
            <div className="flex items-center gap-4">
              <img
                src={`${classType.image}`}
                alt={classType.name}
                className="w-20 h-14 rounded-md object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{classType.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>{classType.duration}</span>
                  <span>•</span>
                  <Badge variant="secondary">{classType.intensity}</Badge>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
