"use client";
import { Container, Title } from "@/components/common";
import { ourProcessSection } from "@/types/home-type";
import Image from "next/image";
import { FC, useState } from "react";
import { PlayButton } from "../icons";

interface OurProcessProps {
  data: ourProcessSection;
}

const OurProcess: FC<OurProcessProps> = ({ data }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <Container className="pt-20 xl:pt-37.5" id="process">
      <Title title={data.title} className="text-center" />
      <p className="max-w-221.5 w-full mx-auto py-6 text-sm md:text-base xl:text-xl leading-normal text-center">
        {data.description}
      </p>
      <div className="relative w-89.5 h-75 md:w-180 md:h-125 xl:w-335 overflow-hidden rounded-2xl mx-auto">
        {!isPlaying ? (
          <div className="relative w-full h-full">
            <Image
              src={data.video.posterSrc}
              alt={data.video.alt}
              fill
              className="object-cover"
              priority
              title={data.video.alt}
            />
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 m-auto transition flex items-center justify-center"
            >
              <PlayButton />
            </button>
          </div>
        ) : (
          <video
            src={data.video.videoSrc}
            controls
            autoPlay
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </Container>
  );
};

export default OurProcess;
