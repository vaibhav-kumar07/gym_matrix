import { Label } from "../common/Label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IFeature } from "@/types/feature";
import { ISubscription } from "@/types/subscription";

type SubscriptionCardProps = {
  plan: ISubscription;
};

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ plan }) => {
  return (
    <Card className=" rounded-xl border-box border hover:shadow-xl hover:scale-105 transition-all duration-300 h-full flex flex-col">
      <div className="relative h-48 overflow-hidden rounded-t-xl">
        <img
          src={plan.image}
          alt={plan.name}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-4 w-full px-6 flex justify-between items-center">
          <Label size="sm" className="text-2xl font-bold text-white">
            {plan.name}
          </Label>
          <div className="flex items-baseline">
            <Label className="text-2xl font-bold text-white">
              ${plan.price}
            </Label>
            <Label size="xs" className="text-white ml-1">
              /month
            </Label>
          </div>
        </div>
      </div>
      <CardContent className="bg-white px-6 py-4 flex flex-col flex-1">
        <ul className="space-y-3 mb-6">
          {(plan.features as IFeature[]).map((feature, i) => (
            <li key={i} className="flex items-center text-gray-700 gap-2">
              <Label size="sm" className="text-green-500">
                •
              </Label>
              <Label size="sm" className="text-gray-600">
                {feature.name}
              </Label>
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-6 text-lg font-semibold rounded-lg  duration-200">
            Choose Plan
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SubscriptionCard;
