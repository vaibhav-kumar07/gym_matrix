import CommonButton from "@/components/common/Button";
import { useURLParams } from "@/components/hooks/request";
import { classCategories, classLevels } from "@/lib/classes";
import React from "react";

export default function MemberFilters({
  filters,
}: {
  filters: { filter: string; level: string };
}) {
  const { appendSearchParams } = useURLParams();
  return (
    <div className="mb-8">
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <CommonButton
          onClick={() => appendSearchParams("filter", "all")}
          className={` border shadow-none ${
            filters.filter === "all"
              ? "bg-black  text-white hover:bg-black/80 hover:text-white"
              : " bg-white text-black hover:bg-black/60 hover:text-white"
          }`}
        >
          All Classes
        </CommonButton>
        {classCategories.map((category) => {
          console.log("category", filters.filter);
          return (
            <CommonButton
              key={category.id}
              onClick={() =>
                appendSearchParams("filter", category.id.toLowerCase())
              }
              className={` border shadow-none ${
                filters.filter === category.id.toLowerCase()
                  ? "bg-black  text-white hover:bg-black/80 hover:text-white"
                  : " bg-white text-black hover:bg-black/60 hover:text-white"
              }`}
              // variant={filters.filter === category.id ? "ghost" : "outline"}
            >
              {category.icon} {category.name}
            </CommonButton>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {classLevels.map((level) => {
          console.log(filters.level, level);
          return (
            <CommonButton
              key={level}
              onClick={() => appendSearchParams("level", level.toLowerCase())}
              className={` border shadow-none ${
                filters.level == level.toLowerCase()
                  ? "bg-black  text-white hover:bg-black/80 hover:text-white"
                  : " bg-white text-black hover:bg-black/60 hover:text-white"
              }`}
            >
              {level}
            </CommonButton>
          );
        })}
      </div>
    </div>
  );
}
