import { Label } from "@/components/common/Label";
import { Card } from "@/components/ui/card";
import { Clock, Plus, UserCheck, Users } from "lucide-react";

// Define a fixed mapping for colors based on titles
const STAT_COLOR_MAP: Record<
    string,
    {
        bgColor: string;
        shadowColor: string;
        ringColor: string;
        icon: React.ReactNode;
    }
> = {
    "Total Members": {
        bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
        shadowColor: "shadow-lg shadow-blue-200/50",
        ringColor: "ring-4 ring-blue-100",
        icon: <Users className="text-white" />,
    },
    "Active Members": {
        bgColor: "bg-gradient-to-br from-green-500 to-green-600",
        shadowColor: "shadow-lg shadow-green-200/50",
        ringColor: "ring-4 ring-green-100",
        icon: <UserCheck className="text-white" />,
    },
    "New This Month": {
        bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
        shadowColor: "shadow-lg shadow-purple-200/50",
        ringColor: "ring-4 ring-purple-100",
        icon: <Plus className="text-white" />,
    },
    "Expiring Soon": {
        bgColor: "bg-gradient-to-br from-orange-500 to-orange-600",
        shadowColor: "shadow-lg shadow-orange-200/50",
        ringColor: "ring-4 ring-orange-100",
        icon: <Clock className="text-white" />,
    },
};

interface DashboardStatCardProps {
    title: string;
    value: string;
}

export default function MemberStatCard({
    title,
    value,
}: DashboardStatCardProps) {
    const { bgColor, shadowColor, ringColor, icon } =
        STAT_COLOR_MAP[title] || STAT_COLOR_MAP["Total Members"];

    return (
        <Card className="p-6 bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-md  shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-xl overflow-hidden border">
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <Label size={"sm"} className="text-gray-500 text-sm mb-1">
                        {title}
                    </Label>
                    <Label className="text-2xl font-bold text-gray-900">
                        {value}
                    </Label>
                </div>
                <div
                    className={`w-12 h-12 ${bgColor} rounded-xl flex items-center justify-center ${shadowColor} ${ringColor}`}
                >
                    {icon}
                </div>
            </div>
        </Card>
    );
}
