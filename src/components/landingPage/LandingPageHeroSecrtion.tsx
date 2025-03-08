import LandingHeroBackground from "./LandingHeroBackground";
import LandingHeroContent from "./LandingHeroContent";
import LandingSearch from "./LandingSearch";
import LandingStats from "./LandingStats";
import LandingUSers from "./LandingUsers";
import React from "react";

export default function LandingPageHeroSecrtion() {
    return (
        <section className="relative w-[100%] md:max-h-[90vh] flex items-center pt-28 pb-20 px-8">
            <LandingHeroBackground />
            <div className="w-full mx-auto relative z-10">
                <LandingHeroContent />
                <LandingSearch />
                <LandingStats />
                <LandingUSers />
            </div>
        </section>
    );
}
