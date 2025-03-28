"use client";

import { loginUserHandler } from "@/actions/auth";
import CommonButton from "@/components/common/Button";
import { Label } from "@/components/common/Label";
import { errorToast, successToast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Smartphone, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const loginSchema = z.object({
    phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

const LoginFormContent = ({ role }: { role: string }) => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    async function onSubmit(data: any) {
        setLoading(true);
        const result = await loginUserHandler({
            phone: data.phone,
            password: data.password,
        });
        setLoading(false);
        if (result.status) {
            successToast("User Logged In Successfully");
            const redirectPath =
                role === "owner"
                    ? "/owner/dashboard"
                    : role === "trainer"
                    ? "/trainer/dashboard"
                    : "/member/dashboard";
            router.push(redirectPath);
        } else {
            errorToast(result.error || "Login failed!");
        }
    }

    return (
        <CardContent className="space-y-0 py-0">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-6"
            >
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
                <div className="flex flex-col gap-3">
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
                    <div className="pl-0.5 flex justify-between items-center text-[13px]">
                        <div className="flex items-center space-x-2 cursor-pointer">
                            <Checkbox
                                id="remember"
                                className="w-[14px] h-[14px] rounded-[3px]"
                            />
                            <Label
                                size="xs"
                                htmlFor="remember"
                                className="text-gray-600 cursor-pointer"
                            >
                                Remember me
                            </Label>
                        </div>
                        <Link
                            href="/forgot-password"
                            className={` hover:underline font-semibold text-xs ${
                                role == "owner"
                                    ? "text-blue-600"
                                    : "text-purple-600"
                            }`}
                        >
                            Forgot password?
                        </Link>
                    </div>
                </div>
                <CommonButton
                    type="submit"
                    size="sm"
                    loading={loading}
                    className="rounded-md h-9"
                >
                    Sign In
                </CommonButton>
            </form>
        </CardContent>
    );
};

export default LoginFormContent;
