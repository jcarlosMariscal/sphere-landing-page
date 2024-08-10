import { FC } from "react";
import { Link } from "../../assets/data/links";

type Props = {
  section: string;
  links: Link[];
};
export const FooterLinks: FC<Props> = ({ section, links }) => {
  return (
    <div>
      <span className="font-bold mb-2 block">{section}</span>
      <div className="flex flex-col gap-2">
        {links.map((link, index) => (
          <a key={index} href={link.to} className="flex gap-2">
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};
