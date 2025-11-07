"use client";

import { ReactNode, useState, useEffect } from "react";
import clsx from "clsx";

import data from "@/content/layout.json";
import { layoutData } from "@/types";
import { Footer, Header, Sidebar } from "@/components";

export default function Layout({ children }: { children: ReactNode }) {
  const { footer, header }: layoutData = data;

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [sidebarOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    handleResize(); // run on mount in case user starts on desktop
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Sidebar onClick={() => setSidebarOpen(false)} sidebarOpen={sidebarOpen} {...header} />
      <div
        className={clsx("transition-transform duration-300 ease-in-out", {
          "min-h-screen -translate-x-66": sidebarOpen,
        })}
      >
        <Header {...header} />
        <main>{children}</main>
        <Footer {...footer} />
      </div>
    </div>
  );
}
