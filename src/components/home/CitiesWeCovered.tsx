import { citiesWeCoveredSection } from "@/types/home-type";
import { FC } from "react";
import { Container, Title } from "@/components/common";
import Image from "next/image";

interface CitiesWeCoveredProps {
  data: citiesWeCoveredSection;
}

const CitiesWeCovered: FC<CitiesWeCoveredProps> = ({ data }) => {
  return (
    <Container className="pb-20 xl:pb-37.5 flex flex-col xl:flex-row gap-6 xl:gap-9.5">
      <div className="xl:max-w-132.5 w-full">
        <Title title={data.title} className="text-center xl:text-start" />
      </div>
      <div className="xl:max-w-193 w-full flex flex-wrap gap-2 justify-center xl:justify-start">
        {data.cities.map((value) => (
          <div
            key={value.id}
            className="relative group py-6 px-13 md:py-4 md:px-8 xl:py-6 xl:px-14 bg-anti-flash-white text-base md:text-xl xl:text-2xl font-normal text-black rounded-full overflow-hidden"
          >
            <span className="relative z-20 group-hover:text-white text-black">
              {value.cityName}
            </span>
            <Image
              alt={value.alt}
              src={value.src}
              fill
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CitiesWeCovered;
