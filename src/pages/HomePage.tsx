import { Banner } from "../components/Banner/Banner";
import { NewArrival } from "../components/NewArrival/NewArrival";
import { Provide } from "../components/Provide/Provide";

export const HomePage = () => {
  return (
    <>
      <Banner />
      <Provide />
      <NewArrival />
    </>
  );
};
