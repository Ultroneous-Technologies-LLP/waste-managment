import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button, Container, Title } from "@/components/common";
import { getMoreUpdatesSection } from "@/types/home-type";
import { useIsMobile } from "@/hooks/useIsMobile";

interface GetMoreUpdatesProps {
  data: getMoreUpdatesSection;
}

const GetMoreUpdates: FC<GetMoreUpdatesProps> = ({ data }) => {
  const [showAll, setShowAll] = useState(false);
  const isMobile = useIsMobile();

  const blogsToShow =
    isMobile && !showAll ? data.blogList.slice(0, 2) : data.blogList;

  return (
    <Container
      className="py-20 xl:py-37.5"
      role="region"
      aria-labelledby="get-more-updates-title"
    >
      <Title
        id="get-more-updates-title"
        title={data.title}
        className="text-center"
      />

      <div
        className="grid md:grid-cols-2 py-6 md:py-8 gap-8 md:gap-6"
        role="list"
        aria-label="Blog updates"
      >
        {/* Latest Blog */}
        <Link
          href={data.latestBlog.link}
          role="listitem"
          aria-label={`Read latest blog: ${data.latestBlog.title}`}
        >
          <Image
            alt={data.latestBlog.img.alt}
            src={data.latestBlog.img.src}
            width={658}
            height={350}
            className="w-full h-42.5 md:h-87.5 xl:h-92.5 md:rounded-3xl object-cover"
            title={data.latestBlog.img.alt}
          />
          <p className="pt-4 pb-3 text-xs xl:text-xl leading-normal">
            {data.latestBlog.category}
          </p>
          <h3 className="text-xl xl:text-4xl leading-normal">
            {data.latestBlog.title}
          </h3>
          <p
            className="pt-1 pb-3 text-[#8D8D8D] text-base md:text-xs xl:text-base leading-normal font-light overflow-hidden text-ellipsis line-clamp-2 h-14.5 md:h-11 xl:h-14.5"
            aria-label={`Blog summary: ${data.latestBlog.descriptions}`}
          >
            {data.latestBlog.descriptions}
          </p>
          <p className="text-[10px] xl:text-xs leading-normal font-light text-[#8D8D8D] md:mt-2 xl:mt-0">
            {data.latestBlog.date}
          </p>
        </Link>

        {/* Blog List */}
        <div className="space-y-8">
          {blogsToShow.map((value) => (
            <Link
              href={data.latestBlog.link}
              className="flex flex-col md:flex-row gap-4"
              key={value.id}
              role="listitem"
              aria-label={`Read blog: ${value.title}`}
            >
              <Image
                alt={value.alt}
                src={value.src}
                width={260}
                height={158}
                className="w-full md:max-w-25 md:h-30 md:rounded-3xl xl:max-w-65 xl:h-39.5 object-cover"
                title={value.alt}
              />
              <div className="md:max-w-95.5 w-full">
                <p className="pb-4 text-xs leading-normal">{value.category}</p>
                <h3 className="text-xl md:text-base xl:text-2xl leading-normal">
                  {value.title}
                </h3>
                <p
                  className="pt-1 text-[#8D8D8D] text-xs xl:text-base leading-normal font-light overflow-hidden text-ellipsis line-clamp-2 h-14.5 md:h-11 xl:h-14.5"
                  aria-label={`Blog summary: ${value.descriptions}`}
                >
                  {value.descriptions}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="w-fit mx-auto">
        {(!showAll && isMobile) || !isMobile ? (
          <Button
            onClick={() => {
              if (isMobile) {
                setShowAll(true);
              }
            }}
            aria-label={`Show more blog posts`}
          >
            {data.button.buttonLabel}
          </Button>
        ) : null}
      </div>
    </Container>
  );
};

export default GetMoreUpdates;
