export interface Button {
  href: string;
  label: string;
  ariaLabel?: string;
  variant?: string;
}

export interface Image {
  alternativeText: string;
  url: string;
  id?: number;
}
