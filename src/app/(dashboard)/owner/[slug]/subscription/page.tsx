import SubscriptionHeader from "@/components/subscription/SubscriptionHeader";
import SubscriptionList from "@/components/subscription/SubscriptionList";
import AddSubscriptionDialog from "@/components/subscription/subscriptionAdd/AddSubscriotionDialog";
import { ISubscriptionDurationType } from "@/types/subscription";

type SearchParams = {
  activeTab?: ISubscriptionDurationType;
};
type Params = {
  slug: string;
};

export default async function SubscriptionPage({
  searchParams,
  params,
}: {
  searchParams: Promise<SearchParams>;
  params: Promise<Params>;
}) {
  const slug = (await params).slug;
  const activeTab =
    (await searchParams).activeTab ?? ISubscriptionDurationType.Monthly;

  return (
    <div className="p-8">
      <div className="w-full flex items-start justify-between">
        <SubscriptionHeader activeTab={activeTab} />
        <AddSubscriptionDialog gymId={slug} />
      </div>
      {/* <AddSubscriptionDialog /> */}
      <SubscriptionList activeTab={activeTab} />
      {/* <AddSubscriptionModal /> */}
    </div>
  );
}
