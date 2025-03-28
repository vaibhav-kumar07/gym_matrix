import { ITrainer, ICertification, IEducation } from "@/types/trainer";
import { EducationSection } from "./sections/EducationSection";
import { CertificationsSection } from "./sections/CertificationsSection";
import { SpecializationsSection } from "./sections/SpecializationsSection";
import { LanguagesSection } from "./sections/LanguagesSection";

interface QualificationsSectionProps {
  trainer: ITrainer;
  setTrainer: React.Dispatch<React.SetStateAction<ITrainer>>;
}

export function QualificationsSection({ trainer, setTrainer }: QualificationsSectionProps) {

  return (
    <div className="grid grid-cols-2 gap-6">
      <EducationSection
      initialEducation={trainer.education}
      trainerId={trainer._id}
      />
      <CertificationsSection
        initialCertifications={trainer.certifications}
        trainerId={trainer._id}
      />
      <SpecializationsSection
        initialSpecializations={trainer.specializations}
        trainerId={trainer._id}
      />
      <LanguagesSection
        initialLanguages={trainer.languages}
        trainerId={trainer._id}
      />
    </div>
  );
}