import { Input } from "../ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
    return (
        <div className="relative">
            <Input
                type="text"
                placeholder="Search by gym name or location..."
                className="w-full h-14 pl-12 pr-4 rounded-xl bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-gray-300"
                // value={searchQuery}
                // onChange={(e) => setSearchQuery(e.target.value)}
            />
            <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-white/70"></i>
        </div>
    );
};

export default SearchBar;
