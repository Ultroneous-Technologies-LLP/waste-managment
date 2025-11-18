import clsx from "clsx";
import Link from "next/link";
import React, { FC } from "react";

import { Container, NextImageWithFallback } from "@/components";

import { currentYear, LAST_ITEM_OFFSET, renderIcon } from "./constant";
import { FooterButtonTextEnum } from "./enum";
import { FooterProps } from "./types";

export const Footer: FC<FooterProps> = ({
  company,
  copyRightText,
  footerBottomImage,
  footerLogo,
  headquarters,
  newsletter,
  regionalOffices,
  services,
  socialMediaLink,
}) => (
  <Container
    as="footer"
    backgroundClassName="bg-primary-green"
    className="px-4 py-12.5 md:px-6 xl:px-12.5 xl:py-20"
    role="contentinfo"
  >
    <div className="grid gap-y-8 border-b border-white pb-8 md:grid-cols-2 md:gap-x-8 md:gap-y-12 md:pb-12 xl:grid-cols-4 xl:gap-y-0 xl:pb-8">
      <div
        aria-label="Company logo and headquarters information"
        className="row-end-2 text-center md:col-start-1 md:col-end-2 md:row-start-1 md:text-start xl:col-start-1 xl:col-end-2 xl:row-start-1 xl:row-end-2"
      >
        <NextImageWithFallback
          alt={footerLogo.alternativeText}
          className="mx-auto md:mr-auto md:ml-0"
          height={52}
          src={footerLogo.url}
          title={footerLogo.alternativeText}
          width={56}
        />
        <p className="pt-8 pb-4 text-xl/normal text-white">{headquarters.title}</p>
        <address className="text-light-silver pb-4 text-xs not-italic md:text-base md:leading-normal">
          {headquarters.address}
        </address>
        <div className="text-light-silver flex items-center justify-center gap-2 text-xs leading-normal md:justify-start md:text-base">
          {headquarters.contactNo.map((value) => (
            <React.Fragment key={value.id}>
              <Link aria-label={`Contact number ${value.number}`} href="/">
                {value.number}
              </Link>
              <p className="grid size-6 place-content-center last:hidden">
                <span className="bg-light-silver inline-block size-1.5 rounded-full" />
              </p>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div
        aria-label="Company links"
        className="text-center md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3 md:text-start xl:col-start-2 xl:col-end-3 xl:row-start-1 xl:row-end-2"
      >
        <p className="pb-4 text-xl/normal text-white xl:pb-8">{company.title}</p>
        <ul className="text-light-silver flex flex-wrap justify-center space-y-2 text-xs leading-normal md:flex-col md:text-base xl:space-y-4">
          {company.links.map((value, index) => (
            <div className="flex" key={value.id}>
              <li>
                <Link href={value.href}>{value.label}</Link>
              </li>
              <p
                className={clsx("grid size-4.5 place-content-center md:hidden", {
                  hidden: index === company.links.length - LAST_ITEM_OFFSET,
                })}
              >
                <span className="bg-light-silver inline-block size-1 rounded-full" />
              </p>
            </div>
          ))}
        </ul>
      </div>
      <div
        aria-label="Services links"
        className="text-center md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 md:text-start xl:col-start-3 xl:col-end-4 xl:row-start-1 xl:row-end-2"
      >
        <p className="pb-4 text-xl/normal text-white xl:pb-8">{services.title}</p>
        <ul className="text-light-silver space-y-2 text-xs leading-normal md:text-base xl:space-y-4">
          {services.links.map((value) => (
            <li key={value.id}>
              <Link href={value.href}>{value.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        aria-label="Newsletter subscription and regional offices"
        className="text-center md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 md:text-start xl:col-start-4 xl:col-end-5 xl:row-start-1 xl:row-end-2"
      >
        <div className="pb-8">
          <p className="pb-4 text-xl/normal text-white">{newsletter.title}</p>
          <div className="flex items-center gap-2.5 rounded-full bg-white py-1 pr-1 pl-4">
            <label className="sr-only" htmlFor="ourNewsletter">
              {newsletter.title}
            </label>
            <input
              className="h-fi text-philippine-silver w-4/5 focus-within:outline-0"
              id="ourNewsletter"
              placeholder="xyz@gmail.com"
            />
            <button
              className="bg-primary-green cursor-pointer rounded-full px-6 py-3 text-base/normal font-medium text-white"
              type="button"
            >
              {FooterButtonTextEnum.SUBMIT}
            </button>
          </div>
          <p className="mt-4 text-xs/4 text-white xl:text-sm/4">{newsletter.description}</p>
        </div>
        <div>
          <p className="pb-4 text-xl/normal text-white">{regionalOffices.title}</p>
          {regionalOffices.regionalOfficesAddress.map((value) => (
            <address
              className="text-light-silver pb-4 text-xs leading-normal font-normal not-italic last:pb-0 xl:text-base"
              key={value.id}
            >
              {value.address}
            </address>
          ))}
        </div>
      </div>
    </div>

    <div className="flex flex-col justify-between pt-4 md:flex-row md:pt-12 xl:pt-8">
      <p className="text-sm/4.5 text-white">
        ©&nbsp;{currentYear}&nbsp;
        {copyRightText.text}
      </p>
      <div className="flex items-center justify-center gap-19 pt-4 md:pt-0">
        <div aria-label="Social media links" className="flex items-center gap-2">
          {socialMediaLink.map((value) => {
            const Icon = renderIcon(value.label);
            return (
              <Link
                aria-label={value.label}
                className="flex size-8 items-center justify-center rounded-sm border border-white text-white"
                href={value.href}
                key={value.id}
                rel="noopener noreferrer"
                target="_blank"
                title={value.label}
              >
                <Icon />
              </Link>
            );
          })}
        </div>
        <div aria-label="Footer images" className="flex gap-2.5">
          {footerBottomImage.map((value) => (
            <NextImageWithFallback
              alt={value.alternativeText}
              height={50}
              key={value.id}
              src={value.url}
              title={value.alternativeText}
              width={50}
            />
          ))}
        </div>
      </div>
    </div>
  </Container>
);
