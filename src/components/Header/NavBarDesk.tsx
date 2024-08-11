import { navBar } from "../../assets/data/links";
import { NavBar } from "./NavBar";
import { UserActions } from "./UserActions";

export const NavBarDesk = () => {
  return (
    // <nav className="hidden lg:flex gap-14">
    <>
      <NavBar />
      <UserActions />
    </>
  );
};
