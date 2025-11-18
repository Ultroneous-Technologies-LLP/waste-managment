import { Button, Image } from "@/types";

interface BlogList {
  category: string;
  descriptions: string;
  image: Image;
  slug: string;
  title: string;
  id?: number;
}

interface LatestBlog extends BlogList {
  date: string;
}

export interface GetMoreUpdatesSectionProps {
  blogList: BlogList[];
  button: Button;
  latestBlog: LatestBlog;
  title: string;
}
