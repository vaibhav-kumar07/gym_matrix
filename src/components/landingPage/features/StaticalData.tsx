import React from "react";

export default function StaticalData() {
    const statistics = [
        {
            value: "2500+",
            label: "Gyms Worldwide",
            icon: "fa-globe",
        },
        {
            value: "1.2M+",
            label: "Active Members",
            icon: "fa-users",
        },
        {
            value: "98%",
            label: "Customer Satisfaction",
            icon: "fa-heart",
        },
        {
            value: "$500M+",
            label: "Processed Annually",
            icon: "fa-dollar-sign",
        },
    ];
    return (
        <section className="py-20 ">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8">
                    {statistics.map((stat, index) => (
                        <div key={index} className="text-center">
                            <i
                                className={`fas ${stat.icon} text-4xl 0 mb-4`}
                            ></i>
                            <div className="text-4xl font-bold  mb-2">
                                {stat.value}
                            </div>
                            <div className="text-gray-900">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
