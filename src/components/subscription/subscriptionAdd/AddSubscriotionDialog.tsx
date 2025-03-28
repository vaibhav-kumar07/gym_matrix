"use client";

import AddSubscriptionDialogForm from "./AddSubscriptionForm";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { useState } from "react";

const availableFeatures = [
  "Access to gym equipment",
  "Locker room access",
  "Basic fitness consultation",
  "Group fitness classes",
  "Personal training sessions",
  "Nutrition consultation",
  "Spa access",
  "Swimming pool access",
  "Sauna access",
  "Towel service",
  "Protein bar discount",
  "24/7 access",
];
export default function AddSubscriptionDialog({ gymId }: { gymId: string }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleClose() {
    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="text-white" /> Add Plan
        </Button>
      </DialogTrigger>
      <AddSubscriptionDialogForm gymId={gymId} handleClose={handleClose} />
    </Dialog>
  );
}
