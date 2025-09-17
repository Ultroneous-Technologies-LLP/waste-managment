import React, { FC } from "react";
import { Button, Container, Title } from "@/components/common";
import { drivingImpactSection } from "@/types/home-type";

interface DrivingImpactProps {
  data: drivingImpactSection;
}

const DrivingImpact: FC<DrivingImpactProps> = ({ data }) => {
  return (
    <Container
      className="py-12.5 md:py-20 flex flex-col xl:flex-row gap-6"
      backgroundClassName="bg-primary-yellow"
      id="impact"
    >
      <div className="max-w-117.5 w-full mx-auto">
        <Title title={data.title} className="text-center xl:text-start" />
      </div>
      <div className="max-w-211.5 w-full mx-auto">
        <div className="grid xl:grid-cols-3 gap-10">
          {data.sustainabilityMetrics.map((value) => (
            <div key={value.id}>
              <h3 className="text-base leading-normal text-black h-12 text-center xl:text-start">
                {value.title}
              </h3>
              <hr className="text-primary-green/40 my-3 hidden xl:block" />
              <h4 className="text-5xl leading-normal text-black font-bold text-center xl:text-start">
                {value.number}
              </h4>
            </div>
          ))}
        </div>
        <div className="w-fit mx-auto xl:ml-0 xl:mr-auto pt-10">
          <Button>{data.button.label}</Button>
        </div>
      </div>
    </Container>
  );
};

export default DrivingImpact;
