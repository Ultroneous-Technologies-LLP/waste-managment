import React, { FC } from "react";
import Link from "next/link";
import clsx from "clsx";

import { Container, NextImageWithFallback } from "@/components/common";
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
      className="px-4 py-12.5 md:px-6 xl:px-12.5 xl:py-20"
      backgroundClassName="bg-primary-green"
    >
      <div className="grid gap-y-8 border-b border-white pb-8 md:grid-cols-2 md:gap-x-8 md:gap-y-12 md:pb-12 xl:grid-cols-4 xl:gap-y-0 xl:pb-8">
        {/* Logo and Headquarters */}
        <div
          className="row-end-2 text-center md:col-start-1 md:col-end-2 md:row-start-1 md:text-start xl:col-start-1 xl:col-end-2 xl:row-start-1 xl:row-end-2"
          aria-label="Company logo and headquarters information"
        >
          <NextImageWithFallback
            alt={data.footerLogo.alt}
            title={data.footerLogo.alt}
            src={data.footerLogo.src}
            width={56}
            height={52}
            className="mx-auto md:mr-auto md:ml-0"
          />
          <p className="pt-8 pb-4 text-xl/normal text-white">{data.headquarters.title}</p>
          <address className="text-light-silver pb-4 text-xs not-italic md:text-base md:leading-normal">
            {data.headquarters.address}
          </address>
          <div className="text-light-silver flex items-center justify-center gap-2 text-xs leading-normal md:justify-start md:text-base">
            {data.headquarters.contactNo.map((value) => (
              <React.Fragment key={value.id}>
                <Link href="/" aria-label={`Contact number ${value.number}`}>
                  {value.number}
                </Link>
                <p className="grid size-6 place-content-center last:hidden">
                  <span className="bg-light-silver inline-block size-1.5 rounded-full" />
                </p>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Company Links */}
        <div
          className="text-center md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3 md:text-start xl:col-start-2 xl:col-end-3 xl:row-start-1 xl:row-end-2"
          aria-label="Company links"
        >
          <p className="pb-4 text-xl/normal text-white xl:pb-8">{data.company.title}</p>
          <ul className="text-light-silver flex flex-wrap justify-center space-y-2 text-xs leading-normal md:flex-col md:text-base xl:space-y-4">
            {data.company.links.map((value, index) => (
              <div key={value.id} className="flex">
                <li>
                  <Link href={value.href}>{value.label}</Link>
                </li>
                <p
                  className={clsx("grid size-4.5 place-content-center md:hidden", {
                    hidden: index === data.company.links.length - 1,
                  })}
                >
                  <span className="bg-light-silver inline-block size-1 rounded-full" />
                </p>
              </div>
            ))}
          </ul>
        </div>

        {/* Services Links */}
        <div
          className="text-center md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 md:text-start xl:col-start-3 xl:col-end-4 xl:row-start-1 xl:row-end-2"
          aria-label="Services links"
        >
          <p className="pb-4 text-xl/normal text-white xl:pb-8">{data.services.title}</p>
          <ul className="text-light-silver space-y-2 text-xs leading-normal md:text-base xl:space-y-4">
            {data.services.links.map((value) => (
              <li key={value.id}>
                <Link href={value.href}>{value.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter and Regional Offices */}
        <div
          className="text-center md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 md:text-start xl:col-start-4 xl:col-end-5 xl:row-start-1 xl:row-end-2"
          aria-label="Newsletter subscription and regional offices"
        >
          <div className="pb-8">
            <p className="pb-4 text-xl/normal text-white">{data.newsletter.title}</p>
            <div className="flex items-center gap-2.5 rounded-full bg-white py-1 pr-1 pl-4">
              <label htmlFor="ourNewsletter" className="sr-only">
                our Newsletter
              </label>
              <input
                id="ourNewsletter"
                className="h-fi text-philippine-silver w-4/5 focus-within:outline-0"
                placeholder="xyz@gmail.com"
              />
              <button
                type="button"
                className="bg-primary-green cursor-pointer rounded-full px-6 py-3 text-base/normal font-medium text-white"
              >
                Submit
              </button>
            </div>
            <p className="mt-4 text-xs/4 text-white xl:text-sm/4">{data.newsletter.description}</p>
          </div>
          <div>
            <p className="pb-4 text-xl/normal text-white">{data.regionalOffices.title}</p>
            {data.regionalOffices.regionalOfficesAddress.map((value) => (
              <address
                key={value.id}
                className="text-light-silver pb-4 text-xs leading-normal font-normal not-italic last:pb-0 xl:text-base"
              >
                {value.address}
              </address>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col justify-between pt-4 md:flex-row md:pt-12 xl:pt-8">
        <p className="text-sm/4.5 text-white">{data.copyRightText.text}</p>
        <div className="flex items-center justify-center gap-19 pt-4 md:pt-0">
          <div className="flex items-center gap-2" aria-label="Social media links">
            {data.socialMediaLink.map((value) => {
              const Icon = iconMap[value.Icon];
              return (
                <Link
                  className="flex size-8 items-center justify-center rounded-sm border border-white"
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
              <NextImageWithFallback
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
