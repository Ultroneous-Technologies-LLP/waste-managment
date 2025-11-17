import { PropsWithChildren } from "react";

import {
  AboutUsSectionProps,
  HeroSectionProps,
  IndustriesWeServeSectionProps,
  OurProcessSectionProps,
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
  hero: HeroSectionProps;
  industriesWeServe: IndustriesWeServeSectionProps;
  ourProcess: OurProcessSectionProps;
  wasteManagementServices: WasteManagementServicesProps;
}
