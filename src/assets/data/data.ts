export type TContent = {
  name: string;
  price: string;
  stars: number;
};
export type TData = {
  name: string;
  svg: string;
  all: number;
  arrival: boolean;
  color: "gray" | "lime" | "indigo" | "slate" | "yellow" | "purple" | "red";
  content: TContent[];
};
export type TColorTailwind = {
  [param: string]: string;
};

const content1: TContent[] = [
  {
    name: "Xiphone 14 Pro Maxe",
    price: "175.00",
    stars: 121,
  },
  {
    name: "Xiphone 13",
    price: "100.00",
    stars: 89,
  },
  {
    name: "Samsonge Plus",
    price: "132.00",
    stars: 95,
  },
  {
    name: "Xiphone 18",
    price: "250.00",
    stars: 152,
  },
];
const content2: TContent[] = [
  {
    name: "Xiphone 13",
    price: "100.00",
    stars: 89,
  },
  {
    name: "Xiphone 14 Pro Maxe",
    price: "175.00",
    stars: 121,
  },
  {
    name: "Xiphone 18",
    price: "250.00",
    stars: 152,
  },
];
const content3: TContent[] = [
  {
    name: "Xiphone 13",
    price: "100.00",
    stars: 89,
  },
  {
    name: "Xiphone 14 Pro Maxe",
    price: "175.00",
    stars: 121,
  },
  {
    name: "Samsonge Plus",
    price: "132.00",
    stars: 95,
  },
  {
    name: "Xiphone 18",
    price: "250.00",
    stars: 152,
  },
];
export const data: TData[] = [
  {
    name: "Computer & Laptop",
    svg: "computer&laptop.svg",
    all: 15,
    arrival: true,
    color: "gray",
    content: content1,
  },
  {
    name: "Mobile & Phone",
    svg: "mobile&phone.svg",
    all: 35,
    arrival: true,
    color: "lime",
    content: content2,
  },
  {
    name: "Camera",
    svg: "camera.svg",
    all: 10,
    arrival: true,
    color: "indigo",
    content: content3,
  },
  {
    name: "TV & Smart Box",
    svg: "tv&smart-box.svg",
    all: 8,
    arrival: true,
    color: "slate",
    content: content1,
  },
  {
    name: "Home Appliance",
    svg: "home-appliance.svg",
    all: 2,
    arrival: true,
    color: "yellow",
    content: content2,
  },
  {
    name: "Accesories",
    svg: "accesories.svg",
    all: 21,
    arrival: false,
    color: "purple",
    content: content3,
  },
  {
    name: "Other Categories",
    svg: "other-categories.svg",
    all: 21,
    arrival: false,
    color: "red",
    content: content1,
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
