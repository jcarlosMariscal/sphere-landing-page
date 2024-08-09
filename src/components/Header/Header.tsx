import { SphereLogo } from "../Pure/SphereLogo";
import { UserActions } from "./UserActions";
import { NavBar } from "./NavBar";
import { BiMenu } from "react-icons/bi";

export const Header = () => {
  return (
    <div className="h-12 sm:h-16 lg:h-24 px-2 sm:px-8 xl:px-20 flex justify-between items-center gap-16 sticky top-0 bg-white z-20">
      <SphereLogo />
      <NavBar />
      <UserActions />
      <div className="block lg:hidden">
        <button>
          <BiMenu size={24} />
        </button>
      </div>
    </div>
  );
};
