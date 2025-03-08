export type Role = "owner" | "member";

export interface Testimonial {
    quote: string;
    author: string;
    position: string;
    image: string;
    role: Role;
}

const testimonialsData: Testimonial[] = [
    {
        quote: "Fitify has revolutionized how we manage our chain of fitness centers. The platform's comprehensive features and intuitive interface have made our operations seamless.",
        author: "Michael Anderson",
        position: "CEO, FitLife Gyms",
        image: "https://public.readdy.ai/ai/img_res/4a24bfdb8fb59854f435cabd19e8b4c6.jpg",
        role: "owner",
    },
    {
        quote: "The analytics and reporting capabilities have given us invaluable insights into our business performance. We've optimized our class schedule and increased revenue by 60%.",
        author: "David Chen",
        position: "Owner, PowerHouse Gym",
        image: "https://public.readdy.ai/ai/img_res/6142f220f5f9e8e93b0e859bde47d8e8.jpg",
        role: "owner",
    },
    {
        quote: "The member engagement features have helped us increase retention by 45%. Our members love the mobile app and the ability to book classes easily.",
        author: "Emily Rodriguez",
        position: "Member at Elite Fitness",
        image: "https://public.readdy.ai/ai/img_res/b894e153447e1fd56e801fc3479b6b46.jpg",
        role: "member",
    },
    {
        quote: "I love how easy it is to track my workouts and book classes. Fitify has completely transformed my gym experience.",
        author: "Sophia Martinez",
        position: "Member at PowerHouse Gym",
        image: "https://public.readdy.ai/ai/img_res/b894e153447e1fd56e801fc3479b6b46.jpg",
        role: "member",
    },
];

/**
 * Returns testimonials filtered by role.
 * @param role - The role to filter testimonials by ("owner" | "member")
 * @returns Filtered array of testimonials
 */
export const getTestimonialsByRole = (role: Role): Testimonial[] => {
    return testimonialsData.filter((testimonial) => testimonial.role === role);
};
