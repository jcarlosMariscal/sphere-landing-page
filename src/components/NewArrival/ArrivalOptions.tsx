import { data } from "../../assets/data/data";
import { ArrivalOption } from "./ArrivalOption";

export const ArrivalOptions = () => {
  return (
    <div className="w-full lg:w-3/12 2xl:w-2/12 my-2 lg:my-8 h-auto lg:h-60 flex flex-wrap gap-4 justify-evenly lg:block before-border before:bg-gray-200 ">
      {data.map(
        (el, index) =>
          el.arrival && (
            <ArrivalOption
              key={index}
              all={el.all}
              color={el.color}
              name={el.name}
            />
          )
      )}
    </div>
  );
};
