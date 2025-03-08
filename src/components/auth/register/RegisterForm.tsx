"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { CardContent } from "@/components/ui/card";
import { Lock, Smartphone, User } from "lucide-react";
import { Label } from "@/components/common/Label";
import { registerUserHandler } from "@/actions/auth";
import { errorToast, successToast } from "@/components/hooks/use-toast";
import CommonButton from "@/components/common/Button";
import { useRouter } from "next/navigation";
import GymSelectDropdown from "@/components/common/GymDropdown"; // Import the dropdown

// Validation Schema
const registerSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    gymId: z.string().optional(),
    phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

const RegisterForm = ({ role }: { role: "owner" | "trainer" | "member" }) => {
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
        const result = await registerUserHandler({
            name: data.name,
            gymId: role !== "owner" ? data.gymId : undefined,
            phone: data.phone,
            password: data.password,
            role,
        });
        setLoading(false);

        if (result.status) {
            router.push("/");
            successToast("Registration Successful!");
        } else {
            errorToast(result.error || "Registration failed!");
        }
    }

    return (
        <CardContent className="space-y-0 py-0">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-6"
            >
                {/* Name Field (For All Roles) */}
                <div className="space-y-1">
                    <Label size="sm" variant="semibold">
                        Your Name
                    </Label>
                    <div className="relative">
                        <User
                            className="absolute left-3 top-3 text-gray-400"
                            size={16}
                        />
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

                {/* Gym Selection (Only for Members & Trainers) */}
                {role !== "owner" && (
                    <div className="space-y-1">
                        <Label size="sm" variant="semibold">
                            Select Gym
                        </Label>
                        <GymSelectDropdown
                            onSelect={(gymId: any) => setValue("gymId", gymId)}
                        />
                    </div>
                )}

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
                        <Lock
                            className="absolute left-3 top-3 text-gray-400"
                            size={16}
                        />
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
                    {role === "owner" ? "Register Gym" : "Join Gym"}
                </CommonButton>
            </form>
        </CardContent>
    );
};

export default RegisterForm;
