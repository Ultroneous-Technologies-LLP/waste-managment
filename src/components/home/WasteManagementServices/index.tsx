"use client";

import { FC } from "react";
import { Container, Title } from "@/components/common";
import { wasteManagementServices } from "@/types/home-type";
import ServiceItem from "./ServiceItem"; // import the separate component

interface WasteManagementServicesProps {
  data: wasteManagementServices;
}

const WasteManagementServices: FC<WasteManagementServicesProps> = ({
  data,
}) => {
  return (
    <Container className="py-20 xl:py-37.5 scroll-mt-20" id="services">
      <div className="flex flex-col gap-6 md:flex-row justify-between items-center pb-6 md:pb-8 border-b border-[#D6D6D6]">
        <Title
          title={data.title}
          className="max-w-164.5 w-full text-center md:text-start"
        />
        <p className="max-w-136 w-full text-lg/normal md:text-base/normal xl:text-xl/snug text-[#6F6F6F] font-light text-center md:text-start">
          {data.description}
        </p>
      </div>

      <div>
        {data.services.map((value) => (
          <ServiceItem key={value.id} value={value} />
        ))}
      </div>
    </Container>
  );
};

export default WasteManagementServices;
