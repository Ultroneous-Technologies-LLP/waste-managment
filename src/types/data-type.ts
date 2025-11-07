import {
  AboutUsSectionProps,
  CitiesWeCoveredSectionProps,
  DrivingImpactSectionProps,
  FaqSectionsProps,
  FooterProps,
  GetMoreUpdatesSectionProps,
  HeaderProps,
  HeroSectionProps,
  IndustriesWeServeSectionProps,
  OurAchievementsSectionProps,
  OurProcessSectionProps,
  TransformingWasteSectionProps,
  WasteManagementServicesSectionProps,
} from "@/components";

export type layoutData = {
  header: HeaderProps;
  footer: FooterProps;
};

export type homeData = {
  aboutUsSection: AboutUsSectionProps;
  citiesWeCoveredSection: CitiesWeCoveredSectionProps;
  drivingImpactSection: DrivingImpactSectionProps;
  faqSections: FaqSectionsProps;
  getMoreUpdatesSection: GetMoreUpdatesSectionProps;
  heroSection: HeroSectionProps;
  industriesWeServeSection: IndustriesWeServeSectionProps;
  ourAchievementsSection: OurAchievementsSectionProps;
  ourProcessSection: OurProcessSectionProps;
  transformingWasteSection: TransformingWasteSectionProps;
  wasteManagementServicesSection: WasteManagementServicesSectionProps;
};
