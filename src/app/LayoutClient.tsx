"use client";

import clsx from "clsx";
import { useState, useEffect, FC } from "react";

import { Footer, Header, Sidebar } from "@/components";
import { RESPONSIVE_SIZE_LG } from "@/constant";

import { LayoutClientProps } from "./types";

const LayoutClient: FC<LayoutClientProps> = ({ header, footer, children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth < RESPONSIVE_SIZE_LG) {
        return;
      }
      setIsSidebarOpen(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return (): void => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Sidebar data={header} onClick={() => setIsSidebarOpen(false)} sidebarOpen={isSidebarOpen} />
      <div
        className={clsx("transition-transform duration-300 ease-in-out", {
          "min-h-screen -translate-x-66": isSidebarOpen,
        })}
      >
        <Header
          data={header}
          onMenuClose={() => setIsSidebarOpen(false)}
          onMenuOpen={() => setIsSidebarOpen(true)}
          sidebarOpen={isSidebarOpen}
        />
        <main>{children}</main>
        <Footer {...footer} />
      </div>
    </div>
  );
};

export default LayoutClient;
