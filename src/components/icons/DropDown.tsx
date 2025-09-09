import { SVGProps } from "react";

const DropDown = ({
  width = 8,
  height = 6,
  ...svgProps
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 8 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      role="img"
      {...svgProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.21967 0.84467C0.512563 0.551777 0.987437 0.551777 1.28033 0.84467L4 3.56434L6.71967 0.844671C7.01256 0.551778 7.48744 0.551778 7.78033 0.844671C8.07322 1.13756 8.07322 1.61244 7.78033 1.90533L4.53033 5.15533C4.23744 5.44822 3.76256 5.44822 3.46967 5.15533L0.21967 1.90533C-0.0732233 1.61244 -0.0732233 1.13756 0.21967 0.84467Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DropDown;
