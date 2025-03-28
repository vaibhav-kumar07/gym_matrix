import { Label } from "../common/Label";
import TooltipWrapper from "@/components/common/TooltipWrapper";
import { Input } from "@/components/ui/input";
import { IFeature } from "@/types/feature";
import { debounce } from "lodash";
import { useEffect, useState, useCallback } from "react";

interface FeatureSelectorProps {
  selectedFeatures: string[];
  onFeaturesChange: (features: string[]) => void;
}

export const FeatureSelector = ({
  selectedFeatures,
  onFeaturesChange,
}: FeatureSelectorProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [availableFeatures, setAvailableFeatures] = useState<IFeature[]>([]);

  // Fetch initial features
  useEffect(() => {
    const fetchInitialFeatures = async () => {
      try {
        const response = await fetch(`/owner/gym/subscription/api`);
        const data = await response.json();
        setAvailableFeatures(data.data);
      } catch (error) {
        console.error("Error fetching initial features:", error);
      }
    };
    fetchInitialFeatures();
  }, []);

  // Memoized debounced search function
  const debouncedSearch = useCallback(
    debounce(async (query: string) => {
      if (!query.trim()) {
        // Fetch initial features again when search is cleared
        const response = await fetch(`/owner/gym/subscription/api`);
        const data = await response.json();
        setAvailableFeatures(data.data);
        return;
      }

      try {
        const response = await fetch(
          `/owner/gym/subscription/api?searchText=${query}`
        );
        const data = await response.json();
        setAvailableFeatures(data.data);
      } catch (error) {
        console.error("Error fetching features:", error);
      }
    }, 500),
    []
  );

  useEffect(() => {
    debouncedSearch(searchQuery);
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchQuery, debouncedSearch]);

  const handleToggleFeature = (feature: string) => {
    const updatedFeatures = selectedFeatures.includes(feature)
      ? selectedFeatures.filter((f) => f !== feature)
      : [...selectedFeatures, feature];
    onFeaturesChange(updatedFeatures);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2 ">
        <Label htmlFor="featureSearch" className="text-gray-700">
          Features
        </Label>
        <Input
          id="featureSearch"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for features..."
          className="border-gray-400 focus:border-gray-600"
        />
      </div>

      <div className="grid grid-cols-3 gap-2">
        {availableFeatures.map((feature, index) => (
          <TooltipWrapper
            key={index}
            content={feature.name}
            children={
              <Label
                size="sm"
                onClick={() => handleToggleFeature(feature._id)}
                className={`px-3 py-1.5 border rounded-md cursor-pointer transition-all duration-200 truncate  ${
                  selectedFeatures.includes(feature._id)
                    ? "bg-gray-800 text-white border-gray-800"
                    : "hover:border-gray-500 hover:bg-gray-100 border-gray-400"
                }`}
              >
                {feature.name}
              </Label>
            }
          />
        ))}
      </div>
    </div>
  );
};
