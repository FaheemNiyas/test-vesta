import Carousel from "@/components/organisms/Carousel";
import TopCollectionCard from "@/components/organisms/LandingPage/TopCollectionCard";
import TrendingNFTCard from "@/components/organisms/LandingPage/TrendingNFTCard";
import React from "react";

export default function TopCollection() {
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
    <div className="flex flex-col w-full justify-center items-center md:lap-10 gap-5">
      <div className="text-center text-2xl md:text-[55px] font-medium font-['Inter'] headline-gradient-1 w-fit leading-normal">
        Top Collection
      </div>
      <div className="text-white text-[10px] md:text-base font-normal font-['Inter'] md:leading-[24.86px]">
        {" "}
        Notable collections and token in the real estate digital investment
      </div>
      <div className=" md:grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 w-full gap-y-6  justify-items-center  px-40 hidden">
        <TopCollectionCard />
        <TopCollectionCard />
        <TopCollectionCard />
        <TopCollectionCard />
        <TopCollectionCard />
        <TopCollectionCard />
        <TopCollectionCard />
        <TopCollectionCard />
      </div>
      <div className="w-full block md:hidden">
        <Carousel
          slideList={nftList}
          slidesPerView={1.8}
          navigation={false}
          pagination={false}
        />
      </div>
    </div>
  );
}
