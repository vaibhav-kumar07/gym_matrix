import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface MemberNavbarProps {
  member: {
    name: string;
    avatar: string;
    initials: string;
  };
}

export default function MemberNavbar({ member }: MemberNavbarProps) {
  return (
    <div className="sticky top-0 w-full bg-white z-50 border-b">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={member.avatar} />
            <AvatarFallback>{member.initials}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-lg font-semibold">Welcome back</h1>
            <p className="text-sm text-gray-500">{member.name}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="!rounded-button">
          <i className="fas fa-bell text-gray-600"></i>
        </Button>
      </div>
    </div>
  );
}
