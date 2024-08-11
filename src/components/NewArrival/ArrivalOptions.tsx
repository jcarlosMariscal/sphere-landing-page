import { FC } from "react";
import { ArrivalOption } from "./ArrivalOption";
import { TData } from "../../assets/data/data";

type Props = {
  data: TData[];
  activeTab: number;
  handleClick: (idx: number) => void;
};

export const ArrivalOptions: FC<Props> = ({ data, activeTab, handleClick }) => {
  return (
    <div className="w-full lg:w-3/12 2xl:w-2/12 my-2 lg:my-8 h-auto lg:h-64 flex flex-wrap gap-4 justify-evenly lg:block before-border before:bg-gray-200 ">
      {data.map(
        (el, index) =>
          el.arrival && (
            <ArrivalOption
              key={index}
              all={el.all}
              color={el.color}
              name={el.name}
              active={activeTab === index ? true : false}
              onClick={() => handleClick(index)}
            />
          )
      )}
    </div>
  );
};
