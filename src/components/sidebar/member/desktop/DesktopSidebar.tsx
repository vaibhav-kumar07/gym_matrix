import SidebarNavGroup from "./DektopSideBarNavGroup";
import { getSidebarLinks, ISidebarItem } from "@/lib/sidebar";

export default function DesktopMemberDashboardSidebar() {
  const data = getSidebarLinks("member");
  const groupedItems = data.reduce((acc: any, item: any) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof data>);

  return (
    <aside className="w-52 bg-white sticky top-0 left-0 h-full border-r ">
      <nav className="mt-4">
        <div className="space-y-1">
          {Object.entries(groupedItems).map(([category, items]) => (
            <SidebarNavGroup
              key={category}
              category={category}
              items={items as ISidebarItem[]}
            />
          ))}
        </div>
      </nav>
    </aside>
  );
}
