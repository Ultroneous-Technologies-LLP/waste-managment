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

export type wasteManagementServices = {
  title: string;
  description: string;
  services: {
    id: number;
    title: string;
    description: string;
    alt: string;
    src: string;
  }[];
};

export type industriesWeServeSection = {
  mainTitle: string;
  services: {
    id: Number;
    title: string;
  }[];
  button: {
    label: string;
  };
  image: {
    src: string;
    alt: string;
  };
  title: string;
  animation: { id: number; src: string; alt: string }[];
};

export type transformingWasteSection = {
  title: string;
  description: string;
  skills: {
    id: number;
    title: string;
    description: string;
    alt: string;
    src: string;
  }[];
};

export type citiesWeCoveredSection = {
  title: string;
  cities: {
    id: number;
    cityName: string;
    alt: string;
    src: string;
  }[];
};

export type homeData = {
  heroSection: heroSection;
  aboutUsSection: aboutUsSection;
  wasteManagementServicesSection: wasteManagementServices;
  industriesWeServeSection: industriesWeServeSection;
  transformingWasteSection: transformingWasteSection;
  citiesWeCoveredSection: citiesWeCoveredSection;
};
