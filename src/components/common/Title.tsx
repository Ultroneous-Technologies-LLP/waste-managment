import clsx from "clsx";
import { FC } from "react";

interface TitleProps {
  className?: string;
  title: string;
  isMainTitle?: boolean;
  id?: string;
}

const Title: FC<TitleProps> = ({ className = "", title, isMainTitle = false, id }) => {
  return isMainTitle ? (
    <h1
      className={clsx("text-32 leading-snug text-black md:text-5xl xl:text-6xl", className)}
      id={id}
    >
      {title}
    </h1>
  ) : (
    <h2
      className={clsx("md:text-32 text-2xl leading-snug text-black xl:text-6xl", className)}
      id={id}
    >
      {title}
    </h2>
  );
};

export default Title;
