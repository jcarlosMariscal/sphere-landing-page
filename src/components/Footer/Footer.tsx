import { SphereLogo } from "../Pure/SphereLogo";
import { BiSolidPhone } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { FooterLinks } from "./FooterLinks";

export const Footer = () => {
  return (
    <div className="mt-20 mb-10 px-6 lg:px-20 flex flex-col md:flex-row justify-between gap-4 lg:gap-12">
      <div>
        <div className="flex">
          <SphereLogo />
        </div>
        <div className="my-4 lg:my-8">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row  justify-between md:justify-normal gap-6 lg:gap-20">
        <FooterLinks
          section="Company"
          links={[
            { name: "About Us", url: "#" },
            { name: "Products Digital", url: "#" },
            { name: "Customer Reviews", url: "#" },
          ]}
        />
        <FooterLinks
          section="Information"
          links={[
            { name: "Help Center", url: "#" },
            { name: "Payment Methods", url: "#" },
            { name: "Return & Refund", url: "#" },
          ]}
        />
        <div>
          <span className="font-bold mb-2 block">Contact</span>
          <div className="flex flex-col gap-4">
            <a href="" className="flex gap-2">
              <BiSolidPhone size={24} /> (+1) 123-456-7890
            </a>
            <a href="" className="flex gap-2">
              <IoMdMail size={24} /> email@youreemail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
