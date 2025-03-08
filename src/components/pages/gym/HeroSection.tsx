import CategoryList from "../../heroSection/CategoryList";
import HeroSectionHeader from "../../heroSection/HeroSectionHeader";
import SearchBar from "../../heroSection/SearchBar";
import { Input } from "../../ui/input";

const HeroSection = () => {
    return (
        <div className="relative h-[550px] mb-24">
            <div className="absolute inset-0">
                <img
                    src="https://public.readdy.ai/ai/img_res/837f2457886dedac1a1c529afbdfd546.jpg"
                    alt="Hero"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            </div>
            <HeroSectionHeader />
            <CategoryList />
        </div>
    );
};

export default HeroSection;
