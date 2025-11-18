import { JSX, SVGProps } from "react";

import { ICON_SIZE_0, ICON_SIZE_17 } from "./constant";

const Cross = ({
  width = ICON_SIZE_17,
  height = ICON_SIZE_17,
  ...svgProps
}: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    fill="none"
    height={height}
    role="img"
    viewBox={`${ICON_SIZE_0} ${ICON_SIZE_0} ${ICON_SIZE_17} ${ICON_SIZE_17}`}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    {...svgProps}
  >
    <path
      d="M1 15.1421L15.1421 1"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M1.07422 1.0696L15.2164 15.2117"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export default Cross;
