import React from "react";
import Image1 from "../../public/Images/image1.jpeg";
import Image2 from "../../public/Images/image2.jpeg";
import Image3 from "../../public/Images/image3.jpeg";
import Image4 from "../../public/Images/image4.jpeg";
import Punch from "../../public/Images/punch.png";
import Qntecx from "../../public/Images/qntecx.png";
import Guardian from "../../public/Images/guardian.png";
import Bunc from "../../public/Images/Bunc.jpeg";

const Featured = () => {
  return (
    <div className="mt-16 pb-16 md:space-y-16 space-y-8 ">
      <h2 className="text-center text-[20px] md:text-[24px] font-semibold text-[#212121]">
        As Featured In
      </h2>
      <div className="overflow-x-scroll channel">
        <div className="grid grid-cols-4 w-[2500px] md:w-[3672px]">
          <div className="md:w-[894px] w-[600px] h-fit flex bg-white">
            <img
              src={Image3}
              className="md:min-w-[622px]  md:h-[393px] w-[370px] object-cover"
              alt=""
            />
            <div className="md:py-[40px] p-[20px] flex flex-col gap-4 justify-between md:px-[22px]">
              <div className="flex flex-col items-start">
                <img
                  src={Punch}
                  className=" h-[48px] -ml-[8px] mb-[8px] md:mb-[16px] object-cover"
                  alt=""
                />
                <h3 className="md:text-[15px] text-[12px] pb-[10px] font-semibold text-[#212121] ">
                  SINC Partners invests over 200 million naira in 5 startups
                </h3>
                <p className="text-[#4E4E4E] text-[12px] md:text-[14px]">
                  SINC Partners invests over 200 million naira in 5 startups.
                  SINC Partners invests over 200 million naira in 5 startups
                  SINC Partners invests over 200 million naira in ....
                </p>
              </div>
              <div className="flex flex-col gap-[5px] md:gap-[10px] items-start">
                <p className="text-[#4E4E4E] text-[12px] md:text-[13px]">
                  REPORTED BY:
                </p>
                <p className="text-[#4E4E4E] text-[10px] md:text-[14px]">
                  Rema Viel
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-[894px] w-[600px] h-fit flex bg-white">
            <img
              src={Image1}
              className="md:min-w-[622px]  md:h-[393px] w-[370px] object-cover"
              alt=""
            />
            <div className="md:py-[40px] p-[20px] flex flex-col gap-4 justify-between md:px-[22px]">
              <div className="flex flex-col items-start">
                <img
                  src={Bunc}
                  className=" h-[30px] w-[71.67px]  mb-[20px] md:mb-[16px] object-cover"
                  alt=""
                />
                <h3 className="md:text-[15px] text-[12px] pb-[10px] font-semibold text-[#212121] ">
                  SINC Partners invests over 200 million naira in 5 startups
                </h3>
                <p className="text-[#4E4E4E] text-[12px] md:text-[14px]">
                  SINC Partners invests over 200 million naira in 5 startups.
                  SINC Partners invests over 200 million naira in 5 startups
                  SINC Partners invests over 200 million naira in ....
                </p>
              </div>
              <div className="flex flex-col gap-[5px] md:gap-[10px] items-start">
                <p className="text-[#4E4E4E] text-[12px] md:text-[13px]">
                  REPORTED BY:
                </p>
                <p className="text-[#4E4E4E] text-[10px] md:text-[14px]">
                  Rema Viel
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[894px] w-[600px] h-fit flex bg-white">
            <img
              src={Image2}
              className="md:min-w-[622px]  md:h-[393px] w-[370px] object-cover"
              alt=""
            />
            <div className="md:py-[40px] p-[20px] flex flex-col gap-4 justify-between md:px-[22px]">
              <div className="flex flex-col items-start">
                <img
                  src={Qntecx}
                  className=" md:h-[40px] md:w-[135.52px] w-[100px] h-[30px]  mb-[20px] md:mb-[16px]"
                  alt=""
                />
                <h3 className="md:text-[15px] text-[12px] pb-[10px] font-semibold text-[#212121] ">
                  SINC Partners invests over 200 million naira in 5 startups
                </h3>
                <p className="text-[#4E4E4E] text-[12px] md:text-[14px]">
                  SINC Partners invests over 200 million naira in 5 startups.
                  SINC Partners invests over 200 million naira in 5 startups
                  SINC Partners invests over 200 million naira in ....
                </p>
              </div>
              <div className="flex flex-col gap-[5px] md:gap-[10px] items-start">
                <p className="text-[#4E4E4E] text-[12px] md:text-[13px]">
                  REPORTED BY:
                </p>
                <p className="text-[#4E4E4E] text-[10px] md:text-[14px]">
                  Rema Viel
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[894px] w-[600px] h-fit flex bg-white">
            <img
              src={Image4}
              className="md:min-w-[622px]  md:h-[393px] w-[370px] object-cover"
              alt=""
            />
            <div className="md:py-[40px] p-[20px] flex flex-col gap-4 justify-between md:px-[22px]">
              <div className="flex flex-col items-start">
                <img
                  src={Guardian}
                  className=" h-[40px] w-[178.82px] md:-ml-[16px] -ml-[20px]  mb-[16px] md:mb-[16px] object-cover"
                  alt=""
                />
                <h3 className="md:text-[15px] text-[12px] pb-[10px] font-semibold text-[#212121] ">
                  SINC Partners invests over 200 million naira in 5 startups
                </h3>
                <p className="text-[#4E4E4E] text-[12px] md:text-[14px]">
                  SINC Partners invests over 200 million naira in 5 startups.
                  SINC Partners invests over 200 million naira in 5 startups
                  SINC Partners invests over 200 million naira in ....
                </p>
              </div>
              <div className="flex flex-col gap-[5px] md:gap-[10px] items-start">
                <p className="text-[#4E4E4E] text-[12px] md:text-[13px]">
                  REPORTED BY:
                </p>
                <p className="text-[#4E4E4E] text-[10px] md:text-[14px]">
                  Rema Viel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
