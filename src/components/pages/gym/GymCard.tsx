"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Star, Users } from "lucide-react";
import Image from "next/image";
import React from "react";

// Define TypeScript interface for GymCard props
interface GymProps {
    id: number;
    name: string;
    image: string;
    rating: number;
    reviews: number;
    location: string;
    price: string;
    amenities: string[];
}

const GymCard: React.FC<GymProps> = ({
    id,
    name,
    image,
    rating,
    reviews,
    location,
    price,
    amenities,
}) => {
    return (
        <Card
            key={id}
            className="rounded-2xl overflow-hidden shadow-md border bg-white"
        >
            {/* Gym Image */}
            <div className="relative h-52 w-full">
                <Image
                    src={image}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 hover:scale-105"
                />
            </div>

            {/* Gym Info */}
            <div className="p-5">
                {/* Title & Price */}
                <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <div className="text-gray-600 font-medium">{price}</div>
                </div>

                {/* Location */}
                <div className="flex items-center text-gray-500 text-sm mt-1">
                    <MapPin size={16} className="mr-1" />
                    {location}
                </div>

                {/* Rating & Reviews */}
                <div className="flex items-center gap-2 mt-2 text-gray-700 text-sm">
                    <Star size={16} className="text-yellow-500" />
                    <span className="font-medium">{rating}</span>
                    <Users size={16} className="text-gray-400" />
                    <span className="text-gray-500">{reviews}+</span>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mt-3">
                    {amenities.map((amenity, index) => (
                        <Badge
                            key={index}
                            variant="secondary"
                            className="bg-gray-100 text-gray-800"
                        >
                            {amenity}
                        </Badge>
                    ))}
                </div>

                {/* CTA Button */}
                <Button className="w-full mt-5 text-white rounded-lg text-sm py-2 font-medium">
                    View Details
                </Button>
            </div>
        </Card>
    );
};

export default GymCard;
