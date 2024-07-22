import React from "react";

export default function LiveAuctionCard() {
  return (
    <div className="w-[333px] h-[485px] p-5 bg-white/opacity-5 rounded-[20px] shadow border border-white/opacity-30 backdrop-blur-[15px] flex-col justify-center items-center gap-5 flex">
      <div className="self-stretch grow shrink basis-0 flex-col justify-center items-center gap-5 flex">
        <div className=" justify-between items-start flex-row w-full  flex">
          <div className="w-fit flex-col justify-center items-start gap-[4.14px] flex">
            <div className=" text-white text-sm font-medium font-['Poppins'] leading-tight">
              Current bid
            </div>
            <div className="justify-start items-center gap-[4.14px] flex">
              <img className="w-[16.57px] h-[16.57px] relative" />
              <div className="text-right text-emerald-400 text-base font-semibold font-['Poppins'] leading-[24.86px]">
                3.2 ETH
              </div>
            </div>
          </div>
          <button className="px-[20.72px] py-[8.29px] bg-emerald-400 rounded-[20.72px] flex-col justify-center items-center gap-[10.36px] flex">
            <div className="text-slate-800 text-base font-semibold font-['Inter'] leading-[24.86px]">
              Place bid
            </div>
          </button>
        </div>
        <img
          className="self-stretch grow shrink basis-0 rounded-[15px]"
          src="/assets/live-auction-demo.png"
        />
        <div className="justify-center items-center gap-[50px] flex">
          <div className="h-[52px] justify-start items-center gap-5 flex">
            <div className="w-[147px] flex-col justify-center items-start gap-[5px] flex">
              <div className="flex-col justify-center items-start gap-[5px] flex">
                <div className="text-white text-sm font-semibold font-['Poppins']">
                  Luxury Homes #23
                </div>
                <div className="pr-[11px] justify-start items-center flex">
                  <div className="self-stretch justify-start items-center gap-[9px] flex">
                    <img
                      className="w-[26px] h-[26px] rounded-[100px] border border-white"
                      src="https://via.placeholder.com/26x26"
                    />
                    <div className="opacity-70 text-white text-[13px] font-medium font-['Poppins']">
                      Creators Name
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-center items-end gap-[5px] flex">
            <div className="text-right text-emerald-400 text-sm font-medium font-['Poppins']">
              156 Offer
            </div>
            <div className="justify-start items-start flex">
              <img
                className="w-[33.15px] h-[33.15px] rounded-full border border-emerald-400 !mr-[-10px]"
                src="https://via.placeholder.com/33x33"
              />
              <img
                className="w-[33.15px] h-[34.22px] rounded-full shadow border border-emerald-400 !mr-[-10px]"
                src="https://via.placeholder.com/33x34"
              />
              <img
                className="w-[33.15px] h-[33.15px] rounded-full shadow border border-emerald-400 !mr-[-10px]"
                src="https://via.placeholder.com/33x33"
              />
              <img
                className="w-[33.15px] h-[33.15px] rounded-full shadow border border-emerald-400 !mr-[-10px]"
                src="https://via.placeholder.com/33x33"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
