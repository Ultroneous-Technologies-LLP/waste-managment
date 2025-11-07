import { ComponentPropsWithoutRef, JSX, ReactElement } from "react";

export type SupportedTags = Extract<
  keyof JSX.IntrinsicElements,
  "div" | "header" | "footer" | "section"
>;

export type ContainerProps<T extends SupportedTags> = {
  children: ReactElement | ReactElement[];
  as?: T;
  backgroundClassName?: string;
  className?: string;
  id?: string;
} & ComponentPropsWithoutRef<T>;
