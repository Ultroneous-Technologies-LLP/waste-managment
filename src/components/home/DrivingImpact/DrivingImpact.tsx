import { FC } from "react";

import { AnimatedNumber } from "./AnimatedNumber";
import { DrivingImpactSectionProps } from "./types";
import { Button, Container, Title } from "@/components";

export const DrivingImpact: FC<DrivingImpactSectionProps> = ({
  button,
  sustainabilityMetrics,
  title,
}) => (
  <Container
    className="flex flex-col gap-6 py-12.5 md:py-20 xl:flex-row"
    backgroundClassName="bg-primary-yellow scroll-mt-30"
    id="impact"
    role="region"
    aria-labelledby="impact-title"
  >
    <div className="mx-auto w-full max-w-117.5">
      <Title title={title} className="text-center xl:text-start" id="impact-title" />
    </div>
    <div className="mx-auto w-full max-w-211.5">
      <div className="grid gap-10 xl:grid-cols-3">
        {sustainabilityMetrics.map((value) => {
          const cleanNumber = Number(value.number.replace(/,/g, ""));
          return (
            <div key={value.id} role="group" aria-labelledby={`metric-${value.id}-title`}>
              <h3
                id={`metric-${value.id}-title`}
                className="h-12 text-center text-base leading-normal text-black xl:text-start"
              >
                {value.title}
              </h3>
              <hr className="text-primary-green/40 my-3 hidden xl:block" />
              <h4
                className="text-center text-5xl leading-normal font-bold text-black xl:text-start"
                aria-live="polite"
              >
                <AnimatedNumber value={cleanNumber} duration={2000} />
              </h4>
            </div>
          );
        })}
      </div>
      <div className="mx-auto w-fit pt-10 xl:mr-auto xl:ml-0">
        <Button aria-label={button.label}>{button.label}</Button>
      </div>
    </div>
  </Container>
);
