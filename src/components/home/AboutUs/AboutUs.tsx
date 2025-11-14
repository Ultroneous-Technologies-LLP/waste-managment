import clsx from "clsx";
import { FC } from "react";

import { Button, Container, NextImageWithFallback, Title, Arrow } from "@/components";
import { getImageUrl } from "@/utils";

import { AboutUsSectionProps } from "./types";

export const AboutUs: FC<AboutUsSectionProps> = ({
  button,
  descriptionWithColor,
  descriptionWithDefaultColor,
  title,
  weProtectNature,
}) => (
  <Container
    aria-labelledby="about-us-title"
    className="pt-20 xl:pt-37.5"
    id="about-us"
    role="region"
  >
    <div className="mx-auto md:max-w-133.5 xl:max-w-216.5">
      <Title className="text-center" id="about-us-title" title={title} />
      <p
        aria-label="About us description"
        className="py-6 text-center text-sm/normal font-light md:py-8 md:text-base/normal xl:text-2xl/normal"
      >
        {descriptionWithDefaultColor}
        <span className="text-primary-green font-bold">{descriptionWithColor}</span>
      </p>
      <div className="mx-auto max-w-fit">
        <Button aria-label={button.ariaLabel} as="link" href={button.href}>
          {button.label}
        </Button>
      </div>
    </div>
    <div
      aria-label="We Protect Nature highlights"
      className="grid gap-2 pt-20 md:grid-cols-2 md:pt-25 xl:grid-cols-4 xl:pt-37.5"
      role="group"
    >
      {weProtectNature.map(({ backgroundColor, icon, image, text, id }) => (
        <div
          className={clsx(
            "relative mx-auto flex h-43 w-full max-w-89.5 items-center justify-center rounded-full md:h-50 md:max-w-89 xl:max-w-82.5",
            backgroundColor && `bg-${backgroundColor}`
          )}
          key={id}
          role="presentation"
        >
          <h3
            className={clsx(
              `absolute text-6xl leading-snug ${image ? "text-white" : "text-black"}`
            )}
          >
            {text}
          </h3>
          {image && (
            <NextImageWithFallback
              alt={image.alternativeText}
              className="h-full w-full"
              height={200}
              src={getImageUrl(image.url)}
              title={image.alternativeText}
              width={330}
            />
          )}
          {icon && <Arrow aria-hidden="true" className="text-black" height={64} width={62} />}
        </div>
      ))}
    </div>
  </Container>
);
