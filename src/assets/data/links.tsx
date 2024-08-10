import { ReactNode } from "react";
import { BiSolidPhone } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";

export type Link = {
  to: string;
  name: string | ReactNode;
};
export const navBar: Link[] = [
  { name: "HOME", to: "/" },
  { name: "PRICING", to: "/" },
  { name: "EVENTS", to: "/" },
  { name: "COMPANY", to: "/" },
];

export const footerCompany: Link[] = [
  { name: "About Us", to: "/" },
  { name: "Products Digital", to: "/" },
  { name: "Customer Reviews", to: "/" },
];
export const footerInformation: Link[] = [
  { name: "Help Center", to: "/" },
  { name: "Payment Methods", to: "/" },
  { name: "Return & Refund", to: "/" },
];
export const footerContact: Link[] = [
  {
    name: (
      <>
        <BiSolidPhone size={24} /> (+1) 123-456-7890
      </>
    ),
    to: "/",
  },
  {
    name: (
      <>
        <IoMdMail size={24} /> email@youreemail.com
      </>
    ),
    to: "/",
  },
];
