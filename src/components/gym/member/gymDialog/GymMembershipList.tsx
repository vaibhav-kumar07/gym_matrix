"use client";

import { JoinGymButton } from "./GymJoinButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IGym } from "@/types/gym";
import { ISubscription } from "@/types/subscription";
import { Check, Crown, Zap, Star } from "lucide-react";
import { useState } from "react";

interface MembershipPlansProps {
  plans: ISubscription[];
  gym: IGym;
}

export const MembershipPlans = ({ plans, gym }: MembershipPlansProps) => {
  const [selectedplan, setSubscriptionPlan] = useState<ISubscription>(plans[0]);
  if (!plans || plans.length === 0) {
    return <p className="text-center text-gray-500">No plans available.</p>;
  }
  function handleClick(plan: ISubscription) {
    setSubscriptionPlan(plan);
  }
  return (
    <div className="space-y-3 pb-20">
      {plans.map((plan, index) => {
        const isPremium = index === 0; // Make the first plan the premium by default
        const isPopular = plan.features.length > 5; // Mark as popular if it has more than 5 features

        return (
          <Card
            key={index}
            className={`relative overflow-hidden p-4 rounded-lg shadow-md ${
              selectedplan._id === plan._id
                ? "border-primary border bg-primary/5"
                : "border border-gray-200"
            }`}
          >
            <div className="flex items-start justify-between">
              {/* Left: Plan Name & Price */}
              <div className="space-y-1 w-2/3">
                <div className="flex items-center gap-2">
                  {isPremium && <Crown className="w-5 h-5 text-primary" />}
                  {!isPremium && index === 1 && (
                    <Zap className="w-5 h-5 text-blue-500" />
                  )}
                  {!isPremium && index > 1 && (
                    <Star className="w-5 h-5 text-yellow-500" />
                  )}
                  <h3 className="font-semibold text-lg">{plan.name}</h3>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-sm text-gray-500">
                    /{plan.duration} months
                  </span>
                </div>
                {isPopular && (
                  <Badge className="bg-primary/10 text-primary text-xs">
                    Most Popular
                  </Badge>
                )}
              </div>

              {/* Right: Action Button */}
              <div className="flex-shrink-0">
                <Button
                  onClick={() => handleClick(plan)}
                  className={`px-4 py-2 text-sm ${
                    isPremium
                      ? "bg-primary hover:bg-primary/90"
                      : "bg-gray-900 hover:bg-gray-800"
                  }`}
                >
                  Choose
                </Button>
              </div>
            </div>

            {/* Features List */}
            <div className="mt-3 space-y-1 text-sm">
              {plan.features.slice(0, 3).map((feature, idx) => (
                <div key={idx} className="flex items-center">
                  <Check className="w-4 h-4 text-primary mr-2" />
                  <span className="text-gray-700 truncate">{feature.name}</span>
                </div>
              ))}

              {plan.features.length > 3 && (
                <span className="text-xs text-primary cursor-pointer hover:underline">
                  +{plan.features.length - 3} more
                </span>
              )}
            </div>

            {/* Premium Tag */}
            {isPremium && (
              <div className="absolute -right-10 -top-2 rotate-45 bg-primary text-white px-10 py-1 text-xs">
                Save 20%
              </div>
            )}
          </Card>
        );
      })}
      <JoinGymButton selectedPlan={selectedplan} gym={gym} />
    </div>
  );
};
