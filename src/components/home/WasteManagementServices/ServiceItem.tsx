"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowWithBackGround } from "@/components/icons";

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

  return (
    <div
      className="py-6 md:py-11.5 xl:py-5 flex gap-3 md:gap-0 justify-between items-center border-b border-[#D6D6D6] relative"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3 className="text-xl/snug md:text-2xl/normal xl:text-xl/snug max-w-68 md:max-w-100 xl:max-w-75 w-full">
        {value.title}
      </h3>
      <p className="text-xl/snug max-w-136.5 w-full text-[#6F6F6F] font-light xl:block hidden">
        {value.description}
      </p>

      <ArrowWithBackGround
        className="bg-primary-yellow size-14.5 border-transparent"
        width={22}
        height={16}
        svgClassName="rotate-[130deg] text-black"
      />

      {/* Floating image follows mouse over entire row */}
      {hovered && (
        <Image
          alt={value.alt}
          src={value.src}
          width={203}
          height={237}
          className="absolute xl:block pointer-events-none transition-all duration-100 z-50"
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
