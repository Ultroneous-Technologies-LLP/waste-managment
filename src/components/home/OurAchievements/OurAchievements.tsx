import { FC } from "react";

import { NextImageWithFallback, Title } from "@/components/common";
import { getImageUrl } from "@/utils";

import { OurAchievementsSectionProps } from "./types";

export const OurAchievements: FC<OurAchievementsSectionProps> = ({
  ourAchievementsImages,
  title,
}) => (
  <section aria-labelledby="our-achievements-title" className="pb-20 xl:pb-37.5" role="region">
    <Title className="pb-6 text-center md:pb-8" id="our-achievements-title" title={title} />
    <div
      aria-label="Our achievements slider"
      className="relative w-full overflow-hidden"
      role="list"
    >
      <div className="animate-marquee flex w-max">
        {ourAchievementsImages.images.map((value) => (
          <div
            aria-label={`Achievement image ${value.id}`}
            className="mr-4 last:mr-0 xl:mr-6"
            key={`first-${value.id}`}
            role="listitem"
          >
            <NextImageWithFallback
              alt={value.alternativeText}
              className="md:rounded-40 h-42.5 w-50 rounded-[20px] object-cover md:h-87 md:w-115 xl:h-87 xl:w-130.5"
              height={348}
              src={getImageUrl(value.url)}
              title={value.alternativeText}
              width={523}
            />
          </div>
        ))}
        {ourAchievementsImages.images.map((value) => (
          <div
            aria-label={`Duplicate achievement image ${value.id}`}
            className="mr-4 last:mr-0 xl:mr-6"
            key={`second-${value.id}`}
            role="listitem"
          >
            <NextImageWithFallback
              alt={value.alternativeText}
              className="md:rounded-40 h-42.5 w-50 rounded-[20px] object-cover md:h-87 md:w-115 xl:h-87 xl:w-130.5"
              height={348}
              src={getImageUrl(value.url)}
              title={value.alternativeText}
              width={523}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);
