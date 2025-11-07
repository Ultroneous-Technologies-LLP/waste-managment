interface WeProtectNature {
  firstPart: string;
  secondPart: ImageWithTitle;
  thirdPart: ImageWithTitle;
}

interface ImageWithTitle {
  alt: string;
  src: string;
  title: string;
}

export interface AboutUsSectionProps {
  buttonLabel: string;
  descriptionWithBlackText: string;
  descriptionWithGreenText: string;
  title: string;
  weProtectNature: WeProtectNature;
}
