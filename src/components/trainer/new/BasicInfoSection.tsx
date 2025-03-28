import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { ITrainer } from "@/types/trainer";
import { toast } from "sonner";
import { useState } from "react";
import { createTrainerProfileHandler, updateTrainerBasicHandler } from "@/actions/trainer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TrainerBasicData, trainerBasicSchema } from "../validation/trainer";
import { Instagram, Twitter } from "lucide-react";
import Button from "@/components/common/Button";


// import { trainerFormSchema, type TrainerFormData } from "@/lib/validations/trainer";

interface BasicInfoSectionProps {
  trainer: ITrainer;
  setTrainer: React.Dispatch<React.SetStateAction<ITrainer>>;
  mode: 'new' | 'edit';
}

export function BasicInfoSection({
  trainer,
  setTrainer,
  mode
}: BasicInfoSectionProps) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<TrainerBasicData>({
    resolver: zodResolver(trainerBasicSchema),
    defaultValues: {
      name: trainer.name,
      professionalTitle: trainer.professionalTitle,
      location: trainer.location,
      bio: trainer.bio,
      trainerPhilosophy: trainer.trainerPhilosophy,
      socialLinks: trainer.socialLinks,
      contactPreferences: trainer.contactPreferences,
      languages: trainer.languages,
      
    },
  });

  const handleCreateProfile = async (data: TrainerBasicData) => {
    try {
      setIsLoading(true);
      let result:any;
      if(mode=="new"){
      const result = await createTrainerProfileHandler({
        name: data.name,
        professionalTitle: data.professionalTitle,
        location: data.location,
        bio: data.bio,
        trainerPhilosophy: data.trainerPhilosophy,
        socialLinks: data.socialLinks,
        contactPreferences: data.contactPreferences,
        languages: data.languages,
      })}
      else{
        result = await updateTrainerBasicHandler({
          name: data.name,
          professionalTitle: data.professionalTitle,
          location: data.location,
          bio: data.bio,
          trainerPhilosophy: data.trainerPhilosophy,
          socialLinks: data.socialLinks,
          contactPreferences: data.contactPreferences,
          _id: trainer._id,
          languages: data.languages,
        })}
      
      if (result.status) {
        toast.success("Trainer profile created successfully!");
      } else {
        toast.error(result.error || "Failed to create profile");
      }
    } catch (error) {
      toast.error("An error occurred while creating the profile");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="px-6 pb-6 border rounded-lg">
      <form onSubmit={form.handleSubmit(handleCreateProfile)} className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div className="bg-gray-50/50 py-6 rounded-lg space-y-4">
            <h3 className="text-lg font-semibold">Personal Information</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-1">
                <Input
                  {...form.register("name")}
                  placeholder="Full Name *"
                  className="bg-white text-lg"
                />
                {form.formState.errors.name && (
                  <p className="text-sm text-red-500">{form.formState.errors.name.message}</p>
                )}
              </div>
              
              <div className="space-y-1">
                <Input
                  {...form.register("professionalTitle")}
                  placeholder="Professional Title *"
                  className="bg-white"
                />
                {form.formState.errors.professionalTitle && (
                  <p className="text-sm text-red-500">{form.formState.errors.professionalTitle.message}</p>
                )}
              </div>

              <Input
                {...form.register("location")}
                placeholder="Location"
                className="bg-white"
              />
            </div>
           </div>
           <div>
      <div className="flex items-center">
      <Button 
          type="submit"
          className="w-fit bg-black text-white mt-4 h-9 px-4 ml-auto"
          disabled={isLoading}
          size="lg"
          loading={isLoading}
        >
         { mode=="new"?"Create Trainer Profile":"Save Trainer Profile"}
        </Button>
         
      </div>
          <div className="w-full grid grid-cols-2 gap-6">
            <div className="bg-gray-50/50 py-6 rounded-lg space-y-4">
              <h3 className="text-lg font-semibold">Social Media</h3>
              <div className="space-y-3 grid grid-col-2">
                <div className="relative">
                  <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-pink-500" />
                  <Input
                    {...form.register("socialLinks.instagram")}
                    placeholder="Instagram @username"
                    className="bg-white pl-10"
                  />
                </div>
                <div className="relative">
                  <Twitter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-400" />
                  <Input
                    {...form.register("socialLinks.twitter")}
                    placeholder="Twitter @username"
                    className="bg-white pl-10"
                  />
                  
                </div>
              </div>
            </div>

            <div className="bg-gray-50/50 py-6 rounded-lg space-y-4">
              <h3 className="text-lg font-semibold">Contact Preferences</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center justify-between p-1.5 bg-white rounded-lg">
                  <span className="text-sm">Email Contact</span>
                  <Switch
                    checked={form.watch("contactPreferences.email")}
                    onCheckedChange={(checked) => 
                      form.setValue("contactPreferences.email", checked)
                    }
                  />
                </div>
                <div className="flex items-center justify-between p-1.5 bg-white rounded-lg">
                  <span className="text-sm">Phone Contact</span>
                  <Switch
                    checked={form.watch("contactPreferences.phone")}
                    onCheckedChange={(checked) => 
                      form.setValue("contactPreferences.phone", checked)
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
</div>
        {/* Profile Description */}
        <div className="bg-gray-50/50 rounded-lg mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <Textarea
                {...form.register("bio")}
                placeholder="Tell potential clients about yourself... *"
                className="h-32 bg-white resize-none"
              />
              {form.formState.errors.bio && (
                <p className="text-sm text-red-500">{form.formState.errors.bio.message}</p>
              )}
            </div>
            <Textarea
              {...form.register("trainerPhilosophy")}
              placeholder="Share your training philosophy..."
              className="h-32 bg-white resize-none"
            />
          </div>
        </div>

      
      </form>
    </Card>
  );
}
