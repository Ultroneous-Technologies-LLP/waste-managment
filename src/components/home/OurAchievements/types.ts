import { Image } from "@/types";

interface OurAchievementsImages {
  id: number;
  images: Image[];
}

export interface OurAchievementsSectionProps {
  ourAchievementsImages: OurAchievementsImages;
  title: string;
}
