import Carousel from "@/components/organisms/Carousel";
import LiveAuctionCard from "@/components/organisms/LiveAuctionCard";
import { LaunchArrowIcon } from "@/constants";
import React from "react";

export default function LiveAuction() {
  const nftList = [
    { id: 1, logo: <LiveAuctionCard /> },
    { id: 2, logo: <LiveAuctionCard /> },
    { id: 2, logo: <LiveAuctionCard /> },
    { id: 2, logo: <LiveAuctionCard /> },
    { id: 2, logo: <LiveAuctionCard /> },
    { id: 2, logo: <LiveAuctionCard /> },
  ];
  return (
    <>
      <div className="lg:flex flex-row w-full gap-10 xl:p-40 py-40 px-10 hidden">
        <div className="w-fit flex flex-row justify-center">
          <LiveAuctionCard />
        </div>
        <div className="w-fit flex flex-row justify-center">
          <LiveAuctionCard />
        </div>
        <div className="w-1/3 flex flex-col justify-center gap-10">
          <div className="headline-gradient-1 text-[55px] font-medium font-['Inter']">
            Live Auction
          </div>
          <div className="text-white text-base font-normal font-['Inter'] leading-[24.86px]">
            Earn passive income from rental properties across the world with
            vesta revolutionary take on tokenized real estate. Simply buy, hold,
            andearn - we'll handle the rest. Unique Super rare NFT marketplace
            For crypto-collectibles.
          </div>
          <button className="w-[239px] h-[50px] px-[18px] py-[15px] bg-[#1F365B] rounded-[100px] justify-center items-start gap-4 inline-flex">
            <div className="flex flex-row gap-5 justify-center items-center text-white text-base font-normal font-['Poppins'] leading-tight">
              Join Auction <img src={LaunchArrowIcon} />
            </div>
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full gap-10 xl:p-40 md:py-40 py-10  lg:hidden">
        <div className="w-fit text-center headline-gradient-1 text-2xl font-semibold font-['Inter'] leading-7">
          Live Auction
        </div>
        <div className="text-center text-white text-sm font-light font-['Inter'] leading-snug px-7">
          Earn passive income from rental properties across the world with vesta
          revolutionary take on tokenized real estate. Simply buy, hold, and
          earn - we'll handle the rest. Unique Super rare NFT marketplace For
          crypto-collectibles.
        </div>
        <div className="w-full">

        <Carousel slidesPerView={1.7} slideList={nftList} />
        </div>
        <button className="w-[239px] h-[50px] px-[18px] py-[15px] bg-[#1F365B] rounded-[100px] justify-center items-start gap-4 inline-flex">
            <div className="flex flex-row gap-5 justify-center items-center text-white text-base font-normal font-['Poppins'] leading-tight">
              Join Auction <img src={LaunchArrowIcon} />
            </div>
          </button>
      </div>
    </>
  );
}
