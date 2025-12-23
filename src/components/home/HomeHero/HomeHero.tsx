import { FC } from "react";

import { Button, Container, FallBackImage, Title } from "@/components/common";
import { ArrowWithBackGround } from "@/components/icons";
import { getImageUrl } from "@/utils";

import { HeroSectionProps } from "./types";

const HomeHero: FC<HeroSectionProps> = ({ button, description, title, image }) => (
  <Container
    aria-labelledby="home-hero-title"
    className="grid scroll-mt-30 grid-cols-1 gap-6 pt-6 xl:grid-cols-2"
    id="home"
    role="region"
  >
    <div
      className="bg-primary-yellow rounded-3xl p-6 md:p-14 xl:rounded-[56px]"
      role="presentation"
    >
      <Title className="w-full min-w-77.5 xl:max-w-100" isMainTitle title={title} />
      <p
        aria-label="Description"
        className="py-4 text-sm/normal font-light md:text-base/normal xl:text-lg/normal"
      >
        {description}
      </p>
      <Button as="link" className="w-fit!" href={button.href}>
        {button.label}
      </Button>
      <div
        aria-label="Hero navigation arrows"
        className="mt-11 flex gap-2 md:mt-17.5 xl:mt-11"
        role="group"
      >
        <ArrowWithBackGround
          aria-label="Previous slide"
          className="group size-12 border-transparent bg-white hover:border-black hover:bg-transparent"
          role="button"
          svgClassName="group-hover:text-white text-black focus:outline-o"
          tabIndex={0}
        />
        <ArrowWithBackGround
          aria-label="Next slide"
          className="group size-12 border-transparent bg-white hover:border-black hover:bg-transparent"
          role="button"
          svgClassName="rotate-180 group-hover:text-white text-black focus:outline-o"
          tabIndex={0}
        />
      </div>
    </div>
    <div>
      <FallBackImage
        alt={image.alternativeText}
        className="h-full max-h-50 w-full rounded-3xl object-cover md:max-h-110 xl:max-h-full xl:rounded-[50px]"
        height={658}
        preload
        src={getImageUrl(image.url)}
        title={image.alternativeText}
        width={658}
      />
    </div>
  </Container>
);

export default HomeHero;
