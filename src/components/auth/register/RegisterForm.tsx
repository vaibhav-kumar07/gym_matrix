"use client";

import { handleAuthSuccess, registerUserHandler } from "@/actions/auth";
import CommonButton from "@/components/common/Button";
import GymSelectDropdown from "@/components/common/GymDropdown";
import { Label } from "@/components/common/Label";
import { errorToast, successToast } from "@/components/hooks/use-toast";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Smartphone, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Validation Schema
const registerSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const RegisterForm = ({ role }: { role: "owner" | "trainer" | "member" }) => {
  const [isPending, startTransition] = useTransition();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerSchema) });

  async function onSubmit(data: {
    name: string;
    gymId?: string;
    phone: string;
    password: string;
  }) {
    setLoading(true);
    startTransition(async () => {
      try {
        // First, register the user
        const registerResult = await registerUserHandler({
          name: data.name,
          phone: data.phone,
          password: data.password,
          role,
        });

        if (registerResult.status) {
          // If registration successful, handle auth
          const authResult = await handleAuthSuccess(registerResult.data.phone);

          if (authResult.success && authResult.redirect) {
            successToast("Registration Successful!");
            router.push(authResult.redirect); // This will redirect to /owner/gym or /member/gym
          } else {
            errorToast(authResult.error || "Authentication failed!");
          }
        } else {
          errorToast(registerResult.error || "Registration failed!");
        }
      } catch (error) {
        errorToast("An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    });
  }

  return (
    <CardContent className="space-y-0 py-0">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        {/* Name Field (For All Roles) */}
        <div className="space-y-1">
          <Label size="sm" variant="semibold">
            Your Name
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={16} />
            <Input
              type="text"
              {...register("name")}
              className="pl-10 text-[13px] font-medium rounded-md"
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-xs font-medium">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Phone Number Field */}
        <div className="space-y-1">
          <Label size="sm" variant="semibold">
            Phone Number
          </Label>
          <div className="relative">
            <Smartphone
              className="absolute left-3 top-3 text-gray-400"
              size={16}
            />
            <Input
              type="text"
              {...register("phone")}
              className="pl-10 text-[13px] font-medium rounded-md"
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-xs font-medium">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div className="space-y-1">
          <Label size="sm" variant="semibold">
            Password
          </Label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={16} />
            <Input
              type="password"
              {...register("password")}
              className="pl-10 text-[13px] font-medium rounded-md"
            />
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs font-medium">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <CommonButton
          type="submit"
          size="sm"
          loading={loading}
          className="rounded-md h-9"
        >
          {role === "owner" ? "Register Gym Owner" : "Register Member"}
        </CommonButton>
      </form>
    </CardContent>
  );
};

export default RegisterForm;
