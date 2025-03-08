import { Label } from "@/components/common/Label";
import Logo from "@/components/navbar/Logo";
import React from "react";

export default function RoleSelectionHeader() {
    return (
        <div className="text-center ">
            <div className="text-center mb-8 flex flex-col items-center">
                <div className="flex items-center gap-3 mb-2">
                    <Logo withName={false} />
                    <Label className="text-2xl font-semibold text-gray-800">
                        Welcome to ELITEFIT
                    </Label>
                </div>
                {/* <Label className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                    Choose Your Journey
                </Label> */}
                <Label className="text-gray-600  max-w-2xl mx-auto">
                    Join our thriving community and select the role that best
                    fits your needs. Whether you're looking for services or
                    ready to offer them, we've got you covered.
                </Label>
            </div>
        </div>
    );
}
