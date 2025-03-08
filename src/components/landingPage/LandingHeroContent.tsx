import { Label } from "../common/Label";
import { Badge } from "../ui/badge";
import React from "react";

export default function LandingHeroContent() {
    return (
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center">
            <Badge className="bg-neutral-100 text-neutral-600 mb-6 hover:bg-neutral-200 w-fit">
                Global Fitness Platform
            </Badge>
            <Label className="text-5xl lg:text-6xl  font-medium text-neutral-900 leading-tight mb-6">
                Discover Your Perfect Gym <br />
                <span className="text-neutral-500">Anywhere in the World</span>
            </Label>
            <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
                Connect with thousands of premium gyms worldwide. Find, compare,
                and join the perfect fitness space that matches your lifestyle
                and goals.
            </p>
        </div>
    );
}
