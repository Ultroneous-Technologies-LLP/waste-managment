import { FC } from "react";
import { header } from "@/types/layout-type";
import Image from "next/image";
import clsx from "clsx";
import { Arrow } from "../icons";

interface SidebarProps {
  sidebarOpen: boolean;
  onClick: () => void;
  data: header;
}

const Sidebar: FC<SidebarProps> = ({ onClick, sidebarOpen, data }) => {
  return (
    <aside
      className={clsx(
        "fixed top-0 right-0 h-full w-70 bg-white shadow-lg z-40 transition-transform duration-300 ease-in-out pt-6",
        {
          "translate-x-0": sidebarOpen,
          "translate-x-full": !sidebarOpen,
        }
      )}
    >
      <div className="p-4">
        <div className="pb-12">
          <Image
            alt={data.headerLogo.alt}
            src={data.headerLogo.src}
            title={data.headerLogo.alt}
            width={60}
            height={65}
            className="w-8.5 h-8 md:w-15 md:h-14 ml-auto mr-0"
          />
        </div>
        <ul className="space-y-4">
          {data.headerLinks.map((link) => (
            <li key={link.label} className="flex gap-4 items-center group">
              <Arrow className="text-primary-yellow transition-all duration-500 ease-in-out group-hover:text-primary-green group-hover:translate-x-1 group-hover:scale-150" />
              <a
                href={link.href}
                onClick={onClick}
                className="text-black text-2xl/snug font-normal transition-all duration-500 ease-in-out group-hover:font-medium group-hover:text-primary-green block"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
