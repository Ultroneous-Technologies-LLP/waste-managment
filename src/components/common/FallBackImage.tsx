"use client";

import { useState, useEffect, FC } from "react";
import Image, { ImageProps } from "next/image";

const DEFAULT_FALLBACK = "/assets/images/fall-back-image.avif";

interface NextImageWithFallbackProps extends Omit<ImageProps, "src"> {
  src: string;
  fallbackSrc?: string; // optional fallback
  alt: string;
}

const NextImageWithFallback: FC<NextImageWithFallbackProps> = ({
  src,
  fallbackSrc,
  alt,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  const handleError = () => {
    if (imgSrc !== (fallbackSrc || DEFAULT_FALLBACK)) {
      setImgSrc(fallbackSrc || DEFAULT_FALLBACK);
    }
  };

  return <Image {...props} src={imgSrc} alt={alt} onError={handleError} />;
};

export default NextImageWithFallback;
