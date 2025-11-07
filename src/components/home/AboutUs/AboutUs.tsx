import { FC } from "react";

import { Button, Container, NextImageWithFallback, Title } from "@/components/common";
import { Arrow } from "@/components/icons";
import { AboutUsSectionProps } from "./types";

export const AboutUs: FC<AboutUsSectionProps> = ({
  buttonLabel,
  descriptionWithBlackText,
  descriptionWithGreenText,
  title,
  weProtectNature,
}) => (
  <Container
    className="pt-20 xl:pt-37.5"
    id="about-us"
    role="region"
    aria-labelledby="about-us-title"
  >
    <div className="mx-auto md:max-w-133.5 xl:max-w-216.5">
      <Title title={title} className="text-center" id="about-us-title" />
      <p
        className="py-6 text-center text-sm/normal font-light md:py-8 md:text-base/normal xl:text-2xl/normal"
        aria-label="About us description"
      >
        {descriptionWithBlackText}
        <span className="text-primary-green font-bold">{descriptionWithGreenText}</span>
      </p>
      <div className="mx-auto max-w-fit">
        <Button aria-label={buttonLabel}>{buttonLabel}</Button>
      </div>
    </div>
    <div
      className="grid gap-2 pt-20 md:grid-cols-2 md:pt-25 xl:grid-cols-4 xl:pt-37.5"
      role="group"
      aria-label="We Protect Nature highlights"
    >
      <div
        className="bg-anti-flash-white mx-auto flex h-43 w-full max-w-89.5 items-center justify-center rounded-full md:h-50 md:max-w-89 xl:max-w-82.5"
        role="presentation"
      >
        <h3
          className="text-6xl leading-snug text-black"
          aria-label={`We protect nature: ${weProtectNature.firstPart}`}
        >
          {weProtectNature.firstPart}
        </h3>
      </div>
      <div
        className="relative mx-auto flex h-43 w-full max-w-89.5 items-center justify-center rounded-full md:h-50 md:max-w-89 xl:max-w-82.5"
        role="img"
        aria-label={weProtectNature.secondPart.title}
      >
        <h3 className="absolute text-6xl leading-snug text-white">
          {weProtectNature.secondPart.title}
        </h3>
        <NextImageWithFallback
          alt={weProtectNature.secondPart.alt}
          src={weProtectNature.secondPart.src}
          width={330}
          height={200}
          className="h-full w-full"
          title={weProtectNature.secondPart.alt}
        />
      </div>
      <div
        className="bg-primary-yellow mx-auto flex h-43 w-full max-w-89.5 items-center justify-center rounded-full md:h-50 md:max-w-89 xl:max-w-82.5"
        role="presentation"
      >
        <Arrow width={62} height={64} className="text-black" aria-hidden="true" />
      </div>
      <div
        className="relative mx-auto flex h-43 w-full max-w-89.5 items-center justify-center rounded-full md:h-50 md:max-w-89 xl:max-w-82.5"
        role="img"
        aria-label={weProtectNature.thirdPart.title}
      >
        <h3 className="absolute text-6xl leading-snug text-white">
          {weProtectNature.thirdPart.title}
        </h3>
        <NextImageWithFallback
          alt={weProtectNature.thirdPart.alt}
          src={weProtectNature.thirdPart.src}
          title={weProtectNature.thirdPart.alt}
          width={330}
          height={200}
          className="h-full w-full"
        />
      </div>
    </div>
  </Container>
);
