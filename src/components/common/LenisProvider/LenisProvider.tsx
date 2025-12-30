/* eslint-disable react/jsx-no-useless-fragment */
"use client";

import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { JSX, ReactNode, useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const LERP_VALUE = 0.025;
const DURATION_VALUE = 1.35;
const WHEEL_MULTIPLIER = 0.9;
const TOUCH_MULTIPLIER = 1.5;

const EASING_MAX = 1;
const EASING_OFFSET = 1.001;
const EASING_BASE = 2;
const EASING_POWER = -10;

interface Props {
  children: ReactNode;
}

const LenisProvider = ({ children }: Props): JSX.Element => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect((): (() => void) => {
    if (lenisRef.current) {
      return () => {};
    }

    const lenis = new Lenis({
      lerp: LERP_VALUE,
      duration: DURATION_VALUE,
      smoothWheel: true,
      // smoothTouch: false,
      wheelMultiplier: WHEEL_MULTIPLIER,
      touchMultiplier: TOUCH_MULTIPLIER,
      syncTouch: false,
      easing: (t: number): number =>
        Math.min(EASING_MAX, EASING_OFFSET - Math.pow(EASING_BASE, EASING_POWER * t)),
    });

    lenisRef.current = lenis;

    const raf = (time: number): void => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    lenis.on("scroll", (): void => {
      ScrollTrigger.update();
    });

    ScrollTrigger.defaults({
      invalidateOnRefresh: true,
      anticipatePin: 1,
    });

    ScrollTrigger.normalizeScroll(true);

    const resizeObserver = new ResizeObserver((): void => {
      ScrollTrigger.refresh();
    });

    resizeObserver.observe(document.body);

    return (): void => {
      resizeObserver.disconnect();
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
};

export default LenisProvider;
