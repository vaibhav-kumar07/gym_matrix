import { LucideIcon } from "lucide-react";
import React from "react";

interface MemberGymInfoRowProps {
  icon: LucideIcon;
  text: string;
  className?: string;
}

const MemberGymInfoRow: React.FC<MemberGymInfoRowProps> = ({
  icon: Icon,
  text,
  className,
}) => {
  return (
    <div
      className={`flex items-center gap-2 text-gray-700 text-sm ${className}`}
    >
      <Icon size={16} className="text-gray-400" />
      <span>{text}</span>
    </div>
  );
};

export default MemberGymInfoRow;
