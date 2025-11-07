"use client";

import Image from "next/image";
import { useState, useEffect, FC } from "react";

import { NextImageWithFallbackProps } from "./type";

const DEFAULT_FALLBACK = "/assets/images/fall-back-image.avif";

export const NextImageWithFallback: FC<NextImageWithFallbackProps> = ({
  src,
  fallbackSrc,
  alt,
  ...props
}) => {
  const [isImgSrc, setIsImgSrc] = useState(src);

  useEffect(() => {
    setIsImgSrc(src);
  }, [src]);

  const handleError = (): void => {
    if (isImgSrc !== (fallbackSrc || DEFAULT_FALLBACK)) {
      setIsImgSrc(fallbackSrc || DEFAULT_FALLBACK);
    }
  };

  return <Image alt={alt} onError={handleError} src={isImgSrc} {...props} />;
};
