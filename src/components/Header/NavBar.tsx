import { navBar } from "../../assets/data/links";

export const NavBar = () => {
  return (
    <nav className="flex flex-col gap-4 lg:flex-row lg:gap-14">
      {navBar.map((el, index) => (
        <a key={index} href={el.to} className="nav-link">
          {el.name as string}
        </a>
      ))}
    </nav>
  );
};
