"use client";

import { useURLParams } from "@/components/hooks/request";
import { Button } from "@/components/ui/button";
import { Download, Filter } from "lucide-react";

interface MemberFilterHeaderProps {
    selectedStatus: string;
}

const FILTER_OPTIONS = [
    { label: "All Members", value: "all" },
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
    { label: "Pending", value: "pending" },
];

export default function MemberFilterHeader({
    selectedStatus,
}: MemberFilterHeaderProps) {
    const { appendSearchParams } = useURLParams();

    function handleClick(name: string) {
        appendSearchParams("filter", name);
    }
    return (
        <div className="flex justify-between items-center py-1 px-2">
            {/* Status Filter Buttons */}
            <div className="flex ">
                {FILTER_OPTIONS.map(({ label, value }) => (
                    <Button
                        key={value}
                        variant={
                            selectedStatus === value ? "default" : "outline"
                        }
                        className="rounded-sm border-none h-6 px-3 py-1 text-xs "
                        onClick={() => handleClick(value)}
                    >
                        {label}
                    </Button>
                ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
                <Button
                    variant="outline"
                    className="rounded-sm border-none h-6 px-3 py-1 text-xs "
                >
                    <Download /> Export
                </Button>
                <Button
                    variant="outline"
                    className="rounded-sm border-none h-6 px-3 py-1 text-xs "
                >
                    <Filter /> Filter
                </Button>
            </div>
        </div>
    );
}
