import { ComponentType } from "react";

import { Behance, Dribble, Instagram, LinkedIn } from "@/components/icons";

export const renderIcon = (label: string): ComponentType => {
  switch (label) {
    case "behance":
      return Behance;
    case "dribbble":
      return Dribble;
    case "instagram":
      return Instagram;
    case "linkedin":
      return LinkedIn;
    default:
      return Behance;
  }
};

export const LAST_ITEM_OFFSET = 1;

const currentDate = new Date();
export const currentYear = currentDate.getFullYear();
