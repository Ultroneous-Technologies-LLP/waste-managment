"use client";

import clsx from "clsx";
import { FC, useEffect, useState } from "react";

import { LenisProvider } from "@/components/common";
import PageLoader from "@/components/common/PageLoader";
import { PageReadyProvider } from "@/components/common/PageReadyProvider";
import { Footer, Header, Sidebar } from "@/components/layout";
import { RESPONSIVE_SIZE_LG } from "@/constant";

import { LayoutClientProps } from "./types";

export const LayoutClient: FC<LayoutClientProps> = ({ header, footer, children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoaderDone, setLoaderDone] = useState(false);
  const [isPageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const onLoad = (): void => setPageLoaded(true);

    if (document.readyState === "complete") {
      onLoad();
      return;
    }

    window.addEventListener("load", onLoad);
    return (): void => window.removeEventListener("load", onLoad);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth >= RESPONSIVE_SIZE_LG) {
        setIsSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return (): void => window.removeEventListener("resize", handleResize);
  }, []);

  const isReady = isLoaderDone && isPageLoaded;

  return (
    <>
      {!isReady && <PageLoader onComplete={() => setLoaderDone(true)} />}

      {isReady && (
        <PageReadyProvider loaderDone={isLoaderDone}>
          <div className="relative min-h-screen">
            <LenisProvider>
              <Sidebar
                {...header}
                onClick={() => setIsSidebarOpen(false)}
                sidebarOpen={isSidebarOpen}
              />

              <div
                className={clsx("transition-transform duration-300 ease-in-out", {
                  "min-h-screen -translate-x-66": isSidebarOpen,
                })}
              >
                <Header
                  {...header}
                  onMenuClose={() => setIsSidebarOpen(false)}
                  onMenuOpen={() => setIsSidebarOpen(true)}
                  sidebarOpen={isSidebarOpen}
                />

                <main>{children}</main>
                <Footer {...footer} />
              </div>
            </LenisProvider>
          </div>
        </PageReadyProvider>
      )}
    </>
  );
};
