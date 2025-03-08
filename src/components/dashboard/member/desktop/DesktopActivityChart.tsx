"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { MemberActivityData } from "@/lib/dashboard";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  type ChartOptions,
} from "chart.js";
import { TrendingUp, Calendar } from "lucide-react";
import { Line } from "react-chartjs-2";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

interface MemberDesktopActivityChartProps {
  data: MemberActivityData[];
}

export function MemberDesktopActivityChart({
  data,
}: MemberDesktopActivityChartProps) {
  // Chart configuration
  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        align: "end" as const,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
          font: {
            family: "'Inter', sans-serif",
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: "white",
        titleColor: "#111827",
        bodyColor: "#111827",
        borderColor: "#e5e7eb",
        borderWidth: 1,
        padding: 12,
        bodyFont: {
          family: "'Inter', sans-serif",
          size: 12,
        },
        titleFont: {
          family: "'Inter', sans-serif",
          size: 12,
          weight: "bold",
        },
        displayColors: true,
        usePointStyle: true,
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || "";
            const value = context.parsed.y;
            return `${label}: ${value}${
              context.dataset.label === "Calories" ? " kcal" : " min"
            }`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: "'Inter', sans-serif",
            size: 12,
          },
        },
      },
      y: {
        grid: {
          color: "#e5e7eb",
          lineWidth: 1,
          tickLength: 0,
        },
        ticks: {
          font: {
            family: "'Inter', sans-serif",
            size: 12,
          },
        },
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 4,
        hoverRadius: 6,
      },
    },
  };

  // Prepare data for Chart.js
  const chartData = {
    labels: data.map((item) => item.day),
    datasets: [
      {
        fill: true,
        label: "Calories",
        data: data.map((item) => item.calories),
        borderColor: "#8b5cf6",
        backgroundColor: "rgba(139, 92, 246, 0.1)",
        borderWidth: 2,
        pointBackgroundColor: "#8b5cf6",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
      },
      {
        fill: true,
        label: "Duration",
        data: data.map((item) => item.duration),
        borderColor: "#22c55e",
        backgroundColor: "rgba(34, 197, 94, 0.1)",
        borderWidth: 2,
        pointBackgroundColor: "#22c55e",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
      },
    ],
  };

  return (
    <Card className="col-span-2 p-6 border rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold">Activity Overview</h2>
        </div>
        <Button variant="outline" size="sm" className="rounded-full">
          <Calendar className="h-4 w-4 mr-2" />
          This Week
        </Button>
      </div>
      <div className="h-64">
        <Line options={options} data={chartData} />
      </div>
    </Card>
  );
}
// Example usage with mock data
export function ActivityChartExample({
  mockData,
}: {
  mockData: MemberActivityData[];
}) {
  return <MemberDesktopActivityChart data={mockData} />;
}
