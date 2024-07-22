import Carousel from "@/components/organisms/Carousel";
import TrendingNFTCard from "@/components/organisms/LandingPage/TrendingNFTCard";
import React from "react";

export default function TrendingNFT() {
  const nftList = [
    { id: 1, logo: <TrendingNFTCard /> },
    { id: 2, logo: <TrendingNFTCard /> },
    { id: 3, logo: <TrendingNFTCard /> },
    { id: 4, logo: <TrendingNFTCard /> },
    { id: 5, logo: <TrendingNFTCard /> },
    { id: 6, logo: <TrendingNFTCard /> },
    { id: 7, logo: <TrendingNFTCard /> },
    { id: 8, logo: <TrendingNFTCard /> },
  ];

  return (
    <div className="flex flex-col w-full justify-center items-center gap-10">
      <div className="text-center text-[55px] font-medium font-['Inter'] headline-gradient-1 w-fit">
        Trending NFT
      </div>
      <div className="w-full  ">
        <Carousel slideList={nftList} slidesPerView={4} />
      </div>
      <button className="w-[181px] h-[50px] px-6 py-[18px] rounded-[100px] border border-white/opacity-70 justify-center items-center gap-2.5 inline-flex">
        <div className="text-white text-xl font-normal font-['Poppins'] leading-tight">
          See More
        </div>
      </button>
    </div>
  );
}
