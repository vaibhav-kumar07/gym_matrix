"use client";

import { useState } from "react";
import { Upload, Loader2 } from "lucide-react";
import { updateTrainerMediaHandler } from "@/actions/trainer";
import { errorToast, successToast } from "@/components/hooks/use-toast";

interface TrainerCoverImageProps {
  coverImage: string;
  trainerId: string;
  mode: "new" | "edit";
}

export default function TrainerCoverImage({ coverImage, trainerId, mode }: TrainerCoverImageProps) {
  const [isUploading, setIsUploading] = useState(false);
  const isEditMode = mode === "new" || mode === "edit";

  const handleUpload = async () => {
    if (!isEditMode) return;

    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      try {
        setIsUploading(true);
        const formData = new FormData();
        formData.append('coverImage', file);

        const response = await updateTrainerMediaHandler({
          trainerId,
          media: formData
        });

        if (response.status) {
          successToast("Cover image updated successfully");
          // window.location.reload();
        } else {
          errorToast(response.error || "Failed to update cover image");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        errorToast("An error occurred while uploading the image");
      } finally {
        setIsUploading(false);
      }
    };

    input.click();
  };

  return (
    <div className="relative">
      <div 
        className={`relative h-[400px] bg-gray-200 ${isEditMode ? "cursor-pointer" : ""} group`}
        onClick={handleUpload}
      >
        <img 
          src={coverImage} 
          alt={"Trainer Cover Image"} 
          className="w-full h-full object-cover"
        />
        {isEditMode && (
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            {isUploading ? (
              <Loader2 className="h-8 w-8 text-white animate-spin" />
            ) : (
              <Upload className="h-8 w-8 text-white" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}