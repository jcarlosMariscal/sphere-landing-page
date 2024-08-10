import { SphereLogo } from "../Pure/SphereLogo";
import { FooterLinks } from "./FooterLinks";
import {
  footerCompany,
  footerContact,
  footerInformation,
} from "../../assets/data/links";

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
        <FooterLinks section="Company" links={footerCompany} />
        <FooterLinks section="Information" links={footerInformation} />
        <FooterLinks section="Contact" links={footerContact} />
      </div>
    </div>
  );
};
