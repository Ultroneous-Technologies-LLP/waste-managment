"use client";

import gsap from "gsap";
import { FC, useEffect, useRef } from "react";

import { FallBackImage, Title } from "@/components/common";
import { getImageUrl } from "@/utils";

import { OurAchievementsSectionProps } from "./types";

const SCROLL_DOWN = 1.2;
const SCROLL_UP = -1.2;
const DEFAULT_DELTA_Y = 0;

const OurAchievements: FC<OurAchievementsSectionProps> = ({ ourAchievementsImages, title }) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!sliderRef.current) {
      return;
    }

    tweenRef.current = gsap.to(sliderRef.current, {
      xPercent: -50,
      duration: 25,
      repeat: -1,
      ease: "none",
    });

    const onWheel = (e: WheelEvent): void => {
      if (!tweenRef.current) {
        return;
      }

      if (e.deltaY > DEFAULT_DELTA_Y) {
        tweenRef.current.timeScale(SCROLL_DOWN);
      } else {
        tweenRef.current.timeScale(SCROLL_UP);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: true });

    return (): void => {
      window.removeEventListener("wheel", onWheel);
      tweenRef.current?.kill();
    };
  }, []);

  return (
    <section aria-labelledby="our-achievements-title" className="pb-20 xl:pb-37.5" role="region">
      <Title className="pb-6 text-center md:pb-8" id="our-achievements-title" title={title} />

      <div
        aria-label="Our achievements slider"
        className="relative w-full overflow-hidden"
        role="list"
      >
        <div className="flex w-max" ref={sliderRef}>
          {[...ourAchievementsImages.images, ...ourAchievementsImages.images].map(
            (value, index) => (
              <div
                aria-label={`Achievement image ${value.id}`}
                className="mr-4 last:mr-0 xl:mr-6"
                key={`${value.id}-${index}`}
                role="listitem"
              >
                <FallBackImage
                  alt={value.alternativeText}
                  className="md:rounded-40 h-42.5 w-50 rounded-[20px] object-cover md:h-87 md:w-115 xl:h-87 xl:w-130.5"
                  height={348}
                  src={getImageUrl(value.url)}
                  title={value.alternativeText}
                  width={523}
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default OurAchievements;
