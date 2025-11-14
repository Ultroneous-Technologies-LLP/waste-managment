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

export interface footer {
  footerLogo: {
    src: string;
    alt: string;
  };
  headquarters: {
    title: string;
    address: string;
    contactNo: { id: number; number: string }[];
  };
  company: {
    title: string;
    links: { id: number; label: string; href: string }[];
  };
  services: {
    title: string;
    links: { id: number; label: string; href: string }[];
  };
  newsletter: {
    title: string;
    description: string;
  };
  regionalOffices: {
    title: string;
    regionalOfficesAddress: { id: number; address: string }[];
  };
  copyRightText: {
    text: string;
  };
  socialMediaLink: {
    id: number;
    href: string;
    Icon: string;
    label: string;
  }[];
  footerBottomImage: { id: number; src: string; alt: string }[];
}
