"use client";

import { Label } from "../common/Label";
import { icons } from "../common/SidebarIcons";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLinkProps {
  name: string;
  href: string;
  iconName: keyof typeof icons;
}

export default function SidebarLink({
  name,
  href,
  iconName,
}: SidebarLinkProps) {
  const pathname = usePathname();

  // Function to extract the last segment
  const getLastSegment = (url: string) => {
    const segments = url.split("/").filter(Boolean);
    return segments.length > 1 ? segments[segments.length - 1] : "";
  };

  // Extract last meaningful segments
  const lastHrefSegment = getLastSegment(href);
  const lastPathSegment = getLastSegment(pathname);

  // Active link logic
  let isActive = lastHrefSegment === lastPathSegment;

  if (lastHrefSegment !== lastPathSegment) {
    isActive = name === "Overview";
  }

  const Icon = icons[iconName];

  return (
    <Link
      href={href}
      className={`gap-4 py-3 flex items-center justify-start pl-7 transition-all duration-300 
                ${
                  isActive
                    ? "bg-gradient-to-r from-gray-200 from-40% to-white text-gray-900"
                    : "text-gray-600"
                }
                hover:bg-gradient-to-r hover:from-gray-200 hover:from-40% hover:to-white hover:text-gray-900 cursor-default`}
    >
      {Icon && (
        <Icon
          className={`w-5 h-5 ${isActive ? "text-gray-900" : "text-gray-500"}`}
        />
      )}
      <Label
        size="sm"
        className={` cursor-pointer ${
          isActive ? "text-gray-900 font-semibold" : "text-gray-600"
        }`}
      >
        {name}
      </Label>
    </Link>
  );
}
