export interface NavItem {
  label: string;
  href: string;
  dropdownItems?: NavItem[];
}

export interface FootprintData {
  electricity: number;
  transportation: number;
  waste: number;
  diet: number;
}