import { SVGProps } from "react";

const Arrow = ({
  width = 21,
  height = 32,
  ...svgProps
}: SVGProps<SVGSVGElement>) => {
  return (
    <>
      <svg
        viewBox="0 0 32 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        role="img"
        {...svgProps}
      >
        <path
          d="M1 11.5L31 11.5M31 11.5L19.75 22M31 11.5L19.75 1"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default Arrow;
