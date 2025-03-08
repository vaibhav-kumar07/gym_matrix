"use client";

import { Label } from "@/components/common/Label";
import { memberIcons } from "@/components/common/SidebarIcons";
import { ISidebarItem } from "@/lib/sidebar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarNavGroupProps {
  category: string;
  items: ISidebarItem[];
}
export default function SidebarNavGroup({
  category,
  items,
}: SidebarNavGroupProps) {
  const pathname = usePathname();
  return (
    <div className="py-2">
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wider px-6 mb-2">
        {category}
      </p>
      {items.map((item) => {
        const Icon =
          memberIcons[item.icon as keyof typeof memberIcons] ||
          memberIcons.user;

        return (
          <Link
            key={item.tab}
            href={item.path || ""}
            className={cn(
              " flex items-center  py-2 text-sm transition-all duration-200 mx-4  px-4 rounded-md",
              pathname === item.path
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:bg-gray-200"
            )}
          >
            <Icon className="w-4 h-4" />
            <Label size={"sm"} className="ml-3 text-gray-600 cursor-pointer">
              {item.label}
            </Label>
          </Link>
        );
      })}
    </div>
  );
}
