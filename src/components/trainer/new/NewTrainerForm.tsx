"use client";

import TrainerCoverImage from "./TrainerCoverImage";
import { TrainerHeader } from "@/components/trainer/detailedPage/TrainerHeader";
import { AdditionalSection } from "@/components/trainer/new/AdditionalSection";
import { AvailabilitySection } from "@/components/trainer/new/AvailabilitySection";
import { BasicInfoSection } from "@/components/trainer/new/BasicInfoSection";
import { ExperienceSection } from "@/components/trainer/new/ExperienceSection";
import { PricingSection } from "@/components/trainer/new/PricingSection";
import { CertificationsSection } from "@/components/trainer/new/sections/CertificationsSection";
import { EducationSection } from "@/components/trainer/new/sections/EducationSection";
import { LanguagesSection } from "@/components/trainer/new/sections/LanguagesSection";
import { SpecializationsSection } from "@/components/trainer/new/sections/SpecializationsSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ITrainer, ITrainerProfileStatus } from "@/types/trainer";
import { Upload } from "lucide-react";
import { useState, useEffect } from "react";

interface NewTrainerFormProps {
  initialTrainer?: ITrainer;
  mode: "new" | "edit";
}

// Default trainer data for new trainers
const DEFAULT_TRAINER: ITrainer = {
  _id: "new",
  name: "Your Name",
  contactPreferences: {
    email: true,
    phone: true,
  },
  professionalTitle: "Fitness Trainer",
  bio: "Share your experience and expertise...",
  trainerPhilosophy: "",
  yearsOfExperience: 0,
  hourlyRateBreakdown: {
    oneOnOneRate: 0,
    groupSessionRate: 0,
  },
  location: "",
  languages: ["English"],
  specializations: [],
  education: [],
  certifications: [],
  achievements: [],
  personalizedTrainingPlans: [],
  media: {
    profilePicture: "https://via.placeholder.com/150",
    gallery: ["https://via.placeholder.com/1200x400"],
  },
  availability: [],
  socialLinks: {
    instagram: "",
    twitter: "",
  },
  video: {
    videoUrl: "",
    videoTitle: "",
    videoDescription: "",
    thumbnailUrl: "",
  },
  experienceWithDemographics: {
    seniors: false,
    kids: false,
    disabilities: false,
  },
  pricingPackages: [],
  status: ITrainerProfileStatus.ACTIVE,
  hourlyRate: 0,
  languagesOfferedInClasses: ["English"],
};

export function NewTrainerForm({
  initialTrainer,
  mode = "new",
}: NewTrainerFormProps) {
  const [trainer, setTrainer] = useState<ITrainer>(
    initialTrainer || DEFAULT_TRAINER
  );

  // Update trainer state when initialTrainer changes (for edit mode)
  useEffect(() => {
    if (initialTrainer && mode === "edit") {
      setTrainer(initialTrainer);
    }
  }, [initialTrainer, mode]);

  // Handle form submission

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <div className="relative">
        <div className="relative h-[400px] bg-gray-200 cursor-pointer group" onClick={() => handleImageUpload('cover')}>
          <img 
            src={trainer.media.gallery[0]} 
            alt="Cover" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Upload className="h-8 w-8 text-white" />
          </div>
        </div>
      </div> */}
      <TrainerCoverImage
        coverImage={trainer.media.gallery[0]}
        mode={mode}
        trainerId={trainer._id}
      />
      <TrainerHeader trainer={trainer} mode={mode} />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid grid-cols-5 mb-5">
            <TabsTrigger
              value="basic"
              className="data-[state=active]:bg-black data-[state=active]:text-white rounded-lg px-4 py-2 transition"
            >
              Basic Info
            </TabsTrigger>
            <TabsTrigger
              value="qualifications"
              className="data-[state=active]:bg-black data-[state=active]:text-white rounded-lg px-4 py-2 transition"
            >
              Qualifications
            </TabsTrigger>
            <TabsTrigger
              value="experience"
              className="data-[state=active]:bg-black data-[state=active]:text-white rounded-lg px-4 py-2 transition"
            >
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="pricing"
              className="data-[state=active]:bg-black data-[state=active]:text-white rounded-lg px-4 py-2 transition"
            >
              Pricing & Availability
            </TabsTrigger>
            <TabsTrigger
              value="additional"
              className="data-[state=active]:bg-black data-[state=active]:text-white rounded-lg px-4 py-2 transition"
            >
              Additional Info
            </TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-6">
            <BasicInfoSection
              trainer={trainer}
              setTrainer={setTrainer}
              mode={mode}
            />
          </TabsContent>

          <TabsContent value="qualifications" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CertificationsSection
                initialCertifications={trainer.certifications}
                trainerId={trainer._id}
              />
              <EducationSection
                initialEducation={trainer.education}
                trainerId={trainer._id}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SpecializationsSection
                initialSpecializations={trainer.specializations}
                trainerId={trainer._id}
              />
              <LanguagesSection
                initialLanguages={trainer.languages}
                trainerId={trainer._id}
              />
            </div>
          </TabsContent>

          <TabsContent value="experience" className="space-y-6">
            <ExperienceSection
              initialAchievements={trainer.achievements}
              initialDemographics={trainer.experienceWithDemographics}
              trainerId={trainer._id}
            />
          </TabsContent>

          <TabsContent value="pricing" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PricingSection trainer={trainer} setTrainer={setTrainer} />
              <AvailabilitySection trainer={trainer} setTrainer={setTrainer} />
            </div>
          </TabsContent>

          <TabsContent value="additional" className="space-y-6">
            <AdditionalSection trainer={trainer} setTrainer={setTrainer} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
