import { JSX, SVGProps } from "react";

import { ICON_SIZE_0, ICON_SIZE_18, OPACITY_1 } from "./constant";

const Search = ({
  width = ICON_SIZE_18,
  height = ICON_SIZE_18,
  opacity = OPACITY_1,
  ...svgProps
}: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    fill="none"
    height={height}
    role="img"
    viewBox={`${ICON_SIZE_0} ${ICON_SIZE_0} ${ICON_SIZE_18} ${ICON_SIZE_18}`}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    {...svgProps}
  >
    <path
      d="M13.6922 13.8L17 17M8.42857 4.42857C10.3221 4.42857 11.8571 5.9636 11.8571 7.85714M15.9333 8.46667C15.9333 12.5904 12.5904 15.9333 8.46667 15.9333C4.34294 15.9333 1 12.5904 1 8.46667C1 4.34294 4.34294 1 8.46667 1C12.5904 1 15.9333 4.34294 15.9333 8.46667Z"
      opacity={opacity}
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
    />
  </svg>
);

export default Search;
