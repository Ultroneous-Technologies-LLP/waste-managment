"use client";

import clsx from "clsx";

import { FC, useState, KeyboardEvent } from "react";
import { Container, NextImageWithFallback, Title } from "@/components/common";
import { CitiesWeCoveredSectionProps } from "./types";

export const CitiesWeCovered: FC<CitiesWeCoveredSectionProps> = ({ cities, title }) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>, id: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle(id);
    }
  };

  return (
    <Container
      className="flex flex-col gap-6 pb-20 xl:flex-row xl:gap-9.5 xl:pb-37.5"
      id="cities-we-covered"
      role="region"
      aria-labelledby="cities-title"
    >
      <div className="w-full xl:max-w-132.5">
        <Title title={title} className="text-center xl:text-start" id="cities-title" />
      </div>

      <div
        className="flex w-full flex-wrap justify-center gap-2 xl:max-w-193 xl:justify-start"
        role="list"
        aria-label="List of cities we covered"
      >
        {cities.map((value) => {
          const isActive = activeId === value.id;

          return (
            <h3
              key={value.id}
              onClick={() => handleToggle(value.id)}
              onKeyDown={(e) => handleKeyDown(e, value.id)}
              role="button"
              tabIndex={0}
              aria-pressed={isActive}
              aria-label={`City: ${value.cityName}`}
              className={clsx(
                "relative px-13 py-6 md:px-8 md:py-4 xl:px-14 xl:py-6",
                "bg-anti-flash-white text-base font-normal text-black md:text-xl xl:text-2xl",
                "cursor-pointer overflow-hidden rounded-full",
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

              <NextImageWithFallback
                alt={value.alt}
                src={value.src}
                fill
                className={clsx(
                  "absolute inset-0 h-full w-full object-cover transition-opacity duration-300",
                  isActive ? "opacity-100" : "opacity-0",
                  "xl:group-hover:opacity-100"
                )}
                title={value.cityName}
              />

              <div
                className={clsx(
                  "absolute inset-0 z-10 bg-black/40 transition-opacity duration-300",
                  isActive ? "opacity-100" : "opacity-0",
                  "xl:group-hover:opacity-100"
                )}
              />
            </h3>
          );
        })}
      </div>
    </Container>
  );
};
