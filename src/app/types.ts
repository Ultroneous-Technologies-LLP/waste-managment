import { PropsWithChildren } from "react";

import {
  AboutUsSectionProps,
  CitiesWeCoveredSectionProps,
  DrivingImpactSectionProps,
  FaqSectionsProps,
  GetMoreUpdatesSectionProps,
  HeroSectionProps,
  IndustriesWeServeSectionProps,
  OurAchievementsSectionProps,
  OurProcessSectionProps,
  TransformingWasteSectionProps,
  WasteManagementServicesProps,
} from "@/components";
import { footer, header } from "@/types/layout-type";

export interface LayoutDataType {
  footer: footer;
  header: header;
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
