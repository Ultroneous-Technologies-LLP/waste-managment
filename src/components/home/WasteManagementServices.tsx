import { FC } from "react";
import { Container, Title } from "@/components/common";
import { wasteManagementServices } from "@/types/home-type";
import { ArrowWithBackGround } from "@/components/icons";
import Image from "next/image";

interface WasteManagementServicesProps {
  data: wasteManagementServices;
}

const WasteManagementServices: FC<WasteManagementServicesProps> = ({
  data,
}) => {
  return (
    <Container className="pb-20 xl:pb-37.5 scroll-mt-30" id="services">
      <div className="flex flex-col gap-6 md:flex-row justify-between items-center pb-6 md:pb-8 border-b border-[#D6D6D6]">
        <Title
          title={data.title}
          className="max-w-164.5 w-full text-center md:text-start"
        />
        <p className="max-w-136 w-full text-lg/normal md:text-base/normal xl:text-xl/snug text-[#6F6F6F] font-light text-center md:text-start">
          {data.description}
        </p>
      </div>
      <div>
        {data.services.map((value) => (
          <div
            key={value.id}
            className="py-6 md:py-11.5 xl:py-5 flex justify-between items-center border-b border-[#D6D6D6] relative group"
          >
            <h3 className="text-xl/snug md:text-2xl/normal xl:text-xl/snug max-w-75 md:max-w-100 xl:max-w-75 w-full">
              {value.title}
            </h3>
            <p className="text-xl/snug max-w-136.5 w-full text-[#6F6F6F] font-light xl:block hidden">
              {value.description}
            </p>
            <ArrowWithBackGround
              className="bg-primary-yellow size-14.5 border-transparent group-hover:bg-primary-green"
              width={22}
              height={16}
              svgClassName="rotate-[130deg] text-black group-hover:text-white"
            />
            <Image
              alt={value.alt}
              src={value.src}
              width={203}
              height={237}
              className="absolute right-25 invisible group-hover:visible hidden xl:block"
              title={value.alt}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WasteManagementServices;
