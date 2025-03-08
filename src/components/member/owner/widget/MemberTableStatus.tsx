import { Label } from "@/components/common/Label";
import React from "react";

export default function MemberTableStatus({ value }: { value: string }) {
    return (
        <Label
            size={"sm"}
            className={`  ${
                value === "inactive"
                    ? "bg-red-500 text-white text-sm"
                    : `${value == "pending" ? "" : ""}`
            }
            } w-fit flex  items-center px-2 h-5 rounded-lg capitalize`}
        >
            {value}
        </Label>
    );
}
