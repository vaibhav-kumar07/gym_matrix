import React from "react";

export default function LandingStats() {
    const stats = [
        { value: "5000+", label: "Partner Gyms" },
        { value: "120+", label: "Countries" },
        { value: "2M+", label: "Active Users" },
        { value: "98%", label: "Satisfaction Rate" },
    ];
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
                <div key={index} className="text-center">
                    <p className="text-4xl font-medium text-neutral-900 mb-2">
                        {stat.value}
                    </p>
                    <p className="text-neutral-600">{stat.label}</p>
                </div>
            ))}
        </div>
    );
}
