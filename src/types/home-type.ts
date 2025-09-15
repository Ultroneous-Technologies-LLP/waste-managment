export type heroSection = {
  title: string;
  description: string;
  buttonLabel: string;
  src: string;
  alt: string;
};

export type aboutUsSection = {
  title: string;
  descriptionWithBlackText: string;
  descriptionWithGreenText: string;
  buttonLabel: string;
  weProtectNature: {
    firstPart: string;
    secondPart: {
      src: string;
      alt: string;
      title: string;
    };
    thirdPart: {
      src: string;
      alt: string;
      title: string;
    };
  };
};

export type homeData = {
  heroSection: heroSection;
  aboutUsSection: aboutUsSection;
};
