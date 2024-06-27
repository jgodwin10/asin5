import React from "react";
import Logo from "../../public/Images/logo.svg";
import Niger from "../../public/Images/nigeria.png";
import Accr from "../../public/Images/accr.svg";
import What from "../../public/Images/what.svg";

const Footer = () => {
  return (
    <div className=" bg-[#212121] py-10 px-5 ">
      <div className=" space-y-10 md:space-y-0 ">
        <div className="md:space-y-[61px] max-w-[1240px] pb-16 mx-auto space-y-[40px]">
          <div className="text-white space-y-[12px] max-w-[553px]">
            <h1 className="md:text-[60px] text-[35px] text-white">
              Newsletter
            </h1>
            <p className="md:text-base text-[14px]">
              Get the latest about SINC Partners, our startup Incubator program,
              Portfolio company offerings - straight into your inbox.
            </p>
          </div>
          <div className="flex items-center border-[1px] border-[#676767] rounded-[25px] max-w-[468px] justify-between h-[50px]">
            <input
              className="bg-transparent placeholder:text-[#BABABA] text-[#BABABA] font-semibold flex-1 outline-none py-2 px-4"
              type="text"
              placeholder="Enter your email address"
            />
            <button className="bg-white text-[#212121] px-4 sm:px-0 w-[180px] md:w-[150px] h-[50px] rounded-3xl font-semibold">
              Subscribe
            </button>
          </div>
        </div>
        <hr className="border-[#E9E9E94D] border-[1px]" />
        <div className=" max-w-[1240px] mx-auto grid grid-cols-2 md:pt-10 lg:pt-0 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          <div className="space-y-[15px] lg:py-16">
            <img src={Logo} className="md:w-auto w-[80px]" alt="" />
            <p className="text-white text-[12px] md:text-[14px] leading-[20px] md:leading-[27px]">
              SINC Partners is a service incubation company connecting experts
              in product development and growth marketing willing to offer their
              services to amazing startups in exchange for minute equity
              (usually 0.5% to 2%)
            </p>
          </div>
          <div className="flex lg:py-16 justify-start h-full gap-y-[16px] flex-col items-end  sm:items-center ">
            <div className="">
              <h1 className="text-white md:-ml-[37px] sm:-ml-[30px]  md:text-[18px]">
                Platforms
              </h1>
            </div>
            <div className="space-y-[8px] text-right sm:text-start md:text-base text-[13px]">
              <p className="text-[#C9C9C9]">Kofoundme</p>
              <p className="text-[#C9C9C9]">InResidency</p>
              <p className="text-[#C9C9C9]">Service Market</p>
              <p className="text-[#C9C9C9]">Founders School</p>
              <p className="text-[#C9C9C9]">Metty</p>
              <p className="text-[#C9C9C9]">Grantty</p>
              <p className="text-[#C9C9C9]">Boldtell</p>
              <p className="text-[#C9C9C9]">Chekwa</p>
            </div>
          </div>
          <div className="flex lg:py-16 justify-start h-full gap-y-[16px] flex-col sm:items-center ">
            <div className="">
              <h1 className="text-white sm:-ml-[60px] md:-ml-[77px] md:text-[18px]">
                Initiatives
              </h1>
            </div>
            <div className="space-y-[8px] md:text-base text-[13px]">
              <p className="text-[#C9C9C9]">Jabi Plains</p>
              <p className="text-[#C9C9C9]">Local Pricing Initiative</p>
              <p className="text-[#C9C9C9]">Scholarship Program</p>
              <p className="text-[#C9C9C9]">SSMN Pricing</p>
              <p className="text-[#C9C9C9]">University STEM </p>
              <p className="text-[#C9C9C9]">University InResidency </p>
              <p className="text-[#C9C9C9] flex items-center gap-[2px]">
                1M Nigeria <img src={Niger} alt="" /> Products
              </p>
              <p className="text-[#C9C9C9]">Founders Festival </p>
            </div>
          </div>
          <div className="flex lg:py-16 justify-start h-full gap-y-[16px] flex-col items-end sm:items-start md:items-center ">
            <div className="">
              <h1 className="text-white md:-ml-[67px] md:text-[18px]">
                About Us
              </h1>
            </div>
            <div className="space-y-[8px] text-right sm:text-start md:text-base text-[13px]">
              <p className="text-[#C9C9C9]">Who We Are</p>
              <p className="text-[#C9C9C9]">Our People</p>
              <p className="text-[#C9C9C9]">Concept Innovations</p>
              <p className="text-[#C9C9C9]">Our Process</p>
              <p className="text-[#C9C9C9]">Investors Network</p>
              <p className="text-[#C9C9C9]">CSR & Events</p>
              <p className="text-[#C9C9C9]">Career</p>
              <p className="text-[#C9C9C9]">Contact</p>
            </div>
          </div>
          <div className="flex lg:py-16 justify-start h-full md:col-span-2 lg:col-auto gap-y-[16px] flex-col lg:items-center ">
            <div className="">
              <h1 className="text-white lg:-ml-[60px] md:text-[18px]">More</h1>
            </div>
            <div className="space-y-[8px] md:text-base text-[13px]">
              <p className="text-[#C9C9C9]">Services</p>
              <p className="text-[#C9C9C9]">Equity Jobs</p>
              <p className="text-[#C9C9C9]">EIR Program</p>
              <p className="text-[#C9C9C9]">Offers</p>
              <p className="text-[#C9C9C9]">Innovation News</p>
              <p className="text-[#C9C9C9]">FAQ</p>
              <p className="text-[#C9C9C9]">Blog & Resources</p>
              <p className="text-[#C9C9C9]">Press</p>
            </div>
          </div>
          <div className="flex xl:py-16 xl:pl-6 xl:border-l-[1px] xl:border-[#E9E9E94D] flex-col justify-between items-start">
            <div className="space-y-[20px] text-white">
              <h2 className="font-semibold">Locations</h2>
              <div className="space-y-[8px] text-[14px]">
                <p>Abuja, Nigeria</p>
                <p>Lagos, Nigeria</p>
                <p>Philadelphia, USA</p>
              </div>
            </div>
            <div className="flex  pt-9 w-full items-end gap-5">
              <img
                className="sm:max-w-[130px] max-w-[100px]"
                src={Accr}
                alt=""
              />
              <img className="sm:max-w-[64px] max-w-[50px]" src={What} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
