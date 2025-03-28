import { createSubscriptionHandler } from "@/actions/subscription";
import CommonButton from "@/components/common/Button";
import { FeatureSelector } from "@/components/feature/FeatureSelector";
import { errorToast, successToast } from "@/components/hooks/use-toast";
import {
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ISubscription, ISubscriptionDurationType } from "@/types/subscription";
import { zodResolver } from "@hookform/resolvers/zod";
import { IndianRupeeIcon } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface AddSubscriptionDialogPropsForm {
  // availableFeatures: string[];
  gymId: string;
  handleClose: () => void;
}

const subscriptionFormSchema = z.object({
  name: z.string().min(1, "Plan name is required"),
  duration: z.string().min(1, "Duration is required"),
  price: z.string().min(1, "Price is required"),
  features: z.array(z.string()),
  status: z.boolean(),
  gymId: z.string(),
});

type SubscriptionFormValues = z.infer<typeof subscriptionFormSchema>;

const AddSubscriptionDialogForm: React.FC<AddSubscriptionDialogPropsForm> = ({
  gymId,
  handleClose,
}) => {
  const [loading, setLoading] = useState(false);

  const form = useForm<SubscriptionFormValues>({
    resolver: zodResolver(subscriptionFormSchema),
    defaultValues: {
      name: "",
      duration: "",
      price: "",
      features: [],
      status: true,
      gymId: gymId,
    },
  });

  const onSubmit = async (data: SubscriptionFormValues) => {
    setLoading(true);
    try {
      const formattedData: ISubscription = {
        name: data.name,
        duration: parseInt(data.duration),
        price: parseFloat(data.price),
        gymId: data.gymId,
        status: data.status,
        features: data.features,
        image: "",
      };

      const result = await createSubscriptionHandler(formattedData);
      if (result.status) {
        setLoading(false);
        successToast("New Subscription added successfully");
        form.reset();
        handleClose();
      } else {
        setLoading(false);
        errorToast(result.error || "Please check your subscription details");
      }
    } catch (error) {
      console.error("error", error);
      errorToast("Failed to create subscription");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DialogContent className="sm:max-w-[600px] bg-white border border-gray-300 shadow-md rounded-lg">
      <DialogHeader>
        <DialogTitle className="text-xl font-semibold text-gray-900">
          Create New Subscription Plan
        </DialogTitle>
      </DialogHeader>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid gap-2 py-4">
          {/* Plan Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700">
              Plan Name *
            </Label>
            <Input
              {...form.register("name")}
              placeholder="e.g., Premium Membership"
              className="border-gray-400 focus:border-gray-600"
            />
            {form.formState.errors.name && (
              <p className="text-sm text-red-500">
                {form.formState.errors.name.message}
              </p>
            )}
          </div>

          {/* Duration & Price */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="duration" className="text-gray-700">
                Duration *
              </Label>
              <Select
                onValueChange={(value) => form.setValue("duration", value)}
                value={form.watch("duration")}
              >
                <SelectTrigger className="border-gray-400 focus:border-gray-600">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-300">
                  <SelectItem value="1" className="capitalize text-gray-900">
                    {ISubscriptionDurationType.Monthly}
                  </SelectItem>
                  <SelectItem value="12" className="capitalize text-gray-900">
                    {ISubscriptionDurationType.Yearly}
                  </SelectItem>
                </SelectContent>
              </Select>
              {form.formState.errors.duration && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.duration.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="price" className="text-gray-700">
                Price *
              </Label>
              <div className="relative flex flex-col justify-center">
                <span className="absolute left-2.5 text-gray-600 ">
                  <IndianRupeeIcon size={14} />
                </span>
                <Input
                  {...form.register("price")}
                  type="number"
                  className="pl-7 border-gray-400 focus:border-gray-600"
                  placeholder="0.00"
                />
              </div>
              {form.formState.errors.price && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.price.message}
                </p>
              )}
            </div>
          </div>

          <FeatureSelector
            selectedFeatures={form.watch("features")}
            onFeaturesChange={(features) => form.setValue("features", features)}
          />
        </div>

        {/* Action Buttons */}
        <div className="ml-auto w-1/2 flex justify-end space-x-2">
          <DialogClose
            type="button"
            onClick={() => form.reset()}
            className="!rounded-md border-gray-500 text-gray-800 hover:bg-gray-100 border h-9 px-3"
          >
            Cancel
          </DialogClose>
          <CommonButton
            type="submit"
            // variant="primary"
            loading={loading}
            disabled={loading}
            className="!rounded-md bg-gray-800 text-white hover:bg-gray-700 h-9 px-5"
          >
            {loading ? "Creating..." : "Create Plan"}
          </CommonButton>
        </div>
      </form>
    </DialogContent>
  );
};

export default AddSubscriptionDialogForm;
