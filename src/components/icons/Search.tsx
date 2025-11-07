import { SVGProps } from "react";

const Search = ({ width = 18, height = 18, opacity = 1, ...svgProps }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      role="img"
      {...svgProps}
    >
      <path
        opacity={opacity}
        d="M13.6922 13.8L17 17M8.42857 4.42857C10.3221 4.42857 11.8571 5.9636 11.8571 7.85714M15.9333 8.46667C15.9333 12.5904 12.5904 15.9333 8.46667 15.9333C4.34294 15.9333 1 12.5904 1 8.46667C1 4.34294 4.34294 1 8.46667 1C12.5904 1 15.9333 4.34294 15.9333 8.46667Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Search;
