import React from "react";

export default function TrendingNFTCard() {
  return (
    <div className='flex flex-col w-full justify-center items-center gap-2'>
      <div className="w-[333px] h-[485px] p-5 bg-white/opacity-5 rounded-[20px] shadow border border-white/opacity-30 backdrop-blur-[15px] flex-col justify-center items-center gap-5 flex">
        <img
          className="self-stretch grow shrink basis-0 rounded-[15px]"
          src="/assets/trending-nft-1.png"
        />
        <div className="self-stretch justify-start items-center gap-5 flex">
          <div className="grow shrink basis-0 flex-col justify-center items-start gap-[5px] flex">
            <div className="self-stretch text-white text-[22px] font-semibold font-['Poppins']">
              Luxury Homes #23
            </div>
            <div className="justify-start items-center flex">
              <div className="flex-row w-full justify-start items-center gap-[9px] flex">
                <img
                  className="w-[26px] h-[26px] rounded-[100px] border border-white"
                  src="https://via.placeholder.com/26x26"
                />
                <div className="opacity-70 w-full text-white text-[13px] font-medium font-['Poppins']">
                  Creator Name
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-14 px-[3px] justify-center items-start gap-10 flex">
          <div className="grow shrink basis-0 self-stretch flex-col justify-start items-center flex">
            <div className="self-stretch grow shrink basis-0 text-white text-xl font-semibold font-['Poppins']">
              1.31 ETH
            </div>
            <div className="self-stretch grow shrink basis-0 text-white text-sm font-medium font-['Poppins']">
              Floor Price{" "}
            </div>
          </div>
          <div className="grow shrink basis-0 self-stretch flex-col justify-start items-end flex">
            <div className="self-stretch grow shrink basis-0 flex-col justify-start items-end flex">
              <div className="self-stretch grow shrink basis-0 justify-end items-start flex">
                <div className="w-[104px] self-stretch text-right text-white text-xl font-semibold font-['Poppins']">
                  $220.000
                </div>
                <div className="w-[49px] text-right text-green-500 text-sm font-medium font-['Poppins']">
                  +5.6%
                </div>
              </div>
              <div className="self-stretch text-right text-green-500 text-sm font-medium font-['Poppins']">
                156 Holders
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-14 px-[3px] bg-white/opacity-20 rounded-[10px] justify-center items-start gap-[30px] flex">
          <div className="w-[198px] self-stretch flex-col justify-center items-start flex">
            <div className="text-white text-sm font-medium font-['Poppins']">
              Annual Rental Return
            </div>
            <div className="text-white text-sm font-medium font-['Poppins']">
              Projected Value Growth
            </div>
          </div>
          <div className="w-[46px] self-stretch flex-col justify-center items-center flex">
            <div className="text-right text-white text-sm font-medium font-['Poppins']">
              11.4%
            </div>
            <div className="text-right text-white text-sm font-medium font-['Poppins']">
              15%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
