import { FC } from "react";

type Props = {
  name: string;
  svg: string;
};

export const ProvideArticle: FC<Props> = ({ name, svg }) => {
  return (
    <div className="flex flex-col items-center gap-6 w-28 provide-article">
      <div className="bg-white size-[4.5rem] flex items-center justify-center rounded-full shadow-custom hover:border-[.9rem] hover:border-indigo-50 transition-all">
        <img src={`./assets/svg/${svg}`} className="size-8" alt={name} />
      </div>
      <span className="text-center leading-5">{name}</span>
    </div>
  );
};
