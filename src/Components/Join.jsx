import React from "react";
import Group from "../../public/Images/Group.svg";
import Arrow from "../../public/Images/arrow.svg";

const Join = () => {
  return (
    <div className="mt-10 pb-16 pl-5 ">
      <div className="max-w-[1240px] space-y-6 mx-auto">
        <div className="lg:max-w-[914px] md:max-w-[551px] mx-auto ">
          <h2 className="text-[#212121] pb-8 text-center font-semibold lg:text-[56px] text-2xl md:text-5xl">
            Join Our Entrepreneur In Residence (EIR) Program
          </h2>
          <p className="text-[#4E4E4E] text-center pb-3 text-[14px] md:text-[17px]">
            Our EIR program is our structured 3 months un-paid program designed
            to help us have a pipeline of business and technical cofounders who
            can run the venture of choice as CEO & CTO owning 20% equity each.
          </p>
        </div>
        <div className="overflow-x-scroll channel">
          <div className="flex  w-[1200px]  gap-4">
            <div className="flex flex-col gap-[24px] mx-auto min-w-[380px] bg-white p-[20px] rounded-[12px]">
              <p className="size-[60px] rounded-full bg-[#303030] flex items-center justify-center font-semibold text-[20px] text-white">
                1
              </p>
              <h3 className="md:text-[20px] text-[18px] font-semibold">
                Application and Selection
              </h3>
              <div>
                <p className="text-[#4E4E4E] pb-3 md:text-[16px] text-[14px] font-normal">
                  Begin your journey by completing our straightforward
                  application form. Share insights into your entrepreneurial
                  background, expertise, and your vision for supporting the
                  success of our portfolio companies.
                </p>
                <p className="text-[#4E4E4E] md:text-[16px] text-[14px] font-normal">
                  Our dedicated selection committee, comprised of key
                  stakeholders at SINC Partners, will carefully review your
                  application.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[24px] mx-auto min-w-[380px] bg-white p-[20px] rounded-[12px]">
              <p className="size-[60px] rounded-full bg-[#303030] flex items-center justify-center font-semibold text-[20px] text-white">
                1
              </p>
              <h3 className="md:text-[20px] text-[18px] font-semibold">
                Alignment Meeting and Proposal Submission
              </h3>
              <div>
                <p className="text-[#4E4E4E] pb-3 md:text-[16px] text-[14px] font-normal">
                  If your application stands out, we'll invite you to an
                  alignment meeting. This is an opportunity to discuss the goals
                  of our EIR program and explore how your expertise aligns with
                  the needs of our portfolio companies.
                </p>
                <p className="text-[#4E4E4E] md:text-[16px] text-[14px] font-normal">
                  Following the alignment meeting, submit a formal proposal
                  outlining your intended contributions and how you envision
                  adding significant value to our portfolio companies.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[24px] mx-auto min-w-[380px] bg-white p-[20px] rounded-[12px]">
              <p className="size-[60px] rounded-full bg-[#303030] flex items-center justify-center font-semibold text-[20px] text-white">
                1
              </p>
              <h3 className="md:text-[20px] text-[18px] font-semibold">
                Negotiation and Agreement
              </h3>
              <div>
                <p className="text-[#4E4E4E] pb-3 md:text-[16px] text-[14px] font-normal">
                  Upon successful alignment and proposal review, we'll engage in
                  discussions to finalize the terms of your EIR role. This
                  includes the duration, expectations, and any compensation or
                  equity arrangements.
                </p>
                <p className="text-[#4E4E4E] md:text-[16px] text-[14px] font-normal">
                  Once terms are agreed upon, we'll draft a formal agreement
                  outlining the specifics of your EIR engagement, including
                  reporting structures, responsibilities, and the
                  support/resources provided by SINC Partners.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[24px] mx-auto min-w-[380px] bg-white p-[20px] rounded-[12px]">
              <p className="size-[60px] rounded-full bg-[#303030] flex items-center justify-center font-semibold text-[20px] text-white">
                1
              </p>
              <h3 className="md:text-[20px] text-[18px] font-semibold">
                Onboarding and Integration
              </h3>
              <div>
                <p className="text-[#4E4E4E] pb-3 md:text-[16px] text-[14px] font-normal">
                  Congratulations! As an accepted EIR, you'll undergo an
                  onboarding process to familiarize yourself with the SINC
                  Partners ecosystem, our portfolio companies, and key team
                  members.
                </p>
                <p className="text-[#4E4E4E] md:text-[16px] text-[14px] font-normal">
                  Facilitated introductions will ensure a seamless integration
                  between you and relevant portfolio companies, setting clear
                  expectations for collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex pt-10 justify-center">
          <p className="md:text-[17px] text-[15px] cursor-pointer font-semibold flex items-center gap-2 underline underline-offset-2">
            Support the Future <img src={Arrow} alt="" />
          </p>
        </div>
        <div className=" flex items-center justify-center pt-10 gap-[75px]">
          <div className="border-[1px]  size-[66px] flex justify-center items-center rounded-full border-[#4D4D4D]">
            <img className="size-[32.53px]" src={Group} alt="" />
          </div>
          <div className="border-[1px]  size-[66px] flex justify-center items-center rounded-full border-[#4D4D4D]">
            <img className="size-[32.53px] rotate-180" src={Group} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
