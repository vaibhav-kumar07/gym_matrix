import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import React from "react";

interface GymCardProps {
    gym: {
        image: string;
        logo: string;
        name: string;
        type: string;
        location: string;
        hours: string;
        rating: string;
        reviews: string;
        bgColor: string;
    };
}

export default function FeaturedGymCard({ gym }: GymCardProps) {
    return (
        <Card className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 z-0">
            <div className="relative h-56 sm:h-64 overflow-hidden ">
                <img
                    src={gym.image}
                    alt={gym.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="p-5 sm:p-6">
                <div className="flex items-center gap-4 mb-4">
                    <div
                        className={`w-12 h-12 ${gym.bgColor} rounded-full flex items-center justify-center`}
                    >
                        <i className={`${gym.logo} text-lg`}></i>
                    </div>
                    <div>
                        <h3 className="text-lg sm:text-xl font-medium text-neutral-900">
                            {gym.name}
                        </h3>
                        <p className="text-neutral-600 text-sm">{gym.type}</p>
                    </div>
                </div>
                <div className="space-y-2 mb-4 text-sm text-neutral-600">
                    <div className="flex items-center gap-2">
                        <i className="fas fa-location-dot w-5"></i>
                        <span>{gym.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <i className="fas fa-clock w-5"></i>
                        <span>{gym.hours}</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center text-yellow-400 gap-4">
                        {gym.rating} ({gym.reviews})
                    </div>
                </div>
            </div>
        </Card>
    );
}
