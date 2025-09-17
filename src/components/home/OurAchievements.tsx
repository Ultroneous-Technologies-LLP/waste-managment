import { FC } from "react";
import { Title } from "@/components/common";
import { ourAchievementsSection } from "@/types/home-type";
import Image from "next/image";

interface OurAchievementsProps {
  data: ourAchievementsSection;
}

const OurAchievements: FC<OurAchievementsProps> = ({ data }) => {
  return (
    <section className="pb-20 xl:pb-37.5">
      <Title title={data.title} className="text-center pb-6 md:pb-8" />
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee">
          {data.images.map((value, idx) => (
            <div key={`first-${idx}`} className="mr-4 xl:mr-6 last:mr-0">
              <Image
                src={value.src}
                alt={`slider-img-${idx}`}
                width={523}
                height={348}
                className="w-50 h-42.5 md:w-115 md:h-87 xl:w-[523px] xl:h-[348px] object-cover rounded-[20px] md:rounded-[40px]"
              />
            </div>
          ))}
          {data.images.map((value, idx) => (
            <div key={`second-${idx}`} className="mr-4 xl:mr-6 last:mr-0">
              <Image
                src={value.src}
                alt={`slider-img-dup-${idx}`}
                width={523}
                height={348}
                className="w-50 h-42.5 md:w-115 md:h-87 xl:w-[523px] xl:h-[348px] object-cover rounded-[20px] md:rounded-[40px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAchievements;
