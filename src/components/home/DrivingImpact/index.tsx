import { FC } from "react";

import { drivingImpactSection } from "@/types/home-type";
import { Button, Container, Title } from "@/components/common";
import AnimatedNumber from "./AnimatedNumber";

interface DrivingImpactProps {
  data: drivingImpactSection;
}

const DrivingImpact: FC<DrivingImpactProps> = ({ data }) => {
  return (
    <Container
      className="py-12.5 md:py-20 flex flex-col xl:flex-row gap-6"
      backgroundClassName="bg-primary-yellow scroll-mt-30"
      id="impact"
      role="region"
      aria-labelledby="impact-title"
    >
      <div className="max-w-117.5 w-full mx-auto">
        <Title
          title={data.title}
          className="text-center xl:text-start"
          id="impact-title"
        />
      </div>
      <div className="max-w-211.5 w-full mx-auto">
        <div className="grid xl:grid-cols-3 gap-10">
          {data.sustainabilityMetrics.map((value) => {
            const cleanNumber = Number(value.number.replace(/,/g, ""));
            return (
              <div
                key={value.id}
                role="group"
                aria-labelledby={`metric-${value.id}-title`}
              >
                <h3
                  id={`metric-${value.id}-title`}
                  className="text-base leading-normal text-black h-12 text-center xl:text-start"
                >
                  {value.title}
                </h3>
                <hr className="text-primary-green/40 my-3 hidden xl:block" />
                <h4
                  className="text-5xl leading-normal text-black font-bold text-center xl:text-start"
                  aria-live="polite"
                >
                  <AnimatedNumber value={cleanNumber} duration={2000} />
                </h4>
              </div>
            );
          })}
        </div>
        <div className="w-fit mx-auto xl:ml-0 xl:mr-auto pt-10">
          <Button aria-label={data.button.label}>{data.button.label}</Button>
        </div>
      </div>
    </Container>
  );
};

export default DrivingImpact;
