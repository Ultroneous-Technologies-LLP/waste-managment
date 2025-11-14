import { Image } from "@/types";

export interface RangeOfWasteManagementServices {
  description: string;
  id: number;
  image: Image;
  title: string;
}

export interface ServiceItemProps {
  data: RangeOfWasteManagementServices;
}

export interface WasteManagementServicesProps {
  description: string;
  rangeOfWasteManagementServices: RangeOfWasteManagementServices[];
  title: string;
}
