import { FC } from "react";

import { Container, NextImageWithFallback, Title } from "@/components/common";
import { getImageUrl } from "@/utils";

import { TransformingWasteSectionProps } from "./types";

export const TransformingWaste: FC<TransformingWasteSectionProps> = ({
  description,
  transformingWastesKills,
  title,
}) => (
  <Container
    aria-labelledby="transforming-waste-title"
    className="py-20 xl:py-37.5"
    id="transforming-waste"
    role="region"
  >
    <div className="flex flex-col items-center justify-between gap-6 pb-6 md:flex-row md:pb-8">
      <Title
        className="w-full max-w-164.5 text-center md:text-start"
        id="transforming-waste-title"
        title={title}
      />
      <p
        aria-label="Section description"
        className="w-full max-w-136 text-center text-sm/normal font-light text-[#6F6F6F] md:text-start md:text-base/normal xl:text-xl/snug"
      >
        {description}
      </p>
    </div>
    <div
      aria-label="Transforming waste transformingWastesKills"
      className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      role="list"
    >
      {transformingWastesKills.map((value) => (
        <button
          aria-label={`${value.title}: ${value.description}`}
          className="bg-anti-flash-white flex flex-col items-start gap-4 rounded-3xl p-6 text-left md:p-10 xl:flex-row xl:gap-6"
          key={value.id}
        >
          <NextImageWithFallback
            alt={value.image.alternativeText}
            className="size-13 md:size-16"
            height={64}
            src={getImageUrl(value.image.url)}
            title={value.image.alternativeText}
            width={64}
          />
          <div>
            <h3 className="pb-3 text-start text-xl leading-normal text-black md:text-2xl">
              {value.title}
            </h3>
            <p className="text-start text-xs leading-normal font-light text-[#565656] md:text-base">
              {value.description}
            </p>
          </div>
        </button>
      ))}
    </div>
  </Container>
);
