import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Share2 } from "lucide-react";

interface GymHeaderProps {
  image: string;
  name: string;
  //   isOpen: boolean;
  //   closingTime: string;
}

export const GymHeader = ({
  image,
  name,
}: //   isOpen,
//   closingTime,
GymHeaderProps) => (
  <div className="relative">
    <img
      src={
        "https://public.readdy.ai/ai/img_res/bcf9b9f97b81b4f197559f95c6ffee73.jpg"
      }
      alt={name}
      className="w-full h-[300px] object-cover"
    />
    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">{name}</h1>
          <div className="flex items-center gap-2">
            {/* {isOpen && <Badge className="bg-green-500">Open Now</Badge>} */}
            {/* <span className="text-white text-sm">Until {closingTime}</span> */}
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="!rounded-button whitespace-nowrap bg-white/90 hover:bg-white"
          >
            <MapPin className="w-4 h-4 mr-2" />
            Get Directions
          </Button>
          <Button
            variant="outline"
            className="!rounded-button whitespace-nowrap bg-white/90 hover:bg-white"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>
      </div>
    </div>
  </div>
);
