"use client";

import { FC } from "react";
import { Container, Title } from "@/components/common";
import { wasteManagementServices } from "@/types/home-type";
import ServiceItem from "./ServiceItem"; // import the separate component

interface WasteManagementServicesProps {
  data: wasteManagementServices;
}

const WasteManagementServices: FC<WasteManagementServicesProps> = ({ data }) => {
  return (
    <Container
      className="scroll-mt-20 py-20 xl:py-37.5"
      id="services"
      role="region"
      aria-labelledby="services-title"
    >
      <div className="flex flex-col items-center justify-between gap-6 border-b border-[#D6D6D6] pb-6 md:flex-row md:pb-8">
        <Title
          id="services-title"
          title={data.title}
          className="w-full max-w-164.5 text-center md:text-start"
        />
        <p
          className="w-full max-w-136 text-center text-lg/normal font-light text-[#6F6F6F] md:text-start md:text-base/normal xl:text-xl/snug"
          aria-label="Service description"
        >
          {data.description}
        </p>
      </div>

      <div role="list" aria-label="List of available services">
        {data.services.map((value) => (
          <ServiceItem key={value.id} value={value} />
        ))}
      </div>
    </Container>
  );
};

export default WasteManagementServices;
