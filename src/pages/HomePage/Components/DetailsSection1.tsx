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
      <div className="w-full h-[150px] " />
      <div className="flex flex-row items-center justify-center w-full px-20 py-20">
        <div className="w-1/2 text-white text-[48px] font-medium font-['Inter'] leading-tight">
          Own NFT as fractions
          <br />{" "}
          <span className="headline-gradient-1">alongside other holders</span>
          <br /> and earn a{" "}
          <span className="headline-gradient-1">proportional</span>
          <br /> rent yield from buying NFT
        </div>
        <div className="flex flex-col w-1/2 gap-5">
          {details.map((detail) => (
            <div className="flex flex-row items-center gap-10">
              <div className="flex flex-row justify-between items-center min-w-[100px]">
                <div className="bg-[#1C355D] rounded-full p-5 flex flex-col min-w-[100px] min-h-[100px] justify-center items-center">
                  <img
                    className="max-w-[100px] max-h-[100px]"
                    src={detail.icon}
                    alt="coin"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="text-white text-xl font-semibold font-['Poppins'] leading-tight">
                  {detail.title}
                </div>
                <div className="text-white text-base font-light font-['Inter'] leading-snug">
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
