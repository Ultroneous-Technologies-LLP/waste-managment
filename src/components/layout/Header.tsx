"use client";

import Image from "next/image";
import { Button, Container } from "@/components/common";
import { Cross, DropDown, Search } from "@/components/icons";
import { header } from "@/types/layout-type";
import { FC, useState, useMemo } from "react";
import Link from "next/link";
import clsx from "clsx";

interface HeaderProps {
  data: header;
  sidebarOpen?: boolean;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
}

const Header: FC<HeaderProps> = ({
  data,
  sidebarOpen,
  onMenuOpen,
  onMenuClose,
}) => {
  const [searchOpen, setSearchOpen] = useState(false);

  // ✅ Precompute classes
  const containerClasses = clsx(
    "md:bg-[#f7f7f7] rounded-full py-3 pl-2 pr-3 xl:p-4 flex items-center transition-all duration-500 ease-in bg-black/30",
    {
      "justify-end gap-2 md:bg-transparent": sidebarOpen,
      "justify-between gap-12": !sidebarOpen,
      "md:bg-transparent": searchOpen,
    }
  );

  // ✅ Extracted NavLinks (memoized for performance)
  const navLinks = useMemo(
    () =>
      data.headerLinks.map((value) => (
        <li key={value.label}>
          {value.label === "About us" || value.label === "Services" ? (
            <Link
              href={value.href}
              className="flex gap-2.5 items-center font-light"
            >
              {value.label}
              <DropDown className="text-black mt-1" />
            </Link>
          ) : (
            <Link
              href={value.href}
              className="text-base/normal font-light text-black"
            >
              {value.label}
            </Link>
          )}
        </li>
      )),
    [data.headerLinks]
  );

  // ✅ Reusable SearchBar
  const SearchBar = ({ mobile }: { mobile?: boolean }) => (
    <div className="flex items-center w-full bg-white px-3 py-2 rounded-full border border-primary-green/40 shadow-[0_0_0_4px_#22631B1F]">
      <Search className="text-black mr-2" />
      <input
        autoFocus
        placeholder="Search"
        className="w-full outline-none text-base text-black"
      />
      <button
        aria-label="Close search"
        onClick={() => setSearchOpen(false)}
        className="ml-2"
      >
        <Cross className="text-black" />
      </button>
    </div>
  );

  // ✅ Reusable MenuToggle
  const MenuToggle = () => (
    <button
      aria-label="Open menu"
      onClick={onMenuOpen}
      className={clsx("flex flex-col md:mr-4 xl:hidden", {
        hidden: sidebarOpen || searchOpen,
      })}
    >
      <span className="block w-5 md:w-8.5 h-0.5 md:h-1 bg-primary-green rounded-full mb-2.5"></span>
      <span className="block w-5 md:w-8.5 h-0.5 md:h-1 bg-primary-green rounded-full"></span>
    </button>
  );

  return (
    <nav className="w-full fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-5 px-4 md:px-6 xl:px-12.5 mx-auto max-w-360">
      <Container as="header" className={containerClasses}>
        <div
          className={clsx(
            "xl:max-w-15 xl:w-full transition-all duration-500 ease-in",
            { hidden: sidebarOpen || searchOpen }
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

        {/* Desktop Nav */}
        <div
          className={clsx("xl:max-w-150 xl:w-full hidden", {
            "xl:block": !searchOpen,
            hidden: searchOpen,
          })}
        >
          <ul className="flex gap-6 justify-center text-base/normal">
            {navLinks}
          </ul>
        </div>

        {/* Search + Button */}
        <div
          className={clsx("flex gap-6", {
            "w-full": searchOpen,
          })}
        >
          {/* Desktop Search */}
          <div
            className={clsx(
              "w-fit md:max-w-80 xl:max-w-98 md:w-full hidden md:flex gap-4",
              { "md:hidden": searchOpen }
            )}
          >
            {searchOpen ? (
              <SearchBar />
            ) : (
              <>
                <div
                  className={clsx(
                    "bg-white px-3 py-4.5 rounded-full gap-2 items-center xl:max-w-61.5 w-full flex",
                    { hidden: sidebarOpen }
                  )}
                  onClick={() => setSearchOpen(true)}
                >
                  <Search
                    width={16}
                    height={16}
                    className="text-[#141420] opacity-30"
                  />
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
              </>
            )}
          </div>
          <div
            className={clsx("", {
              "w-full": searchOpen,
              "flex items-center gap-4": !searchOpen,
            })}
          >
            {!searchOpen ? (
              <>
                <Search
                  onClick={() => setSearchOpen(true)}
                  className="text-[#141420] md:hidden opacity-30"
                />
                <MenuToggle />
              </>
            ) : (
              <SearchBar mobile />
            )}
          </div>
        </div>

        {/* Close Menu */}
        <button
          aria-label="Close menu"
          onClick={onMenuClose}
          className={clsx(
            "size-10 rounded-xl bg-[#949494] grid place-content-center transition-all duration-300 ease-in",
            { block: sidebarOpen, hidden: !sidebarOpen || searchOpen }
          )}
        >
          <Cross className="text-white" />
        </button>
      </Container>
    </nav>
  );
};

export default Header;
