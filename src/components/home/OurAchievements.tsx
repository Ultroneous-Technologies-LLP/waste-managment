import { FC } from "react";

import { NextImageWithFallback, Title } from "@/components/common";
import { ourAchievementsSection } from "@/types/home-type";

interface OurAchievementsProps {
  data: ourAchievementsSection;
}

const OurAchievements: FC<OurAchievementsProps> = ({ data }) => {
  return (
    <section className="pb-20 xl:pb-37.5" role="region" aria-labelledby="our-achievements-title">
      <Title id="our-achievements-title" title={data.title} className="pb-6 text-center md:pb-8" />

      <div
        className="relative w-full overflow-hidden"
        role="list"
        aria-label="Our achievements slider"
      >
        <div className="animate-marquee flex w-max">
          {data.images.map((value) => (
            <div
              key={`first-${value.id}`}
              className="mr-4 last:mr-0 xl:mr-6"
              role="listitem"
              aria-label={`Achievement image ${value.id}`}
            >
              <NextImageWithFallback
                src={value.src}
                alt={value.alt || `Achievement image ${value.id}`}
                width={523}
                height={348}
                className="md:rounded-40 h-42.5 w-50 rounded-[20px] object-cover md:h-87 md:w-115 xl:h-87 xl:w-130.5"
                title={value.alt}
              />
            </div>
          ))}

          {data.images.map((value) => (
            <div
              key={`second-${value.id}`}
              className="mr-4 last:mr-0 xl:mr-6"
              role="listitem"
              aria-label={`Duplicate achievement image ${value.id}`}
            >
              <NextImageWithFallback
                src={value.src}
                alt={value.alt || `Duplicate achievement image ${value.id}`}
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
};

export default OurAchievements;
