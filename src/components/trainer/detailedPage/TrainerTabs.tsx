import AboutTab from "./tabs/AboutTab";
import GalleryTab from "./tabs/GalleryTab";
import PackagesTab from "./tabs/PackagesTab";
import ScheduleTab from "./tabs/ScheduleTab";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ITrainer } from "@/types/trainer";

// import ReviewsTab from "./tabs/ReviewsTab";

export default function TrainerTabs({ trainer }: { trainer: ITrainer }) {
  return (
    <div className="max-w-7xl mx-auto  mt-4 ">
      <Tabs defaultValue="about" className="space-y-6  p-6 ">
        <TabsList className="bg-gray-100 p-2 rounded-xl">
          <TabsTrigger
            value="about"
            className="data-[state=active]:bg-black data-[state=active]:text-white rounded-lg px-4 py-2 transition"
          >
            About
          </TabsTrigger>
          <TabsTrigger
            value="gallery"
            className="data-[state=active]:bg-black data-[state=active]:text-white rounded-lg px-4 py-2 transition"
          >
            Gallery
          </TabsTrigger>
          <TabsTrigger
            value="packages"
            className="data-[state=active]:bg-black data-[state=active]:text-white rounded-lg px-4 py-2 transition"
          >
            Packages
          </TabsTrigger>
          <TabsTrigger
            value="schedule"
            className="data-[state=active]:bg-black data-[state=active]:text-white rounded-lg px-4 py-2 transition"
          >
            Schedule
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="data-[state=active]:bg-black data-[state=active]:text-white rounded-lg px-4 py-2 transition"
          >
            Reviews
          </TabsTrigger>
        </TabsList>

        <div >
          <TabsContent value="about">
            <AboutTab trainer={trainer} />
          </TabsContent>
          <TabsContent value="gallery" className="border rounded-lg">
            <GalleryTab images={trainer.media.gallery} />
          </TabsContent>
          <TabsContent value="packages" className="border rounded-lg">
            {/* <PackagesTab packages={trainer.packages} /> */}
          </TabsContent>
          <TabsContent value="schedule" className="border rounded-lg">
            <ScheduleTab trainer={trainer} />
          </TabsContent>
          <TabsContent value="reviews" className="border rounded-lg">
            {/* <ReviewsTab reviews={trainer.reviews} /> */}
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
