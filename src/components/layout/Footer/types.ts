import { Image, Link } from "@/types";
interface Id {
  id: number;
}

interface ContactNo extends Id {
  number: string;
}

interface Headquarters {
  address: string;
  contactNo: ContactNo[];
  title: string;
}

interface Company {
  links: Link[];
  title: string;
}

interface Newsletter {
  description: string;
  title: string;
}

interface RegionalOfficesAddress extends Id {
  address: string;
}

interface RegionalOfficesAddress {
  regionalOfficesAddress: RegionalOfficesAddress[];
  title: string;
}

interface CopyRightText {
  text: string;
}

export interface FooterProps {
  company: Company;
  copyRightText: CopyRightText;
  footerBottomImage: Image[];
  footerLogo: Image;
  headquarters: Headquarters;
  newsletter: Newsletter;
  regionalOffices: RegionalOfficesAddress;
  services: Company;
  socialMediaLink: Link[];
}
