import { LinkProps } from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonOnlyProps = {
  children: ReactNode;
  as?: "button";
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export type LinkOnlyProps = {
  as: "link";
  children: ReactNode;
  href: string;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href"> &
  Omit<LinkProps, "passHref">;

export type ButtonProps = ButtonOnlyProps | LinkOnlyProps;
