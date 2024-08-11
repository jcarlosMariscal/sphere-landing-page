import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";

import { useRef, useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { SlideCard } from "./SlideCard";
import { Button } from "../Pure/Button";
import { ArrivalOptions } from "./ArrivalOptions";
import { data } from "../../assets/data/data";

type TSwiper = {
  activeIndex: number;
};

export const NewArrival = () => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperClass | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const handleSlideChange = (swiper: TSwiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  const disabled = (currentIndex: number, limit: number) => {
    return currentIndex === limit
      ? "pointer-events-none !opacity-50 border border-gray-800"
      : "bg-lime-400 text-dark border-none";
  };

  const changeIndex = (idx: number) => setActiveTabIndex(idx);

  return (
    <div className="px-2 sm:px-8 xl:px-20">
      <div className="flex justify-between mb-4">
        <h2 className="text-center text-xl sm:text-3xl md:text-4xl 2xl:text-4xl font-black leading-8 sm:leading-[4rem] md:eading-[5.5rem]">
          New <span className="text-indigo-800">Arrival</span> for you
        </h2>
        <div className="flex gap-4">
          <Button
            square
            outline
            handleClick={() => {
              if (swiperRef.current) swiperRef.current.slidePrev();
            }}
            className={disabled(currentIndex, 0)}
          >
            <BiLeftArrowAlt size={24} />
          </Button>
          <Button
            square
            outline
            handleClick={() => {
              if (swiperRef.current) swiperRef.current.slideNext();
            }}
            className={disabled(
              currentIndex,
              data[currentIndex].content.length - 2
            )}
          >
            <BiRightArrowAlt size={24} />
          </Button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <ArrivalOptions
          data={data}
          handleClick={changeIndex}
          activeTab={activeTabIndex}
        />
        <div className="w-full lg:w-9/12 2xl:w-10/12 p-2">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={1}
            spaceBetween={10}
            className="mySwiper"
            onSlideChange={handleSlideChange}
            breakpoints={{
              768: {
                slidesPerView: 2.5,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              500: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
            }}
          >
            {data[activeTabIndex].content.map((el, index) => (
              <SwiperSlide key={index}>
                <SlideCard name={el.name} price={el.price} stars={el.stars} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
