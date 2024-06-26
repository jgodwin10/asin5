import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

const Layout = () => {
  return (
    <>
      <div className="bg-[#F4F4F4]">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
