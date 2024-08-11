import { BiSolidCartAlt } from "react-icons/bi";
import { Button } from "../Pure/Button";
import { useEffect, useState } from "react";
import { TContent } from "../../assets/data/data";

export const SlideCard = ({ name, stars, price }: TContent) => {
  const [cart, setCart] = useState<boolean>(false);
  const [favorite, setIsFavorite] = useState<boolean>(false);
  const addCart = () => setCart(true);

  useEffect(() => {
    if (cart) {
      setTimeout(() => {
        setCart(false);
      }, 3500);
    }
  }, [cart]);
  useEffect(() => {
    if (favorite) {
      setTimeout(() => {
        setIsFavorite(false);
      }, 1000);
    }
  }, [favorite]);

  return (
    <div className="p-4">
      <div className="w-full h-[20rem] xs:w-[20rem] xs:h-[20rem] 2xl:w-[27rem] 2xl:h-[27rem] shadow-custom2 rounded-lg p-6 flex flex-col">
        <div className="flex justify-end">
          <Button
            square
            className={`relative btn-favorite ${favorite ? "active" : ""}`}
            handleClick={() => setIsFavorite(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="fill-black stroke-white svg-heart"
            >
              <path
                strokeWidth="2"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
          </Button>
        </div>
        <div className="bg-gray-200 h-full mx-4 my-2"></div>
      </div>
      <div className="my-6">
        <div className="flex justify-between font-bold text-lg">
          <span>{name}</span>
          <span>{price}</span>
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
          <span>({stars})</span>
        </div>
        <Button
          outline
          className={`btn-cart ${cart ? "animation" : ""}`}
          handleClick={() => addCart()}
        >
          <BiSolidCartAlt size={24} className="cart-icon" />{" "}
          <span>Add to Cart</span>
        </Button>
      </div>
    </div>
  );
};
