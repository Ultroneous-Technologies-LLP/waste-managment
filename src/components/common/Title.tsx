import clsx from "clsx";
import { FC } from "react";

interface TitleProps {
  className?: string;
  title: string;
}

const Title: FC<TitleProps> = ({ className = "", title }) => {
  return (
    <h1
      className={clsx(
        "text-[32px] md:text-5xl xl:text-6xl leading-snug text-black",
        className
      )}
    >
      {title}
    </h1>
  );
};

export default Title;
