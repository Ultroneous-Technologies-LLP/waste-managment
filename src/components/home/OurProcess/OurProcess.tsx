"use client";

import { FC, useState } from "react";

import { Container, NextImageWithFallback, Title, PlayButton } from "@/components";
import { getImageUrl } from "@/utils";

import { OurProcessSectionProps } from "./types";

export const OurProcess: FC<OurProcessSectionProps> = ({
  description,
  title,
  video,
  videoPoster,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Container
      aria-labelledby="our-process-title"
      className="pt-20 xl:pt-37.5"
      id="process"
      role="region"
    >
      <Title className="text-center" id="our-process-title" title={title} />
      <p
        className="mx-auto w-full max-w-221.5 py-6 text-center text-sm leading-normal md:text-base xl:text-xl"
        id="our-process-description"
      >
        {description}
      </p>

      <div
        aria-labelledby="our-process-title our-process-description"
        className="relative mx-auto h-75 w-full overflow-hidden rounded-2xl md:h-125 "
        role="group"
      >
        {!isPlaying ? (
          <div className="relative h-full w-full rounded-2xl">
            <NextImageWithFallback
              alt={videoPoster.alternativeText}
              className="object-cover"
              fill
              src={getImageUrl(videoPoster.url)}
              title={videoPoster.alternativeText}
            />
            <button
              aria-label={`Play video: ${video.url}`}
              className="absolute inset-0 m-auto flex items-center justify-center transition"
              onClick={() => setIsPlaying(true)}
            >
              <PlayButton aria-hidden="true" {...{ focusable: "false" }} />
            </button>
          </div>
        ) : (
          <video
            aria-label={`Video player: ${video.alternativeText}`}
            autoPlay
            className="h-full w-full object-cover"
            controls
            src={getImageUrl(video.url)}
          />
        )}
      </div>
    </Container>
  );
};
