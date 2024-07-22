import LiveAuctionCard from "@/components/organisms/LiveAuctionCard";
import { LaunchArrowIcon } from "@/constants";
import React from "react";

export default function LiveAuction() {
  return (
    <div className="flex flex-row w-full gap-10 p-40">
      <div className="w-1/3 flex flex-row justify-center">
        <LiveAuctionCard />
      </div>
      <div className="w-1/3 flex flex-row justify-center">
        <LiveAuctionCard />
      </div>
      <div className="w-1/3 flex flex-col justify-center gap-10">
        <div className="headline-gradient-1 text-[55px] font-medium font-['Inter']">
          Live Auction
        </div>
        <div className="text-white text-base font-normal font-['Inter'] leading-[24.86px]">
          Earn passive income from rental properties across the world with vesta
          revolutionary take on tokenized real estate. Simply buy, hold, andearn
          - we'll handle the rest. Unique Super rare NFT marketplace For
          crypto-collectibles.
        </div>
        <button className="w-[239px] h-[50px] px-[18px] py-[15px] bg-[#1F365B] rounded-[100px] justify-center items-start gap-4 inline-flex">
          <div className="flex flex-row justify-center items-center text-white text-base font-normal font-['Poppins'] leading-tight">
            Join Auction <img src={LaunchArrowIcon} />
          </div>
        </button>
      </div>
    </div>
  );
}
