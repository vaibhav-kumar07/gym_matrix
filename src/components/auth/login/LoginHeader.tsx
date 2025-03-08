import { CardHeader } from "@/components/ui/card";
import { FaDumbbell, FaUserTie, FaUser } from "react-icons/fa6";

const roleDetails: Record<
    "owner" | "trainer" | "member",
    { title: string; subtitle: string; icon: React.ReactNode }
> = {
    owner: {
        title: "Welcome Back, Gym Owner",
        subtitle: "Sign in to manage your fitness facility",
        icon: <FaDumbbell className="text-white" size={28} />,
    },
    trainer: {
        title: "Trainer Login",
        subtitle: "Access your training schedules and clients",
        icon: <FaUserTie className="text-white" size={28} />,
    },
    member: {
        title: "Member Login",
        subtitle: "Track your workouts and subscriptions",
        icon: <FaUser className="text-white" size={28} />,
    },
};

const LoginHeader = ({ role }: { role: "owner" | "trainer" | "member" }) => {
    return (
        <CardHeader className="text-center p-0 space-y-2">
            <div className="flex justify-center">
                <div
                    className={`bg-blue-600 p-3 rounded-lg shadow-md ${
                        role == "owner" ? "bg-blue-600" : "bg-purple-600"
                    }`}
                >
                    {roleDetails[role].icon} {/* Dynamically render icon */}
                </div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">
                {roleDetails[role].title}
            </h2>
            <p className="text-sm text-gray-600">
                {roleDetails[role].subtitle}
            </p>
        </CardHeader>
    );
};

export default LoginHeader;
