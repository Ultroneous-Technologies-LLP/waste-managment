"use client";

import gsap from "gsap";
import { useEffect, RefObject } from "react";

export const usePageReadyAnimation = (refs: RefObject<HTMLElement>[]): void => {
  useEffect((): (() => void) => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { opacity: 0, y: 50, duration: 0.8, ease: "power3.out" },
      });

      refs.forEach((ref) => {
        tl.to(ref.current, { opacity: 1, y: 0, duration: 0.8 }, "+=0.2");
      });
    });

    return (): void => ctx.revert();
  }, [refs]);
};
