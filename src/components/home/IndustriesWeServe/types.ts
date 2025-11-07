import { Image } from "@/types";

interface Services {
  id: number;
  title: string;
}

interface Animation extends Image {
  id: number;
}

interface Button {
  label: string;
}

export interface IndustriesWeServeSectionProps {
  mainTitle: string;
  services: Services[];
  button: Button;
  image: Image;
  title: string;
  animation: Animation[];
}
