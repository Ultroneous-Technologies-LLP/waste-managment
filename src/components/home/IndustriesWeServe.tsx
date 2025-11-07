import { FC } from "react";

import { Button, Container, NextImageWithFallback, Title } from "@/components/common";
import { industriesWeServeSection } from "@/types/home-type";

interface IndustriesWeServe {
  data: industriesWeServeSection;
}

const IndustriesWeServe: FC<IndustriesWeServe> = ({ data }) => {
  return (
    <>
      <Container
        backgroundClassName="bg-anti-flash-white scroll-mt-10"
        className="grid grid-cols-1 gap-6 px-6 py-12.5 md:gap-8 md:px-6 md:pt-20 md:pb-8 xl:grid-cols-2 xl:gap-6 xl:gap-y-0 xl:px-12.5 xl:py-25"
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
            className="flex flex-wrap justify-center gap-2 pt-6 xl:justify-start xl:py-8"
            role="list"
            aria-label="Industries we serve"
          >
            {data.services.map((value) => (
              <h3
                key={value.title}
                className="cursor-pointer rounded-full bg-white p-2.5 text-xs leading-normal font-light text-black select-none md:p-6 md:text-2xl"
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
          <NextImageWithFallback
            alt={data.image.alt}
            src={data.image.src}
            width={658}
            height={690}
            className="md:rounded-40 mx-auto h-full w-full object-cover md:max-h-172.5 md:max-w-180 xl:max-h-fit xl:max-w-fit"
            title={data.image.alt}
          />
        </div>

        {/* Button Section */}
        <div className="col-start-1 col-end-2 row-start-3 mx-auto w-fit self-start md:row-start-2 xl:col-start-1 xl:col-end-2 xl:row-start-2 xl:row-end-3 xl:mr-auto xl:ml-0 xl:self-end">
          <Button aria-label={data.button.label}>{data.button.label}</Button>
        </div>
      </Container>

      {/* Animated Brand Section */}
      <div
        className="bg-primary-yellow py-12.5"
        role="region"
        aria-labelledby="industries-animation-title"
      >
        <div>
          <h4
            id="industries-animation-title"
            className="md:text-32 pb-6 text-center text-2xl leading-snug text-black md:px-6 md:pb-12 xl:px-0 xl:text-[40px]"
          >
            {data.title}
          </h4>
        </div>

        <div
          className="relative w-full overflow-hidden"
          role="list"
          aria-label="Scrolling partner logos"
        >
          <div className="animate-marquee flex w-max">
            {data.animation.map((value) => (
              <NextImageWithFallback
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
              <NextImageWithFallback
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
