"use client"; // only here

import Image from "next/image";
import clsx from "clsx";

import { citiesWeCoveredSection } from "@/types/home-type";
import { FC, useState } from "react";
import { Container, Title } from "@/components/common";

interface CitiesWeCoveredProps {
  data: citiesWeCoveredSection;
}

const CitiesWeCovered: FC<CitiesWeCoveredProps> = ({ data }) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <Container className="pb-20 xl:pb-37.5 flex flex-col xl:flex-row gap-6 xl:gap-9.5">
      <div className="xl:max-w-132.5 w-full">
        <Title title={data.title} className="text-center xl:text-start" />
      </div>

      <div className="xl:max-w-193 w-full flex flex-wrap gap-2 justify-center xl:justify-start">
        {data.cities.map((value) => {
          const isActive = activeId === value.id;

          return (
            <div
              key={value.id}
              onClick={() => handleToggle(value.id)}
              className={clsx(
                "relative py-6 px-13 md:py-4 md:px-8 xl:py-6 xl:px-14",
                "bg-anti-flash-white text-base md:text-xl xl:text-2xl font-normal text-black",
                "rounded-full overflow-hidden cursor-pointer",
                "group xl:hover:text-white"
              )}
            >
              <span
                className={clsx(
                  "relative z-20 transition-colors duration-300",
                  isActive && "text-white",
                  "xl:group-hover:text-white"
                )}
              >
                {value.cityName}
              </span>

              <Image
                alt={value.alt}
                src={value.src}
                fill
                className={clsx(
                  "absolute inset-0 w-full h-full object-cover transition-opacity duration-300",
                  isActive ? "opacity-100" : "opacity-0",
                  "xl:group-hover:opacity-100"
                )}
              />

              <div
                className={clsx(
                  "absolute inset-0 bg-black/40 transition-opacity duration-300 z-10",
                  isActive ? "opacity-100" : "opacity-0",
                  "xl:group-hover:opacity-100"
                )}
              />
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default CitiesWeCovered;
