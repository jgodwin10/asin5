import React from "react";
import Logo from "../../public/Images/Logo.png";

const Navbar = () => {
  return (
    <div className="bg-[#F9F9F9] md:relative sticky top-0 z-[9999] w-full md:w-auto md:h-[98px] px-5 h-[75px] flex items-center">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center flex-1">
        <img src={Logo} className="md:w-auto w-[80px]" alt="" />
        <div className="justify-start hidden lg:flex gap-4 pl-8 text-[16px] md:text-[18px] text-[#212121] font-medium items-center flex-1">
          <p>About</p>
          <p>SIP</p>
          <p>Studio</p>
          <p>SEEQ</p>
          <p>Platforms</p>
          <p>Initiatives</p>
          <p>More</p>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <button className="bg-[#20888F] text-white w-[150px] h-[45px] rounded-3xl font-semibold">
            SINC With Us
          </button>
          <button className="bg-[#303030] text-white w-[150px] h-[45px] rounded-3xl font-semibold">
            Apply to SIP 1.0
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
