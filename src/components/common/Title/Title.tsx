import clsx from "clsx";
import { FC } from "react";

import { TitleProps } from "./types";

export const Title: FC<TitleProps> = ({ className = "", title, isMainTitle = false, id }) => {
  const Tag = isMainTitle ? "h1" : "h2";

  const baseClasses = isMainTitle ? "text-32 md:text-5xl" : "text-2xl md:text-32";

  return (
    <Tag className={clsx("leading-snug text-black xl:text-6xl", baseClasses, className)} id={id}>
      {title}
    </Tag>
  );
};
