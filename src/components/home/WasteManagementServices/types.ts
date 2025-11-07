interface Services {
  alt: string;
  description: string;
  id: number;
  src: string;
  title: string;
}

export interface ServiceItemProps {
  value: Services;
}

export interface WasteManagementServicesSectionProps {
  description: string;
  services: Services[];
  title: string;
}
