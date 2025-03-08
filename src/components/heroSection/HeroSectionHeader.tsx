import SearchBar from "./SearchBar";
import React from "react";

export default function HeroSectionHeader() {
    return (
        <div className="max-w-7xl container mx-auto px-4 relative h-full flex items-center">
            <div className="max-w-2xl text-white">
                <h1 className="text-5xl font-bold mb-6">
                    Find Your Perfect Gym
                </h1>
                <p className="text-xl text-gray-200 mb-8">
                    Discover premium fitness facilities that match your workout
                    style and goals
                </p>
                <SearchBar />
            </div>
        </div>
    );
}
