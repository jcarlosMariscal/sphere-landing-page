import { FC } from "react";
import { colorTailwind } from "../../assets/data/data";

type Props = {
  all: number;
  name: string;
  color: string;
};

export const ArrivalOption: FC<Props> = ({ all, name, color }) => {
  const active =
    all === 10
      ? "bg-indigo-50 rounded-xl lg:rounded-none lg:bg-transparent before-border before:bg-indigo-800 "
      : "";
  return (
    <div
      className={`lg:pl-4 py-1 px-2 lg:px-0 my-0 lg:my-3 flex flex-col lg:flex-row gap-1 lg:gap-4 items-center ${active}`}
    >
      <span>
        {name} {name === "Camera" ? "Imaging" : ""}
      </span>
      <span
        className={`hidden md:block ${colorTailwind[color]} w-9 text-center py-[2px] rounded-md font-bold`}
      >
        {all}
      </span>
    </div>
  );
};
