"use client";

import Button from "../common/Button";
import { Dumbbell, Crown, HeartPulse, Clock } from "lucide-react";
import { useState } from "react";

const categories = [
    { id: "all", title: "All Gyms", icon: <Dumbbell size={24} /> },
    { id: "luxury", title: "Luxury", icon: <Crown size={24} /> },
    { id: "crossfit", title: "CrossFit", icon: <HeartPulse size={24} /> },
    { id: "yoga", title: "Yoga", icon: <Clock size={24} /> },
    { id: "24-7", title: "24/7 Access", icon: <Clock size={24} /> },
    { id: "boxing", title: "Boxing", icon: <Clock size={24} /> },
];

const CategoryList = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        "all",
    );

    return (
        <div className=" max-w-7xl container mx-auto px-4 -mt-14 relative z-10 pb-20">
            {/* Categories */}
            <div className="grid grid-cols-6 gap-4 ">
                {categories.map((category) => (
                    <Button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`h-auto py-8 flex flex-col items-center gap-3 bg-white hover:bg-gray-50 border shadow-none !rounded-button  ${
                            selectedCategory === category.id
                                ? "border shadow-lg"
                                : "border-none"
                        }`}
                    >
                        <div
                            className={
                                selectedCategory === category.id
                                    ? "text-gray-900"
                                    : "text-gray-500"
                            }
                        >
                            {category.icon}
                        </div>
                        <span
                            className={
                                selectedCategory === category.id
                                    ? "text-gray-900"
                                    : "text-gray-500"
                            }
                        >
                            {category.title}
                        </span>
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
