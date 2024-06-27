import React from "react";
import Ko from "../../public/Images/ko.jpeg";
import Found from "../../public/Images/found.png";
import Bunc from "../../public/Images/Bunc.jpeg";
import Stu from "../../public/Images/stu.png";
import Reen from "../../public/Images/reen.jpeg";

const Studio = () => {
  return (
    <div className="mt-10 pb-16 px-5 ">
      <div className="max-w-[1240px] space-y-10 md:space-y-28 mx-auto">
        <div className="lg:max-w-[974px] md:max-w-[551px] mx-auto ">
          <h2 className="text-[#212121] pb-6 text-center font-semibold lg:text-[60px] text-2xl md:text-5xl">
            Our Studio Portfolio
          </h2>
          <p className="text-[#4E4E4E] text-center text-[14px] md:text-[16px]">
            Our 2024 Service Incubator Portfolio Companies
          </p>
        </div>
        <div className="grid lg:grid-cols-8">
          <img src={Ko} alt="" />

          <img src={Found} alt="" />
          <div className="w-[120px] flex justify-center items-center h-[60px] bg-white rounded-[12px]">
            <img
              src={Bunc}
              className=" w-[79px] h-[33px] object-contain rounded-[12px]"
              alt=""
            />
          </div>
          <div className="w-[120px] flex justify-center items-center h-[60px] bg-white rounded-[12px]">
            <img
              src={Stu}
              className=" w-[46px] h-[39px] object-contain "
              alt=""
            />
          </div>
          <div className="w-[120px] flex justify-center items-center h-[60px] bg-white rounded-[12px]">
            <img
              src={Reen}
              className=" w-[84px] h-[24px] object-cover "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studio;
