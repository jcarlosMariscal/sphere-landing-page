import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  type?: "button" | "reset" | "submit";
  id?: string;
  outline?: boolean;
  handleClick?: () => void;
  square?: boolean;
  className?: string;
};

export const Button: FC<Props> = ({
  children,
  type = "button",
  outline = false,
  handleClick,
  id,
  square,
  className,
}) => {
  const onClick = () => {
    if (handleClick) handleClick();
  };
  return (
    <button
      type={type}
      id={id}
      className={`btn btn-black ${outline ? "btn-outline" : ""} ${
        square ? "size-12" : "px-8 py-3"
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
