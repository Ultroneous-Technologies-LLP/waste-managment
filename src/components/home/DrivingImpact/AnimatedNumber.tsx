"use client";

import { FC, useEffect, useRef, useState } from "react";

import { AnimatedNumberProps } from "./types";

const DEFAULT_DURATION = 2000;
const MAX_PROGRESS = 1;
const INTERSECTION_THRESHOLD = 0.3;
const INITIAL_VALUE = 0;

const AnimatedNumber: FC<AnimatedNumberProps> = ({ value, duration = DEFAULT_DURATION }) => {
  const [displayValue, setDisplayValue] = useState(INITIAL_VALUE);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let start: number | null = null;

          const step = (timestamp: number): void => {
            if (start === null) {
              start = timestamp;
            }

            const progress = Math.min((timestamp - start) / duration, MAX_PROGRESS);
            setDisplayValue(Math.floor(progress * value));

            if (progress < MAX_PROGRESS) {
              requestAnimationFrame(step);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: INTERSECTION_THRESHOLD }
    );

    observer.observe(element);

    return (): void => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span aria-label={`${displayValue.toLocaleString()}`} ref={ref}>
      {displayValue.toLocaleString()}
    </span>
  );
};

export default AnimatedNumber;
