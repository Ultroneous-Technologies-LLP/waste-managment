import { FC } from "react";
import Image from "next/image";

import { Button, Container, Title } from "@/components/common";
import { industriesWeServeSection } from "@/types/home-type";

interface IndustriesWeServe {
  data: industriesWeServeSection;
}

const IndustriesWeServe: FC<IndustriesWeServe> = ({ data }) => {
  return (
    <>
      <Container
        backgroundClassName="bg-anti-flash-white scroll-mt-10"
        className="px-6 md:px-6 xl:px-12.5 grid gap-6 md:gap-8 xl:gap-6 py-12.5 md:pt-20 md:pb-8 xl:py-25 grid-cols-1 xl:grid-cols-2 xl:gap-y-0"
        id="industries"
        role="region"
        aria-labelledby="industries-title"
      >
        {/* Left Section - Title and Services */}
        <div className="col-start-1 col-end-2 row-start-1 row-end-2">
          <Title
            title={data.mainTitle}
            className="text-center xl:text-start"
            id="industries-title"
          />
          <div
            className="pt-6 xl:py-8 flex justify-center xl:justify-start flex-wrap gap-2"
            role="list"
            aria-label="Industries we serve"
          >
            {data.services.map((value) => (
              <h3
                key={value.title}
                className="p-2.5 md:p-6 text-xs md:text-2xl leading-normal bg-white text-black rounded-full font-light cursor-pointer select-none"
                role="button"
                tabIndex={0}
                aria-label={`Industry: ${value.title}`}
                onClick={() => console.log(`Clicked ${value.title}`)} // Replace with your action
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    console.log(`Clicked ${value.title}`); // Replace with your action
                  }
                }}
              >
                {value.title}
              </h3>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="col-start-1 col-end-2 row-start-2 md:row-start-3 xl:col-start-2 xl:col-end-3 xl:row-start-1 xl:row-end-4">
          <Image
            alt={data.image.alt}
            src={data.image.src}
            width={658}
            height={690}
            className="md:max-w-180 md:max-h-172.5 w-full h-full object-cover md:rounded-40 mx-auto xl:max-w-fit xl:max-h-fit"
            title={data.image.alt}
          />
        </div>

        {/* Button Section */}
        <div className="col-start-1 col-end-2 row-start-3 md:row-start-2 xl:row-start-2 xl:row-end-3 xl:col-start-1 xl:col-end-2 self-start xl:self-end w-fit mx-auto xl:ml-0 xl:mr-auto">
          <Button aria-label={data.button.label}>{data.button.label}</Button>
        </div>
      </Container>

      {/* Animated Brand Section */}
      <div
        className="py-12.5 bg-primary-yellow"
        role="region"
        aria-labelledby="industries-animation-title"
      >
        <div>
          <h4
            id="industries-animation-title"
            className="text-2xl md:text-32 md:px-6 xl:px-0 xl:text-[40px] leading-snug text-black text-center pb-6 md:pb-12"
          >
            {data.title}
          </h4>
        </div>

        <div
          className="overflow-hidden relative w-full"
          role="list"
          aria-label="Scrolling partner logos"
        >
          <div className="flex w-max animate-marquee">
            {data.animation.map((value) => (
              <Image
                key={`anim1-${value.id}`}
                src={value.src}
                alt={value.alt}
                width={160}
                height={40}
                className="mx-8 h-10 w-40 object-contain"
                title={value.alt}
              />
            ))}
            {data.animation.map((value) => (
              <Image
                key={`anim2-${value.id}`}
                src={value.src}
                alt={value.alt}
                width={160}
                height={40}
                className="mx-8 h-10 w-40 object-contain"
                title={value.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default IndustriesWeServe;
