"use client";

import Button from "../common/Button";
import { useURLParams } from "../hooks/request";
import { ISubscriptionDurationType } from "@/types/subscription";
import React from "react";

export default function SubscriptionButton({
  activeTab,
  value,
  label,
}: {
  activeTab: ISubscriptionDurationType;
  value: ISubscriptionDurationType;
  label: string;
}) {
  const { appendSearchParams } = useURLParams();

  function handleActiveTab(selectedTab: ISubscriptionDurationType) {
    appendSearchParams("activeTab", selectedTab);
  }
  return (
    <Button
      key={value}
      onClick={() => handleActiveTab(value)}
      className={`!rounded-button px-8 ${
        activeTab === value
          ? "bg-gray-900 hover:bg-gray-700 hover:text-white"
          : "bg-gray-100 text-gray-600 hover:bg-gray-900 hover:text-white"
      }`}
    >
      {label}
    </Button>
  );
}
