import { transformingWasteSection } from "@/types/home-type";
import { FC } from "react";
import { Container, Title } from "@/components/common";
import Image from "next/image";

interface TransformingWasteProps {
  data: transformingWasteSection;
}

const TransformingWaste: FC<TransformingWasteProps> = ({ data }) => {
  return (
    <Container className="py-20 xl:py-37.5">
      <div className="flex flex-col gap-6 md:flex-row justify-between items-center pb-6 md:pb-8">
        <Title
          title={data.title}
          className="max-w-164.5 w-full text-center md:text-start"
        />
        <p className="max-w-136 w-full text-sm/normal md:text-base/normal xl:text-xl/snug text-[#6F6F6F] font-light text-center md:text-start">
          {data.description}
        </p>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {data.skills.map((value) => (
          <div
            className="bg-anti-flash-white p-6 md:p-10 rounded-3xl flex flex-col xl:flex-row gap-4 xl:gap-6 items-start"
            key={value.id}
          >
            <Image
              alt={value.alt}
              src={value.src}
              width={64}
              height={64}
              className="size-13 md:size-16"
              title={value.alt}
            />
            <div>
              <h3 className="text-xl leading-normal md:text-2xl text-black pb-3">
                {value.title}
              </h3>
              <p className="text-xs leading-normal md:text-base text-[#565656] font-light">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TransformingWaste;
