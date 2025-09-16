import { FC } from "react";
import { Button, Container, Title } from "@/components/common";
import Image from "next/image";
import { Arrow } from "@/components/icons";
import { aboutUsSection } from "@/types/home-type";

interface AboutUsProps {
  data: aboutUsSection;
}

const AboutUs: FC<AboutUsProps> = ({ data }) => {
  return (
    <Container className="px-4 md:px-6 xl:px-12.5 pt-20 xl:pt-37.5">
      <div className="md:max-w-133.5 xl:max-w-216.5 mx-auto">
        <Title title={data.title} className="text-center" />
        <p className="py-6 md:py-8 text-sm/normal md:text-base/normal xl:text-2xl/normal font-light text-center">
          {data.descriptionWithBlackText}
          <span className="text-primary-green font-bold">
            {data.descriptionWithGreenText}
          </span>
        </p>
        <div className="max-w-fit mx-auto">
          <Button as="link" href="/">
            {data.buttonLabel}
          </Button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-2 py-20 md:pt-25 md:pb-16.5 xl:py-37.5">
        <div className="bg-[#F3F3F3] flex justify-center items-center max-w-89.5 h-43 md:max-w-89 xl:max-w-82.5 md:h-50 w-full rounded-full mx-auto">
          <h3 className="text-6xl leading-snug text-black">
            {data.weProtectNature.firstPart}
          </h3>
        </div>
        <div className="flex justify-center items-center max-w-89.5 h-43 md:max-w-89 xl:max-w-82.5 md:h-50 w-full rounded-full mx-auto relative">
          <h3 className="text-6xl leading-snug text-white absolute">
            {data.weProtectNature.secondPart.title}
          </h3>
          <Image
            alt={data.weProtectNature.secondPart.alt}
            src={data.weProtectNature.secondPart.src}
            width={330}
            height={200}
            className="w-full h-full"
          />
        </div>
        <div className="bg-primary-yellow flex justify-center items-center max-w-89.5 h-43 md:max-w-89 xl:max-w-82.5 md:h-50 w-full rounded-full mx-auto">
          <Arrow width={62} height={64} className="text-black" />
        </div>
        <div className="flex justify-center items-center max-w-89.5 h-43 md:max-w-89 xl:max-w-82.5 md:h-50 w-full rounded-full mx-auto relative">
          <h3 className="text-6xl leading-snug text-white absolute">
            {data.weProtectNature.thirdPart.title}
          </h3>
          <Image
            alt={data.weProtectNature.secondPart.alt}
            src={data.weProtectNature.thirdPart.src}
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
