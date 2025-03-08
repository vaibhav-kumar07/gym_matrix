import Link from "next/link";
import { FaInfinity } from "react-icons/fa6";

interface LogoProps {
    withName?: boolean;
}

const Logo: React.FC<LogoProps> = ({ withName = true }) => {
    return (
        <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center">
                <FaInfinity className="text-white text-2xl" />
            </div>
            {withName && <h3 className="text-2xl font-semibold">ELITEFIT</h3>}
        </Link>
    );
};

export default Logo;
