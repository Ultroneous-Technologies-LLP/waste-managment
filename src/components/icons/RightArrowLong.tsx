import React, { SVGProps } from "react";

const RightArrowLong = ({
  width = 67,
  height = 23,
  ...svgProps
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 67 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      role="img"
      {...svgProps}
    >
      <path
        d="M1 11.5L66 11.5M66 11.5L54.9029 22M66 11.5L54.9029 1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RightArrowLong;
