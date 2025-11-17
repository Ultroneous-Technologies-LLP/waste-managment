import { Button, Image } from "@/types";

export interface IndustriesWeServedServices {
  id: number;
  title: string;
}

export interface AnimationImages {
  image: Image[];
}

export interface IndustriesWeServeSectionProps {
  button: Button;
  image: Image;
  industriesWeServeAnimation: AnimationImages;
  industriesWeServedServices: IndustriesWeServedServices[];
  mainTitle: string;
  title: string;
}
