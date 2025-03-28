import { ITrainer } from "@/types/trainer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Plus, X, Video, Languages } from "lucide-react";

interface AdditionalSectionProps {
  trainer: ITrainer;
  setTrainer: React.Dispatch<React.SetStateAction<ITrainer>>;
}

export function AdditionalSection({ trainer, setTrainer }: AdditionalSectionProps) {
  const handleVideoChange = (field: keyof NonNullable<typeof trainer.video>, value: string) => {
    setTrainer(prev => ({
      ...prev,
      video: {
        ...(prev.video || {
          videoUrl: '',
          videoTitle: '',
          videoDescription: '',
          thumbnailUrl: ''
        }),
        [field]: value
      }
    }));
  };

 

  return (
    <div className="space-y-6 border rounded-lg">
      <Card className="p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Introduction Video</h3>
          <p className="text-sm text-gray-500">Add a video to showcase your training style</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-1">
            <Label>Video URL</Label>
            <div className="flex items-center gap-2">
              <Video className="h-4 w-4 text-gray-500" />
              <Input
                value={trainer.video?.videoUrl || ''}
                onChange={(e) => handleVideoChange('videoUrl', e.target.value)}
                placeholder="Enter video URL (YouTube, Vimeo, etc.)"
              />
            </div>
          </div>
          <div className="space-y-1">
            <Label>Video Title</Label>
            <Input
              value={trainer.video?.videoTitle || ''}
              onChange={(e) => handleVideoChange('videoTitle', e.target.value)}
              placeholder="Enter a title for your video"
            />
          </div>
          <div className="space-y-1">
            <Label>Video Description</Label>
            <Textarea
              value={trainer.video?.videoDescription || ''}
              onChange={(e) => handleVideoChange('videoDescription', e.target.value)}
              placeholder="Describe what viewers will learn from your video"
              className="h-24"
            />
          </div>
          <div className="space-y-1">
            <Label>Thumbnail URL</Label>
            <Input
              value={trainer.video?.thumbnailUrl || ''}
              onChange={(e) => handleVideoChange('thumbnailUrl', e.target.value)}
              placeholder="Enter thumbnail image URL"
            />
          </div>
        </div>
      </Card>

     
    </div>
  );
}