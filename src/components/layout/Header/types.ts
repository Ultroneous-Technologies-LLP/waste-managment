import { Image } from "@/types";

interface HeaderLinks {
  href: string;
  id: number;
  label: string;
  title: string;
}

interface HeaderButton {
  ariaLabel:string;
  href: string;
  id: number;
  label: string;
  title: string;
}

export interface HeaderProps {
  headerLogo: Image;
  headerLinks: HeaderLinks[];
  headerButton: HeaderButton;
  sidebarOpen?: boolean;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
}
