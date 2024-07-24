import { DollarCoinIcon, FlexibleIcon, SmileIcon } from "@/constants";
import React from "react";

export default function DetailsSection1() {
  const details = [
    {
      id: "1",
      title: "Start at $50",
      description:
        "We divide properties into equal fractions worth $50 each. Invest small amounts every month in high-yield real estate and earn up to 16,3% annual rental return.",
      icon: DollarCoinIcon,
    },
    {
      id: "2",
      title: "Earn passively",
      description:
        "Skip the paperwork and property management stress. Let our real estate experts handle all the hard work for you.",
      icon: SmileIcon,
    },
    {
      id: "3",
      title: "Flexible exit",
      description:
        "Sell your fractions on the secondary market with just a few clicks and easily retrieve your investments.",
      icon: FlexibleIcon,
    },
  ];
  return (
    <div className="flex flex-col w-full ">
      <div className="w-full md:h-[150px] h-[100px] " />
      <div className="flex flex-col md:flex-row items-center justify-center w-full md:px-20 px-5 py-20">
        <div className="md:w-1/2 w-full text-white md:text-[48px] text-2xl font-medium font-['Inter'] leading-tight">
          Own NFT as fractions
          <br />{" "}
          <span className="headline-gradient-1">alongside other holders</span>
          <br /> and earn a{" "}
          <span className="headline-gradient-1">proportional</span>
          <br className="md:block hidden" /> rent yield from buying NFT
        </div>
        <div className="flex flex-col md:w-1/2 w-full gap-5 md:mt-0 mt-5">
          {details.map((detail) => (
            <div className="flex flex-row items-center md:gap-10 gap-7">
              <div className="flex flex-row justify-between items-center md:min-w-[100px] ml-10 md:ml-0">
                <div className="bg-[#1C355D] rounded-full p-5 flex flex-col md:min-w-[100px] md:min-h-[100px] max-w-[50px] max-h-[50px] justify-center items-center">
                  <img
                    className="md:max-w-[100px] md:max-h-[100px] max-w-[20px] max-h-[20px]"
                    src={detail.icon}
                    alt="coin"
                  />
                </div>
              </div>
              <div className="flex flex-col md:gap-5 gap-2">
                <div className="text-white md:text-xl md:font-semibold text-[10px] font-medium font-['Poppins'] leading-tight">
                  {detail.title}
                </div>
                <div className="text-white md:text-base  text-[9px] font-light font-['Inter'] leading-snug">
                  {detail.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
