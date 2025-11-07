import { FC } from "react";

import { Button, Container, NextImageWithFallback, Title } from "@/components/common";
import { Arrow } from "@/components/icons";
import { aboutUsSection } from "@/types/home-type";

interface AboutUsProps {
  data: aboutUsSection;
}

const AboutUs: FC<AboutUsProps> = ({ data }) => {
  return (
    <Container
      className="pt-20 xl:pt-37.5"
      id="about-us"
      role="region"
      aria-labelledby="about-us-title"
    >
      <div className="mx-auto md:max-w-133.5 xl:max-w-216.5">
        <Title title={data.title} className="text-center" id="about-us-title" />
        <p
          className="py-6 text-center text-sm/normal font-light md:py-8 md:text-base/normal xl:text-2xl/normal"
          aria-label="About us description"
        >
          {data.descriptionWithBlackText}
          <span className="text-primary-green font-bold">{data.descriptionWithGreenText}</span>
        </p>
        <div className="mx-auto max-w-fit">
          <Button aria-label={data.buttonLabel}>{data.buttonLabel}</Button>
        </div>
      </div>

      {/* We Protect Nature Section */}
      <div
        className="grid gap-2 pt-20 md:grid-cols-2 md:pt-25 xl:grid-cols-4 xl:pt-37.5"
        role="group"
        aria-label="We Protect Nature highlights"
      >
        {/* First Part */}
        <div
          className="bg-anti-flash-white mx-auto flex h-43 w-full max-w-89.5 items-center justify-center rounded-full md:h-50 md:max-w-89 xl:max-w-82.5"
          role="presentation"
        >
          <h3
            className="text-6xl leading-snug text-black"
            aria-label={`We protect nature: ${data.weProtectNature.firstPart}`}
          >
            {data.weProtectNature.firstPart}
          </h3>
        </div>

        {/* Second Part */}
        <div
          className="relative mx-auto flex h-43 w-full max-w-89.5 items-center justify-center rounded-full md:h-50 md:max-w-89 xl:max-w-82.5"
          role="img"
          aria-label={data.weProtectNature.secondPart.title}
        >
          <h3 className="absolute text-6xl leading-snug text-white">
            {data.weProtectNature.secondPart.title}
          </h3>
          <NextImageWithFallback
            alt={data.weProtectNature.secondPart.alt}
            src={data.weProtectNature.secondPart.src}
            width={330}
            height={200}
            className="h-full w-full"
            title={data.weProtectNature.secondPart.alt}
          />
        </div>

        {/* Arrow Icon */}
        <div
          className="bg-primary-yellow mx-auto flex h-43 w-full max-w-89.5 items-center justify-center rounded-full md:h-50 md:max-w-89 xl:max-w-82.5"
          role="presentation"
        >
          <Arrow width={62} height={64} className="text-black" aria-hidden="true" />
        </div>

        {/* Third Part */}
        <div
          className="relative mx-auto flex h-43 w-full max-w-89.5 items-center justify-center rounded-full md:h-50 md:max-w-89 xl:max-w-82.5"
          role="img"
          aria-label={data.weProtectNature.thirdPart.title}
        >
          <h3 className="absolute text-6xl leading-snug text-white">
            {data.weProtectNature.thirdPart.title}
          </h3>
          <NextImageWithFallback
            alt={data.weProtectNature.thirdPart.alt}
            src={data.weProtectNature.thirdPart.src}
            title={data.weProtectNature.thirdPart.alt}
            width={330}
            height={200}
            className="h-full w-full"
          />
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
