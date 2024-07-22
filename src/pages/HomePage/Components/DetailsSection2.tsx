import React from "react";

export default function DetailsSection2() {
  return (
    <div className="w-full  p-20">
      <div className="flex flex-col w-full bg-[#b3b3b3] rounded-3xl py-[1px] pr-[1px]">
      <div className="flex flex-col w-full bg-[#152743] rounded-3xl px-10 py-20">
        <div className="flex flex-col w-full h-[132px] text-center">
          <span className="text-white text-4xl font-medium font-['Inter']">
            Become a NFT Holders and earn rent
            <br />
            revenue{" "}
            <span className="text-4xl font-medium font-['Inter'] headline-gradient-1">
              digitally
            </span>{" "}
            in 4 easy steps
          </span>
        </div>
        <div className="flex flex-row justify-between gap-10">
            <img src="/assets/revenue-step-1.png" className="w-1/5"/>
            <img src="/assets/revenue-step-2.png" className="w-1/5"/>
            <img src="/assets/revenue-step-3.png" className="w-1/5"/>
            <img src="/assets/revenue-step-4.png" className="w-1/5"/>

        </div>
      </div>
      </div>
    </div>
  );
}
