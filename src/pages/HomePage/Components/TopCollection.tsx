import TopCollectionCard from "@/components/organisms/LandingPage/TopCollectionCard";
import React from "react";

export default function TopCollection() {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-10">
      <div className="text-center text-[55px] font-medium font-['Inter'] headline-gradient-1 w-fit">
        Top Collection
      </div>
      <div className="text-white text-base font-normal font-['Inter'] leading-[24.86px]">
        {" "}
        Notable collections and token in the real estate digital investment
      </div>
      <div className="grid grid-cols-4 w-full gap-y-6  justify-items-center  px-40">
        <TopCollectionCard/>
        <TopCollectionCard/>
        <TopCollectionCard/>
        <TopCollectionCard/>
        <TopCollectionCard/>
        <TopCollectionCard/>
        <TopCollectionCard/>
        <TopCollectionCard/>
      </div>
    </div>
  );
}
