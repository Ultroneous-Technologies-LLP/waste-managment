"use client";

import Link from "next/link";
import { FC, useState } from "react";

import { Button, Container, FallBackImage, Title } from "@/components/common";
import { useIsMobile } from "@/hooks/useIsMobile";
import { getImageUrl } from "@/utils";

import { GetMoreUpdatesSectionProps } from "./types";

const SLICE_START = 0;
const SLICE_END = 2;

const GetMoreUpdates: FC<GetMoreUpdatesSectionProps> = ({
  blogList,
  button,
  latestBlog,
  title,
}) => {
  const [showAll, setShowAll] = useState(false);
  const isMobile = useIsMobile();

  const blogsToShow = isMobile && !showAll ? blogList.slice(SLICE_START, SLICE_END) : blogList;

  return (
    <Container aria-labelledby="get-more-updates-title" className="py-20 xl:py-37.5" role="region">
      <Title className="text-center" id="get-more-updates-title" title={title} />
      <div
        aria-label="Blog updates"
        className="grid gap-8 py-6 md:grid-cols-2 md:gap-6 md:py-8"
        role="list"
      >
        <Link
          aria-label={`Read latest blog: ${latestBlog.slug}`}
          href={latestBlog.slug}
          role="listitem"
        >
          <FallBackImage
            alt={latestBlog.image.alternativeText}
            className="h-42.5 w-full rounded-[20px] object-cover md:h-87.5 md:rounded-3xl xl:h-92.5"
            height={350}
            src={getImageUrl(latestBlog.image.url)}
            title={latestBlog.image.alternativeText}
            width={658}
          />
          <p className="pt-4 pb-3 text-xs leading-normal xl:text-xl">{latestBlog.category}</p>
          <h3 className="text-xl leading-normal xl:text-4xl">{latestBlog.title}</h3>
          <p
            aria-label={`Blog summary: ${latestBlog.descriptions}`}
            className="line-clamp-2 h-14.5 overflow-hidden pt-1 pb-3 text-base leading-normal font-light text-ellipsis text-[#8D8D8D] md:h-11 md:text-xs xl:h-14.5 xl:text-base"
          >
            {latestBlog.descriptions}
          </p>
          <p className="text-[10px] leading-normal font-light text-[#8D8D8D] md:mt-2 xl:mt-0 xl:text-xs">
            {latestBlog.date}
          </p>
        </Link>
        <div className="space-y-8">
          {blogsToShow.map((value) => (
            <Link
              aria-label={`Read blog: ${value.title}`}
              className="flex flex-col gap-4 md:flex-row"
              href={latestBlog.slug}
              key={value.id}
              role="listitem"
            >
              <FallBackImage
                alt={value.image.alternativeText}
                className="h-42.5 w-full rounded-[20px] object-cover md:h-30 md:max-w-25 md:rounded-3xl xl:h-39.5 xl:max-w-65"
                height={158}
                src={getImageUrl(value.image.url)}
                title={value.image.alternativeText}
                width={260}
              />
              <div className="w-full md:max-w-95.5">
                <p className="pb-4 text-xs leading-normal">{value.category}</p>
                <h3 className="text-xl leading-normal md:text-base xl:text-2xl">{value.title}</h3>
                <p
                  aria-label={`Blog summary: ${value.descriptions}`}
                  className="line-clamp-2 h-14.5 overflow-hidden pt-1 text-xs leading-normal font-light text-ellipsis text-[#8D8D8D] md:h-11 xl:h-14.5 xl:text-base"
                >
                  {value.descriptions}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto w-fit">
        {!showAll && isMobile ? (
          <Button
            aria-label={button.ariaLabel}
            onClick={() => {
              setShowAll(true);
            }}
          >
            {button.label}
          </Button>
        ) : (
          <Button aria-label={button.ariaLabel} as="link" href={button.href}>
            {button.label}
          </Button>
        )}
      </div>
    </Container>
  );
};

export default GetMoreUpdates;
