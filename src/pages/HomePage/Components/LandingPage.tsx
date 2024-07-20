import React from "react";

export default function LandingPage() {
  return (
    <div className="flex flex-col px-10 w-full items-center ">
      <div className="flex flex-row gap-10  items-center justify-between">
        <div className="text-[#05F691] font-bold text-[128px] leading-none"> VESTA</div>
        <div className="text-white font-bold text-[128px] leading-none">PROPERTY</div>
      </div>
      <div className="flex flex-row gap-10  items-center justify-between">
        <div className="text-white font-bold text-[128px] leading-none italic">EXCHANGE</div>
        <p className="text-[#fff] font-light text-[16px] leading-none w-[380px]"> Get a passive income by investing in NFT for blockchain base yield-generating rental properties starting just at $50.</p>
      </div>
      <div className="flex flex-row gap-10 items-center justify-between">
        <button className="bg-gradient-to-r to-[#077546] from-[#0AC073] py-3 px-10 rounded-full">
        Browse NFT
        </button>
      </div>
    </div>
  );
}
