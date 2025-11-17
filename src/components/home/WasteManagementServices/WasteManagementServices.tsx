"use client";

import { FC } from "react";

import { Container, Title } from "@/components";

import ServiceItem from "./ServiceItem";
import { WasteManagementServicesProps } from "./types";

export const WasteManagementServices: FC<WasteManagementServicesProps> = ({
  description,
  rangeOfWasteManagementServices,
  title,
}) => (
  <Container
    aria-labelledby="services-title"
    className="scroll-mt-20 overflow-hidden py-20 xl:py-37.5"
    id="services"
    role="region"
  >
    <div className="flex flex-col items-center justify-between gap-6 border-b border-[#D6D6D6] pb-6 md:flex-row md:pb-8">
      <Title
        className="w-full max-w-164.5 text-center md:text-start"
        id="services-title"
        title={title}
      />
      <p
        aria-label="Service description"
        className="w-full max-w-136 text-center text-lg/normal font-light text-[#6F6F6F] md:text-start md:text-base/normal xl:text-xl/snug"
      >
        {description}
      </p>
    </div>

    <div aria-label="List of available services" role="list">
      {rangeOfWasteManagementServices.map((value) => (
        <ServiceItem data={value} key={value.id} />
      ))}
    </div>
  </Container>
);
