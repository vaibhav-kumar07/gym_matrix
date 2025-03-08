export const navItems = [
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Gyms", href: "/gyms" },
];

export interface Navigation {
  label: string;
  href: string;
}
export function getNavItems(): Navigation[] {
  return navItems;
}
