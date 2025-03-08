import { CardHeader } from "@/components/ui/card";
import { FaDumbbell, FaUserTie, FaRunning } from "react-icons/fa";

const roleDetails: Record<
    "owner" | "trainer" | "member",
    { title: string; subtitle: string; icon: React.ReactNode }
> = {
    owner: {
        title: "Register as a Gym Owner",
        subtitle: "Set up your gym and start managing memberships and staff.",
        icon: <FaUserTie className="text-white" size={28} />,
    },
    trainer: {
        title: "Join as a Trainer",
        subtitle: "Register to manage training schedules and clients.",
        icon: <FaRunning className="text-white" size={28} />,
    },
    member: {
        title: "Sign Up as a Gym Member",
        subtitle: "Track your workouts, book sessions, and stay fit.",
        icon: <FaDumbbell className="text-white" size={28} />,
    },
};

const RegisterHeader = ({ role }: { role: "owner" | "trainer" | "member" }) => {
    const { title, subtitle, icon } = roleDetails[role];

    return (
        <CardHeader className="text-center p-0 space-y-2">
            {/* Icon Container */}
            <div className="flex justify-center">
                <div
                    className={`p-3 rounded-lg shadow-md ${
                        role == "owner" ? "bg-blue-600" : "bg-purple-600"
                    }`}
                >
                    {icon}
                </div>
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>

            {/* Subtext */}
            <p className="text-sm text-gray-600">{subtitle}</p>
        </CardHeader>
    );
};

export default RegisterHeader;
