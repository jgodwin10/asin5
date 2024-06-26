import React from "react";
import One from "../../public/Images/polygon1.svg";
import Two from "../../public/Images/polygon.svg";
import Three from "../../public/Images/polygon2.svg";

const Services = () => {
  return (
    <div className="mt-10 pb-16 px-5 ">
      <div className="max-w-[1220px] space-y-16 mx-auto">
        <div className="lg:max-w-[924px]  md:max-w-[880px] mx-auto space-y-5">
          <h2 className="text-[#212121] text-center font-semibold lg:text-[56px] text-2xl md:text-5xl">
            Our Service Incubation Model
          </h2>
          <p className="text-[#4E4E4E] text-center text-[14px] md:text-[17px]">
            The Service Incubation model is an alternate funding model for
            startup that allows professionals to offer their services to
            startups in return for a minute equity (usually between 0.5% to
            1.5%) in the startup. As a service incubator, you will see your
            share grow as much as 1000% in 12 – 24 months as been first to
            invest.
          </p>
        </div>
        <div className="space-y-[12px] lg:pl-[10px]">
          <h3 className="md:text-[32px] text-[18px] font-semibold">
            Hypothesis
          </h3>
          <p className="md:text-[17px] text-[#4E4E4E]">
            Just a few reasons we know its time for this model
            within the ecosystem
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-[16px] lg:mx-auto lg:max-w-[380px] bg-white p-[20px] rounded-[12px]">
            <img src={Two} className="size-[40px]" alt="" />

            <p className="text-[#4E4E4E]  md:text-[17px] text-[15px] font-normal">
              Most early-stage companies and pre-product startups cannot afford
              professional services especially those who don’t have family and
              friends’ network that can support
            </p>
          </div>
          <div className="flex flex-col gap-[16px] lg:mx-auto lg:max-w-[380px] bg-white p-[20px] rounded-[12px]">
            <img src={One} className="size-[40px]" alt="" />
            <p className="text-[#4E4E4E]   md:text-[17px] text-[15px] font-normal">
              If startups can seed 5-10% in equity to incubators for $20k to
              $200k funding most times, they will be willing to seed 10% equity
              for a $25k service investment
            </p>
          </div>
          <div className="flex flex-col gap-[16px] lg:mx-auto lg:max-w-[380px] bg-white p-[20px] rounded-[12px]">
            <img src={Three} className="size-[40px]" alt="" />

            <p className="text-[#4E4E4E] md:text-[17px] text-[15px] font-normal">
              Young professionals who don’t have a lot of money to invest nor an
              accredited investors will have opportunities to take equity at the
              early stage of their career, usually been the first to invest and
              almost guaranteed of return
            </p>
          </div>
        </div>
        <div className="space-y-[12px] lg:pl-[10px]">
          <h3 className="md:text-[32px] text-[18px] font-semibold">
            Case Study
          </h3>
          <p className="md:text-[17px] text-[#4E4E4E]">
            See what Service Incubators get, the maths behind Service Equity
            (SEEQ) and what the value of your share equity can be over time
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
