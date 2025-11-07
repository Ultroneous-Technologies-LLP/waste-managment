interface Button {
  label: string;
}

interface SustainabilityMetrics {
  id: number;
  number: string;
  title: string;
}

export interface AnimatedNumberProps {
  duration?: number;
  value: number;
}

export interface DrivingImpactSectionProps {
  button: Button;
  sustainabilityMetrics: SustainabilityMetrics[];
  title: string;
}
