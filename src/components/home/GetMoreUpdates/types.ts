import { Button, Image } from "@/types";

interface LatestBlog {
  category: string;
  date: string;
  descriptions: string;
  image: Image;
  slug: string;
  title: string;
}

interface BlogList {
  category: string;
  descriptions: string;
  id: number;
  image: Image;
  link: string;
  title: string;
}

export interface GetMoreUpdatesSectionProps {
  blogList: BlogList[];
  button: Button;
  latestBlog: LatestBlog;
  title: string;
}
