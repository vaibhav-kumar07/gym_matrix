import { ITrainer, IPricingPackage } from "@/types/trainer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus, X, DollarSign, Clock } from "lucide-react";

interface PricingSectionProps {
  trainer: ITrainer;
  setTrainer: React.Dispatch<React.SetStateAction<ITrainer>>;
}

export function PricingSection({ trainer, setTrainer }: PricingSectionProps) {
  const addPackage = () => {
    const newPackage: IPricingPackage = {
      packageName: "",
      price: 0,
      duration: ""
    };
    setTrainer(prev => ({
      ...prev,
      pricingPackages: [...prev.pricingPackages, newPackage]
    }));
  };

  const updatePackage = (index: number, field: keyof IPricingPackage, value: any) => {
    setTrainer(prev => ({
      ...prev,
      pricingPackages: prev.pricingPackages.map((pkg, i) => 
        i === index ? { ...pkg, [field]: value } : pkg
      )
    }));
  };

  const removePackage = (index: number) => {
    setTrainer(prev => ({
      ...prev,
      pricingPackages: prev.pricingPackages.filter((_, i) => i !== index)
    }));
  };

  const updateHourlyRates = (type: keyof typeof trainer.hourlyRateBreakdown, value: number) => {
    setTrainer(prev => ({
      ...prev,
      hourlyRateBreakdown: {
        ...prev.hourlyRateBreakdown,
        [type]: value
      }
    }));
  };

  return (
    <div className="grid grid-cols-2 gap-6">
     <Card className="p-6 border rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Hourly Rates</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <Label>One-on-One Session Rate ($/hour)</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              <Input
                type="number"
                value={trainer.hourlyRateBreakdown.oneOnOneRate}
                onChange={(e) => updateHourlyRates('oneOnOneRate', Number(e.target.value))}
                className="pl-9"
                min={0}
                placeholder="0.00"
              />
            </div>
          </div>
          <div>
            <Label>Group Session Rate ($/hour)</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              <Input
                type="number"
                value={trainer.hourlyRateBreakdown.groupSessionRate}
                onChange={(e) => updateHourlyRates('groupSessionRate', Number(e.target.value))}
                className="pl-9"
                min={0}
                placeholder="0.00"
              />
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 border rounded-lg">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-lg font-semibold">Training Packages</h3>
            <p className="text-sm text-gray-500">Create custom packages for your clients</p>
          </div>
          <Button onClick={addPackage} size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Package
          </Button>
        </div>

        <div className="space-y-4">
          {trainer.pricingPackages.map((pkg, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex-1 grid grid-cols-3 gap-4">
                <div>
                  <Label>Package Name</Label>
                  <Input
                    value={pkg.packageName}
                    onChange={(e) => updatePackage(index, 'packageName', e.target.value)}
                    placeholder="e.g., Starter Package"
                  />
                </div>
                <div>
                  <Label>Price ($)</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                    <Input
                      type="number"
                      value={pkg.price}
                      onChange={(e) => updatePackage(index, 'price', Number(e.target.value))}
                      className="pl-9"
                      min={0}
                      placeholder="0.00"
                    />
                  </div>
                </div>
                <div>
                  <Label>Duration</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                    <Input
                      value={pkg.duration}
                      onChange={(e) => updatePackage(index, 'duration', e.target.value)}
                      className="pl-9"
                      placeholder="e.g., 1 Month"
                    />
                  </div>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => removePackage(index)}
                className="text-red-500 hover:text-red-700"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}