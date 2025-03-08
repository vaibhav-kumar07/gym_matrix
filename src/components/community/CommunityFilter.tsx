import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface FilterTabsProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function FilterTabs({
  selectedFilter,
  onFilterChange,
}: FilterTabsProps) {
  const filters = ["trending", "latest", "following", "popular"];

  return (
    <div className="px-4 ">
      <ScrollArea className="w-full no-scrollbar overflow-x-auto">
        <div className="w-full flex gap-2 pb-2 no-scrollbar overflow-x-auto">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={selectedFilter === filter ? "default" : "outline"}
              className="!rounded-button"
              onClick={() => onFilterChange(filter)}
            >
              <span className="capitalize">{filter}</span>
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
