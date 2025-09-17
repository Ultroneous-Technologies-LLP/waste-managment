import { Button, Container, Title } from "@/components/common";
import Image from "next/image";
import { FC } from "react";
import { heroSection } from "@/types/home-type";
import { ArrowWithBackGround } from "@/components/icons";

interface HomeHeroProps {
  data: heroSection;
}

const HomeHero: FC<HomeHeroProps> = ({ data }) => {
  return (
    <Container className="pt-21 md:pt-32 xl:pt-34 grid grid-cols-1 xl:grid-cols-2 gap-6">
      <div className="p-6 md:p-14 bg-primary-yellow rounded-3xl xl:rounded-[56px]">
        <Title
          title={data.title}
          className="min-w-77.5 xl:max-w-100 w-full"
          isMainTitle
        />
        <p className="text-sm/normal md:text-base/normal xl:text-lg/normal font-light py-4">
          {data.description}
        </p>
        <Button className="!w-fit">{data.buttonLabel}</Button>
        <div className="mt-11 md:mt-17.5 xl:mt-11 flex gap-2">
          <ArrowWithBackGround
            className="bg-white size-12 border-transparent hover:bg-transparent hover:border-black group"
            svgClassName="group-hover:text-white text-black"
          />
          <ArrowWithBackGround
            className="bg-white size-12 border-transparent hover:bg-transparent hover:border-black group"
            svgClassName="rotate-180 group-hover:text-white text-black"
          />
        </div>
      </div>
      <div>
        <Image
          alt={data.alt}
          title={data.alt}
          src={data.src}
          width={658}
          height={658}
          className="max-h-50 md:max-h-110 xl:max-h-full w-full h-full rounded-3xl xl:rounded-[50px] object-cover"
        />
      </div>
    </Container>
  );
};

export default HomeHero;
