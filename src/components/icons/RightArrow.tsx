import { JSX, SVGProps } from "react";

import { ICON_SIZE_0, ICON_SIZE_23, ICON_SIZE_32 } from "./constant";

const RightArrow = ({
  width = ICON_SIZE_32,
  height = ICON_SIZE_23,
  ...svgProps
}: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    fill="none"
    height={height}
    role="img"
    viewBox={`${ICON_SIZE_0} ${ICON_SIZE_0} ${ICON_SIZE_32} ${ICON_SIZE_23}`}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    {...svgProps}
  >
    <path
      d="M1 11.5L31 11.5M31 11.5L19.75 22M31 11.5L19.75 1"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export default RightArrow;
