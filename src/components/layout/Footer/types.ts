import { Image } from "@/types";

interface ContactNumber {
  id: number;
  number: string;
}

interface AddressItem {
  id: number;
  address: string;
}

interface LinkItem {
  href: string;
  id: number;
  label: string;
}

interface SectionWithLinks {
  title: string;
  links: LinkItem[];
}

interface Headquarters {
  address: string;
  contactNo: ContactNumber[];
  title: string;
}

interface Newsletter {
  title: string;
  description: string;
}

interface SocialMediaLink {
  id: number;
  href: string;
  Icon: string;
  label: string;
}

interface RegionalOffices {
  title: string;
  regionalOfficesAddress: AddressItem[];
}

interface CopyRightText {
  text: string;
}

export interface FooterProps {
  company: SectionWithLinks;
  copyRightText: CopyRightText;
  footerBottomImage: Image[];
  footerLogo: Image;
  headquarters: Headquarters;
  newsletter: Newsletter;
  regionalOffices: RegionalOffices;
  services: SectionWithLinks;
  socialMediaLink: SocialMediaLink[];
}
