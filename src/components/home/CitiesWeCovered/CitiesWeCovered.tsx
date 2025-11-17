"use client";

import clsx from "clsx";
import { FC, useState, KeyboardEvent } from "react";

import { Container, NextImageWithFallback, Title } from "@/components";
import { getImageUrl } from "@/utils";

import { CitiesWeCoveredSectionProps } from "./types";

export const CitiesWeCovered: FC<CitiesWeCoveredSectionProps> = ({ cities, title }) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleToggle = (id: number): void => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>, id: number): void => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle(id);
    }
  };

  return (
    <Container
      aria-labelledby="cities-title"
      className="flex flex-col gap-6 pb-20 xl:flex-row xl:gap-9.5 xl:pb-37.5"
      id="cities-we-covered"
      role="region"
    >
      <div className="w-full xl:max-w-132.5">
        <Title className="text-center xl:text-start" id="cities-title" title={title} />
      </div>

      <div
        aria-label="List of cities we covered"
        className="flex w-full flex-wrap justify-center gap-2 xl:max-w-193 xl:justify-start"
        role="list"
      >
        {cities.map((value) => {
          const isActive = activeId === value.id;
          return (
            <h3
              aria-label={`City: ${value.cityName}`}
              aria-pressed={isActive}
              className="bg-anti-flash-white group relative cursor-pointer overflow-hidden rounded-full px-13 py-6 text-base font-normal text-black md:px-8 md:py-4 md:text-xl xl:px-14 xl:py-6 xl:text-2xl xl:hover:text-white"
              key={value.id}
              onClick={() => handleToggle(value.id)}
              onKeyDown={(e) => handleKeyDown(e, value.id)}
              role="button"
              tabIndex={0}
            >
              <span
                className={clsx(
                  "relative z-20 transition-colors duration-300 xl:group-hover:text-white",
                  isActive && "text-white"
                )}
              >
                {value.cityName}
              </span>
              <NextImageWithFallback
                alt={value.image.alternativeText}
                className={clsx(
                  "absolute inset-0 h-full w-full object-cover transition-opacity duration-300 xl:group-hover:opacity-100",
                  isActive ? "opacity-100" : "opacity-0"
                )}
                fill
                src={getImageUrl(value.image.url)}
                title={value.cityName}
              />
              <div
                className={clsx(
                  "absolute inset-0 z-10 bg-black/40 transition-opacity duration-300 xl:group-hover:opacity-100",
                  isActive ? "opacity-100" : "opacity-0"
                )}
              />
            </h3>
          );
        })}
      </div>
    </Container>
  );
};
