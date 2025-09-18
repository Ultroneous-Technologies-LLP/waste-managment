"use client";
import { FC, useState } from "react";
import clsx from "clsx";
import Link from "next/link";

import { header } from "@/types/layout-type";
import { RightArrow, RightArrowLong } from "@/components/icons";
import { NextImageWithFallback } from "@/components/common";

interface SidebarProps {
  sidebarOpen: boolean;
  onClick: () => void;
  data: header;
}

const Sidebar: FC<SidebarProps> = ({ onClick, sidebarOpen, data }) => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <aside
      className={clsx(
        "fixed top-0 right-0 h-full w-67 bg-white shadow-lg z-40 transition-transform duration-300 ease-in-out pt-6",
        {
          "translate-x-0": sidebarOpen,
          "translate-x-full": !sidebarOpen,
        }
      )}
    >
      <div className="p-4">
        <div className="pb-12">
          <NextImageWithFallback
            alt={data.headerLogo.alt}
            src={data.headerLogo.src}
            title={data.headerLogo.alt}
            width={60}
            height={65}
            className="w-8.5 h-8 md:w-15 md:h-14 ml-auto mr-0"
          />
        </div>
        <ul className="space-y-4">
          {data.headerLinks.map((link) => {
            const isHovered = hoveredLink === link.label;
            return (
              <li
                key={link.label}
                onMouseEnter={() => setHoveredLink(link.label)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <Link
                  href={link.href}
                  onClick={onClick}
                  className={clsx(
                    "text-black text-2xl/snug flex items-center font-normal transition-colors duration-700 ease-in-out",
                    isHovered && "font-medium text-primary-green"
                  )}
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
                        "absolute inset-0 text-primary-green transition-opacity duration-700 ease-in-out",
                        isHovered ? "opacity-100" : "opacity-0"
                      )}
                    />
                    <RightArrow
                      className={clsx(
                        "absolute inset-0 text-primary-yellow transition-opacity duration-700 ease-in-out",
                        !isHovered ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </div>

                  {/* The text will move naturally as the wrapper expands */}
                  <span className="ml-4 transition-all duration-700 ease-in-out">
                    {link.label}
                  </span>
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
