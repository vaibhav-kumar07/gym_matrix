import Button from "@/components/common/Button";
import { Plus } from "lucide-react";
import React from "react";

export default function AddNewMemberButton() {
    return (
        <Button className="!rounded-button h-9 px-4">
            <Plus />
            New Member
        </Button>
    );
}
