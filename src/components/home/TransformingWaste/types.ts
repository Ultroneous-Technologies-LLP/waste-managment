import { Image } from "@/types";

export interface TransformingWastesKill {
  description: string;
  id: number;
  image: Image;
  title: string;
}

export interface TransformingWasteSectionProps {
  description: string;
  title: string;
  transformingWastesKills: TransformingWastesKill[];
}
