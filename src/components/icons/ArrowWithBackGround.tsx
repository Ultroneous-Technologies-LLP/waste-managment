import clsx from "clsx";
import { FC, SVGProps } from "react";

import { ICON_SIZE_0, ICON_SIZE_16, ICON_SIZE_22 } from "./constant";

interface ArrowWithBackGroundProps extends SVGProps<SVGSVGElement> {
  className?: string;
  height?: number;
  svgClassName?: string;
  width?: number;
}

const ArrowWithBackGround: FC<ArrowWithBackGroundProps> = ({
  className,
  svgClassName,
  width = ICON_SIZE_22,
  height = ICON_SIZE_16,
  ...svgProps
}) => (
  <div
    className={clsx(
      "flex cursor-pointer items-center justify-center rounded-full border transition-colors duration-300",
      className
    )}
  >
    <svg
      className={clsx("transition-colors duration-300", svgClassName)}
      fill="none"
      height={height}
      role="img"
      viewBox={`${ICON_SIZE_0} ${ICON_SIZE_0} ${ICON_SIZE_22} ${ICON_SIZE_16}`}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        d="M20.5 8L1.5 8M1.5 8L8.625 0.999999M1.5 8L8.625 15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </div>
);

export default ArrowWithBackGround;
