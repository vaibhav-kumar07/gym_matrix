import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IPost } from "@/lib/types/community";
import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";

interface PostCardProps {
  post: IPost;
  isLiked: boolean;
  onLike: (postId: number) => void;
}

export default function PostCard({ post, isLiked, onLike }: PostCardProps) {
  return (
    <Card className="p-0 border rounded-lg pt-4 bg-white">
      <div className="flex items-center gap-3 mb-4 px-4">
        <Avatar className="h-10 w-10">
          <img src={post.user.image} alt={post.user.name} />
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold w-full">{post.user.name}</h3>
            <Badge variant="secondary" className="w-full text-xs">
              {post.user.badge}
            </Badge>
          </div>
          <p className="text-sm text-gray-500">{post.time}</p>
        </div>
        <Button variant="ghost" size="icon" className="!rounded-button">
          <MoreHorizontal className="h-5 w-5 text-gray-600" />
        </Button>
      </div>

      <p className="mb-4 text-gray-800 px-4">{post.content}</p>

      {post.image && (
        <div className="mb-4 rounded-lg overflow-hidden px-4 ">
          <img
            src={post.image}
            alt="Post content"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      )}

      <div className="grid grid-cols-3 gap-4 border-t py-2">
        <Button
          variant="ghost"
          size="sm"
          className="!rounded-button"
          onClick={() => onLike(post.id)}
        >
          <Heart
            className={`h-5 w-5 mr-2 ${
              isLiked ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
          {post.likes}
        </Button>
        <Button variant="ghost" size="sm" className="!rounded-button">
          <MessageCircle className="h-5 w-5 mr-2 text-gray-600" />
          {post.comments}
        </Button>
        <Button variant="ghost" size="sm" className="!rounded-button">
          <Share2 className="h-5 w-5 text-gray-600" />
        </Button>
      </div>
    </Card>
  );
}
