import Button from "@/components/common/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function FeaturedGymViewAllButton() {
    return (
        <div className="flex justify-center mt-10">
            <Link
                href={"/gyms"}
                className="!rounded-button bg-neutral-900 hover:bg-neutral-800 px-4 h-10 sm:h-12 text-sm sm:text-base flex items-center gap-2 text-white rounded-md"
            >
                View All Gyms
                <ArrowRight size={18} />
            </Link>
        </div>
    );
}
