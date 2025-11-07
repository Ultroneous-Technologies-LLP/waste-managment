import { Image } from "@/types";

export interface BlogBase {
  category: string;
  descriptions: string;
  link: string;
  title: string;
}

export interface LatestBlog extends BlogBase {
  date: string;
  img: Image;
}

export interface BlogListItem extends BlogBase {
  alt: string;
  id: number;
  src: string;
}

export interface Button {
  buttonLabel: string;
}

export interface GetMoreUpdatesSectionProps {
  blogList: BlogListItem[];
  button: Button;
  latestBlog: LatestBlog;
  title: string;
}
