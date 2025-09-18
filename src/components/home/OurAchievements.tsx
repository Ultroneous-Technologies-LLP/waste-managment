import { FC } from "react";
import Image from "next/image";

import { Title } from "@/components/common";
import { ourAchievementsSection } from "@/types/home-type";

interface OurAchievementsProps {
  data: ourAchievementsSection;
}

const OurAchievements: FC<OurAchievementsProps> = ({ data }) => {
  return (
    <section
      className="pb-20 xl:pb-37.5"
      role="region"
      aria-labelledby="our-achievements-title"
    >
      <Title
        id="our-achievements-title"
        title={data.title}
        className="text-center pb-6 md:pb-8"
      />

      <div
        className="relative w-full overflow-hidden"
        role="list"
        aria-label="Our achievements slider"
      >
        <div className="flex w-max animate-marquee">
          {data.images.map((value) => (
            <div
              key={`first-${value.id}`}
              className="mr-4 xl:mr-6 last:mr-0"
              role="listitem"
              aria-label={`Achievement image ${value.id}`}
            >
              <Image
                src={value.src}
                alt={value.alt || `Achievement image ${value.id}`}
                width={523}
                height={348}
                className="w-50 h-42.5 md:w-115 md:h-87 xl:w-130.5 xl:h-87 object-cover rounded-[20px] md:rounded-40"
                title={value.alt}
              />
            </div>
          ))}

          {data.images.map((value) => (
            <div
              key={`second-${value.id}`}
              className="mr-4 xl:mr-6 last:mr-0"
              role="listitem"
              aria-label={`Duplicate achievement image ${value.id}`}
            >
              <Image
                src={value.src}
                alt={value.alt || `Duplicate achievement image ${value.id}`}
                width={523}
                height={348}
                className="w-50 h-42.5 md:w-115 md:h-87 xl:w-130.5 xl:h-87 object-cover rounded-[20px] md:rounded-40"
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
