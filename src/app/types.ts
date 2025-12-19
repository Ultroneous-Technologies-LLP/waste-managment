import { PropsWithChildren } from "react";

import { AboutUsSectionProps } from "@/components/home/AboutUs/types";
import { CitiesWeCoveredSectionProps } from "@/components/home/CitiesWeCovered/types";
import { DrivingImpactSectionProps } from "@/components/home/DrivingImpact/types";
import { FaqSectionsProps } from "@/components/home/FAQ/types";
import { GetMoreUpdatesSectionProps } from "@/components/home/GetMoreUpdates/types";
import { HeroSectionProps } from "@/components/home/HomeHero/types";
import { IndustriesWeServeSectionProps } from "@/components/home/IndustriesWeServe/types";
import { OurAchievementsSectionProps } from "@/components/home/OurAchievements/types";
import { OurProcessSectionProps } from "@/components/home/OurProcess/types";
import { TransformingWasteSectionProps } from "@/components/home/TransformingWaste/types";
import { WasteManagementServicesProps } from "@/components/home/WasteManagementServices/types";
import { FooterProps } from "@/components/layout/Footer/types";
import { HeaderProps } from "@/components/layout/Header/types";

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
