import { assingGymToMemberProfile } from "@/actions/memberprofile";
import { errorToast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { IGym } from "@/types/gym";
import { ISubscription, ISubsLinkingToProfile } from "@/types/subscription";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface JoinGymButtonProps {
  gym: IGym;
  selectedPlan: ISubscription;
}

export const JoinGymButton = ({ selectedPlan, gym }: JoinGymButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleJoinGym = async () => {
    setIsLoading(true);
    try {
      const startDate = new Date();
      const endDate = new Date();
      endDate.setMonth(endDate.getMonth() + selectedPlan.duration); // Add the duration in months

      const payload: ISubsLinkingToProfile = {
        subscriptionId: selectedPlan._id,
        gymId: gym._id,
        gymName: gym.name,
        subscriptionName: selectedPlan.name,
        startDate: startDate.toISOString(), // Convert to string format
        endDate: endDate.toISOString(), // Convert to string format
      };

      const response = await assingGymToMemberProfile(payload);
      if (!response.status) {
        errorToast(response.error || "Error joining gym ");
        return;
      }

      toast.success("Successfully joined the gym!");
      router.refresh();
      setTimeout(() => {
        router.push("/member");
      }, 2000);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to join gym"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 left-0 right-0 px-4 z-50 max-w-2xl mx-auto">
      <Button
        onClick={handleJoinGym}
        disabled={isLoading}
        className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            Join Gym with Selected Plan
            <span className="text-sm opacity-90">{selectedPlan.name}</span>
          </>
        )}
      </Button>
    </div>
  );
};
