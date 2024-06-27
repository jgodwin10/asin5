import React from "react";
import Hero1 from "../../public/Images/hero.jpeg";

const Hero = () => {
  return (
    <div className="">
      <div className="bg-white ">
        <div className="max-w-[1545px] flex  justify-between  ml-auto">
          <div className="py-[120px] text-center md:text-start lg:pl-10 px-8 md:px-0 md:pl-5">
            <div className="lg:w-[491px] text-center md:text-start md:w-[380px]">
              <p className="lg:text-[32px] md:text-[25px] font-semibold">
                SINC Partners is a service incubation company
              </p>
              <p className="text-[#4E4E4E] md:text-[16px] lg:text-[24px]">
                Connecting experts in product development and growth marketing
                willing to offer their services to amazing startups in exchange
                for minute equity (usually 0.5% to 2%).
              </p>
            </div>
            <button className="bg-[#303030] mt-10 text-white w-[163px] h-[49px] rounded-3xl font-semibold">
              SINC With Us
            </button>
          </div>

          <div
            className=" hidden md:block w-[703px] relative before:contents-['']
        before:w-full before:absolute before:top-0 before:h-full before:bg-[#10101080]
        "
          >
            <img
              className="max-w-[703px] h-full object-cover"
              src={Hero1}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
