import { FC } from "react";
type Link = {
  url: string;
  name: string;
};
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
          <a key={index} href={link.url}>
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};
