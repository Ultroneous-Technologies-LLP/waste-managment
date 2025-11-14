import { Button, Image } from "@/types";

interface WeProtectNature {
  id: number;
  backgroundColor?: string;
  icon?: string;
  image?: Image;
  text?: string;
}

export interface AboutUsSectionProps {
  button: Button;
  descriptionWithColor: string;
  descriptionWithDefaultColor: string;
  title: string;
  weProtectNature: WeProtectNature[];
}
