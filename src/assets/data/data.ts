type TData = {
  name: string;
  svg: string;
  all: number;
  arrival: boolean;
  color: "gray" | "lime" | "indigo" | "slate" | "yellow" | "purple" | "red";
};
export type TColorTailwind = {
  [param: string]: string;
};
export const data: TData[] = [
  {
    name: "Computer & Laptop",
    svg: "computer&laptop.svg",
    all: 15,
    arrival: true,
    color: "gray",
  },
  {
    name: "Mobile & Phone",
    svg: "mobile&phone.svg",
    all: 35,
    arrival: true,
    color: "lime",
  },
  {
    name: "Camera",
    svg: "camera.svg",
    all: 10,
    arrival: true,
    color: "indigo",
  },
  {
    name: "TV & Smart Box",
    svg: "tv&smart-box.svg",
    all: 8,
    arrival: true,
    color: "slate",
  },
  {
    name: "Home Appliance",
    svg: "home-appliance.svg",
    all: 2,
    arrival: true,
    color: "yellow",
  },
  {
    name: "Accesories",
    svg: "accesories.svg",
    all: 21,
    arrival: false,
    color: "purple",
  },
  {
    name: "Other Categories",
    svg: "other-categories.svg",
    all: 21,
    arrival: false,
    color: "red",
  },
];

export const colorTailwind: TColorTailwind = {
  gray: "bg-gray-800 text-white",
  lime: "bg-lime-400 text-dark",
  indigo: "bg-indigo-800 text-white",
  slate: "bg-slate-200 text-dark",
  yellow: "bg-yellow-300 text-dark",
  purple: "bg-purple-800 text-white",
  red: "bg-red-800 text-white",
};
