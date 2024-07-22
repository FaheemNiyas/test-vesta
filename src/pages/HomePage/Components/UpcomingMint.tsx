import Carousel from "@/components/organisms/Carousel";
import UpcomingMintCard from "@/components/organisms/LandingPage/UpcomingMintCard";
import React from "react";

export default function UpcomingMint() {
    const nftList = [
        { id: 1, logo: <UpcomingMintCard/> },
        { id: 2, logo: <UpcomingMintCard/> },
        { id: 3, logo: <UpcomingMintCard/> },
        { id: 4, logo: <UpcomingMintCard/> },
        { id: 5, logo: <UpcomingMintCard/> },
        { id: 6, logo: <UpcomingMintCard/> },
        { id: 7, logo: <UpcomingMintCard/> },
        { id: 8, logo: <UpcomingMintCard/> },
      ];

  return (
    <div className="flex flex-col w-full justify-center items-center gap-10 py-40">
      <div className="headline-gradient-1 text-[55px] font-medium font-['Inter']">Upcoming Mints</div>
      <div className="w-full  ">
        <Carousel slideList={nftList} slidesPerView={3} navigation={true} />
      </div>
    </div>
  );
}
