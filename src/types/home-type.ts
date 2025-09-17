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

export type ourProcessSection = {
  title: string;
  description: string;
  video: { videoSrc: string; posterSrc: string; alt: string };
  buttonImg: {
    src: string;
    alt: string;
  };
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

export type drivingImpactSection = {
  title: string;
  sustainabilityMetrics: { id: number; title: string; number: string }[];
  button: {
    label: string;
  };
};

export type faqSections = {
  title: string;
  description: string;
  faq: {
    id: number;
    questions: string;
    ans: string;
  }[];
  haveQuestions: { title: string; description: string; buttonLabel: string };
};

export type getMoreUpdatesSection = {
  title: string;
  latestBlog: {
    img: {
      src: string;
      alt: string;
    };
    category: string;
    title: string;
    descriptions: string;
    date: string;
    link: string;
  };
  blogList: {
    id: 1;
    category: string;
    title: string;
    descriptions: string;
    link: string;
    src: string;
    alt: string;
  }[];
  button: {
    buttonLabel: string;
  };
};

export type ourAchievementsSection = {
  title: string;
  images: {
    src: string;
    alt: string;
  }[];
};

export type homeData = {
  heroSection: heroSection;
  aboutUsSection: aboutUsSection;
  wasteManagementServicesSection: wasteManagementServices;
  industriesWeServeSection: industriesWeServeSection;
  ourProcessSection: ourProcessSection;
  transformingWasteSection: transformingWasteSection;
  citiesWeCoveredSection: citiesWeCoveredSection;
  drivingImpactSection: drivingImpactSection;
  getMoreUpdatesSection: getMoreUpdatesSection;
  ourAchievementsSection: ourAchievementsSection;
  faqSections: faqSections;
};
