"use client";

import { FC, useState, useEffect } from "react";

import { Button, Container, FallBackImage, Title } from "@/components/common";
import { getImageUrl } from "@/utils";

import { IndustriesWeServeSectionProps } from "./types";

const RESPONSIVE_SIZE_LG = 1080;

const IndustriesWeServe: FC<IndustriesWeServeSectionProps> = ({
  button,
  image,
  mainTitle,
  industriesWeServedServices,
  industriesWeServeAnimation,
  title,
}) => {
  const [bgPosition, setBgPosition] = useState({ left: 0, top: 0 });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth > RESPONSIVE_SIZE_LG);
  }, []);

  const handleMouseEnter = (event: React.MouseEvent<HTMLHeadingElement>, index: number): void => {
    if (!isDesktop) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();

    setBgPosition({
      left: event.clientX - rect.left,
      top: event.clientY - rect.top,
    });

    setActiveIndex(index);
  };

  const handleMouseLeave = (): void => {
    setActiveIndex(null);
  };
  return (
    <>
      <Container
        aria-labelledby="industries-title"
        backgroundClassName="bg-anti-flash-white scroll-mt-10"
        className="grid grid-cols-1 gap-6 px-6 py-12.5 md:gap-8 md:px-6 md:pt-20 md:pb-8 xl:grid-cols-2 xl:gap-6 xl:gap-y-0 xl:px-12.5 xl:py-25"
        id="industries"
        role="region"
      >
        <div className="col-start-1 col-end-2 row-start-1 row-end-2">
          <Title className="text-center xl:text-start" id="industries-title" title={mainTitle} />
          <div
            aria-label="Industries we serve"
            className="flex flex-wrap justify-center gap-2 pt-6 xl:justify-start xl:py-8"
            role="list"
          >
            {industriesWeServedServices.map((value, index) => (
              <h3
                aria-label={`Industry: ${value.title}`}
                className="relative overflow-hidden rounded-full bg-white p-2.5 text-xs leading-normal font-light text-black select-none md:p-6 md:text-2xl"
                key={value.title}
                onMouseEnter={(e) => handleMouseEnter(e, index)}
                onMouseLeave={handleMouseLeave}
                tabIndex={0}
              >
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    activeIndex === index ? "text-white" : "text-black"
                  }`}
                >
                  {value.title}
                </span>
                {isDesktop && (
                  <span
                    className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500 transition-transform
        duration-500 ease-out
        ${activeIndex === index ? "scale-100" : "scale-0"}
      `}
                    style={{
                      left: bgPosition.left,
                      top: bgPosition.top,
                      width: "280%",
                      height: "280%",
                    }}
                  />
                )}
              </h3>
            ))}
          </div>
        </div>
        <div className="col-start-1 col-end-2 row-start-2 md:row-start-3 xl:col-start-2 xl:col-end-3 xl:row-start-1 xl:row-end-4">
          <FallBackImage
            alt={image.alternativeText}
            className="md:rounded-40 mx-auto h-full w-full object-cover md:max-h-172.5 md:max-w-180 xl:max-h-fit xl:max-w-fit"
            height={690}
            src={getImageUrl(image.url)}
            title={image.alternativeText}
            width={658}
          />
        </div>
        <div className="col-start-1 col-end-2 row-start-3 mx-auto w-fit self-start md:row-start-2 xl:col-start-1 xl:col-end-2 xl:row-start-2 xl:row-end-3 xl:mr-auto xl:ml-0 xl:self-end">
          <Button aria-label={button.ariaLabel} as="link" href={button.href}>
            {button.label}
          </Button>
        </div>
      </Container>
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
            {title}
          </h4>
        </div>

        <div
          aria-label="Scrolling partner logos"
          className="relative w-full overflow-hidden"
          role="list"
        >
          <div className="animate-marquee flex w-max">
            {industriesWeServeAnimation.image.map((value) => (
              <FallBackImage
                alt={value.alternativeText}
                className="mx-8 h-10 w-40 object-contain"
                height={40}
                key={`anim1-${value.alternativeText}`}
                src={getImageUrl(value.url)}
                title={value.alternativeText}
                width={160}
              />
            ))}
            {industriesWeServeAnimation.image.map((value) => (
              <FallBackImage
                alt={value.alternativeText}
                className="mx-8 h-10 w-40 object-contain"
                height={40}
                key={`anim2-${value.alternativeText}`}
                src={getImageUrl(value.url)}
                title={value.alternativeText}
                width={160}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default IndustriesWeServe;
