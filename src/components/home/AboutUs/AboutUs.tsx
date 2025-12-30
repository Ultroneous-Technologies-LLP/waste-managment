"use client";

import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FC, JSX, useEffect, useRef } from "react";

import { Button, Container, FallBackImage, Title } from "@/components/common";
import { Arrow } from "@/components/icons";
import { getImageUrl } from "@/utils";

import { AboutUsSectionProps } from "./types";

gsap.registerPlugin(ScrollTrigger);

const splitText = (text: string): JSX.Element[] =>
  text.split("").map((char, index) => (
    <span className="letter inline-block" key={index}>
      {char === " " ? "\u00A0" : char}
    </span>
  ));

const LETTER_LENGTH = 0;

const AboutUs: FC<AboutUsSectionProps> = ({
  button,
  descriptionWithColor,
  descriptionWithDefaultColor,
  title,
  weProtectNature,
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const letters = textRef.current?.querySelectorAll(".letter");
      const cards = cardsRef.current?.children;

      gsap.set([titleRef.current, letters, buttonRef.current, cards], {
        opacity: 0,
        y: 20,
        scale: 0.95,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      });

      if (letters && letters.length > LETTER_LENGTH) {
        tl.to(
          letters,
          {
            opacity: 1,
            y: 0,
            stagger: 0.015,
            ease: "power3.out",
          },
          "+=0.05"
        );
      }

      tl.to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
        },
        "+=0.05"
      );

      if (cards && cards.length > LETTER_LENGTH) {
        tl.to(
          cards,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.1,
            duration: 0.6,
            ease: "power3.out",
          },
          "+=0.05"
        );
      }
    }, sectionRef);

    return (): void => ctx.revert();
  }, []);

  return (
    <Container
      aria-labelledby="about-us-title"
      className="pt-20 xl:pt-37.5"
      id="about-us"
      ref={sectionRef}
      role="region"
    >
      <div className="mx-auto md:max-w-133.5 xl:max-w-220">
        <Title className="text-center" id="about-us-title" ref={titleRef} title={title} />
        <p
          aria-label="About us description"
          className="py-6 text-center text-sm/normal font-light md:py-8 md:text-base/normal xl:text-2xl/normal"
          ref={textRef}
        >
          {splitText(descriptionWithDefaultColor)}
          <span className="text-primary-green font-bold">{splitText(descriptionWithColor)}</span>
        </p>
        <div className="mx-auto max-w-fit" ref={buttonRef}>
          <Button aria-label={button.ariaLabel} as="link" href={button.href}>
            {button.label}
          </Button>
        </div>
      </div>
      <div
        aria-label="We Protect Nature highlights"
        className="grid gap-2 pt-20 md:grid-cols-2 md:pt-25 xl:grid-cols-4 xl:pt-37.5"
        ref={cardsRef}
        role="group"
      >
        {weProtectNature.map(({ backgroundColor, icon, image, text, id }) => (
          <div
            className={clsx(
              "relative mx-auto flex h-43 w-full max-w-89.5 items-center justify-center rounded-full md:h-50 md:max-w-89 xl:max-w-82.5",
              backgroundColor && `bg-${backgroundColor}`
            )}
            key={id}
          >
            <h3
              className={clsx(
                "absolute text-6xl leading-snug",
                image ? "text-white" : "text-black"
              )}
            >
              {text}
            </h3>

            {image && (
              <FallBackImage
                alt={image.alternativeText}
                className="h-full w-full"
                height={200}
                src={getImageUrl(image.url)}
                title={image.alternativeText}
                width={330}
              />
            )}

            {icon && <Arrow aria-hidden="true" className="text-black" height={64} width={62} />}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default AboutUs;
