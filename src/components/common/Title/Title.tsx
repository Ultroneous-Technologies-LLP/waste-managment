import clsx from "clsx";
import { forwardRef, HTMLAttributes } from "react";

import { TitleProps } from "./types";

const Title = forwardRef<HTMLHeadingElement, TitleProps & HTMLAttributes<HTMLHeadingElement>>(
  ({ className = "", title, isMainTitle = false, id, ...props }, ref) => {
    const Tag = isMainTitle ? "h1" : "h2";
    const baseClasses = isMainTitle ? "text-32 md:text-5xl" : "text-2xl md:text-32";

    return (
      <Tag
        className={clsx("leading-snug text-black xl:text-6xl", baseClasses, className)}
        id={id}
        ref={ref} // <-- ref is forwarded here
        {...props} // <-- spread other props
      >
        {title}
      </Tag>
    );
  }
);

Title.displayName = "Title"; // Important for dev tools

export default Title;
