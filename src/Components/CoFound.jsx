import React from "react";
import Arrow from "../../public/Images/arrow.svg";

const CoFound = () => {
  return (
    <div className="mt-10 pb-16 px-5 ">
      <div className="max-w-[1260px] space-y-10 mx-auto">
        <div className="lg:max-w-[974px] md:max-w-[880px] mx-auto space-y-[24px]">
          <h2 className="text-[#212121] text-center font-semibold lg:text-[56px] text-2xl md:text-5xl">
            Co-found With Us
          </h2>
          <p className="text-[#4E4E4E] text-center text-[14px] md:text-[17px]">
            We seek to collaborate with visionary individuals who are solving
            similar problems of helping entrepreneurs succeed
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-[24px] lg:mx-auto lg:max-w-[380px] bg-white p-[20px] rounded-[12px]">
            <p className="size-[60px] rounded-full bg-[#303030] flex items-center justify-center font-semibold text-[20px] text-white">
              1
            </p>
            <h3 className="md:text-[20px] text-[18px] font-semibold">
              We Ideate
            </h3>
            <p className="text-[#4E4E4E] md:text-[16px] text-[14px] font-normal">
              We internally generate concepts and ideas that help solve problems
              in our thesis areas, after which we proceed to develop a
              nano/micro MVP (usually having as low as 30 functions to as high
              as 100 functions) of the product that we take to the market.
            </p>
          </div>
          <div className="flex flex-col gap-[24px] lg:mx-auto lg:max-w-[380px] bg-white p-[20px] rounded-[12px]">
            <p className="size-[60px] rounded-full bg-[#F47733] flex items-center justify-center font-semibold text-[20px] text-white">
              2
            </p>
            <h3 className="md:text-[20px] text-[18px] font-semibold">
              You Validate
            </h3>
            <p className="text-[#4E4E4E] md:text-[16px] text-[14px] font-normal">
              You join our 3 months inResidence program as a business expert to
              run the operations or as a technical expert to further the
              development and validate the idea with an average monthly revenue
              of $1k or 10,000 users and/or an MVP of at least 150 functions
            </p>
          </div>
          <div className="flex flex-col gap-[24px] lg:mx-auto lg:max-w-[380px] bg-white p-[20px] rounded-[12px]">
            <p className="size-[60px] rounded-full bg-[#FF78BF] flex items-center justify-center font-semibold text-[20px] text-white">
              3
            </p>
            <h3 className="md:text-[20px] text-[18px] font-semibold">
              You Co-own
            </h3>
            <p className="text-[#4E4E4E] md:text-[16px] text-[14px] font-normal">
              After successful validation and demo day at the end of the EIR
              program, we move those with perfect fit to become co-founders of
              the product they validated as CEO & CTO, each owning
              20% of the venture.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="md:text-[17px] text-[15px] cursor-pointer font-semibold flex items-center gap-2 underline underline-offset-2">
            Build your dream <img src={Arrow} alt="" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoFound;
