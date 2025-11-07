"use client";

import { useState, KeyboardEvent } from "react";
import { ArrowWithBackGround } from "@/components/icons";
import { NextImageWithFallback } from "@/components/common";

interface ServiceItemProps {
  value: {
    id: number;
    title: string;
    description: string;
    src: string;
    alt: string;
  };
}

const ServiceItem = ({ value }: ServiceItemProps) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  // For keyboard accessibility
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      setHovered((prev) => !prev);
    }
  };

  return (
    <div
      className="relative flex cursor-pointer items-center justify-between gap-3 border-b border-[#D6D6D6] py-6 md:gap-0 md:py-11.5 xl:py-5"
      role="listitem"
      aria-labelledby={`service-title-${value.id}`}
      tabIndex={0}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onKeyDown={handleKeyDown}
    >
      <h3
        id={`service-title-${value.id}`}
        className="w-full max-w-68 text-xl/snug md:max-w-100 md:text-2xl/normal xl:max-w-75 xl:text-xl/snug"
      >
        {value.title}
      </h3>

      <p className="hidden w-full max-w-136.5 text-xl/snug font-light text-[#6F6F6F] xl:block">
        {value.description}
      </p>

      <ArrowWithBackGround
        className="bg-primary-yellow size-14.5 border-transparent"
        width={22}
        height={16}
        svgClassName="rotate-[130deg] text-black"
        aria-hidden="true"
      />

      {/* Floating image follows mouse over entire row */}
      {hovered && (
        <NextImageWithFallback
          alt={value.alt}
          src={value.src}
          width={203}
          height={237}
          className="pointer-events-none absolute z-50 transition-all duration-100 xl:block"
          style={{
            left: mousePos.x + 20,
            top: mousePos.y - 100,
          }}
          title={value.alt}
        />
      )}
    </div>
  );
};

export default ServiceItem;
