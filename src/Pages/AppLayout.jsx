import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import AnimatedBG from "../Component/AnimatedBG";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <AnimatedBG />
      <Outlet />
    </>
  );
};

export default AppLayout;
