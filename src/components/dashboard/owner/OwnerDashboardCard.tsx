import StatsCard from "./OwnerDashboardList";
import { getDashboardStats } from "@/lib/stats";
import { ChartArea, Dumbbell, User } from "lucide-react";

const colorMap: Record<
    string,
    { gradient: string; shadow: string; icon: React.ReactNode }
> = {
    "Total Members": {
        icon: <User className="text-white" />,
        gradient: "from-indigo-500 to-indigo-600",
        shadow: "shadow-indigo-200/50 ring-indigo-100",
    },
    "Active Classes": {
        icon: <Dumbbell className="text-white" />,
        gradient: "from-violet-500 to-purple-600",
        shadow: "shadow-purple-200/50 ring-purple-100",
    },
    "Monthly Revenue": {
        icon: <ChartArea className="text-white" />,
        gradient: "from-blue-500 to-blue-600",
        shadow: "shadow-blue-200/50 ring-blue-100",
    },
};
const processStatsData = (
    apiData: { title: string; value: string; change: string }[],
) => {
    return apiData.map((item) => ({
        ...item,
        icon: colorMap[item.title]?.icon || <User className="text-white" />,
        gradient: colorMap[item.title]?.gradient || "from-gray-500 to-gray-600",
        shadow:
            colorMap[item.title]?.shadow || "shadow-gray-200/50 ring-gray-100",
    }));
};

export default async function OwnerDashboardCardsList() {
    const data = await getDashboardStats();
    const statsData = processStatsData(await data.json());
    return (
        <div className="w-full flex-1 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {statsData.map((stat, index) => (
                    <StatsCard
                        key={index}
                        title={stat.title}
                        change={stat.change}
                        value={stat.value}
                        icon={stat.icon}
                        gradient={stat.gradient}
                        shadow={stat.shadow}
                    />
                ))}
            </div>
        </div>
    );
}
