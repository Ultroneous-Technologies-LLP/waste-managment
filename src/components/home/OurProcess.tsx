"use client";

import { Container, NextImageWithFallback, Title } from "@/components/common";
import { ourProcessSection } from "@/types/home-type";
import { FC, useState } from "react";
import { PlayButton } from "@/components/icons";

interface OurProcessProps {
  data: ourProcessSection;
}

const OurProcess: FC<OurProcessProps> = ({ data }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Container
      className="pt-20 xl:pt-37.5"
      id="process"
      role="region"
      aria-labelledby="our-process-title"
    >
      <Title
        id="our-process-title"
        title={data.title}
        className="text-center"
      />
      <p
        className="max-w-221.5 w-full mx-auto py-6 text-sm md:text-base xl:text-xl leading-normal text-center"
        id="our-process-description"
      >
        {data.description}
      </p>

      <div
        className="relative w-89.5 h-75 md:w-180 md:h-125 xl:w-335 overflow-hidden rounded-2xl mx-auto"
        role="group"
        aria-labelledby="our-process-title our-process-description"
      >
        {!isPlaying ? (
          <div className="relative w-full h-full rounded-2xl">
            <NextImageWithFallback
              src={data.video.posterSrc}
              alt={data.video.alt}
              fill
              className="object-cover"
              title={data.video.alt}
            />
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 m-auto transition flex items-center justify-center"
              aria-label={`Play video: ${data.video.alt}`}
            >
              <PlayButton aria-hidden="true" {...{ focusable: "false" }} />
            </button>
          </div>
        ) : (
          <video
            src={data.video.videoSrc}
            controls
            autoPlay
            className="w-full h-full object-cover"
            aria-label={`Video player: ${data.video.alt}`}
          />
        )}
      </div>
    </Container>
  );
};

export default OurProcess;
