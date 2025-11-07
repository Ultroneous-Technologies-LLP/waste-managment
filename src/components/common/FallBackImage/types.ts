import { ImageProps } from "next/image";

export interface NextImageWithFallbackProps extends Omit<ImageProps, "src"> {
  alt: string;
  src: string;
  fallbackSrc?: string;
}
