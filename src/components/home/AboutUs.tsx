import { FC } from "react";
import Image from "next/image";

import { Button, Container, Title } from "@/components/common";
import { Arrow } from "@/components/icons";
import { aboutUsSection } from "@/types/home-type";

interface AboutUsProps {
  data: aboutUsSection;
}

const AboutUs: FC<AboutUsProps> = ({ data }) => {
  return (
    <Container
      className="pt-20 xl:pt-37.5"
      id="about-us"
      role="region"
      aria-labelledby="about-us-title"
    >
      <div className="md:max-w-133.5 xl:max-w-216.5 mx-auto">
        <Title title={data.title} className="text-center" id="about-us-title" />
        <p
          className="py-6 md:py-8 text-sm/normal md:text-base/normal xl:text-2xl/normal font-light text-center"
          aria-label="About us description"
        >
          {data.descriptionWithBlackText}
          <span className="text-primary-green font-bold">
            {data.descriptionWithGreenText}
          </span>
        </p>
        <div className="max-w-fit mx-auto">
          <Button aria-label={data.buttonLabel}>{data.buttonLabel}</Button>
        </div>
      </div>

      {/* We Protect Nature Section */}
      <div
        className="grid md:grid-cols-2 xl:grid-cols-4 gap-2 pt-20 md:pt-25 xl:pt-37.5"
        role="group"
        aria-label="We Protect Nature highlights"
      >
        {/* First Part */}
        <div
          className="bg-anti-flash-white flex justify-center items-center max-w-89.5 h-43 md:max-w-89 xl:max-w-82.5 md:h-50 w-full rounded-full mx-auto"
          role="presentation"
        >
          <h3
            className="text-6xl leading-snug text-black"
            aria-label={`We protect nature: ${data.weProtectNature.firstPart}`}
          >
            {data.weProtectNature.firstPart}
          </h3>
        </div>

        {/* Second Part */}
        <div
          className="flex justify-center items-center max-w-89.5 h-43 md:max-w-89 xl:max-w-82.5 md:h-50 w-full rounded-full mx-auto relative"
          role="img"
          aria-label={data.weProtectNature.secondPart.title}
        >
          <h3 className="text-6xl leading-snug text-white absolute">
            {data.weProtectNature.secondPart.title}
          </h3>
          <Image
            alt={data.weProtectNature.secondPart.alt}
            src={data.weProtectNature.secondPart.src}
            width={330}
            height={200}
            className="w-full h-full"
            title={data.weProtectNature.secondPart.alt}
          />
        </div>

        {/* Arrow Icon */}
        <div
          className="bg-primary-yellow flex justify-center items-center max-w-89.5 h-43 md:max-w-89 xl:max-w-82.5 md:h-50 w-full rounded-full mx-auto"
          role="presentation"
        >
          <Arrow
            width={62}
            height={64}
            className="text-black"
            aria-hidden="true"
          />
        </div>

        {/* Third Part */}
        <div
          className="flex justify-center items-center max-w-89.5 h-43 md:max-w-89 xl:max-w-82.5 md:h-50 w-full rounded-full mx-auto relative"
          role="img"
          aria-label={data.weProtectNature.thirdPart.title}
        >
          <h3 className="text-6xl leading-snug text-white absolute">
            {data.weProtectNature.thirdPart.title}
          </h3>
          <Image
            alt={data.weProtectNature.thirdPart.alt}
            src={data.weProtectNature.thirdPart.src}
            title={data.weProtectNature.thirdPart.alt}
            width={330}
            height={200}
            className="w-full h-full"
          />
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
