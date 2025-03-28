import { Avatar } from "@/components/ui/avatar";

interface ProfileHeaderProps {
  coverImage: string;
  profileImage: string;
  name: string;
  bio: string;
  stats: {
    followersCount: number;
    followingCount: number;
    achievements: number;
  };
}

export default function ProfileHeader({
  coverImage,
  profileImage,
  name,
  bio,
  stats,
}: ProfileHeaderProps) {
  return (
    <div className="space-y-6">
      <div className="relative h-48">
        <img
          src={coverImage}
          alt="Profile Cover"
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute top-[90px] left-1/2 -translate-x-1/2">
          <Avatar className="h-32 w-32 border-4 border-white">
            <img src={profileImage} alt={name} className="object-cover" />
          </Avatar>
        </div>
      </div>

      <div className="mt-28 text-center">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-gray-600">{bio}</p>
        <div className="flex justify-center gap-8 mt-4">
          {Object.entries(stats).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="font-bold">{value}</div>
              <div className="text-sm text-gray-600">
                {key
                  .replace("Count", "")
                  .replace(/([A-Z])/g, " $1")
                  .trim()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
