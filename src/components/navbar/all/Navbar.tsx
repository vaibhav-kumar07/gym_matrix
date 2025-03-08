import Logo from "../Logo";
import { getNavItems } from "@/lib/navbar";
import Link from "next/link";

const Navbar = () => {
    const navItems = getNavItems();

    return (
        <div className="py-3 px-8 flex items-center w-full sticky top-0 border-b  z-50 backdrop-blur-sm bg-white/50">
            {/* Logo */}
            <Logo />
            {/* Center Navigation */}
            <nav className="hidden lg:flex items-center gap-6 ml-10">
                {navItems.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className="text-gray-700 hover:text-black transition-colors font-medium"
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4 ml-auto">
                <Link
                    href={"/auth"}
                    className="bg-gray-900 text-white hover:bg-black h-10 rounded-md px-5 flex items-center"
                >
                    Get Started
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
