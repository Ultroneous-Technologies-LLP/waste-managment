import { Button, Container, NextImageWithFallback, Title, ArrowWithBackGround } from "@/components";
import { FC } from "react";
import { HeroSectionProps } from "./types";

export const HomeHero: FC<HeroSectionProps> = ({ alt, buttonLabel, description, src, title }) => (
  <Container
    className="grid scroll-mt-30 grid-cols-1 gap-6 pt-6 xl:grid-cols-2"
    id="home"
    role="region"
    aria-labelledby="home-hero-title"
  >
    <div
      className="bg-primary-yellow rounded-3xl p-6 md:p-14 xl:rounded-[56px]"
      role="presentation"
    >
      <Title title={title} className="w-full min-w-77.5 xl:max-w-100" isMainTitle />
      <p
        className="py-4 text-sm/normal font-light md:text-base/normal xl:text-lg/normal"
        aria-label="Description"
      >
        {description}
      </p>
      <Button className="w-fit!" aria-label={buttonLabel}>
        {buttonLabel}
      </Button>

      <div
        className="mt-11 flex gap-2 md:mt-17.5 xl:mt-11"
        role="group"
        aria-label="Hero navigation arrows"
      >
        <ArrowWithBackGround
          className="group size-12 border-transparent bg-white hover:border-black hover:bg-transparent"
          svgClassName="group-hover:text-white text-black"
          role="button"
          tabIndex={0}
          aria-label="Previous slide"
        />
        <ArrowWithBackGround
          className="group size-12 border-transparent bg-white hover:border-black hover:bg-transparent"
          svgClassName="rotate-180 group-hover:text-white text-black"
          role="button"
          tabIndex={0}
          aria-label="Next slide"
        />
      </div>
    </div>

    <div>
      <NextImageWithFallback
        alt={alt}
        title={alt}
        src={src}
        width={658}
        height={658}
        className="h-full max-h-50 w-full rounded-3xl object-cover md:max-h-110 xl:max-h-full xl:rounded-[50px]"
        priority
      />
    </div>
  </Container>
);
