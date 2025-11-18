export interface header {
  headerLogo: {
    src: string;
    alt: string;
  };
  headerLinks: {
    id: number;
    label: string;
    href: string;
    title: string;
  }[];
  headerButton: {
    label: string;
    ariaLabel: string;
  };
}
