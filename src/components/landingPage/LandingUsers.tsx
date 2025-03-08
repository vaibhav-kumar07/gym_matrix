import { Avatar } from "../ui/avatar";
import React from "react";

export default function LandingUsers() {
    return (
        <div className="flex justify-center gap-6 mt-12">
            <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                    <Avatar key={i} className="w-12 h-12 border-2 border-white">
                        <img
                            src={`https://readdy.ai/api/search-image?query=diverse gym user profile picture, professional headshot with natural lighting&width=100&height=100&orientation=squarish&flag=f0ce3aa6afc1f68dc9aac5b2e4e85483`}
                            alt={`User ${i}`}
                        />
                    </Avatar>
                ))}
            </div>
            <div className="text-neutral-600">
                Join thousands of fitness enthusiasts <br />
                finding their perfect gym daily
            </div>
        </div>
    );
}
