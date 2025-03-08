import LandingPageHeroSecrtion from "@/components/landingPage/LandingPageHeroSecrtion";
import FeaturedGym from "@/components/landingPage/featuredgyms/FeaturedGym";
import Features from "@/components/landingPage/features/Features";
import StaticalData from "@/components/landingPage/features/StaticalData";
import SuccessStory from "@/components/landingPage/features/SuccessStory";
import Testimonial from "@/components/landingPage/features/Testimonial";
import Footer from "@/components/landingPage/footer/Footer";

const HomePage = async () => {
    return (
        <div className="">
            <LandingPageHeroSecrtion />
            <FeaturedGym />
            <Features />
            <SuccessStory />
            <StaticalData />
            <Testimonial />
            {/* <Separator /> */}
            <Footer />
        </div>
    );
};

export default HomePage;
