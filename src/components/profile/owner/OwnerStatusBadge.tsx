import { Badge } from "@/components/ui/badge";

interface OwnerStatusBadgeProps {
  value: string;
}

export default function OwnerStatusBadge({ value }: OwnerStatusBadgeProps) {
  const getPriorityStyle = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "bg-red-100 text-red-700 hover:bg-red-100";
      case "medium":
        return "bg-yellow-100 text-yellow-700 hover:bg-yellow-100";
      case "low":
        return "bg-green-100 text-green-700 hover:bg-green-100";
      default:
        return "bg-gray-100 text-gray-700 hover:bg-gray-100";
    }
  };

  return (
    <Badge variant="secondary" className={getPriorityStyle(value)}>
      {value}
    </Badge>
  );
}
