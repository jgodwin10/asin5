import React from "react";
import Preview from "../../public/Images/video.svg";
import Video from "../../public/Images/Video.jpeg";
import Second from "../../public/Images/second.jpeg";
import Book from "../../public/Images/book.jpeg";
import Sec from "../../public/Images/sec.jpeg";
import SecBook from "../../public/Images/secBook.jpeg";

const Blog = () => {
  return (
    <div>
      <div className="mt-10 pb-16 px-5 ">
        <div className="max-w-[1240px] space-y-10 md:space-y-28 mx-auto">
          <div className="lg:max-w-[974px] md:max-w-[880px] mx-auto ">
            <h2 className="text-[#212121] text-center font-semibold lg:text-[56px] text-2xl md:text-5xl">
              Blogs & Resources
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
            <div className="flex flex-col gap-[35px]">
              <div className="relative before:contents-[''] before:absolute before:w-full before:h-full before:bg-gradient-to-b before:from-[#CECECE00] before:to-[#212121CC]">
                <img src={Video} alt="" />
                <div className="text-white absolute bottom-4 left-4 text-[18px] font-semibold">
                  <p>Top Ten Most Powerful Startup</p>
                </div>
                <div className="absolute top-0 flex justify-center items-center flex-col left-0 w-full h-full ">
                  <img className="" src={Preview} alt="" />
                </div>
              </div>
              <div className="flex  xl:gap-14 gap-2 lg:gap-4 justify-between">
                <div className="space-y-2">
                  <h3 className="text-[#212121] text-[14px] font-semibold">
                    Top Ten Most Powerful Startup
                  </h3>
                  <p className="md:text-[13px] text-[12px] text-[#212121]">
                    Top Ten Most Powerful Startup. Top Ten Most Powerful
                    Startup. Top Ten Most Powerful Startup
                  </p>
                </div>
                <img
                  className="w-[85px] h-[79px] rounded-[8px] object-cover"
                  src={Sec}
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col gap-[35px]">
              <div className="relative before:contents-[''] before:absolute before:w-full before:h-full before:bg-gradient-to-b before:from-[#CECECE00] before:to-[#212121CC]">
                <img src={Second} alt="" />
                <div className="text-white absolute bottom-4 left-4 text-[18px] font-semibold">
                  <p>Top Ten Most Powerful Startup</p>
                </div>
                <div className="absolute top-0 flex justify-center items-center flex-col left-0 w-full h-full ">
                  <img className="" src={Preview} alt="" />
                </div>
              </div>
              <div className="flex xl:gap-14 gap-2 lg:gap-4 justify-between">
                <div className="space-y-2">
                  <h3 className="text-[#212121] text-[14px] font-semibold">
                    Top Ten Most Powerful Startup
                  </h3>
                  <p className="md:text-[13px] text-[12px] text-[#212121]">
                    Top Ten Most Powerful Startup. Top Ten Most Powerful
                    Startup. Top Ten Most Powerful Startup
                  </p>
                </div>
                <img
                  className="w-[85px] h-[79px] rounded-[8px] object-cover"
                  src={Book}
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col gap-[35px]">
              <div className="relative before:contents-[''] before:absolute before:w-full before:h-full before:bg-gradient-to-b before:from-[#CECECE00] before:to-[#212121CC]">
                <img src={Second} alt="" />
                <div className="text-white absolute bottom-4 left-4 text-[18px] font-semibold">
                  <p>Top Ten Most Powerful Startup</p>
                </div>
                <div className="absolute top-0 flex justify-center items-center flex-col left-0 w-full h-full ">
                  <img className="" src={Preview} alt="" />
                </div>
              </div>
              <div className="flex  xl:gap-14 gap-2 lg:gap-4 justify-between">
                <div className="space-y-2">
                  <h3 className="text-[#212121] text-[14px] font-semibold">
                    Top Ten Most Powerful Startup
                  </h3>
                  <p className="md:text-[13px] text-[12px] text-[#212121]">
                    Top Ten Most Powerful Startup. Top Ten Most Powerful
                    Startup. Top Ten Most Powerful Startup
                  </p>
                </div>
                <img
                  className="w-[85px] h-[79px] rounded-[8px] object-cover"
                  src={SecBook}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
