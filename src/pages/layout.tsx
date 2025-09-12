"use client";

import { Footer, Header, Sidebar } from "@/components/layout";
import { ReactNode, useState, useEffect } from "react";
import data from "@/content/layout.json";
import { layoutData } from "@/types/layout-type";
import clsx from "clsx";

export default function Layout({ children }: { children: ReactNode }) {
  const layoutData = data as layoutData;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [sidebarOpen]);

  return (
    <div className="relative min-h-screen">
      <Sidebar
        onClick={() => setSidebarOpen(false)}
        sidebarOpen={sidebarOpen}
        data={layoutData.header}
      />
      <div
        className={clsx("transition-transform duration-300 ease-in-out", {
          "min-h-screen -translate-x-72": sidebarOpen,
        })}
      >
        <Header
          data={layoutData.header}
          sidebarOpen={sidebarOpen}
          onMenuOpen={() => setSidebarOpen(true)}
          onMenuClose={() => setSidebarOpen(false)}
        />
        <main className="pt-24">{children}</main>
        <Footer data={layoutData.footer} />
      </div>
    </div>
  );
}
