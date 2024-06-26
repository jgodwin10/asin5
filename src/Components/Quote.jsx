import React from "react";

const Quote = () => {
  return (
    <div className="py-20 px-5">
      <div className="bg-white mx-auto py-[32px] flex flex-col items-center gap-8 rounded-[32px] text-[#212121] max-w-[883px]">
        <p className="text-center px-[28px] md:text-[18px] lg:text-[20px]">
          "Nigeria and Africa has a massive network effect that have not be
          fully utilized. With Nigerians/Africans in every country and territory
          of the world, we can scale an African business to 100+ countries in
          few weeks"
        </p>
        <div className="flex items-center md:text-base text-[14px] gap-2 flex-col">
          <p className="font-semibold text-[#212121]">
            Daniel Izeghs Oratokhai
          </p>
          <p className="text-[#4E4E4E]">
            Managing Partner at SINC Partners Ltd
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
