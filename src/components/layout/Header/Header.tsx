/* eslint-disable max-lines-per-function */
"use client";

import clsx from "clsx";
import Link from "next/link";
import { FC, useState, useEffect, useRef, JSX } from "react";

import { Button, Container } from "@/components/common";
import FallBackImage from "@/components/common/FallBackImage/FallBackImage";
import { Cross, Search } from "@/components/icons";

import { HeaderProps } from "./types";

const SECTION_THRESHOLD = 100;
const MIN_SCROLL_OFFSET = 1;

const Header: FC<HeaderProps> = ({
  headerButton,
  headerLinks,
  headerLogo,
  sidebarOpen,
  onMenuOpen,
  onMenuClose,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLUListElement | null>(null);

  // Scroll spy
  useEffect(() => {
    const handleScroll = (): void => {
      headerLinks.forEach((link) => {
        const sectionId = link.href.split("#")[`${MIN_SCROLL_OFFSET}`];
        const section = document.getElementById(sectionId);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= SECTION_THRESHOLD && top + section.offsetHeight > SECTION_THRESHOLD) {
            setCurrentSection(sectionId);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return (): void => window.removeEventListener("scroll", handleScroll);
  }, [headerLinks]);

  useEffect(() => {
    if (!navRef.current) {
      return;
    }

    const activeLink = navRef.current.querySelector<HTMLElement>(`[data-id='${currentSection}']`);
    if (activeLink) {
      setUnderlineStyle({
        left: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
      });
    }
  }, [currentSection]);

  const containerClasses = clsx(
    "md:bg-[#f7f7f7] rounded-full !py-3 !pl-2 !pr-3 xl:!p-4 flex items-center transition-all duration-500 ease-in bg-white",
    sidebarOpen ? "justify-end gap-2 md:bg-transparent" : "justify-between gap-12",
    isSearchOpen && "md:bg-transparent h-14 md:h-21 bg-transparent"
  );

  const SearchBar = (): JSX.Element => (
    <div className="border-primary-green/40 flex w-full items-center rounded-full border bg-white px-3 py-2 shadow-[0_0_0_4px_#22631B1F]">
      <Search aria-hidden="true" className="mr-2 text-black" />
      <label className="sr-only" htmlFor="searchInput">
        Search input
      </label>
      <input
        aria-label="Search site"
        autoFocus
        className="w-full text-base text-black outline-none"
        id="searchInput"
        placeholder="Search"
        type="search"
      />
      <button aria-label="Close search" className="ml-2" onClick={() => setIsSearchOpen(false)}>
        <Cross aria-hidden="true" className="text-black" />
      </button>
    </div>
  );

  const MenuToggle = (): JSX.Element => (
    <button
      aria-controls="site-navigation"
      aria-expanded={sidebarOpen ? "true" : "false"}
      aria-label="Open menu"
      className={clsx("flex flex-col md:mr-4 xl:hidden", {
        hidden: sidebarOpen || isSearchOpen,
      })}
      onClick={onMenuOpen}
    >
      <span className="bg-primary-green mb-2.5 block h-0.5 w-5 rounded-full md:h-1 md:w-8.5" />
      <span className="bg-primary-green block h-0.5 w-5 rounded-full md:h-1 md:w-8.5" />
    </button>
  );

  return (
    <nav className="sticky top-0 z-50 mx-auto w-full max-w-360 px-4 pt-5 md:px-6 xl:px-12.5">
      <Container as="header" className={containerClasses} role="banner">
        <div
          className={clsx(
            "transition-all duration-500 ease-in xl:w-full xl:max-w-15",
            sidebarOpen && "hidden",
            isSearchOpen && "hidden xl:block"
          )}
        >
          <Link
            aria-label="Homepage"
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <FallBackImage
              alt={headerLogo.alternativeText}
              className="h-8 w-9.5 md:h-14 md:w-15"
              height={56}
              src={headerLogo.url}
              title={headerLogo.alternativeText}
              width={60}
            />
          </Link>
        </div>
        <div className="relative hidden xl:block xl:w-full xl:max-w-150">
          <ul
            className="relative flex justify-center gap-6 text-base/normal"
            id="site-navigation"
            ref={navRef}
            role="menubar"
          >
            {headerLinks.map((link) => (
              <li key={link.label} role="none">
                <Link
                  aria-current={currentSection === link.href.replace("/#", "") ? "page" : undefined}
                  className={clsx(
                    "relative px-1 py-2 font-light transition-colors duration-300",
                    currentSection === link.href.replace("/#", "")
                      ? "text-primary-green"
                      : "text-gray-500"
                  )}
                  data-id={link.href.replace("/#", "")}
                  href={link.href}
                  role="menuitem"
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Sliding underline */}
            <span
              className="bg-primary-green absolute bottom-0 h-0.5 transition-all duration-300"
              style={{
                left: underlineStyle.left,
                width: underlineStyle.width,
              }}
            />
          </ul>
        </div>

        {/* Search + Button */}
        <div className={clsx("flex gap-6 xl:hidden", isSearchOpen && "w-full")}>
          <div
            className={clsx("hidden w-fit gap-4 md:flex md:w-full md:max-w-80", {
              "md:hidden": isSearchOpen,
            })}
          >
            {isSearchOpen ? (
              <SearchBar />
            ) : (
              <div
                className={clsx(
                  "flex w-full items-center gap-2 rounded-full bg-white px-3 py-4.5 xl:max-w-61.5",
                  { hidden: sidebarOpen }
                )}
                onClick={() => setIsSearchOpen(true)}
              >
                <Search
                  aria-hidden="true"
                  className="text-[#141420] opacity-30"
                  height={16}
                  width={16}
                />
                <label className="sr-only" htmlFor="searchInput">
                  Search input
                </label>
                <input
                  aria-label="Search site"
                  className="placeholder:text-philippine-silver text-philippine-silver w-full max-w-4/5 text-base focus-within:outline-0"
                  id="searchInput"
                  placeholder="Search"
                  type="search"
                />
              </div>
            )}
          </div>
          <div className={clsx(isSearchOpen ? "w-full" : "flex items-center gap-4")}>
            {!isSearchOpen ? (
              <>
                <Search
                  aria-hidden="true"
                  className={clsx("text-[#141420] opacity-30 xl:hidden", {
                    hidden: !isSearchOpen,
                  })}
                  onClick={() => setIsSearchOpen(true)}
                />
                <MenuToggle />
              </>
            ) : (
              <SearchBar />
            )}
          </div>
        </div>

        <div className="hidden gap-4 xl:flex">
          <div
            className={clsx(
              "flex w-full max-w-61.5 items-center gap-2 rounded-full bg-white px-3 py-4.5",
              "border border-transparent", // default border transparent
              "focus-within:border-primary-green/40 focus-within:shadow-[0_0_0_4px_#22631B1F]" // green border + shadow on focus
            )}
          >
            <button type="button">
              <Search
                aria-hidden="true"
                className="text-[#141420] opacity-30"
                height={16}
                width={16}
              />
            </button>
            <label className="sr-only" htmlFor="searchInput">
              Search input
            </label>
            <input
              aria-label="Search site"
              className="placeholder:text-philippine-silver text-philippine-silver w-full max-w-4/5 text-base focus:outline-none"
              id="searchInput"
              placeholder="Search"
              type="search"
            />
          </div>

          <Button
            aria-label={headerButton.ariaLabel}
            className="hidden! xl:inline-block! xl:max-w-48.5"
          >
            {headerButton.label}
          </Button>
        </div>

        <button
          aria-label="Close menu"
          className={clsx(
            "grid size-10 place-content-center rounded-xl bg-[#949494] transition-all duration-300 ease-in",
            { block: sidebarOpen, hidden: !sidebarOpen || isSearchOpen }
          )}
          onClick={onMenuClose}
        >
          <Cross aria-hidden="true" className="text-white" />
        </button>
      </Container>
    </nav>
  );
};

export default Header;
