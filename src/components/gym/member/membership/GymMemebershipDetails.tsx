"use client";

import { Label } from "@/components/common/Label";
import TooltipWrapper from "@/components/common/TooltipWrapper";
import { Badge } from "@/components/ui/badge";
import { IFeature } from "@/types/feature";
import { ISubscription } from "@/types/subscription";
import { Check } from "lucide-react";

interface GymSubscriptionsProps {
  subscriptions: ISubscription[];
}

const GymSubscriptions: React.FC<GymSubscriptionsProps> = ({
  subscriptions,
}) => {
  return (
    <section className="space-y-2 max-h-[300px] overflow-y-auto p-2 no-scrollbar">
      {subscriptions.map((membership) => {
        const visibleFeatures = membership.features.slice(0, 3);
        const hiddenFeatures = membership.features.slice(3) as IFeature[];

        return (
          <div
            key={membership._id}
            className="border rounded-md p-3 bg-white shadow-sm"
          >
            {/* Membership Header */}
            <div className="flex justify-between items-center mb-2">
              <Label size="sm" className="font-semibold text-gray-900">
                {membership.name}
              </Label>
              <Badge className="bg-blue-100 text-blue-700 px-2 py-1 text-xs">
                ₹{membership.price} / {membership.duration}
              </Badge>
            </div>

            {/* Feature List */}
            <div className="flex flex-wrap gap-1">
              {(visibleFeatures as IFeature[]).map(
                (feature: IFeature, index) => (
                  <Badge
                    key={index}
                    className="text-gray-700 bg-gray-100 px-2 py-1 text-xs flex items-center hover:bg-gray-100 hover:text-gray-700"
                  >
                    <Check className="text-green-500 mr-1" size={12} />
                    {feature.name}
                  </Badge>
                )
              )}

              {/* Show remaining features in a tooltip */}
              {hiddenFeatures.length > 0 && (
                <TooltipWrapper
                  contentClassName="bg-gray-800 text-white text-xs px-2 py-1 rounded-md"
                  content={
                    <ul className="space-y-1">
                      {hiddenFeatures.map((feature: IFeature, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="text-green-500 mr-1" size={12} />
                          {feature.name}
                        </li>
                      ))}
                    </ul>
                  }
                >
                  <Badge className="bg-gray-200 text-gray-700 px-2 py-1 text-xs">
                    +{hiddenFeatures.length} more
                  </Badge>
                </TooltipWrapper>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default GymSubscriptions;
