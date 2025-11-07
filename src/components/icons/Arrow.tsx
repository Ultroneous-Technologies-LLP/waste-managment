import { SVGProps } from "react";

const Arrow = ({ width = 93, height = 70, ...svgProps }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 93 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      role="img"
      {...svgProps}
    >
      <path
        d="M4.5 35L88.5 35M88.5 35L57 66M88.5 35L57 4"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Arrow;
