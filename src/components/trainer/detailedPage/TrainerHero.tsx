
interface HeroSectionProps {
  coverImage: string;
}

export default function HeroSection({ coverImage }: HeroSectionProps) {
  return (
    <div className="relative h-[400px] overflow-hidden">
      <img src={coverImage} alt="Cover" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  );
}