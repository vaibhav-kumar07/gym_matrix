import { Progress } from "@/components/ui/progress";
import { IClass } from "@/lib/classes";
import React from "react";

export default function ClassCapacityWidget({ rowData }: { rowData: IClass }) {
    return (
        <div className="flex items-center gap-2">
            <Progress
                value={(rowData.enrolled / rowData.capacity) * 100}
                className="w-24 h-2"
            />
            <span className="text-sm text-gray-500">
                {rowData.enrolled}/{rowData.capacity}
            </span>
        </div>
    );
}
