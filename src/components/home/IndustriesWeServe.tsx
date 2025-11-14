"use client";

import { FC } from "react";

import { Button, Container, NextImageWithFallback, Title } from "@/components/common";
import { industriesWeServeSection } from "@/types/home-type";

interface IndustriesWeServe {
  data: industriesWeServeSection;
}

const IndustriesWeServe: FC<IndustriesWeServe> = ({ data }) => (
  <>
    <Container
      aria-labelledby="industries-title"
      backgroundClassName="bg-anti-flash-white scroll-mt-10"
      className="grid grid-cols-1 gap-6 px-6 py-12.5 md:gap-8 md:px-6 md:pt-20 md:pb-8 xl:grid-cols-2 xl:gap-6 xl:gap-y-0 xl:px-12.5 xl:py-25"
      id="industries"
      role="region"
    >
      {/* Left Section - Title and Services */}
      <div className="col-start-1 col-end-2 row-start-1 row-end-2">
        <Title className="text-center xl:text-start" id="industries-title" title={data.mainTitle} />
        <div
          aria-label="Industries we serve"
          className="flex flex-wrap justify-center gap-2 pt-6 xl:justify-start xl:py-8"
          role="list"
        >
          {data.services.map((value) => (
            <h3
              aria-label={`Industry: ${value.title}`}
              className="cursor-pointer rounded-full bg-white p-2.5 text-xs leading-normal font-light text-black select-none md:p-6 md:text-2xl"
              key={value.title}
              onClick={() => console.log(`Clicked ${value.title}`)} // Replace with your action
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  console.log(`Clicked ${value.title}`); // Replace with your action
                }
              }}
              role="button"
              tabIndex={0}
            >
              {value.title}
            </h3>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="col-start-1 col-end-2 row-start-2 md:row-start-3 xl:col-start-2 xl:col-end-3 xl:row-start-1 xl:row-end-4">
        <NextImageWithFallback
          alt={data.image.alt}
          className="md:rounded-40 mx-auto h-full w-full object-cover md:max-h-172.5 md:max-w-180 xl:max-h-fit xl:max-w-fit"
          height={690}
          src={data.image.src}
          title={data.image.alt}
          width={658}
        />
      </div>

      {/* Button Section */}
      <div className="col-start-1 col-end-2 row-start-3 mx-auto w-fit self-start md:row-start-2 xl:col-start-1 xl:col-end-2 xl:row-start-2 xl:row-end-3 xl:mr-auto xl:ml-0 xl:self-end">
        <Button aria-label={data.button.label}>{data.button.label}</Button>
      </div>
    </Container>

    {/* Animated Brand Section */}
    <div
      aria-labelledby="industries-animation-title"
      className="bg-primary-yellow py-12.5"
      role="region"
    >
      <div>
        <h4
          className="md:text-32 pb-6 text-center text-2xl leading-snug text-black md:px-6 md:pb-12 xl:px-0 xl:text-[40px]"
          id="industries-animation-title"
        >
          {data.title}
        </h4>
      </div>

      <div
        aria-label="Scrolling partner logos"
        className="relative w-full overflow-hidden"
        role="list"
      >
        <div className="animate-marquee flex w-max">
          {data.animation.map((value) => (
            <NextImageWithFallback
              alt={value.alt}
              className="mx-8 h-10 w-40 object-contain"
              height={40}
              key={`anim1-${value.id}`}
              src={value.src}
              title={value.alt}
              width={160}
            />
          ))}
          {data.animation.map((value) => (
            <NextImageWithFallback
              alt={value.alt}
              className="mx-8 h-10 w-40 object-contain"
              height={40}
              key={`anim2-${value.id}`}
              src={value.src}
              title={value.alt}
              width={160}
            />
          ))}
        </div>
      </div>
    </div>
  </>
);

export default IndustriesWeServe;
