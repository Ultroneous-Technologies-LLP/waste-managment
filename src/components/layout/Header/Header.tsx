"use client";

import { FC, useState, useEffect, useRef } from "react";
import Link from "next/link";
import clsx from "clsx";

import { Button, Container, NextImageWithFallback, Cross, Search } from "@/components";
import { HeaderProps } from "./types";

export const Header: FC<HeaderProps> = ({
  headerButton,
  headerLinks,
  headerLogo,
  sidebarOpen,
  onMenuOpen,
  onMenuClose,
}) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLUListElement | null>(null);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      headerLinks.forEach((link) => {
        const sectionId = link.href.split("#")[1]; // extract 'home' from '/#home'
        const section = document.getElementById(sectionId); // safer than querySelector
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 100 && top + section.offsetHeight > 100) {
            setCurrentSection(sectionId);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerLinks]);

  // Update underline position
  useEffect(() => {
    if (!navRef.current) return;

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
    {
      "justify-end gap-2 md:bg-transparent": sidebarOpen,
      "justify-between gap-12": !sidebarOpen,
      "md:bg-transparent h-14 md:h-21 bg-transparent": searchOpen,
    }
  );

  // ✅ Extracted NavLinks (memoized for performance)

  // ✅ Reusable SearchBar
  const SearchBar = () => (
    <div className="border-primary-green/40 flex w-full items-center rounded-full border bg-white px-3 py-2 shadow-[0_0_0_4px_#22631B1F]">
      <Search className="mr-2 text-black" aria-hidden="true" />
      <label htmlFor="searchInput" className="sr-only">
        Search input
      </label>
      <input
        autoFocus
        placeholder="Search"
        className="w-full text-base text-black outline-none"
        id="searchInput"
        type="search"
        aria-label="Search site"
      />
      <button aria-label="Close search" onClick={() => setSearchOpen(false)} className="ml-2">
        <Cross className="text-black" aria-hidden="true" />
      </button>
    </div>
  );

  // ✅ Reusable MenuToggle
  const MenuToggle = () => (
    <button
      aria-label="Open menu"
      aria-expanded={sidebarOpen ? "true" : "false"}
      aria-controls="site-navigation"
      onClick={onMenuOpen}
      className={clsx("flex flex-col md:mr-4 xl:hidden", {
        hidden: sidebarOpen || searchOpen,
      })}
    >
      <span className="bg-primary-green mb-2.5 block h-0.5 w-5 rounded-full md:h-1 md:w-8.5"></span>
      <span className="bg-primary-green block h-0.5 w-5 rounded-full md:h-1 md:w-8.5"></span>
    </button>
  );

  return (
    <nav className="sticky top-0 z-50 mx-auto w-full max-w-360 px-4 pt-5 md:px-6 xl:px-12.5">
      <Container as="header" className={containerClasses} role="banner">
        {/* logo */}
        <div
          className={clsx("transition-all duration-500 ease-in xl:w-full xl:max-w-15", {
            hidden: sidebarOpen,
            "hidden xl:block": searchOpen,
          })}
        >
          <Link
            href="/"
            aria-label="Homepage"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <NextImageWithFallback
              alt={headerLogo.alt}
              src={headerLogo.src}
              title={headerLogo.alt}
              width={60}
              height={56}
              className="h-8 w-9.5 md:h-14 md:w-15"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="relative hidden xl:block xl:w-full xl:max-w-150">
          <ul
            ref={navRef}
            className="relative flex justify-center gap-6 text-base/normal"
            id="site-navigation"
            role="menubar"
          >
            {headerLinks.map((link) => (
              <li key={link.label} role="none">
                <Link
                  href={link.href}
                  data-id={link.href.replace("/#", "")}
                  className={clsx(
                    "relative px-1 py-2 font-light transition-colors duration-300",
                    currentSection === link.href.replace("/#", "") ? "text-black" : "text-gray-500"
                  )}
                  role="menuitem"
                  aria-current={currentSection === link.href.replace("/#", "") ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Sliding underline */}
            <span
              className="absolute bottom-0 h-0.5 bg-black transition-all duration-300"
              style={{
                left: underlineStyle.left,
                width: underlineStyle.width,
              }}
            />
          </ul>
        </div>

        {/* Search + Button */}
        <div
          className={clsx("flex gap-6 xl:hidden", {
            "w-full": searchOpen,
          })}
        >
          <div
            className={clsx("hidden w-fit gap-4 md:flex md:w-full md:max-w-80", {
              "md:hidden": searchOpen,
            })}
          >
            {searchOpen ? (
              <SearchBar />
            ) : (
              <div
                className={clsx(
                  "flex w-full items-center gap-2 rounded-full bg-white px-3 py-4.5 xl:max-w-61.5",
                  { hidden: sidebarOpen }
                )}
                onClick={() => setSearchOpen(true)}
              >
                <Search
                  width={16}
                  height={16}
                  className="text-[#141420] opacity-30"
                  aria-hidden="true"
                />
                <label htmlFor="searchInput" className="sr-only">
                  Search input
                </label>
                <input
                  id="searchInput"
                  placeholder="Search"
                  className="placeholder:text-philippine-silver text-philippine-silver w-full max-w-4/5 text-base focus-within:outline-0"
                  type="search"
                  aria-label="Search site"
                />
              </div>
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
                  className={clsx("text-[#141420] opacity-30 xl:hidden", {
                    hidden: !searchOpen,
                  })}
                  aria-hidden="true"
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
                width={16}
                height={16}
                className="text-[#141420] opacity-30"
                aria-hidden="true"
              />
            </button>
            <label htmlFor="searchInput" className="sr-only">
              Search input
            </label>
            <input
              id="searchInput"
              placeholder="Search"
              type="search"
              aria-label="Search site"
              className="placeholder:text-philippine-silver text-philippine-silver w-full max-w-4/5 text-base focus:outline-none"
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
          onClick={onMenuClose}
          className={clsx(
            "grid size-10 place-content-center rounded-xl bg-[#949494] transition-all duration-300 ease-in",
            { block: sidebarOpen, hidden: !sidebarOpen || searchOpen }
          )}
        >
          <Cross className="text-white" aria-hidden="true" />
        </button>
      </Container>
    </nav>
  );
};
