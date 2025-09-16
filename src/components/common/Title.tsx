import clsx from "clsx";
import { FC } from "react";

interface TitleProps {
  className?: string;
  title: string;
  isMainTitle?: boolean;
}

const Title: FC<TitleProps> = ({
  className = "",
  title,
  isMainTitle = false,
}) => {
  return isMainTitle ? (
    <h1
      className={clsx(
        "text-32 md:text-5xl xl:text-6xl leading-snug text-black",
        className
      )}
    >
      {title}
    </h1>
  ) : (
    <h2
      className={clsx(
        "text-2xl md:text-32 xl:text-6xl leading-snug text-black",
        className
      )}
    >
      {title}
    </h2>
  );
};

export default Title;
