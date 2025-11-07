import clsx from "clsx";
import { FC, SVGProps } from "react";

interface ArrowWithBackGroundProps extends SVGProps<SVGSVGElement> {
  className?: string;
  svgClassName?: string;
  width?: number;
  height?: number;
}

const ArrowWithBackGround: FC<ArrowWithBackGroundProps> = ({
  className,
  svgClassName,
  width = 22,
  height = 16,
  ...svgProps
}) => {
  return (
    <div
      className={clsx(
        "flex cursor-pointer items-center justify-center rounded-full border transition-colors duration-300",
        className
      )}
    >
      <svg
        viewBox="0 0 22 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        role="img"
        className={clsx("transition-colors duration-300", svgClassName)}
        {...svgProps}
      >
        <path
          d="M20.5 8L1.5 8M1.5 8L8.625 0.999999M1.5 8L8.625 15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default ArrowWithBackGround;
