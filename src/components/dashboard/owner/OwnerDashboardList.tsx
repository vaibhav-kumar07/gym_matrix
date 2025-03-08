import { Label } from "@/components/common/Label";
import { Card } from "@/components/ui/card";

interface CardProps {
    title: string;
    value: string;
    change: string;
    icon: React.ReactNode;
    gradient: string;
    shadow: string;
}
const StatsCard = ({
    title,
    value,
    change,
    icon,
    gradient,
    shadow,
}: CardProps) => {
    return (
        <Card className="p-6 bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-md  shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-xl overflow-hidden relative border border-slate-200/70">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50/30 pointer-events-none"></div>
            <div className="flex justify-between items-center">
                <div>
                    <Label size={"sm"} className="text-gray-500 ">
                        {title}
                    </Label>
                    <div className="flex items-baseline gap-2">
                        <Label
                            size={"xl"}
                            variant={"bold"}
                            className="  text-gray-900"
                        >
                            {value}
                        </Label>
                        <Label
                            size={"sm"}
                            variant={"semibold"}
                            className="text-green-500 "
                        >
                            {change}
                        </Label>
                    </div>
                </div>
                <div
                    className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center shadow-lg ${shadow} ring-4`}
                >
                    {icon}
                </div>
            </div>
        </Card>
    );
};

export default StatsCard;
