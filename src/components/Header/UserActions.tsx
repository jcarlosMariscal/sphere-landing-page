import { BiRightArrowAlt } from "react-icons/bi";

export const UserActions = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8">
      <a href="#" className="nav-link">
        LOGIN
      </a>
      <a href="#" className="btn btn-black px-8 py-3">
        Sign Up Now
        <BiRightArrowAlt size={24} />
      </a>
    </div>
  );
};
