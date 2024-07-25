import React from "react";

export default function DetailsSection2() {
  return (
    <div className="w-full  md:p-20 p-5">
      <div className="flex flex-col w-full bg-[#b3b3b3] rounded-3xl py-[1px] pr-[1px]">
      <div className="flex flex-col w-full gap-5 md:gap-20 bg-[#152743] rounded-3xl px-10 md:py-20 py-5">
        <div className="flex flex-col w-full  text-center">
          <span className="text-white text-lg md:text-4xl font-medium font-['Inter']">
            Become a NFT Holders and earn rent
            <br className="md:block hidden" />
            revenue{" "}
            <span className="text-lg md:text-4xl font-medium font-['Inter'] headline-gradient-1">
              digitally
            </span>{" "}
            in 4 easy steps
          </span>
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center md:justify-between gap-10">
            <img src="/assets/revenue-step-1.png" className="md:w-1/5 px-10"/>
            <img src="/assets/revenue-step-2.png" className="md:w-1/5 px-10"/>
            <img src="/assets/revenue-step-3.png" className="md:w-1/5 px-10"/>
            <img src="/assets/revenue-step-4.png" className="md:w-1/5 px-10"/>

        </div>
      </div>
      </div>
    </div>
  );
}
