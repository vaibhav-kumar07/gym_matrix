import { Card } from "@/components/ui/card";
import { IPersonalBest } from "@/types/profile";

export default function PersonalBests({ bests }: { bests: IPersonalBest[] }) {
  return (
    <Card className="p-4 border rounded-lg">
      <h3 className="font-semibold mb-4">Personal Bests</h3>
      <div className="grid grid-cols-2 gap-4">
        {bests.map((pb, index) => (
          <div key={index} className="bg-blue-50 p-3 rounded-lg">
            <div className="text-sm text-gray-600">{pb.title}</div>
            <div className="font-bold text-blue-600">{pb.value}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}
