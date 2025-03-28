import { DayOfWeek } from "@/types/trainer";
import { Languages } from "lucide-react";
import { z } from "zod";

export const trainerBasicSchema = z.object({
  _id: z.string().optional(),
    name: z.string().min(2, "Name must be at least 2 characters"),
    professionalTitle: z.string().min(3, "Professional title is required"),
    location: z.string().optional(),
    bio: z.string().min(50, "Bio must be at least 50 characters"),
    trainerPhilosophy: z.string().optional(),
    socialLinks: z.object({
      instagram: z.string().optional(),
      twitter: z.string().optional(),
    }),
    contactPreferences: z.object({
      email: z.boolean(),
      phone: z.boolean(),
    }),
    languages: z.array(z.string()).min(1, "At least one language is required"),
  });
  
  // Type definitions for all schemas
  export type TrainerBasicData = z.infer<typeof trainerBasicSchema>;
  export type CreateTrainerData = z.infer<typeof createTrainerSchema>;
  export type UpdateBasicProfileData = z.infer<typeof updateBasicProfileSchema>;
  export type UpdateMediaData = z.infer<typeof updateMediaSchema>;
  export type UpdateCertificationsData = z.infer<typeof updateCertificationsSchema>;
  export type UpdateSocialLinksData = z.infer<typeof updateSocialLinksSchema>;
  export type UpdateContactPreferencesData = z.infer<typeof updateContactPreferencesSchema>;
  export type UpdateSpecializationsData = z.infer<typeof updateSpecializationsSchema>;
  export type UpdateAvailabilityData = z.infer<typeof updateAvailabilitySchema>;
  export type UpdateTrainerDetailsData = z.infer<typeof updateTrainerDetailsSchema>;
  export type UpdateVideoData = z.infer<typeof updateVideoSchema>;


// Group 1: Basic Profile Schemas
export const createTrainerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  professionalTitle: z.string().min(3, "Professional title is required"),
  // hourlyRate: z.number().min(0, "Hourly rate must be positive"),
  location: z.string().min(2, "Location is required"),
  // languages: z.array(z.string()).min(1, "At least one language is required"),
  // yearsOfExperience: z.number().min(0, "Years of experience must be positive"),
  bio: z.string().min(10, "Bio must be at least 10 characters")
});

export const updateBasicProfileSchema = createTrainerSchema.partial();

// Group 2: Media & Certifications Schemas
export const updateMediaSchema = z.object({
  media: z.object({
    profilePicture: z.string().url("Invalid profile picture URL"),
    gallery: z.array(z.string().url("Invalid gallery image URL"))
  })
});

export const updateCertificationsSchema = z.object({
  certifications: z.array(z.object({
    name: z.string().min(2, "Certification name required"),
    yearObtained: z.number().min(1900, "Invalid year"),
    expiry: z.string().datetime().optional(),
    image: z.string().url("Invalid certification image URL").optional()
  }))
});

// Group 3: Social & Contact Links Schemas
export const updateSocialLinksSchema = z.object({
  sociallinks: z.object({
    instagram: z.string().url("Invalid Instagram URL").optional(),
    twitter: z.string().url("Invalid Twitter URL").optional()
  })
});

export const updateContactPreferencesSchema = z.object({
  contactpreferences: z.object({
    email: z.boolean(),
    phone: z.boolean()
  })
});

// Group 4: Specializations & Availability Schemas
export const updateSpecializationsSchema = z.object({
  specializations: z.array(z.string()).min(1, "At least one specialization required")
});

export const updateAvailabilitySchema = z.object({
  availability: z.array(z.object({
    dayOfWeek: z.nativeEnum(DayOfWeek, {
      errorMap: () => ({ message: "Invalid day of week. Must be one of: MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY" })
    }),
    startTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Invalid time format. Use HH:MM (24-hour)"),
    endTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Invalid time format. Use HH:MM (24-hour)"),
    status: z.enum(["Available", "Unavailable"])
  })).min(1, "At least one availability slot required")
});



export const updateTrainerDetailsSchema = z.object({
  achievements: z.array(z.string().min(3, "Achievement description required")).optional(),
  education: z.array(z.object({
    degree: z.string().min(2, "Degree name required"),
    institution: z.string().min(2, "Institution name required"),
    yearCompleted: z.number().min(1900, "Invalid year")
  })).optional(),
  experienceWithDemographics: z.object({
    seniors: z.boolean(),
    kids: z.boolean(),
    disabilities: z.boolean()
  }).optional(),
 
});



export const updateVideoSchema = z.object({
  videoUrl: z.string().url("Invalid video URL"),
  videoTitle: z.string().min(3, "Video title must be at least 3 characters"),
  videoDescription: z.string().min(10, "Video description must be at least 10 characters").optional(),
  thumbnailUrl: z.string().url("Invalid thumbnail URL").optional()
});