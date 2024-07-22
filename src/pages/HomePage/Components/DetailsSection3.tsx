import {
  IncomeIcon,
  LaunchArrowIcon,
  NFTHolderIcon,
  PropertyOwnerIcon,
  TicIcon,
  TotalPropertyIcon,
} from "@/constants";
import React from "react";

export default function DetailsSection3() {
  const nftHolders = [
    {
      id: "0",
      name: (
        <div className="text-xl font-semibold">
          NFT Holders <br />
          Get :
        </div>
      ),
      icon: NFTHolderIcon,
    },
    { id: "1", name: "High - Yield Rental Property", icon: TicIcon },
    { id: "2", name: "Daily Rental Payouts", icon: TicIcon },
    { id: "3", name: "Flexible Exits", icon: TicIcon },
    { id: "4", name: "Investments Diversification", icon: TicIcon },
  ];

  const propertyOwner = [
    {
      id: "0",
      name: (
        <div className="text-xl font-semibold">
          Property <br />
          Owner Get :
        </div>
      ),
      icon: PropertyOwnerIcon,
    },
    { id: "1", name: "Fast Selling", icon: TicIcon },
    { id: "2", name: "Fair Price", icon: TicIcon },
    { id: "3", name: "Minimum Selling Costs", icon: TicIcon },
  ];
  return (
    <div className="flex flex-col w-full ">
      <div className="flex flex-row w-full px-20 justify-center items-center py-20 gap-20">
        <div className="flex flex-col w-1/2 ">
          <div className="headline-gradient-1 text-[55px] font-medium font-['Inter']">
            How our NFT Holders make money?
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-2">
              {nftHolders.map((item, index) => (
                <div key={index} className="flex flex-row gap-2">
                  <img src={item.icon} />
                  <div className="text-white  font-['Poppins'] leading-normal">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {propertyOwner.map((item, index) => (
                <div key={index} className="flex flex-row gap-2">
                  <img src={item.icon} />
                  <div className="text-white  font-['Poppins'] leading-normal">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="w-[239px] h-[50px] px-[18px] py-[15px] bg-[#1F365B] rounded-[100px] justify-center items-start gap-4 flex mt-20">
            <div className="flex flex-row gap-3 text-white text-base font-normal font-['Poppins'] leading-tight">
              Browse NFT <img src={LaunchArrowIcon} alt="arrow"/>
            </div>
          </button>
        </div>
        <div className="flex flex-col w-1/2 gap-10 justify-between">
          <div className=" bg-gradient-to-tl to-white from-transparent rounded-3xl py-[1px] pr-[1px] ">
            <div className="flex flex-row w-full bg-[#1B355D] rounded-3xl p-5 justify-center items-center gap-5">
              <div className="flex flex-col w-1/2 justify-center items-center drop-shadow-md bg-[#1C355D] rounded-3xl py-3 gap-3">
                <div className="text-slate-400 text-base font-normal font-['Inter'] leading-snug">
                  Today
                </div>
                <div className="w-full h-[1px] bg-[#E7E7E74D]" />
                <div className="flex flex-row justify-center items-center gap-5">
                  <img src={IncomeIcon} alt="income-icon" />
                  <div className="text-white text-sm font-medium font-['Inter'] leading-snug">
                    Rent Payout Received <br />
                    <span className=" text-[#7292C4]">from</span> Kara Loft
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-3">
                <div className="text-white text-xl font-semibold font-['Poppins'] leading-tight">
                  Stable Daily Income
                </div>
                <div className="text-white text-base font-light font-['Inter'] leading-snug">
                  From Property Rent
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-gradient-to-tl to-white from-transparent rounded-3xl py-[1px] pr-[1px] ">
            <div className="flex flex-row w-full bg-[#1B355D] rounded-3xl p-5 justify-center items-center gap-5">
              <div className="flex flex-col w-1/2 justify-center items-center drop-shadow-md bg-[#1C355D] rounded-3xl py-8 gap-3">
                
                <div className="flex flex-row justify-center items-center gap-5">
                  <img src={TotalPropertyIcon} alt="income-icon" />
                  <div className="text-white text-sm font-medium font-['Inter'] leading-snug">
                  Total Property Value<br />
                    <span className=" text-[#05F691] text-base font-normal">0.00354 ETH</span>
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-3">
                <div className="text-white text-xl font-semibold font-['Poppins'] leading-tight">
                Capital Appreciation
                </div>
                <div className="text-white text-base font-light font-['Inter'] leading-snug">
                From Property Value Growth
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
