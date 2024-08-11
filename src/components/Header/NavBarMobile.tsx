import { FC } from "react";
import { NavBar } from "./NavBar";
import { UserActions } from "./UserActions";

type Props = {
  show: boolean;
};

export const NavBarMobile: FC<Props> = ({ show }) => {
  return (
    <div
      className={`bg-white bg-opacity-95 px-10 xs:px-20 sm:px-12 flex flex-col gap-4 lg:hidden fixed top-12 sm:top-16 bottom-0 right-0 w-screen sm:w-[40vw] transition-transform delay-100 z-50 p-8 ${
        show ? "translate-x-[0]" : "translate-x-[101%]"
      }`}
    >
      <NavBar />
      <UserActions />
    </div>
  );
};
