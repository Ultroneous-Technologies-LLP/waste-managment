import { Image } from "@/types";

export interface City {
  cityName: string;
  id: number;
  image: Image;
}

export interface CitiesWeCoveredSectionProps {
  cities: City[];
  title: string;
}
