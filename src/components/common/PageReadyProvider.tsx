"use client";

import { createContext, useContext, useEffect, useState, FC, ReactNode, JSX } from "react";

interface PageReadyContextProps {
  isPageReady: boolean;
}

const PageReadyContext = createContext<PageReadyContextProps>({ isPageReady: false });

const PAGE_READY_DELAY_MS = 50;

export const PageReadyProvider: FC<{ children: ReactNode; loaderDone: boolean }> = ({
  children,
  loaderDone,
}): JSX.Element => {
  const [isPageReady, setIsPageReady] = useState<boolean>(false);

  useEffect((): (() => void) | void => {
    if (loaderDone) {
      const timeout = setTimeout(() => setIsPageReady(true), PAGE_READY_DELAY_MS);
      return (): void => clearTimeout(timeout);
    }
  }, [loaderDone]);

  return <PageReadyContext.Provider value={{ isPageReady }}>{children}</PageReadyContext.Provider>;
};

export const usePageReady = (): PageReadyContextProps => useContext(PageReadyContext);
