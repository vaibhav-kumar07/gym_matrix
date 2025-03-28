"use client";

import Button from "../common/Button";
import { Label } from "../common/Label";
import PageHeaderWithButton from "../common/PageHeaderWithButton";
import { errorToast, successToast } from "../hooks/use-toast";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import AddressForm from "./Address";
import LogoUploader from "./LogoUploader";
import PhotoUploader from "./PhotoUploader";
import { gymRegisterHandler } from "@/actions/gym";
import { Card } from "@/components/ui/card";
import { IGym, IGymStatus } from "@/types/gym";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCheckCircle } from "react-icons/fa";
import { z } from "zod";

const addressSchema = z.object({
  street: z.string().min(1, "Street is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  country: z.string().min(1, "Country is required"),
});

const createGymSchema = z.object({
  gymName: z.string().min(1, "Gym name is required"),
  //   businessName: z.string().min(1, "Legal business name is required"),
  email: z.string().email("Invalid email format"),
  //   phone: z.string().min(1, "Phone number is required"),
  //   openTime: z.string().min(1, "Opening time is required"),
  //   closeTime: z.string().min(1, "Closing time is required"),
  address: addressSchema,
  photos: z.array(z.instanceof(File)).optional(),
  logo: z.instanceof(File).optional(),
});

const CreateGymForm = ({ gym }: { gym: IGym }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createGymSchema),
    defaultValues: {
      gymName: gym?.name || "",
      email: gym?.contactInfo?.email || "",
      address: gym?.address || {
        street: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
      },
    },
  });

  const photos = watch("photos", []);
  const router = useRouter();

  const [logo, setLogo] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    // alert(JSON.stringify(data));
    try {
      // First, register the user

      const registerResult = await gymRegisterHandler({
        name: data.gymName,
        address: {
          street: data.address.street,
          city: data.address.city,
          state: data.address.state,
          postalCode: data.address.postalCode,
          country: data.address.country,
        },
        contactInfo: {
          email: data.email,
          phoneNumber: "8930485009",
        },
        status: IGymStatus.Active,
      });

      if (registerResult.status) {
        setLoading(false);
        successToast("Gym Create sucessfully");
      } else {
        setLoading(false);
        errorToast(registerResult.error || "Authentication failed!");
      }
    } catch (error) {
      errorToast("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handlePhotoUpload = (uploadedPhotos: File[]) => {
    setValue("photos", [...uploadedPhotos]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className="p-6 border rounded-lg space-y-6">
        {/* <div className="w-full flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">Create New Gym</h2>
            <p className="text-gray-500">
              Enter your gym's information to get started
            </p>
          </div>
        
        </div> */}
        <PageHeaderWithButton
          title="Create New Gym"
          description=" Enter your gym's information to get started"
          action={
            <Button
              loading={loading}
              type="submit"
              className="!rounded-button h-9 px-3"
            >
              <FaCheckCircle className="" /> Create Gym
            </Button>
          }
        />
        <div className="space-y-4">
          <div className="w-full grid grid-cols-2 gap-4 items-center">
            <LogoUploader logo={logo} setLogo={setLogo} className="ml-2" />
            <div className="col-span-1">
              <label className="block text-sm font-medium mb-1 pl-1">
                Gym Name
              </label>
              <Input {...register("gymName")} placeholder="Enter gym name" />
              {errors.gymName && (
                <Label size="xs" className="text-red-500">
                  {errors.gymName.message}
                </Label>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 pl-1">Email</label>
            <Input {...register("email")} placeholder="Enter email" />
            {errors.email && (
              <Label size="xs" className="text-red-500">
                {errors.email.message}
              </Label>
            )}
          </div>
          <AddressForm register={register} errors={errors} />
        </div>
      </Card>
    </form>
  );
};

export default CreateGymForm;
