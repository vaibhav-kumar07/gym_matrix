import SidebarLink from "./SidebarLink";
import { getSidebarLinks } from "@/lib/sidebar";

export default function Sidebar() {
  const links = getSidebarLinks("owner");
  return (
    <aside className="w-56 pt-0.5 h-full flex flex-col border-r bg-white shadow-sm overflow-hidden">
      {links.map((link: any) => (
        <SidebarLink
          key={link.name}
          name={link.name}
          href={link.href}
          iconName={link.icon as any}
        />
      ))}
    </aside>
  );
}
