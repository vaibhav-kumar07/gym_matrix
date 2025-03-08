import FeaturedGymCard from "./FEaturedGymCard";
import React from "react";

const gyms = [
    {
        image: "https://public.readdy.ai/ai/img_res/c4e7a86372030378ae191f7f9af5731a.jpg",
        logo: "fas fa-dumbbell",
        name: "Elite Fitness Center",
        type: "Premium Experience",
        location: "123 Luxury Avenue, Beverly Hills",
        hours: "Open 24/7",
        rating: "4.9",
        reviews: "2.8k+ reviews",
        bgColor: "bg-purple-100",
    },
    {
        image: "https://public.readdy.ai/ai/img_res/ee1fb4c2704b9811885b7b7d90483d8c.jpg",
        logo: "fas fa-bolt",
        name: "PowerFlex Gym",
        type: "Strength & Performance",
        location: "456 Power Street, Downtown",
        hours: "5:00 AM - 11:00 PM",
        rating: "4.8",
        reviews: "1.5k+ reviews",
        bgColor: "bg-blue-100",
    },
    {
        image: "https://public.readdy.ai/ai/img_res/48d3ee9a0e92a033bb7db8c01970e3e3.jpg",
        logo: "fas fa-spa",
        name: "Zen Wellness Studio",
        type: "Mind & Body Balance",
        location: "789 Serenity Lane, West Side",
        hours: "6:00 AM - 9:00 PM",
        rating: "4.9",
        reviews: "950+ reviews",
        bgColor: "bg-green-100",
    },
];

export default function FeaturedGymList() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {gyms.map((gym, index) => (
                <FeaturedGymCard key={index} gym={gym} />
            ))}
        </div>
    );
}
