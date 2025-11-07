import clsx from "clsx";
import { ElementType, forwardRef } from "react";

import { ContainerProps, SupportedTags } from "./type";

export const Container = forwardRef<HTMLElement, ContainerProps<SupportedTags>>(
  ({ as, backgroundClassName = "", className = "", children, ...rest }, ref) => {
    const Component = (as || "section") as ElementType;

    if (backgroundClassName) {
      return (
        <Component className={clsx(backgroundClassName)} ref={ref} {...rest}>
          <div className={clsx("mx-auto w-full max-w-360 px-4 md:px-6 xl:px-12.5", className)}>
            {children}
          </div>
        </Component>
      );
    }

    return (
      <Component
        className={clsx("mx-auto w-full max-w-360 px-4 md:px-6 xl:px-12.5", className)}
        ref={ref}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = "Container";
