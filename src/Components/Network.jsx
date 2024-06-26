import React from "react";
import Arrow from "../../public/Images/arrow.svg";

const Network = () => {
  return (
    <div className="pt-5 pb-9 px-5">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center flex-1">
        <h1 className="text-center pb-8 md:pb-14 lg:text-[56px] text-2xl md:text-5xl md:px-10 text-[#212121] font-semibold max-w-[898px]">
          Network of builders helping startup scale
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6 lg:max-w-[528px] justify-between bg-white p-[24px] rounded-[12px]">
            <h3 className="md:text-[24px] text-[18px] font-semibold">
              Work with Service Incubators to expedite your time-to-market
            </h3>
            <p className="text-[#4E4E4E] md:text-[17px] text-[15px] font-normal">
              Collaborate with our meticulously chosen service partners, each
              with a vested interest, ensuring a shared commitment to success in
              the game of venture building.
            </p>
            <p className="text-[#4E4E4E] md:text-[17px] text-[15px] font-semibold">
              For 7.5% equity, you get a product manager, product designer,
              frontend engineer, software engineer and growth marketer to build
              the MVP of your app or web application and validate it.
            </p>
            <p className="md:text-[17px] text-[15px] font-semibold flex items-center gap-2 underline underline-offset-2">
              Learn More <img src={Arrow} alt="" />
            </p>
          </div>
          <div className="flex flex-col justify-between gap-6 lg:max-w-[528px] bg-white p-[24px] rounded-[12px]">
            <div>
              <h3 className="md:text-[25px] text-[18px] pb-[21px] font-semibold">
                Access funding after your mvp is validated
              </h3>
              <p className="text-[#4E4E4E] pb-5 md:text-[17px] text-[15px] font-normal">
                Startups that have built and validated their product can take
                advantage of the financial resources of the SINC Investors
                Network, elevating their potential for success in the venture
                capital landscape.
              </p>
              <p className="text-[#4E4E4E] md:text-[17px] text-[15px] font-semibold">
                Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12
                months.
              </p>
            </div>
            <p className="md:text-[17px] text-[15px] font-semibold flex items-center gap-2 underline underline-offset-2">
              Learn More <img src={Arrow} alt="" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
