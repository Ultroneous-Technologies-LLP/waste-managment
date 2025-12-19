"use client";
import clsx from "clsx";
import Link from "next/link";
import { FC, useState } from "react";

import { FallBackImage } from "@/components/common";
import { RightArrow, RightArrowLong } from "@/components/icons";

import { SideBarProps } from "./types";

const Sidebar: FC<SideBarProps> = ({ onClick, sidebarOpen, headerLinks, headerLogo }) => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <aside
      className={clsx(
        "fixed top-0 right-0 z-40 h-full w-67 bg-white pt-6 shadow-lg transition-transform duration-300 ease-in-out",
        {
          "translate-x-0": sidebarOpen,
          "translate-x-full": !sidebarOpen,
        }
      )}
    >
      <div className="p-4">
        <div className="pb-12">
          <FallBackImage
            alt={headerLogo.alternativeText}
            className="mr-0 ml-auto h-8 w-8.5 md:h-14 md:w-15"
            height={65}
            src={headerLogo.url}
            title={headerLogo.alternativeText}
            width={60}
          />
        </div>
        <ul className="space-y-4">
          {headerLinks.map((link) => {
            const isHovered = hoveredLink === link.label;
            return (
              <li
                key={link.label}
                onMouseEnter={() => setHoveredLink(link.label)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <Link
                  className={clsx(
                    "flex items-center text-2xl/snug font-normal text-black transition-colors duration-700 ease-in-out",
                    isHovered && "text-primary-green font-medium"
                  )}
                  href={link.href}
                  onClick={onClick}
                >
                  {/* Width of this div animates smoothly */}
                  <div
                    className={clsx(
                      "relative h-6 transition-all duration-700 ease-in-out",
                      isHovered ? "w-14" : "w-6"
                    )}
                  >
                    <RightArrowLong
                      className={clsx(
                        "text-primary-green absolute inset-0 transition-opacity duration-700 ease-in-out",
                        isHovered ? "opacity-100" : "opacity-0"
                      )}
                    />
                    <RightArrow
                      className={clsx(
                        "text-primary-yellow absolute inset-0 transition-opacity duration-700 ease-in-out",
                        !isHovered ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </div>

                  {/* The text will move naturally as the wrapper expands */}
                  <span className="ml-4 transition-all duration-700 ease-in-out">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
