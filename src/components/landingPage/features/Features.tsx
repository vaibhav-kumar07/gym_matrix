import Button from "@/components/common/Button";
import { Label } from "@/components/common/Label";
import { Card } from "@/components/ui/card";
import { getFeatures, getPageFeatures } from "@/lib/feature";
import React from "react";

export default function Features() {
  const features = getPageFeatures("member");
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Everything you need to manage your gym
          </h2>
          <p className="text-lg text-gray-600">
            Powerful features designed for modern fitness businesses
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white border-gray-100 hover:shadow-lg transition-shadow shadow-lg rounded-2xl overflow-hidden pb-4"
              >
                {/* Feature Image */}
                <div className="h-48 sm:h-56 md:h-64 lg:h-48 xl:h-56 mb-6  overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Icon & Title */}
                <div className="flex flex-col items-start gap-3 mb-4 px-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <Label size={"sm"} className="text-gray-600  mb-2 ">
                    {feature.description}
                  </Label>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
