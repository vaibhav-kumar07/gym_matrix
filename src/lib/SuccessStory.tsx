const successStories = [
    // 👑 Success Stories for Gym Owners
    {
        name: "Titan Gym",
        location: "Chicago, IL",
        growth: "175%",
        testimonial:
            "With Fitify, we automated member registrations, class scheduling, and payment processing, leading to a seamless operation and 175% growth in our revenue.",
        owner: "David Carter",
        role: "owner",
        image: "https://public.readdy.ai/ai/img_res/1a2b3c4d5e6f7g8h9i0j.jpg",
    },
    {
        name: "Pulse Fitness",
        location: "San Diego, CA",
        growth: "220%",
        testimonial:
            "We expanded our gym network and boosted our member retention using Fitify’s data analytics and mobile app features.",
        owner: "Jennifer Morgan",
        role: "owner",
        image: "https://public.readdy.ai/ai/img_res/792439b68976ebe6881f0827d5ef5aba.jpg",
    },
    {
        name: "Peak Performance Center",
        location: "Austin, TX",
        growth: "190%",
        testimonial:
            "The automated billing system and class scheduling have saved us hours of manual work, allowing us to focus on growing our fitness community.",
        owner: "Michael Hayes",
        role: "owner",
        image: "https://public.readdy.ai/ai/img_res/c8227f98a78b68b92eec90e8c7145acb.jpg",
    },

    // 🏋️‍♂️ Success Stories for Gym Members
    {
        name: "Jake Thompson",
        location: "New York, NY",
        progress: "Lost 20 lbs & gained muscle",
        testimonial:
            "The personalized workout plans and trainer access on Fitify helped me stay motivated and achieve my fitness goals faster than ever!",
        role: "member",
        image: "https://public.readdy.ai/ai/img_res/e30dbe635668268be51afd7050614a0f.jpg",
    },
    {
        name: "Emily Roberts",
        location: "Seattle, WA",
        progress: "Improved endurance & flexibility",
        testimonial:
            "Fitify's class booking system made it easy to schedule yoga and HIIT sessions, keeping me consistent and accountable in my fitness journey.",
        role: "member",
        image: "https://public.readdy.ai/ai/img_res/792439b68976ebe6881f0827d5ef5aba.jpg",
    },
    {
        name: "Carlos Ramirez",
        location: "Miami, FL",
        progress: "Gained 15 lbs of muscle",
        testimonial:
            "The Fitify app’s workout tracking and nutrition recommendations have completely transformed my approach to fitness.",
        role: "member",
        image: "https://public.readdy.ai/ai/img_res/e30dbe635668268be51afd7050614a0f.jpg",
    },
];

// Function to get success stories based on role
export function getSuccessStories(role: "owner" | "member") {
    return successStories.filter((story) => story.role === role);
}
