"use client";

import Button from "../common/Button";
import CommonButton from "../common/Button";
import PageHeaderWithButton from "../common/PageHeaderWithButton";
import {
  Plus,
  X,
  Video,
  Image as ImageIcon,
  Trash,
  Upload,
} from "lucide-react";
import { useState } from "react";
import { FaUpload } from "react-icons/fa6";

const GymMediaUploadForm = () => {
  const [images, setImages] = useState<File[]>([]);
  const [videos, setVideos] = useState<File[]>([]);

  const handleMediaUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: "image" | "video"
  ) => {
    if (!event.target.files) return;
    const files = Array.from(event.target.files);
    if (type === "image") setImages([...images, ...files]);
    else setVideos([...videos, ...files]);
  };

  const removeMedia = (index: number, type: "image" | "video") => {
    if (type === "image") setImages(images.filter((_, i) => i !== index));
    else setVideos(videos.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full  p-6 rounded-lg border space-y-6 grid grid-cols-1">
      <PageHeaderWithButton
        title="Upload Gym Media"
        description="Upload your Gym Media"
        action={
          <Button type="submit" className="!rounded-button h-9 px-3">
            <FaUpload className="" /> Upload
          </Button>
        }
      />
      <div>
        <h3 className="text-lg font-semibold mb-2">Gym Images</h3>
        <div className="flex flex-wrap gap-2">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group w-24 h-24 bg-gray-100 rounded-lg overflow-hidden"
            >
              <img
                src={URL.createObjectURL(image)}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => removeMedia(index, "image")}
                className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition"
              >
                <Trash size={16} />
              </button>
            </div>
          ))}
          <label className="w-24 h-24 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition">
            <ImageIcon className="text-gray-400" size={24} />
            <span className="text-xs text-gray-500">Add Image</span>
            <input
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={(e) => handleMediaUpload(e, "image")}
            />
          </label>
        </div>
      </div>

      {/* Video Upload Section */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Gym Videos</h3>
        <div className="flex  gap-4">
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative group w-24 h-24 flex items-center justify-center bg-gray-100 rounded-lg"
            >
              <Video size={24} className="text-gray-500" />
              <button
                onClick={() => removeMedia(index, "video")}
                className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition"
              >
                <Trash size={16} />
              </button>
            </div>
          ))}
          <label className="w-24 h-24 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition">
            <Video className="text-gray-400" size={24} />
            <span className="text-xs text-gray-500">Add Video</span>
            <input
              type="file"
              accept="video/*"
              multiple
              className="hidden"
              onChange={(e) => handleMediaUpload(e, "video")}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default GymMediaUploadForm;
