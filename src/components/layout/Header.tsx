"use client";

import Image from "next/image";
import { FC, useState, useEffect, useRef } from "react";
import Link from "next/link";
import clsx from "clsx";

import { Button, Container } from "@/components/common";
import { Cross, Search } from "@/components/icons";
import { header } from "@/types/layout-type";

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
  const [currentSection, setCurrentSection] = useState("home");
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLUListElement | null>(null);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      data.headerLinks.forEach((link) => {
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
  }, [data.headerLinks]);

  // Update underline position
  useEffect(() => {
    if (!navRef.current) return;

    const activeLink = navRef.current.querySelector<HTMLElement>(
      `[data-id='${currentSection}']`
    );
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
    <div className="flex items-center w-full bg-white px-3 py-2 rounded-full border border-primary-green/40 shadow-[0_0_0_4px_#22631B1F]">
      <Search className="text-black mr-2" aria-hidden="true" />
      <label htmlFor="searchInput" className="sr-only">
        Search input
      </label>
      <input
        autoFocus
        placeholder="Search"
        className="w-full outline-none text-base text-black"
        id="searchInput"
        type="search"
        aria-label="Search site"
      />
      <button
        aria-label="Close search"
        onClick={() => setSearchOpen(false)}
        className="ml-2"
      >
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
      <span className="block w-5 md:w-8.5 h-0.5 md:h-1 bg-primary-green rounded-full mb-2.5"></span>
      <span className="block w-5 md:w-8.5 h-0.5 md:h-1 bg-primary-green rounded-full"></span>
    </button>
  );

  return (
    <nav className="w-full sticky top-0 mx-auto z-50 pt-5 px-4 md:px-6 xl:px-12.5 max-w-360">
      <Container as="header" className={containerClasses} role="banner">
        {/* logo */}
        <div
          className={clsx(
            "xl:max-w-15 xl:w-full transition-all duration-500 ease-in",
            {
              hidden: sidebarOpen,
              "hidden xl:block": searchOpen,
            }
          )}
        >
          <Link
            href="/"
            aria-label="Homepage"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Image
              alt={data.headerLogo.alt}
              src={data.headerLogo.src}
              title={data.headerLogo.alt}
              width={60}
              height={56}
              className="w-9.5 h-8 md:w-15 md:h-14"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="xl:max-w-150 xl:w-full hidden xl:block relative">
          <ul
            ref={navRef}
            className="flex gap-6 justify-center text-base/normal relative"
            id="site-navigation"
            role="menubar"
          >
            {data.headerLinks.map((link) => (
              <li key={link.label} role="none">
                <Link
                  href={link.href}
                  data-id={link.href.replace("/#", "")}
                  className={clsx(
                    "relative px-1 py-2 font-light transition-colors duration-300",
                    currentSection === link.href.replace("/#", "")
                      ? "text-black"
                      : "text-gray-500"
                  )}
                  role="menuitem"
                  aria-current={
                    currentSection === link.href.replace("/#", "")
                      ? "page"
                      : undefined
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Sliding underline */}
            <span
              className="absolute bottom-0 h-[2px] bg-black transition-all duration-300"
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
            className={clsx(
              "w-fit md:max-w-80 md:w-full hidden md:flex gap-4",
              { "md:hidden": searchOpen }
            )}
          >
            {searchOpen ? (
              <SearchBar />
            ) : (
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
                  aria-hidden="true"
                />
                <label htmlFor="searchInput" className="sr-only">
                  Search input
                </label>
                <input
                  id="searchInput"
                  placeholder="Search"
                  className="placeholder:text-philippine-silver text-base focus-within:outline-0 text-philippine-silver max-w-4/5 w-full"
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
                  className="text-[#141420] xl:hidden opacity-30"
                  aria-hidden="true"
                />
                <MenuToggle />
              </>
            ) : (
              <SearchBar />
            )}
          </div>
        </div>

        <div className="hidden xl:flex gap-4">
          <div
            className={clsx(
              "bg-white px-3 py-4.5 rounded-full gap-2 items-center max-w-61.5 w-full flex",
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
              className="placeholder:text-philippine-silver text-base focus:outline-none text-philippine-silver max-w-4/5 w-full"
            />
          </div>

          <Button
            aria-label={data.headerButton.ariaLabel}
            className="!hidden xl:!inline-block xl:max-w-48.5"
          >
            {data.headerButton.label}
          </Button>
        </div>

        <button
          aria-label="Close menu"
          onClick={onMenuClose}
          className={clsx(
            "size-10 rounded-xl bg-[#949494] grid place-content-center transition-all duration-300 ease-in",
            { block: sidebarOpen, hidden: !sidebarOpen || searchOpen }
          )}
        >
          <Cross className="text-white" aria-hidden="true" />
        </button>
      </Container>
    </nav>
  );
};

export default Header;
