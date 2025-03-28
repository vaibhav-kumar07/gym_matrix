"use client";

import SubscriptionButton from "./SubscriptionButton";
import { ISubscriptionDurationType } from "@/types/subscription";
import React from "react";

const subscriptionTypes = [
  {
    label: "Monthly",
    value: ISubscriptionDurationType.Monthly,
  },
  {
    label: "Yearly",
    value: ISubscriptionDurationType.Yearly,
  },
];

export default function SubscriptionHeader({
  activeTab,
}: {
  activeTab: ISubscriptionDurationType;
}) {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
        Choose Your Plan
      </h1>
      <div className="flex items-center gap-4">
        {subscriptionTypes.map((type, index) => (
          <SubscriptionButton
            key={index}
            activeTab={activeTab}
            value={type.value}
            label={type.label}
          />
        ))}
      </div>
    </div>
  );
}
