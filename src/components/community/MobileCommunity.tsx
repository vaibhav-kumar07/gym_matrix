"use client";

import FilterTabs from "@/components/community/CommunityFilter";
import CommunityHeader from "@/components/community/CommunityHeader";
import CommunitySearch from "@/components/community/CommunitySearch";
import PostCard from "@/components/community/CommuniytPostCard";
import CummunityTrendingTopics from "@/components/community/CummunityTrendingTopics";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getCommunityData } from "@/lib/community";
import { ICommunityData } from "@/lib/types/community";
import { Plus } from "lucide-react";
import { useState, useEffect } from "react";

export default function CommunityPage() {
  const [selectedFilter, setSelectedFilter] = useState("trending");
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [data, setData] = useState<ICommunityData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const communityData = await getCommunityData();
        setData(communityData);
      } catch (error) {
        console.error("Error fetching community data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLike = (postId: number) => {
    setLikedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  };

  // if (isLoading || !data) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <CommunityHeader />

      <main className="flex-1 pt-14 pb-16">
        <div className="flex flex-col gap-2">
          <CommunitySearch />
          <FilterTabs
            selectedFilter={selectedFilter}
            onFilterChange={setSelectedFilter}
          />
          <CummunityTrendingTopics topics={data?.trendingTopics || []} />

          <div className="px-3 space-y-2">
            {data?.posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                isLiked={likedPosts.includes(post.id)}
                onLike={handleLike}
              />
            ))}
          </div>
        </div>
      </main>

      <Button
        className="fixed right-7 bottom-20 rounded-full w-12 h-12 shadow-lg"
        size="icon"
      >
        <Plus className="h-5 w-5" />
      </Button>
    </div>
  );
}
