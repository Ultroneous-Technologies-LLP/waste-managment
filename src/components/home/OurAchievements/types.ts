import { Image } from "@/types";

interface OurAchievementsImages {
  images: Image[];
}

export interface OurAchievementsSectionProps {
  ourAchievementsImages: OurAchievementsImages;
  title: string;
}
