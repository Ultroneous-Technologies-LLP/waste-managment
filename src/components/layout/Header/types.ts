import { Button, Image, Link } from "@/types";

export interface HeaderProps {
  headerButton: Button;
  headerLinks: Link[];
  headerLogo: Image;
  onMenuClose?: () => void;
  onMenuOpen?: () => void;
  sidebarOpen?: boolean;
}
