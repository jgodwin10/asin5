import React from "react";
import Arrow from "../../public/Images/arrow.svg";
import Skim from "../../public/Images/skim.jpeg";
import Kre from "../../public/Images/kre.png";
import Krow from "../../public/Images/krow.png";
import Wet from "../../public/Images/wet.png";

const Equity = () => {
  return (
    <div className="mt-10 pb-16 pl-5 ">
      <div className="max-w-[1260px] space-y-10 mx-auto">
        <div className="lg:max-w-[974px] md:max-w-[880px] mx-auto space-y-[24px]">
          <h2 className="text-[#212121] text-center font-semibold lg:text-[56px] text-2xl md:text-5xl">
            Equity jobs
          </h2>
          <p className="text-[#4E4E4E] text-center text-[14px] md:text-[17px]">
            See companies and startups offering equity or a mix of cash and
            equity for very important position in their company
          </p>
        </div>
        <div className="lg:overflow-auto channel overflow-x-scroll">
          <div className="grid grid-cols-4 w-[1260px]   mx-auto gap-4">
            <div className="max-w-[278px] text-[#212121] bg-white flex flex-col gap-[24px] p-[20px] rounded-[12px]">
              <img
                src={Skim}
                className="h-[64px] object-contain w-[118px]"
                alt=""
              />
              <p className="text-[14px]">
                This company is a SAAS Startup that builds AI copy generator...
              </p>
              <h3 className="md:text-[18px] font-semibold text-[16px]">
                Chief Executive Officer
              </h3>
              <div className="grid grid-cols-2 text-[14px]">
                <div className="space-y-[20px]">
                  <div>
                    <h4 className="text-[#8E8E8E]">LOCATION</h4>
                    <p>Abuja, Nigeria</p>
                  </div>
                  <div>
                    <h4 className="text-[#8E8E8E]">EQUITY</h4>
                    <p>1.2%</p>
                  </div>
                  <div>
                    <h4 className="text-[#8E8E8E]">DEADLINE</h4>
                    <p>24th, January 2024</p>
                  </div>
                </div>
                <div className="space-y-[20px]">
                  <div className="text-end">
                    <h4 className="text-[#8E8E8E]">INDUSTRY</h4>
                    <p>On-demand print</p>
                  </div>

                  <div className="text-end">
                    <h4 className="text-[#8E8E8E]">STIPEND</h4>
                    <p>NGN 200,000/mth </p>
                  </div>

                  <div className="text-end">
                    <h4 className="text-[#8E8E8E]">ROLE TYPE</h4>
                    <p>Full-time</p>
                  </div>
                </div>
              </div>
              <button className="bg-[#303030] text-white w-[185px] h-[47px] rounded-3xl font-semibold">
                View Details
              </button>
            </div>
            <div className="max-w-[278px] text-[#212121] bg-white flex flex-col gap-[24px] p-[20px] rounded-[12px]">
              <img
                src={Kre}
                className="h-[64px] object-contain w-[118px]"
                alt=""
              />
              <p className="text-[14px]">
                This company is a SAAS Startup that builds AI copy generator...
              </p>
              <h3 className="md:text-[18px] font-semibold text-[16px]">
                UX Strategist
              </h3>
              <div className="grid grid-cols-2 text-[14px]">
                <div className="space-y-[20px]">
                  <div>
                    <h4 className="text-[#8E8E8E]">LOCATION</h4>
                    <p>Abuja, Nigeria</p>
                  </div>
                  <div>
                    <h4 className="text-[#8E8E8E]">EQUITY</h4>
                    <p>1.2%</p>
                  </div>
                  <div>
                    <h4 className="text-[#8E8E8E]">DEADLINE</h4>
                    <p>24th, January 2024</p>
                  </div>
                </div>
                <div className="space-y-[20px]">
                  <div className="text-end">
                    <h4 className="text-[#8E8E8E]">INDUSTRY</h4>
                    <p>E-commerce</p>
                  </div>

                  <div className="text-end">
                    <h4 className="text-[#8E8E8E]">STIPEND</h4>
                    <p>NGN 200,000/mth </p>
                  </div>

                  <div className="text-end">
                    <h4 className="text-[#8E8E8E]">ROLE TYPE</h4>
                    <p>Full-time</p>
                  </div>
                </div>
              </div>
              <button className="bg-[#303030] text-white w-[185px] h-[47px] rounded-3xl font-semibold">
                View Details
              </button>
            </div>
            <div className="max-w-[278px] text-[#212121] bg-white flex flex-col gap-[24px] p-[20px] rounded-[12px]">
              <img
                src={Krow}
                className="h-[64px] object-contain w-[118px]"
                alt=""
              />
              <p className="text-[14px]">
                This company is a SAAS Startup that builds AI copy generator...
              </p>
              <h3 className="md:text-[18px] font-semibold text-[16px]">
                CTO & Head of innovations
              </h3>
              <div className="grid grid-cols-2 text-[14px]">
                <div className="space-y-[20px]">
                  <div>
                    <h4 className="text-[#8E8E8E]">LOCATION</h4>
                    <p>Abuja, Nigeria</p>
                  </div>
                  <div>
                    <h4 className="text-[#8E8E8E]">EQUITY</h4>
                    <p>1.2%</p>
                  </div>
                  <div>
                    <h4 className="text-[#8E8E8E]">DEADLINE</h4>
                    <p>24th, January 2024</p>
                  </div>
                </div>
                <div className="space-y-[20px]">
                  <div className="text-end">
                    <h4 className="text-[#8E8E8E]">INDUSTRY</h4>
                    <p>Fintech</p>
                  </div>

                  <div className="text-end">
                    <h4 className="text-[#8E8E8E]">STIPEND</h4>
                    <p>NGN 200,000/mth </p>
                  </div>

                  <div className="text-end">
                    <h4 className="text-[#8E8E8E]">ROLE TYPE</h4>
                    <p>Full-time</p>
                  </div>
                </div>
              </div>
              <button className="bg-[#303030] text-white w-[185px] h-[47px] rounded-3xl font-semibold">
                View Details
              </button>
            </div>
            <div className="max-w-[278px] text-[#212121] bg-white flex flex-col gap-[24px] p-[20px] rounded-[12px]">
              <img
                src={Wet}
                className="h-[64px] object-contain w-[118px]"
                alt=""
              />
              <p className="text-[14px]">
                This company is a SAAS Startup that builds AI copy generator...
              </p>
              <h3 className="md:text-[18px] font-semibold text-[16px]">
                Backend Developer
              </h3>
              <div className="grid grid-cols-2 text-[14px]">
                <div className="space-y-[20px]">
                  <div>
                    <h4 className="text-[#8E8E8E]">LOCATION</h4>
                    <p>Abuja, Nigeria</p>
                  </div>
                  <div>
                    <h4 className="text-[#8E8E8E]">EQUITY</h4>
                    <p>1.2%</p>
                  </div>
                  <div>
                    <h4 className="text-[#8E8E8E]">DEADLINE</h4>
                    <p>24th, January 2024</p>
                  </div>
                </div>
                <div className="space-y-[20px]">
                  <div className="text-end">
                    <h4 className="text-[#8E8E8E]">INDUSTRY</h4>
                    <p>Transportation</p>
                  </div>

                  <div className="text-end">
                    <h4 className="text-[#8E8E8E]">STIPEND</h4>
                    <p>NGN 200,000/mth </p>
                  </div>

                  <div className="text-end">
                    <h4 className="text-[#8E8E8E]">ROLE TYPE</h4>
                    <p>Full-time</p>
                  </div>
                </div>
              </div>
              <button className="bg-[#303030] text-white w-[185px] h-[47px] rounded-3xl font-semibold">
                View Details
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="md:text-[17px] text-[15px] cursor-pointer font-semibold flex items-center gap-2 underline underline-offset-2">
            See More Equity Jobs <img src={Arrow} alt="" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Equity;
