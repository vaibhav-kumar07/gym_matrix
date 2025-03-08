import { Badge } from "@/components/ui/badge";
// import { ScrollArea } from "@/components/ui/scroll-area";
import { ITrendingTopic } from "@/lib/types/community";

interface TrendingTopicsProps {
  topics: ITrendingTopic[];
}

export default function CummunityTrendingTopics({
  topics,
}: TrendingTopicsProps) {
  return (
    <div className="px-4 mb-2 ">
      <h2 className="text-lg font-semibold mb-3">Trending Topics</h2>
      {/* <ScrollArea className="w-full no-scrollbar"> */}
      <div className="w-full flex gap-2 pb-2 overflow-x-auto no-scrollbar">
        {topics.map((topic) => (
          <Badge
            key={topic.id}
            variant="secondary"
            className="py-2 px-2  cursor-pointer text-xs bg-white border"
          >
            #{topic.name}
          </Badge>
        ))}
      </div>
      {/* </ScrollArea> */}
    </div>
  );
}
