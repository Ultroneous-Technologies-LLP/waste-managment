import React, { JSX, SVGProps } from "react";

import { ICON_SIZE_0, ICON_SIZE_23, ICON_SIZE_67 } from "./constant";

const RightArrowLong = ({
  width = ICON_SIZE_67,
  height = ICON_SIZE_23,
  ...svgProps
}: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    fill="none"
    height={height}
    role="img"
    viewBox={`${ICON_SIZE_0} ${ICON_SIZE_0} ${ICON_SIZE_67} ${ICON_SIZE_23}`}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    {...svgProps}
  >
    <path
      d="M1 11.5L66 11.5M66 11.5L54.9029 22M66 11.5L54.9029 1"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export default RightArrowLong;
