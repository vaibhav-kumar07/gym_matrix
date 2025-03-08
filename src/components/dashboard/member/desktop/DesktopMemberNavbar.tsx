import Logo from "@/components/navbar/Logo";
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { getDesktopMemberDashboard } from "@/lib/member";

export default async function DesktopMemberNavbar() {
  const member = (await getDesktopMemberDashboard()).member;
  return (
    <header className="h-16 bg-white border-b backdrop-blur-md bg-white/50 sticky  top-0 w-full z-10 px-4">
      <div className="flex justify-between items-center gap-12 h-full">
        <Logo />
        <div className="flex items-center mr-auto">
          <Input
            type="search"
            placeholder="Search..."
            className="w-96 bg-gray-50 border mr-auto"
            // prefix={<i className="fas fa-search text-gray-400"></i>}
          />
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative cursor-pointer">
            <div className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
              <i className="fas fa-bell text-gray-600"></i>
              <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {member.notifications}
              </span>
            </div>
          </button>
          <Avatar className="cursor-pointer">
            <img src={member.avatar} alt="User" />
          </Avatar>
        </div>
      </div>
    </header>
  );
}
