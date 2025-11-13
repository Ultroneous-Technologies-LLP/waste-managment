"use client";

import clsx from "clsx";
import { Lexend } from "next/font/google";
import { useState, useEffect, FC, PropsWithChildren } from "react";

import { Footer, Header, Sidebar } from "@/components/layout";
import { RESPONSIVE_SIZE_LG } from "@/constant";
import data from "@/content/layout.json";
import { layoutData } from "@/types/layout-type";
import "../styles/globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lexend",
});

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { footer, header } = data as layoutData;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth >= RESPONSIVE_SIZE_LG) {
        setIsSidebarOpen(false);
      }
    };

    handleResize(); // run on mount in case user starts on desktop
    window.addEventListener("resize", handleResize);

    return (): void => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${lexend.variable} antialiased`}>
        <div className="relative min-h-screen">
          <Sidebar
            data={header}
            onClick={() => setIsSidebarOpen(false)}
            sidebarOpen={isSidebarOpen}
          />
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
            <Footer data={footer} />
          </div>
        </div>
      </body>
    </html>
  );
};

export default Layout;
