import React from "react";

export default function UpcomingMintCard() {
  return (
    <>
    <div className="w-[366px] h-[370px] relative p-5 bg-gradient-to-br from-[#ffffff05] to-[#ffffff13] rounded-[19.96px] shadow border border-white/opacity-30 md:block hidden">
      <div className="w-[366px] h-[370px] ">

        <div className="w-[325.54px] h-[236.33px] left-[20.82px] top-[18.87px] absolute">
       
          <img
            className="w-[116.32px] h-[115.36px] left-0 top-0 absolute rounded-xl"
            src="/assets/mint-1-1.png"
          />
          <img
            className="w-[202.75px] h-[236.33px] left-[122.78px] top-0 absolute rounded-xl"
            src="/assets/mint-1-2.png"
          />
          <img
            className="w-[116.32px] h-[115.36px] left-[-0px] top-[120.97px] absolute rounded-xl"
            src="/assets/mint-1-3.png"
          />
        </div>
      </div>
      <div className="w-full h-[52px] left-[20px] top-[287.39px] absolute justify-end items-center flex">
        <div className="w-full self-stretch flex-col justify-center items-start gap-[5px] flex">
          <div className="flex-col justify-center items-start gap-[5px] flex">
            <div className="text-white text-xl font-semibold font-['Poppins']">
              Luxury Homes #23
            </div>
            <div className="pr-[11px] justify-start items-center flex">
              <div className="self-stretch justify-start items-center gap-[9px] flex">
                <img
                  className="w-[26px] h-[26px] rounded-[100px] border border-white"
                  src="/assets/user-icon-demo.png"
                />
                <div className="opacity-70 text-white text-[13px] font-medium font-['Poppins']">
                  Creators Name
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="w-[120px] h-[41.57px] px-[20.72px] py-[8.29px] left-[230px] top-[295px] absolute bg-[#05f691] rounded-[20.72px] flex-col justify-center items-center gap-[10.36px] flex">
        <div className="text-slate-800 text-base font-semibold font-['Inter'] leading-[24.86px]">
        Mint Now
        </div>
      </button>
    </div>

    <div className="h-[216px] p-3 bg-[#ffffff11] rounded-lg border border-white/30 flex-col justify-center items-start gap-2 flex md:hidden">
    <div className="justify-start items-start gap-1 flex">
        <div className="flex-col justify-start items-start gap-1 flex">
            <img className="w-14 h-14 rounded-[5px]"  src="/assets/mint-1-1.png" />
            <img className="w-14 h-14 rounded-[5px]"  src="/assets/mint-1-2.png" />
        </div>
        <img className="w-[100px] h-[116px] rounded-[5px]"  src="/assets/mint-1-3.png" />
    </div>
    <div className="flex-col justify-start items-start flex">
        <div className="text-white text-[9px] font-medium font-['Inter'] leading-none tracking-tight">Collection Name</div>
        <div className="justify-start items-center gap-1.5 flex">
            <img className="w-3 h-3 rounded-[50px] border border-white"  src="/assets/user-icon-demo.png" />
            <div className="opacity-70 text-white/70 text-[9px] font-light font-['Inter'] leading-none tracking-tight">Creators Name</div>
        </div>
    </div>
    <div className="self-stretch px-2.5 py-1 bg-[#05f691] rounded-[100px] border justify-center items-center gap-2 flex">
        <div className="text-[#152743] text-xs font-medium font-['Inter'] leading-tight">Mint Now</div>
    </div>
</div>
    </>
  );
}
