import { FC } from "react";

import { Container, NextImageWithFallback, Title } from "@/components/common";
import { TransformingWasteSectionProps } from "@/components";

export const TransformingWaste: FC<TransformingWasteSectionProps> = ({
  description,
  skills,
  title,
}) => (
  <Container
    className="py-20 xl:py-37.5"
    id="transforming-waste"
    role="region"
    aria-labelledby="transforming-waste-title"
  >
    {/* Section header */}
    <div className="flex flex-col items-center justify-between gap-6 pb-6 md:flex-row md:pb-8">
      <Title
        title={title}
        className="w-full max-w-164.5 text-center md:text-start"
        id="transforming-waste-title"
      />
      <p
        className="w-full max-w-136 text-center text-sm/normal font-light text-[#6F6F6F] md:text-start md:text-base/normal xl:text-xl/snug"
        aria-label="Section description"
      >
        {description}
      </p>
    </div>

    {/* Skills list */}
    <div
      className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      role="list"
      aria-label="Transforming waste skills"
    >
      {skills.map((value) => (
        <button
          key={value.id}
          className="bg-anti-flash-white flex flex-col items-start gap-4 rounded-3xl p-6 text-left md:p-10 xl:flex-row xl:gap-6"
          aria-label={`${value.title}: ${value.description}`}
        >
          <NextImageWithFallback
            alt={value.alt}
            src={value.src}
            width={64}
            height={64}
            className="size-13 md:size-16"
            title={value.alt}
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
