import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";

import { ButtonOnlyProps, ButtonProps, LinkOnlyProps } from "./types";

export const Button: FC<ButtonProps> = (props) => {
  const { as, className, children, ...rest } = props;

  const combinedClass = clsx(
    "text-base/normal font-medium py-4 px-6 rounded-full transition-all duration-500 ease-out hover:ease-in w-fit cursor-pointer w-full inline-block bg-primary-green text-white border border-transparent hover:bg-transparent hover:text-black hover:border-primary-green",
    className
  );

  if (as === "link") {
    const { href, ...linkProps } = rest as LinkOnlyProps;
    return (
      <Link {...linkProps} className={combinedClass} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button {...(rest as ButtonOnlyProps)} className={combinedClass}>
      {children}
    </button>
  );
};
