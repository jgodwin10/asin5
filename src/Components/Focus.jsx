import React from "react";

const Focus = () => {
  return (
    <div className="mt-10 pb-16 px-5">
      <div className="max-w-[1400px] space-y-16 mx-auto">
        <div className="max-w-[628px] mx-auto space-y-5">
          <h2 className="text-[#212121] text-center font-semibold lg:text-[56px] text-2xl md:text-5xl">
            Our Area of Focus
          </h2>
          <p className="text-[#4E4E4E] text-center text-[14px] md:text-[17px]">
            In our quest to help make success available to everyone, we have
            initial strategic direction to focus on these five <sub>5</sub>
            key areas at the lab
          </p>
        </div>

        <div className="lg:flex lg:justify-center grid md:grid-cols-3 sm:grid-cols-2">
          <div className="bg-[#303030] md:p-[20px] p-[10px] h-[100px] font-[matter]  md:text-[20px] text-[14px] text-white flex justify-between flex-col w-full lg:w-[240px]  md:h-[160px]">
            <p>01</p>
            <p>Business Support & Incubation</p>
          </div>
          <div className="bg-[#F47733] md:p-[20px] p-[10px] h-[100px] font-[matter]  md:text-[20px] text-[14px] text-white flex justify-between flex-col w-full lg:w-[240px]  md:h-[160px]">
            <p>02</p>
            <p>On-Demand & As-A-Service</p>
          </div>
          <div className="bg-[#FF78BF] md:p-[20px] p-[10px] h-[100px] font-[matter]  md:text-[20px] text-[14px] text-white flex justify-between flex-col w-full lg:w-[240px]  md:h-[160px]">
            <p>03</p>
            <p>Marketplace & Crowdsourcing</p>
          </div>
          <div className="bg-[#20888F] md:p-[20px] p-[10px] h-[100px] font-[matter]   md:text-[20px] text-[14px] md:col-span-2 text-white flex justify-between flex-col w-full lg:w-[240px]  md:h-[160px]">
            <p>04</p>
            <p>Aggregation & Shared Economy</p>
          </div>
          <div className="bg-[#FF78BF] md:p-[20px] p-[10px] h-[100px] font-[matter]  md:row-start-2 md:col-auto sm:col-span-2 md:col-start-1 md:text-[20px] text-[14px] text-white flex justify-between flex-col w-full lg:w-[240px]  md:h-[160px]">
            <p>05</p>
            <p>Decentralized Economy & Digital Assets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Focus;
