import FeaturedGymList from "./FeaturedGymList";
import FeaturedGymViewAllButton from "./FeaturedGymViewAllButton";
import Button from "@/components/common/Button";
import { Label } from "@/components/common/Label";
import React from "react";

export default function FeaturedGym() {
    return (
        <section className="py-16 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                <div className="text-center mb-12">
                    <Label className="text-3xl sm:text-4xl font-medium text-neutral-900 mb-4">
                        Featured Gyms
                    </Label>
                    <p className="text-neutral-600 max-w-2xl mx-auto text-sm sm:text-base">
                        Discover premium fitness facilities that match your
                        workout style and goals.
                    </p>
                </div>
                <FeaturedGymList />
                <FeaturedGymViewAllButton />
            </div>
        </section>
    );
}
