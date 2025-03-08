import { Card } from "@/components/ui/card";
import RegisterHeader from "@/components/auth/register/RegisterHeader";
import RegisterForm from "@/components/auth/register/RegisterForm";
import RegisterFooter from "@/components/auth/register/RegisterFooter";
type Params = Promise<{ role: "owner" | "member" | "trainer" }>;

export default async function RegisterPage({ params }: { params: Params }) {
    const { role } = await params;
    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card className="w-full max-w-sm sm:max-w-md md:max-w-md  px-4 sm:px-10 py-10 sm:py-11 flex flex-col gap-6 border-box-none sm:border shadow-none sm:shadow-lg rounded-none sm:rounded-xl">
                <RegisterHeader role={role} />
                <RegisterForm role={role} />
                <RegisterFooter role={role} />
            </Card>
        </div>
    );
}
