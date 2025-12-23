"use client";

import { useRef, useState, KeyboardEvent, FC, useEffect } from "react";

import { FallBackImage } from "@/components/common";
import { ArrowWithBackGround } from "@/components/icons";
import { getImageUrl } from "@/utils";

import { ServiceItemProps } from "./types";

const OFFSET_X = 20;
const OFFSET_Y = 100;
const FADE_DURATION = 120; // ms

const ServiceItem: FC<ServiceItemProps> = ({ data }) => {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(getImageUrl(data.image.url));
  const [isFading, setIsFading] = useState(false);

  const nextImage = getImageUrl(data.image.url);

  useEffect(() => {
    if (currentImage === nextImage) {
      return;
    }

    setIsFading(true);

    timeoutRef.current = window.setTimeout(() => {
      setCurrentImage(nextImage);
      setIsFading(false);
    }, FADE_DURATION);

    return (): void => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [nextImage, currentImage]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>): void => {
    rectRef.current = e.currentTarget.getBoundingClientRect();
    setIsVisible(true);
  };

  const handleMouseLeave = (): void => {
    setIsVisible(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (!imageRef.current || !rectRef.current) {
      return;
    }

    const x = e.clientX - rectRef.current.left + OFFSET_X;
    const y = e.clientY - rectRef.current.top - OFFSET_Y;

    imageRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === "Enter" || e.key === " ") {
      setIsVisible((v) => !v);
    }
  };

  return (
    <div
      className="relative flex cursor-pointer items-center justify-between gap-3 border-b border-[#D6D6D6] py-6 md:gap-0 md:py-11.5 xl:py-5"
      onKeyDown={handleKeyDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      role="listitem"
      tabIndex={0}
    >
      <h3 className="w-full max-w-68 text-xl/snug md:max-w-100 md:text-2xl/normal xl:max-w-75 xl:text-xl/snug">
        {data.title}
      </h3>

      <p className="hidden w-full max-w-136.5 text-xl/snug font-light text-[#6F6F6F] xl:block">
        {data.description}
      </p>
      <ArrowWithBackGround
        aria-hidden
        className="bg-primary-yellow size-14.5 border-transparent"
        height={16}
        svgClassName="rotate-[130deg] text-black"
        width={22}
      />
      <div
        className={`
          pointer-events-none absolute z-50
          transition-opacity duration-500
          ${isVisible ? "opacity-100" : "opacity-0"}
        `}
        ref={imageRef}
      >
        <div
          className={`
            transition-opacity duration-500
            ${isFading ? "opacity-0" : "opacity-100"}
          `}
        >
          <FallBackImage
            alt={data.image.alternativeText}
            height={237}
            src={currentImage}
            title={data.image.alternativeText}
            width={203}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
