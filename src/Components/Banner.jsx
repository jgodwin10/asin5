import React from "react";

const Banner = () => {
  return (
    <div className="max-w-[1007px] mx-auto space-y-[40px] mb-24  md:mt-14">
      <h1 className="lg:text-[80px] md:text-[60px] md:px-7 text-[30px] sm:text-[40px] text-center text-[#212121]">
        Let's build companies that help everyone succeed
      </h1>
      <div className="flex justify-center items-center gap-4">
        <button className="border-[1px] hover:bg-[#303030] text-[13px] md:text-base hover:border-0 hover:text-white duration-700 border-[#212121] text-[#212121] w-[130px] md:w-[190px] md:h-[49px] h-[40px] rounded-3xl font-semibold">
          SINC With Us
        </button>
        <button className="bg-[#303030] text-[13px] md:text-base hover:border-[1px] hover:bg-white hover:border-[#212121] hover:text-[#212121] duration-700 text-white w-[130px] md:w-[190px] md:h-[47px] h-[40px] rounded-3xl font-semibold">
          Apply to SIP 1.0
        </button>
      </div>
    </div>
  );
};

export default Banner;
