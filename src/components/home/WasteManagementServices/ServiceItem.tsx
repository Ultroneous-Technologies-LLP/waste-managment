"use client";

import { useState, KeyboardEvent, FC } from "react";

import FallBackImage from "@/components/common/FallBackImage/FallBackImage";
import { ArrowWithBackGround } from "@/components/icons";
import { getImageUrl } from "@/utils";

import { ServiceItemProps } from "./types";

const MOUSE_POSITION_100 = 100;
const MOUSE_POSITION_20 = 20;

const ServiceItem: FC<ServiceItemProps> = ({ data }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === "Enter" || e.key === " ") {
      setIsHovered((prev) => !prev);
    }
  };

  return (
    <>
      <div
        aria-labelledby={`service-title-${data.id}`}
        className="relative my-6 flex cursor-pointer items-center justify-between gap-3 md:my-11.5 md:gap-0 xl:my-5"
        role="listitem"
        tabIndex={0}
      >
        <div
          className="relative flex w-full cursor-pointer items-center justify-between gap-3 md:gap-0"
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
          }}
        >
          <h3
            className="w-full max-w-68 text-xl/snug md:max-w-100 md:text-2xl/normal xl:max-w-75 xl:text-xl/snug"
            id={`service-title-${data.id}`}
          >
            {data.title}
          </h3>
          <p className="hidden w-full max-w-136.5 text-xl/snug font-light text-[#6F6F6F] xl:block">
            {data.description}
          </p>
          <ArrowWithBackGround
            aria-hidden="true"
            className="bg-primary-yellow size-14.5 border-transparent"
            height={16}
            svgClassName="rotate-[130deg] text-black"
            width={22}
          />
          {isHovered && (
            <FallBackImage
              alt={data.image.alternativeText}
              className="pointer-events-none absolute z-50 transition-all duration-100 xl:block"
              height={237}
              src={getImageUrl(data.image.url)}
              style={{
                left: mousePos.x + MOUSE_POSITION_20,
                top: mousePos.y - MOUSE_POSITION_100,
              }}
              title={data.image.alternativeText}
              width={203}
            />
          )}
        </div>
      </div>
      <hr className="h-[0.5px] w-full border-0 bg-[#D6D6D6]" />
    </>
  );
};

export default ServiceItem;
