import { Image } from "@/types";

export interface RangeOfWasteManagementService {
  description: string;
  id: number;
  image: Image;
  title: string;
}

export interface ServiceItemProps {
  data: RangeOfWasteManagementService;
}

export interface WasteManagementServicesProps {
  description: string;
  rangeOfWasteManagementServices: RangeOfWasteManagementService[];
  title: string;
}
