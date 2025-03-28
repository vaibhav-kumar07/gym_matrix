import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FitnessSession } from "@/types/session";
import { format } from "date-fns";

interface SessionDetailsDialogProps {
  session: FitnessSession | null;
  isOpen: boolean;
  onClose: () => void;
  onBook: (session: FitnessSession) => void;
}

export function SessionDetailsDialog({
  session,
  isOpen,
  onClose,
  onBook,
}: SessionDetailsDialogProps) {
  if (!session) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {session.title}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-6">
          {/* Add detailed session information here */}
          <Button onClick={() => onBook(session)}>Book Session</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
