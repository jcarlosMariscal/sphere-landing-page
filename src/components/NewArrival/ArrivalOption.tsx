import { FC } from "react";
import { colorTailwind } from "../../assets/data/data";

type Props = {
  all: number;
  name: string;
  color: string;
  active: boolean;
  onClick: () => void;
};

export const ArrivalOption: FC<Props> = ({
  all,
  name,
  color,
  active,
  onClick,
}) => {
  const cssClass = active
    ? "bg-indigo-50 rounded-xl lg:rounded-none lg:bg-transparent before-border before:bg-indigo-800 "
    : "";
  return (
    <button
      type="button"
      onClick={onClick}
      className={`lg:pl-4 py-1 px-2 lg:px-0 my-0 lg:my-3 flex flex-col lg:flex-row gap-1 lg:gap-4 items-center ${cssClass}`}
    >
      <span>
        {name} {name === "Camera" ? "Imaging" : ""}
      </span>
      <span
        className={`hidden md:block ${colorTailwind[color]} w-9 text-center py-[2px] rounded-md font-bold`}
      >
        {all}
      </span>
    </button>
  );
};
