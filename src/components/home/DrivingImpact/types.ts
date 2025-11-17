import { Button } from "@/types";

interface SustainabilityMetrics {
  id: number;
  number: string;
  title: string;
}

export interface AnimatedNumberProps {
  value: number;
  duration?: number;
}

export interface DrivingImpactSectionProps {
  button: Button;
  sustainabilityMetrics: SustainabilityMetrics[];
  title: string;
}
