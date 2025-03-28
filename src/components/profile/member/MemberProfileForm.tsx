"use client";

import { createMemberProfileHandler } from "@/actions/memberprofile";
import CommonButton from "@/components/common/Button";
import { errorToast, successToast } from "@/components/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IGender, IMember, IMemberStatus } from "@/types/member";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface Props {
  member: IMember;
  setMember: React.Dispatch<React.SetStateAction<IMember>>;
}

// Zod validation schema
const memberSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Invalid phone number"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  gender: z.enum(Object.values(IGender) as [IGender, ...IGender[]], {
    errorMap: () => ({ message: "Gender is required" }),
  }),
  membershipStatus: z.enum(
    Object.values(IMemberStatus) as [IMemberStatus, ...IMemberStatus[]],
    {
      errorMap: () => ({ message: "Member status is required" }),
    }
  ),
  address: z.object({
    street: z.string().min(3, "Street is required"),
    city: z.string().min(2, "City is required"),
    state: z.string().min(2, "State is required"),
    country: z.string().min(2, "Country is required"),
    zipCode: z.string().min(5, "Zip Code must be at least 5 digits"),
  }),
});

const MemberProfileForm: React.FC<Props> = ({ member, setMember }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<z.infer<typeof memberSchema>>({
    resolver: zodResolver(memberSchema),
    mode: "onChange",
    defaultValues: {
      name: member.name,
      email: member.email,
      phone: member.phone,
      dateOfBirth: member.dateOfBirth.toString(),
      gender: member.gender,
      membershipStatus: member.membershipStatus as IMemberStatus,
      address: {
        street: member.address.street,
        city: member.address.city,
        state: member.address.state,
        country: member.address.country,
        zipCode: member.address.zipCode,
      },
    },
  });
  const router = useRouter();

  useEffect(() => {
    // Subscribe to form values using 'watch'
    const subscription = watch((values) => {
      setMember((prev) => {
        // Construct the new member object by merging previous state with new values
        const updatedMember = {
          ...prev,
          ...values,
          address: {
            ...prev.address,
            ...values.address,
          },
        };

        // Check if values have changed to prevent unnecessary state updates
        if (JSON.stringify(prev) !== JSON.stringify(updatedMember)) {
          return updatedMember;
        }

        return prev;
      });
    });

    return () => subscription.unsubscribe();
  }, [watch, setMember]);
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data: z.infer<typeof memberSchema>) => {
    console.log("data", data);
    setLoading(true);
    const formData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      dateOfBirth: data.dateOfBirth,
      gender: data.gender,
      membershipStatus: data.membershipStatus,
      address: {
        street: data.address.street,
        city: data.address.city,
        state: data.address.state,
        country: data.address.country,
        zipCode: data.address.zipCode,
      },
    };
    try {
      const result = await createMemberProfileHandler(formData);
      if (result.status) {
        setLoading(false);
        successToast(result.data.message || "profile saved successfully");
        router.push("/member");
      } else {
        setLoading(false);
        errorToast(result.error || "Failed to save profile");
      }
    } catch (error) {
      errorToast(error || "Failed to save profile");
    }
  };

  return (
    <div className="border-none p-8 ">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Personal Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" {...register("name")} />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register("email")} />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" {...register("phone")} />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="dateOfBirth">Date of Birth</Label>
            <Input id="dateOfBirth" type="date" {...register("dateOfBirth")} />
            {errors.dateOfBirth && (
              <p className="text-red-500 text-sm">
                {errors.dateOfBirth.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="gender">Gender</Label>
            <select
              id="gender"
              {...register("gender")}
              className="border p-2 w-full rounded"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="memberStatus">Member Status</Label>
            <Input id="memberStatus" {...register("membershipStatus")} />
            {errors.membershipStatus && (
              <p className="text-red-500 text-sm">
                {errors.membershipStatus.message}
              </p>
            )}
          </div>
        </div>

        {/* Address Section */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Address</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="street">Street</Label>
              <Input id="street" {...register("address.street")} />
              {errors.address?.street && (
                <p className="text-red-500 text-sm">
                  {errors.address.street.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="city">City</Label>
              <Input id="city" {...register("address.city")} />
              {errors.address?.city && (
                <p className="text-red-500 text-sm">
                  {errors.address.city.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="state">State</Label>
              <Input id="state" {...register("address.state")} />
              {errors.address?.state && (
                <p className="text-red-500 text-sm">
                  {errors.address.state.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="country">Country</Label>
              <Input id="country" {...register("address.country")} />
              {errors.address?.country && (
                <p className="text-red-500 text-sm">
                  {errors.address.country.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="zipCode">Zip Code</Label>
              <Input id="zipCode" {...register("address.zipCode")} />
              {errors.address?.zipCode && (
                <p className="text-red-500 text-sm">
                  {errors.address.zipCode.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <CommonButton
          type="submit"
          disabled={!isValid}
          className="w-full disabled:opacity-50 h-9 "
        >
          Save Profile
        </CommonButton>
      </form>
    </div>
  );
};

export default MemberProfileForm;
