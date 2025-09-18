import { FC } from "react";

import { transformingWasteSection } from "@/types/home-type";
import { Container, NextImageWithFallback, Title } from "@/components/common";

interface TransformingWasteProps {
  data: transformingWasteSection;
}

const TransformingWaste: FC<TransformingWasteProps> = ({ data }) => {
  return (
    <Container
      className="py-20 xl:py-37.5"
      id="transforming-waste"
      role="region"
      aria-labelledby="transforming-waste-title"
    >
      {/* Section header */}
      <div className="flex flex-col gap-6 md:flex-row justify-between items-center pb-6 md:pb-8">
        <Title
          title={data.title}
          className="max-w-164.5 w-full text-center md:text-start"
          id="transforming-waste-title"
        />
        <p
          className="max-w-136 w-full text-sm/normal md:text-base/normal xl:text-xl/snug text-[#6F6F6F] font-light text-center md:text-start"
          aria-label="Section description"
        >
          {data.description}
        </p>
      </div>

      {/* Skills list */}
      <div
        className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
        role="list"
        aria-label="Transforming waste skills"
      >
        {data.skills.map((value) => (
          <button
            key={value.id}
            className="bg-anti-flash-white p-6 md:p-10 rounded-3xl flex flex-col xl:flex-row gap-4 xl:gap-6 items-start text-left"
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
              <h3 className="text-xl leading-normal md:text-2xl text-black pb-3 text-start">
                {value.title}
              </h3>
              <p className="text-xs leading-normal md:text-base text-[#565656] font-light text-start">
                {value.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </Container>
  );
};

export default TransformingWaste;
