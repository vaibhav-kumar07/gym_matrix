import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
// import { ITrainerPackage } from "@/types/trainer";

interface PackagesTabProps {
//   packages: ITrainerPackage[];
}

export default function PackagesTab({  }: PackagesTabProps) {
  return (
    <div className="grid grid-cols-2 gap-6">
      {/* {packages.map((pkg, index) => (
        <Card key={index} className="p-6">
          <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
          <p className="text-3xl font-bold mb-4">
            ${pkg.pricePerSession}
            <span className="text-sm text-gray-500">/session</span>
          </p>
          <p className="text-gray-600 mb-4">{pkg.sessions} sessions included</p>
          <ul className="space-y-2 mb-6">
            {pkg.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2">
                <i className="fas fa-check text-green-500"></i>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button className="w-full">Select Package</Button>
        </Card>
      ))} */}
    </div>
  );
}