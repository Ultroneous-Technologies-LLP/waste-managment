"use client";

import gsap from "gsap";
import { FC, useEffect, useRef } from "react";

interface Props {
  onComplete: () => void;
}

const PageLoader: FC<Props> = ({ onComplete }) => {
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const countRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const counter = { value: 0 };

    gsap.to(counter, {
      value: 100,
      duration: 2.2,
      ease: "power3.out",
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.textContent = `${Math.round(counter.value)}%`;
        }
      },
      onComplete: () => {
        gsap.to(loaderRef.current, {
          yPercent: -100,
          duration: 1,
          ease: "power4.inOut",
          onComplete,
        });
      },
    });
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white" ref={loaderRef}>
      <span className="text-6xl font-light text-black" ref={countRef}>
        0%
      </span>
    </div>
  );
};

export default PageLoader;
