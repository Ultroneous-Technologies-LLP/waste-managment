import { SVGProps } from "react";

const Cross = ({ width = 17, height = 17, ...svgProps }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      role="img"
      {...svgProps}
    >
      <path
        d="M1 15.1421L15.1421 1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.07422 1.0696L15.2164 15.2117"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Cross;
