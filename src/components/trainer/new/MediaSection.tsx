import { ITrainer } from "@/types/trainer";
import { Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MediaSectionProps {
  trainer: ITrainer;
  setTrainer: React.Dispatch<React.SetStateAction<ITrainer>>;
}

export function MediaSection({ trainer, setTrainer }: MediaSectionProps) {
  const handleImageUpload = (type: 'profile' | 'gallery') => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = type === 'gallery';
    
    input.onchange = (e) => {
      const files = (e.target as HTMLInputElement).files;
      if (!files) return;

      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setTrainer(prev => ({
            ...prev,
            media: {
              ...prev.media,
              [type === 'profile' ? 'profilePicture' : 'gallery']: 
                type === 'profile' 
                  ? reader.result as string
                  : [...prev.media.gallery, reader.result as string]
            }
          }));
        };
        reader.readAsDataURL(file);
      });
    };
    input.click();
  };

  const removeGalleryImage = (index: number) => {
    setTrainer(prev => ({
      ...prev,
      media: {
        ...prev.media,
        gallery: prev.media.gallery.filter((_, i) => i !== index)
      }
    }));
  };

  return (
    <div>
      {/* Cover Image */}
      <div className="relative h-[400px] bg-gray-200">
        <img 
          src={trainer.media.gallery[0] || "https://via.placeholder.com/1200x400"} 
          alt="Cover" 
          className="w-full h-full object-cover"
        />
        <Button
          variant="outline"
          className="absolute bottom-4 right-4 bg-white/90"
          onClick={() => handleImageUpload('gallery')}
        >
          <Upload className="h-4 w-4 mr-2" />
          Change Cover
        </Button>
      </div>

      {/* Profile Picture */}
      <div className="absolute -bottom-16 left-8">
        <div className="relative group">
          <img
            src={trainer.media.profilePicture}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
          />
          <button
            className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => handleImageUpload('profile')}
          >
            <Upload className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>

      {/* Gallery */}
      <div className="mt-24 px-8">
        <h3 className="text-lg font-semibold mb-4">Gallery</h3>
        <div className="grid grid-cols-4 gap-4">
          {trainer.media.gallery.slice(1).map((image, index) => (
            <div key={index} className="relative group aspect-square">
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
              <button
                className="absolute top-2 right-2 p-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => removeGalleryImage(index + 1)}
              >
                <X className="h-4 w-4 text-white" />
              </button>
            </div>
          ))}
          <Button
            variant="outline"
            className="aspect-square flex flex-col items-center justify-center border-dashed"
            onClick={() => handleImageUpload('gallery')}
          >
            <Upload className="h-6 w-6 mb-2" />
            Add Photo
          </Button>
        </div>
      </div>
    </div>
  );
}