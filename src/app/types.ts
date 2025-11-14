import { PropsWithChildren } from "react";

import { HeroSectionProps } from "@/components";
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
  hero: HeroSectionProps;
}
