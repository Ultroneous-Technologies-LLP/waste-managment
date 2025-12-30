"use client";

import gsap from "gsap";
import { FC, useEffect, useRef } from "react";

import { Button, Container, FallBackImage, Title } from "@/components/common";
import { usePageReady } from "@/components/common/PageReadyProvider";
import { ArrowWithBackGround } from "@/components/icons";
import { getImageUrl } from "@/utils";

import { HeroSectionProps } from "./types";

const HomeHero: FC<HeroSectionProps> = ({ button, description, title, image }) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const { isPageReady } = usePageReady();

  useEffect(() => {
    if (!rootRef.current || !isPageReady) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ ease: "power3.out" });

      tl.to(rootRef.current, { opacity: 1, duration: 0.1 })
        .from(".hero-left", { y: 80, opacity: 0, duration: 0.9 })
        .from(".hero-left > *", { y: 40, opacity: 0, stagger: 0.15, duration: 0.7 }, "-=0.4")
        .from(".hero-image", { x: 120, opacity: 0, duration: 1 }, "-=0.6");
    }, rootRef);

    return (): void => ctx.revert();
  }, [isPageReady]);

  return (
    <Container
      aria-labelledby="home-hero-title"
      className="grid scroll-mt-30 grid-cols-1 gap-6 overflow-hidden pt-6 opacity-0 xl:grid-cols-2"
      id="home"
      ref={rootRef}
      role="region"
    >
      <div className="hero-left bg-primary-yellow rounded-3xl p-6 md:p-14 xl:rounded-[56px]">
        <Title className="w-full min-w-77.5 xl:max-w-100" isMainTitle title={title} />
        <p className="py-4 text-sm/normal font-light md:text-base/normal xl:text-lg/normal">
          {description}
        </p>
        <Button as="link" className="w-fit!" href={button.href}>
          {button.label}
        </Button>

        <div className="mt-11 flex gap-2 md:mt-17.5 xl:mt-11">
          <ArrowWithBackGround className="size-12 bg-white" />
          <ArrowWithBackGround className="size-12 rotate-180 bg-white" />
        </div>
      </div>

      <div className="hero-image">
        <FallBackImage
          alt={image.alternativeText}
          className="h-full max-h-50 w-full rounded-3xl object-cover md:max-h-110 xl:max-h-full xl:rounded-[50px]"
          height={658}
          priority
          src={getImageUrl(image.url)}
          title={image.alternativeText}
          width={658}
        />
      </div>
    </Container>
  );
};

export default HomeHero;
