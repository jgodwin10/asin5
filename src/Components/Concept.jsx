import React from "react";

const Concept = () => {
  return (
    <div className="mt-10 pb-16 px-5 ">
      <div className="max-w-[1260px] space-y-16 mx-auto">
        <div className="lg:max-w-[974px] md:max-w-[880px] mx-auto space-y-5">
          <h2 className="text-[#212121] text-center font-semibold lg:text-[56px] text-2xl md:text-5xl">
            Our Concept Innovations
          </h2>
          <p className="text-[#4E4E4E] text-center text-[14px] md:text-[17px]">
            We have proprietary concept innovations that will support the
            startup ecosystem, support solution-providers/entrepreneurs and
            ultimately help democratize success
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-[36px] lg:mx-auto lg:max-w-[352px]   items-center bg-white py-[20px] px-[16px] rounded-[12px]">
            <h3 className="md:text-[22px] text-[18px] font-semibold">
              Service Incubator
            </h3>
            <p className="text-[#4E4E4E]  text-center md:text-[16px] text-[15px] font-normal">
              A service-for-shares model of incubating pre-product startups and
              early-stage companies by building their early stage product and
              MVP
            </p>
          </div>
          <div className="flex flex-col gap-[36px] lg:mx-auto lg:max-w-[352px]   items-center bg-white py-[20px] px-[16px] rounded-[12px]">
            <h3 className="md:text-[22px] text-[18px] font-semibold">
              Virtualting
            </h3>
            <p className="text-[#4E4E4E]  text-center md:text-[16px] text-[15px] font-normal">
              A resource share model that allows companies share the time of
              resources (employees, consultants, technical advisers or
              influencers) while also splitting the service cost of the resource
            </p>
          </div>
          <div className="flex flex-col gap-[36px] lg:mx-auto lg:max-w-[352px]   items-center bg-white py-[20px] px-[16px] rounded-[12px]">
            <h3 className="md:text-[22px] text-[18px] font-semibold">
              Diiming
            </h3>
            <p className="text-[#4E4E4E]  text-center md:text-[16px] text-[15px] font-normal">
              A progressive investment model that allows you to put aside income
              (disposable or non-disposable) as investment over a period towards
              an investment or spend of your choice 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concept;
