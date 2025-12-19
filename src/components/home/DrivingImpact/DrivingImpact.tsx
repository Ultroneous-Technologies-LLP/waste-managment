import { FC } from "react";

import { Button, Container, Title } from "@/components/common";

import AnimatedNumber from "./AnimatedNumber";
import { DrivingImpactSectionProps } from "./types";

const DrivingImpact: FC<DrivingImpactSectionProps> = ({ button, sustainabilityMetrics, title }) => (
  <Container
    aria-labelledby="impact-title"
    backgroundClassName="bg-primary-yellow scroll-mt-30"
    className="flex flex-col gap-6 py-12.5 md:py-20 xl:flex-row"
    id="impact"
    role="region"
  >
    <div className="mx-auto w-full max-w-117.5">
      <Title className="text-center xl:text-start" id="impact-title" title={title} />
    </div>
    <div className="mx-auto w-full max-w-211.5">
      <div className="grid gap-10 xl:grid-cols-3">
        {sustainabilityMetrics.map((value) => {
          const cleanNumber = Number(value.number.replace(/,/g, ""));
          return (
            <div aria-labelledby={`metric-${value.id}-title`} key={value.id} role="group">
              <h3
                className="h-12 text-center text-base leading-normal text-black xl:text-start"
                id={`metric-${value.id}-title`}
              >
                {value.title}
              </h3>
              <hr className="text-primary-green/40 my-3 hidden xl:block" />
              <h4
                aria-live="polite"
                className="text-center text-5xl leading-normal font-bold text-black xl:text-start"
              >
                <AnimatedNumber duration={2000} value={cleanNumber} />
              </h4>
            </div>
          );
        })}
      </div>
      <div className="mx-auto w-fit pt-10 xl:mr-auto xl:ml-0">
        <Button aria-label={button.label} as="link" href={button.href}>
          {button.label}
        </Button>
      </div>
    </div>
  </Container>
);

export default DrivingImpact;
