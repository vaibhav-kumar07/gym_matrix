import { Label } from "@/components/common/Label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IMember } from "@/lib/member";
import React from "react";

export default function MemberDetailWidget({ rowData }: { rowData: IMember }) {
    return (
        <div className="flex flex-col sm:flex-row items-center gap-4  ">
            <Avatar className="h-9 w-9 shrink-0">
                <AvatarImage src={rowData.image} alt={rowData.name} />
                <AvatarFallback>
                    {rowData.name
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
                    {rowData.name}
                </Label>
                <Label size={"xs"} className="text-gray-500 truncate">
                    {rowData.email}
                </Label>
            </div>
        </div>
    );
}
