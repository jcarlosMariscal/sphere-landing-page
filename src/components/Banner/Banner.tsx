export const Banner = () => {
  return (
    <div className="bg-gray-50 px-4 md:px-16 lg:px-30 xl:px-40 py-4 pb-16 sm:py-12 relative">
      <div className="w-full lg:w-10/12 xl:w-8/12">
        <h1 className="text-xl sm:text-5xl md:text-6xl 2xl:text-8xl font-black leading-8 sm:leading-[4rem] md:eading-[5.5rem]">
          <span className="inline sm:block">
            Grab
            <span className="bg-indigo-800 text-white mx-2 px-4 py-2 sm:py-4 sm:px-6 rounded-3xl inline-block -rotate-3 shadow-lg shadow-gray-700/50">
              50%
            </span>
          </span>
          Off Smartphone Collection
        </h1>
        <div className="my-6">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="mt-8 flex items-center gap-4">
          <img
            src="./assets/xiphone-14-edition.png"
            alt="Xiphone 14 Edition"
            className="size-14 sm:size-24"
          />
          <span className="text-base sm:text-xl font-bold w-32">
            Xiphone 14 Edition
          </span>
        </div>
      </div>
      <div className="absolute right-1 lg:right-4 xl:right-16 bottom-0">
        <div className="relative">
          <img
            src="./assets/smartphone.png"
            alt="Smartphone"
            className="w-40 md:w-80 lg:w-[28rem] xl:w-[32rem] 2xl:w-[37rem]"
          />
          <img
            src="./assets/highest-quality.png"
            alt="Highest Quality"
            className="absolute size-12 md:size-20 lg:size-24 xl:size-28 -left-4 bottom-10 xl:bottom-20 "
          />
        </div>
      </div>
    </div>
  );
};
