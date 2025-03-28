import { Plus, X } from "lucide-react";

interface PhotoUploaderProps {
  photos: File[];
  setPhotos: (photos: File[]) => void;
}

const PhotoUploader: React.FC<PhotoUploaderProps> = ({ photos, setPhotos }) => {
  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newPhotos = Array.from(event.target.files);
      setPhotos([...photos, ...newPhotos]);
    }
  };

  const handleRemovePhoto = (index: number) => {
    const updatedPhotos = photos.filter((_, i) => i !== index);
    setPhotos(updatedPhotos);
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium">Gym Photos</label>
      <div className="flex flex-wrap gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="relative w-32 h-32 border rounded-md ">
            <img
              src={URL.createObjectURL(photo)}
              alt="Gym Preview"
              className="w-full h-full object-cover rounded-lg"
            />
            <button
              onClick={() => handleRemovePhoto(index)}
              className="absolute -top-2 -right-2 text-black bg-gray-200 rounded-full p-1 "
            >
              <X size={16} />
            </button>
          </div>
        ))}
        <label className="w-32 h-32 flex flex-col items-center justify-center border-dashed border cursor-pointer rounded-md">
          <Plus className="text-2xl mb-2" />
          <span className="text-sm">Add Photo</span>
          <input
            type="file"
            multiple
            className="hidden"
            onChange={handlePhotoUpload}
          />
        </label>
      </div>
    </div>
  );
};

export default PhotoUploader;
