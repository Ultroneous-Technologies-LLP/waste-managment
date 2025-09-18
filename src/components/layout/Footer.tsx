import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { Container } from "@/components/common";
import { footer } from "@/types/layout-type";
import { Behance, Dribble, Instagram, LinkedIn } from "@/components/icons";

interface FooterProps {
  data: footer;
}

const iconMap: Record<string, React.ElementType> = {
  LinkedIn,
  Behance,
  Dribble,
  Instagram,
};

const Footer: FC<FooterProps> = ({ data }) => {
  return (
    <Container
      as="footer"
      role="contentinfo"
      className="py-12.5 px-4 md:px-6 xl:py-20 xl:px-12.5"
      backgroundClassName="bg-primary-green"
    >
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-y-8 md:gap-y-12 xl:gap-y-0 md:gap-x-8 pb-8 md:pb-12 xl:pb-8 border-b border-white">
        {/* Logo and Headquarters */}
        <div
          className="text-center md:text-start md:col-start-1 md:col-end-2 md:row-start-1 row-end-2 xl:col-start-1 xl:col-end-2 xl:row-start-1 xl:row-end-2"
          aria-label="Company logo and headquarters information"
        >
          <Image
            alt={data.footerLogo.alt}
            title={data.footerLogo.alt}
            src={data.footerLogo.src}
            width={56}
            height={52}
            className="mx-auto md:ml-0 md:mr-auto"
          />
          <p className="pt-8 pb-4 text-white text-xl/normal">
            {data.headquarters.title}
          </p>
          <address className="pb-4 text-light-silver not-italic text-xs md:text-base md:leading-normal">
            {data.headquarters.address}
          </address>
          <div className="flex text-light-silver gap-2 items-center justify-center md:justify-start text-xs md:text-base leading-normal">
            {data.headquarters.contactNo.map((value) => (
              <React.Fragment key={value.id}>
                <Link href="/" aria-label={`Contact number ${value.number}`}>
                  {value.number}
                </Link>
                <p className="size-6 grid place-content-center last:hidden">
                  <span className="size-1.5 rounded-full bg-light-silver inline-block" />
                </p>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Company Links */}
        <div
          className="text-center md:text-start md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3 xl:col-start-2 xl:col-end-3 xl:row-start-1 xl:row-end-2"
          aria-label="Company links"
        >
          <p className="text-white text-xl/normal pb-4 xl:pb-8">
            {data.company.title}
          </p>
          <ul className="space-y-2 xl:space-y-4 text-light-silver text-xs md:text-base leading-normal flex md:flex-col flex-wrap justify-center">
            {data.company.links.map((value, index) => (
              <div key={value.id} className="flex">
                <li>
                  <Link href={value.href}>{value.label}</Link>
                </li>
                <p
                  className={clsx(
                    "size-4.5 grid place-content-center md:hidden",
                    { hidden: index === data.company.links.length - 1 }
                  )}
                >
                  <span className="size-1 rounded-full bg-light-silver inline-block" />
                </p>
              </div>
            ))}
          </ul>
        </div>

        {/* Services Links */}
        <div
          className="text-center md:text-start md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 xl:col-start-3 xl:col-end-4 xl:row-start-1 xl:row-end-2"
          aria-label="Services links"
        >
          <p className="text-white text-xl/normal pb-4 xl:pb-8">
            {data.services.title}
          </p>
          <ul className="space-y-2 xl:space-y-4 text-light-silver text-xs md:text-base leading-normal">
            {data.services.links.map((value) => (
              <li key={value.id}>
                <Link href={value.href}>{value.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter and Regional Offices */}
        <div
          className="text-center md:text-start md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 xl:col-start-4 xl:col-end-5 xl:row-start-1 xl:row-end-2"
          aria-label="Newsletter subscription and regional offices"
        >
          <div className="pb-8">
            <p className="text-white text-xl/normal pb-4">
              {data.newsletter.title}
            </p>
            <div className="bg-white rounded-full pl-4 py-1 pr-1 flex items-center gap-2.5">
              <label htmlFor="ourNewsletter" className="sr-only">
                our Newsletter
              </label>
              <input
                id="ourNewsletter"
                className="h-fi w-4/5 focus-within:outline-0 text-philippine-silver"
                placeholder="xyz@gmail.com"
              />
              <button
                type="button"
                className="py-3 px-6 bg-primary-green font-medium text-base/normal rounded-full text-white cursor-pointer"
              >
                Submit
              </button>
            </div>
            <p className="text-white text-xs/4 xl:text-sm/4 mt-4">
              {data.newsletter.description}
            </p>
          </div>
          <div>
            <p className="text-white text-xl/normal pb-4">
              {data.regionalOffices.title}
            </p>
            {data.regionalOffices.regionalOfficesAddress.map((value) => (
              <address
                key={value.id}
                className="not-italic text-light-silver pb-4 last:pb-0 font-normal text-xs xl:text-base leading-normal"
              >
                {value.address}
              </address>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="pt-4 md:pt-12 xl:pt-8 flex flex-col md:flex-row justify-between">
        <p className="text-sm/4.5 text-white">{data.copyRightText.text}</p>
        <div className="flex justify-center items-center gap-19 pt-4 md:pt-0">
          <div
            className="flex gap-2 items-center"
            aria-label="Social media links"
          >
            {data.socialMediaLink.map((value) => {
              const Icon = iconMap[value.Icon];
              return (
                <Link
                  className="size-8 rounded-sm border border-white flex justify-center items-center"
                  key={value.id}
                  href={value.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={value.label}
                  title={value.label}
                >
                  <Icon className="text-white" />
                </Link>
              );
            })}
          </div>
          <div className="flex gap-2.5" aria-label="Footer images">
            {data.footerBottomImage.map((value) => (
              <Image
                alt={value.alt}
                title={value.alt}
                src={value.src}
                width={50}
                height={50}
                key={value.id}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
