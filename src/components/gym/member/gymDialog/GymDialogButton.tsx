import GymDialogContent from "./GymDialogContent";
import { GymHeader } from "./GymHeader";
import Button from "@/components/common/Button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { IGym } from "@/types/gym";

interface GymDialogButtonProps {
  gym: IGym;
}

export const GymDialogButton = async ({ gym }: GymDialogButtonProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="w-full mt-auto text-white rounded-lg text-sm py-2 font-medium h-9">
          View Details
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-[1000px] max-h-[90vh] p-0 overflow-hidden">
        <GymHeader
          image={gym.media ? gym.media[0] : ""}
          name={gym.name}
          // isOpen={gym.isOpen}
          // closingTime={gym.closingTime}
        />
        <GymDialogContent gym={gym} />
      </DialogContent>
    </Dialog>
  );
};
