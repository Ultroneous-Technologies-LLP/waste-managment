import { FC, useState } from "react";
import Link from "next/link";

import { Button, Container, NextImageWithFallback, Title } from "@/components/common";
import { useIsMobile } from "@/hooks/useIsMobile";

import { GetMoreUpdatesSectionProps } from "./types";

export const GetMoreUpdates: FC<GetMoreUpdatesSectionProps> = ({
  blogList,
  button,
  latestBlog,
  title,
}) => {
  const [showAll, setShowAll] = useState(false);
  const isMobile = useIsMobile();

  const blogsToShow = isMobile && !showAll ? blogList.slice(0, 2) : blogList;

  return (
    <Container className="py-20 xl:py-37.5" role="region" aria-labelledby="get-more-updates-title">
      <Title id="get-more-updates-title" title={title} className="text-center" />

      <div
        className="grid gap-8 py-6 md:grid-cols-2 md:gap-6 md:py-8"
        role="list"
        aria-label="Blog updates"
      >
        {/* Latest Blog */}
        <Link
          href={latestBlog.link}
          role="listitem"
          aria-label={`Read latest blog: ${latestBlog.title}`}
        >
          <NextImageWithFallback
            alt={latestBlog.img.alt}
            src={latestBlog.img.src}
            width={658}
            height={350}
            className="h-42.5 w-full object-cover md:h-87.5 md:rounded-3xl xl:h-92.5"
            title={latestBlog.img.alt}
          />
          <p className="pt-4 pb-3 text-xs leading-normal xl:text-xl">{latestBlog.category}</p>
          <h3 className="text-xl leading-normal xl:text-4xl">{latestBlog.title}</h3>
          <p
            className="line-clamp-2 h-14.5 overflow-hidden pt-1 pb-3 text-base leading-normal font-light text-ellipsis text-[#8D8D8D] md:h-11 md:text-xs xl:h-14.5 xl:text-base"
            aria-label={`Blog summary: ${latestBlog.descriptions}`}
          >
            {latestBlog.descriptions}
          </p>
          <p className="text-[10px] leading-normal font-light text-[#8D8D8D] md:mt-2 xl:mt-0 xl:text-xs">
            {latestBlog.date}
          </p>
        </Link>

        {/* Blog List */}
        <div className="space-y-8">
          {blogsToShow.map((value) => (
            <Link
              href={latestBlog.link}
              className="flex flex-col gap-4 md:flex-row"
              key={value.id}
              role="listitem"
              aria-label={`Read blog: ${value.title}`}
            >
              <NextImageWithFallback
                alt={value.alt}
                src={value.src}
                width={260}
                height={158}
                className="w-full object-cover md:h-30 md:max-w-25 md:rounded-3xl xl:h-39.5 xl:max-w-65"
                title={value.alt}
              />
              <div className="w-full md:max-w-95.5">
                <p className="pb-4 text-xs leading-normal">{value.category}</p>
                <h3 className="text-xl leading-normal md:text-base xl:text-2xl">{value.title}</h3>
                <p
                  className="line-clamp-2 h-14.5 overflow-hidden pt-1 text-xs leading-normal font-light text-ellipsis text-[#8D8D8D] md:h-11 xl:h-14.5 xl:text-base"
                  aria-label={`Blog summary: ${value.descriptions}`}
                >
                  {value.descriptions}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto w-fit">
        {(!showAll && isMobile) || !isMobile ? (
          <Button
            onClick={() => {
              if (isMobile) {
                setShowAll(true);
              }
            }}
            aria-label={`Show more blog posts`}
          >
            {button.buttonLabel}
          </Button>
        ) : null}
      </div>
    </Container>
  );
};
