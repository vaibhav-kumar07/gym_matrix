"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Upload, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { updateTrainerMediaHandler } from "@/actions/trainer";
import { errorToast, successToast } from "@/components/hooks/use-toast";


interface TrainerAvatarProps {
  image: string;
  name: string;
  trainerId: string;
  mode: "new" | "edit";
}

export default function TrainerAvatarImage({ image, name, trainerId,mode }: TrainerAvatarProps) {
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      try {
        setIsUploading(true);
        const formData = new FormData();
        formData.append('profilePicture', file);
if(mode=="new" || mode=="edit"){
        const response = await updateTrainerMediaHandler({trainerId,media: formData});
        if (response.status) {
         successToast("Profile picture updated successfully");
          // Refresh the page to show new image
          window.location.reload();
        } else {
          errorToast(response.error || "Failed to update profile picture");
        }
      } }catch (error) {
        console.error("Error uploading image:", error);
        errorToast("An error occurred while uploading the image");
      } finally {
        setIsUploading(false);
      }
    };

    input.click();
  };

  return (
    <div className="relative group cursor-pointer" onClick={handleUpload}>
      <Avatar className="w-48 h-48 rounded-xl border-4 border-white shadow-lg">
        <AvatarImage src={image} alt={name} className="object-cover" />
        <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      <div className={`absolute inset-0 bg-black/50  ${mode==="new"?"group-hover:opacity-100":mode=="edit"?"group-hover:opacity-100":"opacity-0"} transition-opacity rounded-xl flex items-center justify-center `}>
        {isUploading ? (
          <Loader2 className="h-8 w-8 text-white animate-spin" />
        ) : (
          <Upload className="h-8 w-8 text-white" />
        )}
      </div>
    </div>
  );
}