import React, { useState } from "react";
import Logo from "../../public/Images/Logo.png";
import { LuMenu } from "react-icons/lu";
import { LiaTimesSolid } from "react-icons/lia";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#F9F9F9] lg:relative sticky top-0 z-[9999] w-full md:w-auto md:h-[98px] px-5 h-[75px] flex items-center">
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
        <LuMenu onClick={() => setOpen(!open)} className="size-10 lg:hidden" />
      </div>

      <div
        className={`fixed top-0 left-0 ${
          !open ? "-translate-x-[120vw]" : "translate-x-0"
        }  duration-700 lg:hidden  w-full bg-white h-screen`}
      >
        <div className="flex justify-center flex-col gap-16 items-center w-full h-full relative">
          <div className="text-[25px] text-center space-y-4">
            <p>About</p>
            <p>SIP</p>
            <p>Studio</p>
            <p>SEEQ</p>
            <p>Platforms</p>
            <p>Initiatives</p>
            <p>More</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-[#20888F] text-white w-[150px] h-[45px] rounded-3xl font-semibold">
              SINC With Us
            </button>
            <button className="bg-[#303030] text-white w-[150px] h-[45px] rounded-3xl font-semibold">
              Apply to SIP 1.0
            </button>
          </div>
          <LiaTimesSolid
            onClick={() => setOpen(!open)}
            className={`size-9  absolute lg:hidden top-7 duration-500 right-7  ${
              open && "rotate-[360deg]"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
