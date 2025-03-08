"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
} from "chart.js";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
);

// Color Mapping Function
const getColorForDataset = (label: string) => {
    const colorMap: Record<string, { border: string; background: string }> = {
        "Membership Growth": {
            border: "#6366F1", // Indigo
            background: "rgba(99, 102, 241, 0.2)",
        },
    };

    return (
        colorMap[label] || {
            border: "#64748B",
            background: "rgba(100, 116, 139, 0.2)",
        }
    ); // Default Gray
};

export default function MembershipChart() {
    const [chartData, setChartData] = useState<any>();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3000/owner/api");

            const rawData = await response.json();
            // Add Colors Dynamically
            // console.log(rawData);
            const processedData = {
                labels: rawData.labels,
                datasets: rawData.datasets.map((dataset: any) => {
                    const { border, background } = getColorForDataset(
                        dataset.label,
                    );
                    return {
                        ...dataset,
                        borderColor: border,
                        backgroundColor: background,
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4, // Smooth line
                    };
                }),
            };

            setChartData(processedData);
        };

        fetchData();
        const interval = setInterval(fetchData, 1000); // Updates every second

        return () => clearInterval(interval);
    }, []);

    return (
        <Card className="p-6 bg-white/90 backdrop-blur-md border-none shadow-none  transition-all duration-300 rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50/20 pointer-events-none"></div>
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-gray-900 font-semibold">
                    Membership Growth
                </h3>
                <Button variant="outline" size="sm" className="!rounded-button">
                    <i className="fas fa-download mr-2"></i> Export
                </Button>
            </div>

            <div style={{ height: "300px" }}>
                {chartData ? (
                    <Line
                        data={chartData}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                        }}
                    />
                ) : (
                    "Loading..."
                )}
            </div>
        </Card>
    );
}
