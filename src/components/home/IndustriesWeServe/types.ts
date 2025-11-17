import { Button, Image } from "@/types";

export interface IndustriesWeServedService {
  id: number;
  title: string;
}

export interface AnimationImage {
  image: Image[];
}

export interface IndustriesWeServeSectionProps {
  button: Button;
  image: Image;
  industriesWeServeAnimation: AnimationImage;
  industriesWeServedServices: IndustriesWeServedService[];
  mainTitle: string;
  title: string;
}
