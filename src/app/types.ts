import { PropsWithChildren } from "react";

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
  WasteManagementServicesProps,
} from "@/components";

export interface LayoutDataType {
  footer: FooterProps;
  header: HeaderProps;
}

export interface LayoutClientProps extends PropsWithChildren {
  footer: LayoutDataType["footer"];
  header: LayoutDataType["header"];
}

export interface HomePageDataTypes {
  aboutUs: AboutUsSectionProps;
  citiesWeCovered: CitiesWeCoveredSectionProps;
  drivingImpact: DrivingImpactSectionProps;
  faq: FaqSectionsProps;
  getMoreUpdates: GetMoreUpdatesSectionProps;
  hero: HeroSectionProps;
  industriesWeServe: IndustriesWeServeSectionProps;
  ourAchievements: OurAchievementsSectionProps;
  ourProcess: OurProcessSectionProps;
  transformingWaste: TransformingWasteSectionProps;
  wasteManagementServices: WasteManagementServicesProps;
}
