import { SphereLogo } from "../Pure/SphereLogo";
import { UserActions } from "./UserActions";
import { NavBar } from "./NavBar";
import { BiMenu, BiX } from "react-icons/bi";
import { NavBarMobile } from "./NavBarMobile";
import { Button } from "../Pure/Button";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const body = document.body;
    const scrollbarWidth = window.innerWidth - body.clientWidth;

    if (isOpen) {
      body.style.overflow = "hidden";
      body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      body.style.overflow = "";
      body.style.paddingRight = "";
    }

    return () => {
      body.style.overflow = "";
      body.style.paddingRight = "";
    };
  }, [isOpen]);
  return (
    <>
      <div className="h-12 sm:h-16 lg:h-24 px-2 sm:px-8 xl:px-20 flex justify-between items-center gap-16 sticky top-0 bg-white z-20">
        <SphereLogo />
        <div className="hidden lg:block">
          <NavBar />
        </div>
        <div className="hidden lg:block">
          <UserActions />
        </div>
        <div className="block lg:hidden">
          <Button
            square
            outline
            className="border-none"
            handleClick={() => toggleMenu()}
          >
            {isOpen ? <BiX size={24} /> : <BiMenu size={24} />}
          </Button>
        </div>
      </div>
      <NavBarMobile show={isOpen} />
    </>
  );
};
