import { BusinessHours } from "./GymBusinessHours";
import { ContactInfo } from "./GymContactInfo";
import { MembershipPlans } from "./GymMembershipList";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getSubscriptionPlans } from "@/lib/subscription";
import { IGym } from "@/types/gym";

interface GymDialogContentProps {
  gym: IGym;
}

const GymDialogContent: React.FC<GymDialogContentProps> = async ({ gym }) => {
  const resultSubscriptions = await getSubscriptionPlans({ gymId: gym._id });
  return (
    <Tabs defaultValue="info" className="w-full">
      <TabsList className="">
        <TabsTrigger value="info" className="data-[state:active]:bg-green-400">
          Information
        </TabsTrigger>
        <TabsTrigger value="membership">Membership</TabsTrigger>
        <TabsTrigger value="facilities">Facilities</TabsTrigger>
        <TabsTrigger value="gallery">Gallery</TabsTrigger>
      </TabsList>
      <ScrollArea className="h-[calc(90vh-300px)] px-6">
        <TabsContent value="info">
          <div className="grid grid-cols-2 gap-8">
            <ContactInfo contact={gym.contactInfo} address={gym.address} />
            <BusinessHours hours={gym.businessHours} />
          </div>
        </TabsContent>
        <TabsContent value="membership">
          <MembershipPlans plans={resultSubscriptions.data} gym={gym} />
        </TabsContent>
      </ScrollArea>
      {/* Other TabsContent remain the same */}
    </Tabs>
  );
};

export default GymDialogContent;
