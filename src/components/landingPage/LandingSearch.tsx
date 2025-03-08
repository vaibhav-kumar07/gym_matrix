import Button from "../common/Button";
import { Input } from "../ui/input";
import React from "react";

export default function LandingSearch() {
    return (
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg px-6 py-2 mb-10">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                    <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"></i>
                    <Input
                        className="pl-10 py-6 text-lg bg-neutral-50 border-none outline-none"
                        placeholder="Search by gym name or type"
                    />
                </div>
                <Button className="!rounded-button bg-neutral-900 hover:bg-neutral-800 py-6 px-8 text-lg whitespace-nowrap">
                    Find Gyms
                </Button>
            </div>
        </div>
    );
}
