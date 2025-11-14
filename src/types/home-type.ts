export interface heroSection {
  title: string;
  description: string;
  buttonLabel: string;
  src: string;
  alt: string;
}

export interface aboutUsSection {
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
}

export interface wasteManagementServices {
  title: string;
  description: string;
  services: {
    id: number;
    title: string;
    description: string;
    alt: string;
    src: string;
  }[];
}

export interface industriesWeServeSection {
  mainTitle: string;
  services: {
    id: number;
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
}

export interface ourProcessSection {
  title: string;
  description: string;
  video: { videoSrc: string; posterSrc: string; alt: string };
}

export interface transformingWasteSection {
  title: string;
  description: string;
  skills: {
    id: number;
    title: string;
    description: string;
    alt: string;
    src: string;
  }[];
}

export interface citiesWeCoveredSection {
  title: string;
  cities: {
    id: number;
    cityName: string;
    alt: string;
    src: string;
  }[];
}

export interface drivingImpactSection {
  title: string;
  sustainabilityMetrics: { id: number; title: string; number: string }[];
  button: {
    label: string;
  };
}

export interface faqSections {
  title: string;
  description: string;
  faq: {
    id: number;
    questions: string;
    ans: string;
  }[];
  haveQuestions: { title: string; description: string; buttonLabel: string };
}

export interface getMoreUpdatesSection {
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
}

export interface ourAchievementsSection {
  title: string;
  images: {
    id: number;
    src: string;
    alt: string;
  }[];
}

export interface homeData {
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
}
