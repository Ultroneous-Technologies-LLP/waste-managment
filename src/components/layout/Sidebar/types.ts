import { Image, Link } from "@/types";

export interface SideBarProps {
  headerLinks: Link[];
  headerLogo: Image;
  onClick: () => void;
  sidebarOpen?: boolean;
}
