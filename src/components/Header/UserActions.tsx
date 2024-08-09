import { BiRightArrowAlt } from "react-icons/bi";

export const UserActions = () => {
  return (
    <div className="hidden lg:flex items-center gap-8">
      <a href="#" className="nav-link">
        LOGIN
      </a>
      <a href="#" className="btn btn-black">
        Sign Up Now
        <BiRightArrowAlt size={24} />
      </a>
    </div>
  );
};
