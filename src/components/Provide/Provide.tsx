import { data } from "../../assets/data/data";
import { ProvideArticle } from "./ProvideArticle";

export const Provide = () => {
  return (
    <div className="py-24 bg-white px-2 sm:px-8 xl:px-20">
      <h2 className="text-center text-xl sm:text-5xl md:text-6xl 2xl:text-8xl font-black leading-8 sm:leading-[4rem] md:eading-[5.5rem]">
        What <span className="text-indigo-800">we</span> provide?
      </h2>
      <div className="mt-12 flex flex-wrap justify-evenly gap-8">
        {data.map((el, index) => (
          <ProvideArticle key={index} name={el.name} svg={el.svg} />
        ))}
      </div>
    </div>
  );
};
