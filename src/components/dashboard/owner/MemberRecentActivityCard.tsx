import { Label } from "@/components/common/Label";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getRecentActivities } from "@/lib/stats";

export default async function MemberRecentActivitiesList() {
    const activities = await getRecentActivities();
    return (
        <Card className="p-6 bg-white/90 backdrop-blur-md border-none shadow-none transition-all duration-300 rounded-xl overflow-hidden relative w-full">
            <div className="flex justify-between items-center mb-2 md:mb-4">
                <h3 className="text-gray-900 font-semibold">
                    Recent Activities
                </h3>
                <Button
                    variant="ghost"
                    size="sm"
                    className="text-blue-600 !rounded-button"
                >
                    View All
                </Button>
            </div>

            {/* Scroll Container */}
            <div className="overflow-y-auto max-h-[300px] space-y-2">
                {activities.map((item: any, index: number) => (
                    <ActivityCard key={index} activity={item} />
                ))}
            </div>
        </Card>
    );
}

function ActivityCard({ activity }: { activity: any }) {
    return (
        <div className="flex flex-col sm:flex-row items-center gap-4 p-2 border hover:bg-gray-50 rounded-lg transition-all duration-200 ">
            <Avatar className="h-12 w-12 shrink-0">
                <AvatarImage src={activity.image} alt={activity.name} />
                <AvatarFallback>
                    {activity.name
                        .split(" ")
                        .map((n: any) => n[0])
                        .join("")}
                </AvatarFallback>
            </Avatar>
            <div className="text-center sm:text-left flex flex-col  min-w-0">
                <Label
                    size={"sm"}
                    variant={"semibold"}
                    className="text-gray-900 truncate"
                >
                    {activity.name}
                </Label>
                <Label size={"xs"} className="text-gray-500 truncate">
                    {activity.action}
                </Label>
            </div>
        </div>
    );
}
