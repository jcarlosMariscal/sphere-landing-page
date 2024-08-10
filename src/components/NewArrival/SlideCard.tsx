import { BiHeart, BiSolidCartAlt } from "react-icons/bi";
import { Button } from "../Pure/Button";

export const SlideCard = () => {
  return (
    <div className="p-4">
      <div className="w-full h-[20rem] xs:w-[20rem] xs:h-[20rem] 2xl:w-[27rem] 2xl:h-[27rem] shadow-custom2 rounded-lg p-6 flex flex-col">
        <div className="flex justify-end">
          <Button square>
            <BiHeart size={24} />
          </Button>
        </div>
        <div className="bg-gray-200 h-full mx-4 my-2"></div>
      </div>
      <div className="my-6">
        <div className="flex justify-between font-bold text-lg">
          <span>Xiphone 14 Pro Maxe</span>
          <span>$175.00</span>
        </div>
        <div className="my-2">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="flex gap-1 items-center mb-4">
          <div className="flex gap-1">
            <img src="./assets/svg/star.svg" alt="Star" />
            <img src="./assets/svg/star.svg" alt="Star" />
            <img src="./assets/svg/star.svg" alt="Star" />
            <img src="./assets/svg/star.svg" alt="Star" />
            <img src="./assets/svg/star.svg" alt="Star" />
          </div>
          <span>(121)</span>
        </div>
        <Button outline>
          <BiSolidCartAlt size={24} /> Add to Cart
        </Button>
      </div>
    </div>
  );
};
