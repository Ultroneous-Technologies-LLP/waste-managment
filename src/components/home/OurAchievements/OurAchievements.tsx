import { FC } from "react";

import { NextImageWithFallback, Title } from "@/components/common";

import { OurAchievementsSectionProps } from "./types";

export const OurAchievements: FC<OurAchievementsSectionProps> = ({ images, title }) => (
  <section className="pb-20 xl:pb-37.5" role="region" aria-labelledby="our-achievements-title">
    <Title id="our-achievements-title" title={title} className="pb-6 text-center md:pb-8" />
    <div
      className="relative w-full overflow-hidden"
      role="list"
      aria-label="Our achievements slider"
    >
      <div className="animate-marquee flex w-max">
        {images.map((value) => (
          <div
            key={`first-${value.alt}`}
            className="mr-4 last:mr-0 xl:mr-6"
            role="listitem"
            aria-label={`Achievement image ${value.alt}`}
          >
            <NextImageWithFallback
              src={value.src}
              alt={value.alt || `Achievement image ${value.alt}`}
              width={523}
              height={348}
              className="md:rounded-40 h-42.5 w-50 rounded-[20px] object-cover md:h-87 md:w-115 xl:h-87 xl:w-130.5"
              title={value.alt}
            />
          </div>
        ))}
        {images.map((value) => (
          <div
            key={`second-${value.alt}`}
            className="mr-4 last:mr-0 xl:mr-6"
            role="listitem"
            aria-label={`Duplicate achievement image ${value.alt}`}
          >
            <NextImageWithFallback
              src={value.src}
              alt={value.alt || `Duplicate achievement image ${value.alt}`}
              width={523}
              height={348}
              className="md:rounded-40 h-42.5 w-50 rounded-[20px] object-cover md:h-87 md:w-115 xl:h-87 xl:w-130.5"
              title={value.alt}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);
