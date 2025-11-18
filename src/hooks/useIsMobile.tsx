import { useState, useEffect } from "react";

import { RESPONSIVE_SIZE_MD } from "@/constant";

export const useIsMobile = (breakpoint = RESPONSIVE_SIZE_MD): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = (): void => setIsMobile(window.innerWidth < breakpoint);
    checkMobile(); // initial check

    window.addEventListener("resize", checkMobile);
    return (): void => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  return isMobile;
};
