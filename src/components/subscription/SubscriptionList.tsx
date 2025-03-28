import SubscriptionCard from "./SubscriptionCard";
import { getSubscriptionPlans } from "@/lib/subscription";
import { ISubscriptionDurationType } from "@/types/subscription";

const SubscriptionList = async ({
  activeTab,
}: {
  activeTab: ISubscriptionDurationType;
}) => {
  const result = await getSubscriptionPlans({ duration: activeTab });
  return (
    <div className="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 gap-8">
      {result.data.map((plan, index) => (
        <SubscriptionCard key={index} plan={plan} />
      ))}
    </div>
  );
};

export default SubscriptionList;
