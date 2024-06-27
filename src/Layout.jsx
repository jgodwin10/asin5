import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#F4F4F4] overflow-hidden">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
