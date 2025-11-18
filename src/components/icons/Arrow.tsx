import { JSX, SVGProps } from "react";

import { ICON_SIZE_0, ICON_SIZE_70, ICON_SIZE_93 } from "./constant";

const Arrow = ({
  width = ICON_SIZE_93,
  height = ICON_SIZE_70,
  ...svgProps
}: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    fill="none"
    height={height}
    role="img"
    viewBox={`${ICON_SIZE_0} ${ICON_SIZE_0} ${ICON_SIZE_93} ${ICON_SIZE_70}`}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    {...svgProps}
  >
    <path
      d="M4.5 35L88.5 35M88.5 35L57 66M88.5 35L57 4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
  </svg>
);

export default Arrow;
