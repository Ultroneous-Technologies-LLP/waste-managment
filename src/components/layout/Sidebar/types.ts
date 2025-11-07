import { HeaderProps } from "../Header";

export interface SidebarProps extends HeaderProps {
  sidebarOpen: boolean;
  onClick: () => void;
}