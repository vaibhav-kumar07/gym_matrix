import LoginFooter from "@/components/auth/login/LoginFooter";
import LoginFormContent from "@/components/auth/login/LoginForm";
import LoginHeader from "@/components/auth/login/LoginHeader";
import { Card } from "@/components/ui/card";
import React from "react";

type Params = Promise<{ role: "owner" | "member" | "trainer" }>;

export default async function LoginForm({ params }: { params: Params }) {
    const { role } = await params;

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card className="w-full max-w-sm sm:max-w-md md:max-w-md px-4 sm:px-6 py-10 sm:py-11 flex flex-col gap-6 border-box-none sm:border shadow-none sm:shadow-lg rounded-none sm:rounded-xl">
                <LoginHeader role={role} />
                <LoginFormContent role={role} />
                <LoginFooter role={role} />
            </Card>
        </div>
    );
}
