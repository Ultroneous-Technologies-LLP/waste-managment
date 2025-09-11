"use client";
import Image from "next/image";
import { Button, Container } from "@/components/common";
import { Cross, DropDown, Search } from "@/components/icons";
import { header } from "@/types/layout-type";
import { FC, useState } from "react";
import Link from "next/link";
import clsx from "clsx";

interface HeaderProps {
  data: header;
}

const Header: FC<HeaderProps> = ({ data }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-5 max-w-335 mx-auto backdrop-blur-[8px] bg-white/70">
      <Container
        as="header"
        className={clsx(
          "md:bg-[#f7f7f7] rounded-full p-4 flex items-center transition-all duration-500 ease-in",
          {
            "justify-start gap-2": menuOpen,
            "justify-between gap-12": !menuOpen,
          }
        )}
      >
        <div
          className={clsx(
            "xl:max-w-15 xl:w-full transition-all duration-500 ease-in",
            { hidden: menuOpen }
          )}
        >
          <Image
            alt={data.headerLogo.alt}
            src={data.headerLogo.src}
            title={data.headerLogo.alt}
            width={60}
            height={56}
            className="w-9.5 h-8 md:w-15 md:h-14"
          />
        </div>
        <div className="xl:max-w-190 xl:w-full hidden xl:block">
          <ul className="flex justify-between text-base/normal">
            {data.headerLinks.map((value) => {
              if (value.label === "About us" || value.label === "Services") {
                return (
                  <li key={value.label}>
                    <Link
                      href={value.href}
                      className="flex gap-2.5 items-center font-light"
                    >
                      {value.label}
                      <DropDown className="text-black mt-1" />
                    </Link>
                  </li>
                );
              }
              return (
                <Link
                  key={value.label}
                  href={value.href}
                  className="text-base/normal font-light text-black"
                >
                  {value.label}
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="xl:max-w-98 w-full hidden md:flex gap-4">
          <div className="bg-white px-3 py-4.5 rounded-full flex gap-2 items-center max-w-46.5 w-full">
            <Search width={16} height={16} />
            <label htmlFor="searchInput" className="sr-only">
              Search input
            </label>
            <input
              id="searchInput"
              placeholder="Search"
              className="placeholder:text-[#B1B3B5] text-base focus-within:outline-0 text-[#b1b3b5] max-w-4/5 w-full"
            />
          </div>
          <Button
            aria-label={data.headerButton.ariaLabel}
            className="!hidden xl:!inline-block"
          >
            {data.headerButton.label}
          </Button>
        </div>
        <div className="flex items-center gap-4 md:hidden">
          <Search />
          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className={clsx("flex flex-col", { hidden: menuOpen })}
          >
            <span className="block w-5 h-0.5 bg-primary-green rounded-full mb-2.5"></span>
            <span className="block w-5 h-0.5 bg-primary-green rounded-full"></span>
          </button>
        </div>
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          className={clsx(
            "size-12 rounded-xl bg-[#949494] grid place-content-center transition-all duration-500 ease-in",
            { block: menuOpen, hidden: !menuOpen }
          )}
        >
          <Cross className="text-white" />
        </button>
        <div
          className={`fixed top-0 right-0 h-screen w-3/5 bg-white shadow-lg z-50 transform transition-transform duration-1000 xl:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 flex flex-col gap-6">
            <ul className="flex flex-col gap-4 text-lg">
              {data.headerLinks.map((value) => (
                <li key={value.label}>
                  <Link
                    href={value.href}
                    className="block text-black font-light"
                    onClick={() => setMenuOpen(false)}
                  >
                    {value.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Button */}
            <Button
              aria-label={data.headerButton.ariaLabel}
              className="mt-auto"
            >
              {data.headerButton.label}
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
