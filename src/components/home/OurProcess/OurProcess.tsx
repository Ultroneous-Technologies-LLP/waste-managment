"use client";

import {
  Container,
  NextImageWithFallback,
  Title,
  PlayButton,
  OurProcessSectionProps,
} from "@/components";
import { FC, useState } from "react";

export const OurProcess: FC<OurProcessSectionProps> = ({ description, title, video }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Container
      className="pt-20 xl:pt-37.5"
      id="process"
      role="region"
      aria-labelledby="our-process-title"
    >
      <Title id="our-process-title" title={title} className="text-center" />
      <p
        className="mx-auto w-full max-w-221.5 py-6 text-center text-sm leading-normal md:text-base xl:text-xl"
        id="our-process-description"
      >
        {description}
      </p>

      <div
        className="relative mx-auto h-75 w-89.5 overflow-hidden rounded-2xl md:h-125 md:w-180 xl:w-335"
        role="group"
        aria-labelledby="our-process-title our-process-description"
      >
        {!isPlaying ? (
          <div className="relative h-full w-full rounded-2xl">
            <NextImageWithFallback
              src={video.posterSrc}
              alt={video.alt}
              fill
              className="object-cover"
              title={video.alt}
            />
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 m-auto flex items-center justify-center transition"
              aria-label={`Play video: ${video.alt}`}
            >
              <PlayButton aria-hidden="true" {...{ focusable: "false" }} />
            </button>
          </div>
        ) : (
          <video
            src={video.videoSrc}
            controls
            autoPlay
            className="h-full w-full object-cover"
            aria-label={`Video player: ${video.alt}`}
          />
        )}
      </div>
    </Container>
  );
};
