import clsx from "clsx";
import Link, { LinkProps } from "next/link";

import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FC,
  ReactNode,
} from "react";

type ButtonOnlyProps = {
  as?: "button";
  children: ReactNode;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

type LinkOnlyProps = {
  as: "link";
  href: string;
  children: ReactNode;
  className?: string;
} & Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "className" | "children" | "href"
> &
  Omit<LinkProps, "passHref">;

type ButtonProps = ButtonOnlyProps | LinkOnlyProps;

const Button: FC<ButtonProps> = (props) => {
  const { as, className, children, ...rest } = props;

  const combinedClass = clsx(
    "text-base/normal font-medium py-4 px-6 rounded-full transition-all duration-500 ease-out hover:ease-in w-fit cursor-pointer w-full inline-block bg-primary-green text-white border border-transparent hover:bg-transparent hover:text-black hover:border-primary-green",
    className
  );

  if (as === "link") {
    const { href, ...linkProps } = rest as LinkOnlyProps;
    return (
      <Link {...linkProps} href={href} className={combinedClass}>
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

export default Button;
