import { ReactNode } from "react";

interface CategoryCardProps {
    icon: ReactNode;
    title: string;
}

const CategoryCard = ({ icon, title }: CategoryCardProps) => {
    return (
        <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-xl p-4 w-36 sm:w-44 md:w-52 h-24 hover:shadow-xl transition-all cursor-pointer">
            <div className="text-2xl text-blue-600">{icon}</div>
            <span className="mt-2 text-sm font-medium text-gray-700">
                {title}
            </span>
        </div>
    );
};

export default CategoryCard;
