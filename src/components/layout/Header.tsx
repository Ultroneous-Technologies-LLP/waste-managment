import Image from "next/image";
import { Button, Container } from "@/components/common";
import { DropDown, Search } from "@/components/icons";
import { header } from "@/types/layout-type";
import { FC } from "react";
import Link from "next/link";

interface HeaderProps {
  data: header;
}

const Header: FC<HeaderProps> = ({ data }) => {
  return (
    <nav className="w-full fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-5 max-w-335 mx-auto backdrop-blur-[8px] bg-white/70">
      <Container
        as="header"
        className="bg-[#f7f7f7] rounded-full p-4 flex justify-between gap-12 items-center"
      >
        <div className="max-w-15 w-full">
          <Image
            alt={data.headerLogo.alt}
            src={data.headerLogo.src}
            title={data.headerLogo.alt}
            width={60}
            height={56}
          />
        </div>
        <div className="max-w-190 w-full">
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
        <div className="flex gap-4 max-w-98 w-full">
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
          <Button aria-label={data.headerButton.ariaLabel}>
            {data.headerButton.label}
          </Button>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
