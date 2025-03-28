import { Card } from "@/components/ui/card";

interface GalleryTabProps {
  images: string[];
}

export default function GalleryTab({ images }: GalleryTabProps) {
  return (
    <Card className="p-6">
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg"
          />
        ))}
      </div>
    </Card>
  );
}