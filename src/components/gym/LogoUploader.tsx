// components/LogoUploader.js

import { cn } from "@/lib/utils";
import { Upload, Image as ImageIcon } from "lucide-react";
import React from "react";

const LogoUploader = ({
  logo,
  setLogo,
  className,
}: {
  logo: File | null;
  setLogo: (logo: File | null) => void;
  className?: string; // Optional class name for the component
}) => {
  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setLogo(file);
    }
  };

  return (
    <div className={cn("", className)}>
      <div
        className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer overflow-hidden bg-gray-100 hover:bg-gray-200"
        onClick={() => document.getElementById("logoInput").click()}
      >
        {logo ? (
          <img
            src={URL.createObjectURL(logo)}
            alt="Gym Logo"
            className="w-full h-full object-cover"
          />
        ) : (
          <Upload className="text-gray-500" size={32} />
        )}
      </div>
      <input
        id="logoInput"
        type="file"
        accept="image/*"
        onChange={handleLogoUpload}
        className="hidden"
      />
    </div>
  );
};

export default LogoUploader;
